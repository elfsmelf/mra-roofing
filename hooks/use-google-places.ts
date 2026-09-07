"use client"

import { useEffect, useState } from "react"

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

let loadPromise: Promise<google.maps.PlacesLibrary> | null = null

function loadPlacesLibrary(): Promise<google.maps.PlacesLibrary> {
  if (loadPromise) return loadPromise

  loadPromise = new Promise((resolve, reject) => {
    if (!API_KEY) {
      reject(new Error("NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is not set"))
      return
    }

    if (window.google?.maps?.places) {
      resolve(window.google.maps.places as unknown as google.maps.PlacesLibrary)
      return
    }

    const callbackName = "__mraInitGooglePlaces"
    ;(window as unknown as Record<string, unknown>)[callbackName] = () => {
      resolve(window.google.maps.places as unknown as google.maps.PlacesLibrary)
    }

    const script = document.createElement("script")
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(
      API_KEY
    )}&libraries=places&v=weekly&loading=async&region=AU&callback=${callbackName}`
    script.async = true
    script.onerror = () => reject(new Error("Failed to load Google Maps script"))
    document.head.appendChild(script)
  })

  return loadPromise
}

/** Loads the Google Maps Places library once and returns it when ready. */
export function useGooglePlaces() {
  const [places, setPlaces] = useState<google.maps.PlacesLibrary | null>(null)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    let cancelled = false
    loadPlacesLibrary().then(
      (lib) => {
        if (!cancelled) setPlaces(lib)
      },
      (err: Error) => {
        if (!cancelled) setError(err)
        console.error("Google Places failed to load:", err)
      }
    )
    return () => {
      cancelled = true
    }
  }, [])

  return { places, error }
}
