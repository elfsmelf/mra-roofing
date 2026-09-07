"use client"

import * as React from "react"
import { MapPin } from "lucide-react"

import { Input } from "@/components/ui/input"
import { useGooglePlaces } from "@/hooks/use-google-places"
import { cn } from "@/lib/utils"

export interface AddressDetails {
  address: string
  suburb: string
  state: string
  postcode: string
  placeId: string
}

interface AddressAutocompleteProps
  extends Omit<React.ComponentProps<"input">, "onChange" | "value" | "onSelect"> {
  value: string
  onChange: (value: string) => void
  onSelect?: (details: AddressDetails) => void
}

// Bounding box covering SE Queensland and Northern NSW, used to bias results.
const LOCATION_BIAS = {
  south: -30.5,
  west: 151.5,
  north: -26.0,
  east: 153.8,
}

function componentText(
  components: google.maps.places.AddressComponent[] | null | undefined,
  type: string,
  short = false
) {
  const match = components?.find((c) => c.types.includes(type))
  if (!match) return ""
  return short ? match.shortText ?? "" : match.longText ?? ""
}

export const AddressAutocomplete = React.forwardRef<HTMLInputElement, AddressAutocompleteProps>(
  ({ value, onChange, onSelect, className, onBlur, ...props }, ref) => {
    const { places } = useGooglePlaces()
    const [suggestions, setSuggestions] = React.useState<
      google.maps.places.AutocompleteSuggestion[]
    >([])
    const [open, setOpen] = React.useState(false)
    const [activeIndex, setActiveIndex] = React.useState(-1)
    const sessionToken = React.useRef<google.maps.places.AutocompleteSessionToken | null>(null)
    const requestId = React.useRef(0)
    const listId = React.useId()

    const fetchSuggestions = React.useCallback(
      async (input: string) => {
        if (!places || input.trim().length < 3) {
          setSuggestions([])
          setOpen(false)
          return
        }
        if (!sessionToken.current) {
          sessionToken.current = new places.AutocompleteSessionToken()
        }
        const id = ++requestId.current
        try {
          const { suggestions: results } =
            await places.AutocompleteSuggestion.fetchAutocompleteSuggestions({
              input,
              sessionToken: sessionToken.current,
              includedRegionCodes: ["au"],
              locationBias: LOCATION_BIAS,
              language: "en-AU",
            })
          if (id !== requestId.current) return
          setSuggestions(results)
          setOpen(results.length > 0)
          setActiveIndex(-1)
        } catch (err) {
          console.error("Address autocomplete error:", err)
        }
      },
      [places]
    )

    // Debounce lookups while typing.
    const debounceRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)
    function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
      const next = e.target.value
      onChange(next)
      if (debounceRef.current) clearTimeout(debounceRef.current)
      debounceRef.current = setTimeout(() => fetchSuggestions(next), 200)
    }

    async function choose(suggestion: google.maps.places.AutocompleteSuggestion) {
      const prediction = suggestion.placePrediction
      if (!prediction) return
      setOpen(false)
      setSuggestions([])
      onChange(prediction.text.text)

      try {
        const place = prediction.toPlace()
        await place.fetchFields({ fields: ["formattedAddress", "addressComponents", "id"] })
        const address = place.formattedAddress ?? prediction.text.text
        onChange(address)
        onSelect?.({
          address,
          suburb: componentText(place.addressComponents, "locality"),
          state: componentText(place.addressComponents, "administrative_area_level_1", true),
          postcode: componentText(place.addressComponents, "postal_code"),
          placeId: place.id ?? prediction.placeId,
        })
      } catch (err) {
        console.error("Place details error:", err)
      } finally {
        // A session ends once place details are fetched.
        sessionToken.current = null
      }
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
      if (!open || suggestions.length === 0) return
      if (e.key === "ArrowDown") {
        e.preventDefault()
        setActiveIndex((i) => (i + 1) % suggestions.length)
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        setActiveIndex((i) => (i - 1 + suggestions.length) % suggestions.length)
      } else if (e.key === "Enter" && activeIndex >= 0) {
        e.preventDefault()
        choose(suggestions[activeIndex])
      } else if (e.key === "Escape") {
        setOpen(false)
      }
    }

    return (
      <div className="relative">
        <Input
          ref={ref}
          value={value}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          onFocus={() => suggestions.length > 0 && setOpen(true)}
          onBlur={(e) => {
            // Delay so a click on a suggestion registers first.
            setTimeout(() => setOpen(false), 150)
            onBlur?.(e)
          }}
          autoComplete="off"
          role="combobox"
          aria-expanded={open}
          aria-controls={listId}
          aria-autocomplete="list"
          className={className}
          {...props}
        />
        {open && (
          <ul
            id={listId}
            role="listbox"
            className="absolute z-50 mt-1 w-full overflow-hidden rounded-md border border-input bg-white shadow-md"
          >
            {suggestions.map((s, i) => {
              const p = s.placePrediction
              if (!p) return null
              return (
                <li
                  key={p.placeId}
                  role="option"
                  aria-selected={i === activeIndex}
                  onMouseDown={(e) => {
                    e.preventDefault()
                    choose(s)
                  }}
                  onMouseEnter={() => setActiveIndex(i)}
                  className={cn(
                    "flex cursor-pointer items-start gap-2 px-3 py-2 text-sm text-foreground",
                    i === activeIndex && "bg-muted"
                  )}
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                  <span>
                    <span className="font-medium">{p.mainText?.text ?? p.text.text}</span>
                    {p.secondaryText?.text && (
                      <span className="block text-xs text-muted-foreground">
                        {p.secondaryText.text}
                      </span>
                    )}
                  </span>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    )
  }
)
AddressAutocomplete.displayName = "AddressAutocomplete"
