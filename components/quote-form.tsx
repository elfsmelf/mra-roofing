"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  propertyType: z.string().min(1, "Please select a property type"),
  jobType: z.string().min(1, "Please select a job type"),
  roofMaterial: z.string().min(1, "Please select a roof material"),
  suburb: z.string().min(2, "Please enter your suburb"),
  message: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

const roofMaterials = [
  {
    value: "metal",
    label: "Metal",
    image: "https://assets.guestsnapper.com/wedding-gallery-media/mra/metal%20roof.webp",
  },
  {
    value: "asbestos",
    label: "Asbestos",
    image: "https://assets.guestsnapper.com/wedding-gallery-media/asbestos.jpg",
  },
  {
    value: "decramastic",
    label: "Decramastic",
    image: "https://assets.guestsnapper.com/wedding-gallery-media/mra/decramastic.jpg",
  },
  {
    value: "concrete-tile",
    label: "Concrete Tile",
    image: "https://assets.guestsnapper.com/wedding-gallery-media/mra/concrete%20tile.webp",
  },
]

export function QuoteForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      propertyType: "",
      jobType: "",
      roofMaterial: "",
      suburb: "",
      message: "",
    },
  })

  function onSubmit(values: FormValues) {
    console.log(values)
    // Handle form submission
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="your@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Phone</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="0400 000 000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="propertyType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Property Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="residential">Residential</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="industrial">Industrial</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="jobType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Job Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select job type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="roof-replacement">Roof Replacement</SelectItem>
                    <SelectItem value="roof-repair">Roof Repair</SelectItem>
                    <SelectItem value="gutter-replacement">Gutter Replacement</SelectItem>
                    <SelectItem value="asbestos-removal">Asbestos Removal</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="roofMaterial"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">Current Roof Material</FormLabel>
              <FormControl>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {roofMaterials.map((material) => (
                    <button
                      key={material.value}
                      type="button"
                      onClick={() => field.onChange(material.value)}
                      className={cn(
                        "relative rounded-lg overflow-hidden border-2 transition-all",
                        field.value === material.value
                          ? "border-primary ring-2 ring-primary ring-offset-2"
                          : "border-gray-200 hover:border-gray-300"
                      )}
                    >
                      <div className="aspect-[4/3] relative">
                        <img
                          src={material.image}
                          alt={material.label}
                          className="w-full h-full object-cover"
                        />
                        {field.value === material.value && (
                          <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                            <div className="bg-primary rounded-full p-1">
                              <Check className="w-4 h-4 text-foreground" />
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="p-2 bg-white">
                        <p className="text-xs font-medium text-foreground text-center">
                          {material.label}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="suburb"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">Suburb</FormLabel>
              <FormControl>
                <Input placeholder="Your suburb" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your project..."
                  className="resize-none"
                  rows={4}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="lg"
          className="w-full bg-primary hover:bg-primary/90 text-foreground font-bold py-6 border-0"
        >
          Get Your FREE Quote
        </Button>
      </form>
    </Form>
  )
}
