"use client"

import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Check, ChevronDown, Phone, Clock, Wrench, Sun, Shield, Palette, FileText, Search, Send, PenLine, Calendar, Truck, Hammer, Award, BadgeCheck, ScrollText } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "@/components/ui/carousel"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { QuoteForm } from "@/components/quote-form"

function HeroHeadline() {
  const searchParams = useSearchParams()
  const customHeadline = searchParams.get("headline")

  if (customHeadline) {
    return (
      <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6">
        {customHeadline}
      </h1>
    )
  }

  return (
    <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6">
      Is Your Old Roof
      <br />
      <span className="italic">Costing You Money?</span>
    </h1>
  )
}

function DefaultHeadline() {
  return (
    <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6">
      Is Your Old Roof
      <br />
      <span className="italic">Costing You Money?</span>
    </h1>
  )
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const scrollToForm = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  const reviewScreenshots = [
    "https://assets.guestsnapper.com/wedding-gallery-media/mra/Screenshot%202026-01-09%20at%2012.35.53%E2%80%AFpm.png",
    "https://assets.guestsnapper.com/wedding-gallery-media/mra/Screenshot%202026-01-09%20at%2012.36.06%E2%80%AFpm.png",
    "https://assets.guestsnapper.com/wedding-gallery-media/mra/Screenshot%202026-01-09%20at%2012.36.16%E2%80%AFpm.png",
    "https://assets.guestsnapper.com/wedding-gallery-media/mra/Screenshot%202026-01-09%20at%2012.36.28%E2%80%AFpm.png",
    "https://assets.guestsnapper.com/wedding-gallery-media/mra/Screenshot%202026-01-09%20at%2012.36.38%E2%80%AFpm.png",
    "https://assets.guestsnapper.com/wedding-gallery-media/mra/Screenshot%202026-01-09%20at%2012.36.47%E2%80%AFpm.png",
    "https://assets.guestsnapper.com/wedding-gallery-media/mra/Screenshot%202026-01-09%20at%2012.36.57%E2%80%AFpm.png",
    "https://assets.guestsnapper.com/wedding-gallery-media/mra/Screenshot%202026-01-09%20at%2012.37.11%E2%80%AFpm.png",
    "https://assets.guestsnapper.com/wedding-gallery-media/mra/Screenshot%202026-01-09%20at%2012.37.21%E2%80%AFpm.png",
  ]

  const projectImages = [
    "https://assets.guestsnapper.com/wedding-gallery-media/mra/before%20and%20after1.jpg",
    "https://assets.guestsnapper.com/wedding-gallery-media/mra/before%20and%20after2.jpg",
    "https://assets.guestsnapper.com/wedding-gallery-media/mra/before%20and%20after3.jpg",
    "https://assets.guestsnapper.com/wedding-gallery-media/mra/before%20and%20after4.jpg",
    "https://assets.guestsnapper.com/wedding-gallery-media/mra/before%20and%20after5.jpg",
    "https://assets.guestsnapper.com/wedding-gallery-media/mra/before%20and%20after6.jpg",
  ]

  const features = [
    {
      icon: Wrench,
      title: "Low Maintenance",
      desc: "COLORBOND® roofs are low-maintenance and easy to clean, saving you time and money."
    },
    {
      icon: Sun,
      title: "Energy Efficiency",
      desc: "Reflective properties can help reduce your cooling costs during hot Queensland summers."
    },
    {
      icon: Shield,
      title: "Durability",
      desc: "Designed to withstand the harsh Australian climate, including intense heat and storms."
    },
    {
      icon: Palette,
      title: "Style Variety",
      desc: "Wide range of colour and style options to compliment your home's aesthetic."
    }
  ]

  const colorbondColours = [
    { name: "Surfmist®", color: "#E4E2D5" },
    { name: "Dover White™", color: "#F9FBF1" },
    { name: "Evening Haze®", color: "#C5C2AA" },
    { name: "Classic Cream™", color: "#E9DCB8" },
    { name: "Paperbark®", color: "#CABFA4" },
    { name: "Dune®", color: "#B1ADA3" },
    { name: "Southerly®", color: "#D2D1CB" },
    { name: "Shale Grey™", color: "#BDBFBA" },
    { name: "Windspray®", color: "#888B8A" },
    { name: "Wallaby®", color: "#7F7C78" },
    { name: "Gully®", color: "#857E73" },
    { name: "Jasper®", color: "#6C6153" },
    { name: "Basalt®", color: "#6D6C6E" },
    { name: "Woodland Grey®", color: "#4B4C46" },
    { name: "Monument®", color: "#323233" },
    { name: "Night Sky®", color: "#000000" },
    { name: "Ironstone®", color: "#3E434C" },
    { name: "Deep Ocean®", color: "#364152" },
    { name: "Cottage Green®", color: "#304C3C" },
    { name: "Pale Eucalypt®", color: "#7C846A" },
    { name: "Manor Red®", color: "#5E1D0E" },
  ]

  const processSteps = [
    {
      text: "Request A FREE Quote",
      icon: FileText,
      description: "Get in touch via phone or our online form. We'll gather some basic information about your roof and schedule a convenient time for an inspection."
    },
    {
      text: "Roof Inspection",
      icon: Search,
      description: "Our experienced team will conduct a thorough inspection of your existing roof, assessing its condition, measuring dimensions, and identifying any structural concerns."
    },
    {
      text: "Quote Sent To You",
      icon: Send,
      description: "Within 24-48 hours, you'll receive a detailed, transparent quote outlining all costs, materials, and the scope of work with no hidden fees."
    },
    {
      text: "Contract Completed and Signed",
      icon: PenLine,
      description: "Once you're happy with the quote, we'll finalise the contract with clear terms, warranty information, and payment schedule."
    },
    {
      text: "Start Date Finalised",
      icon: Calendar,
      description: "We'll work with your schedule to lock in a start date that suits you, typically within 2-4 weeks depending on availability and weather conditions."
    },
    {
      text: "Fall Protection & Delivery",
      icon: Truck,
      description: "Prior to work commencing, we install all necessary safety equipment and have your chosen roofing materials delivered to site."
    },
    {
      text: "Work Commenced & Completed",
      icon: Hammer,
      description: "Our skilled team gets to work, typically completing most residential roof replacements within 2-5 days while keeping your property clean and secure."
    },
    {
      text: "Final Inspection & Certification",
      icon: Award,
      description: "We conduct a final quality inspection, provide all relevant certifications for compliance, and hand over your 7-year workmanship warranty documentation."
    },
  ]

  const faqs = [
    {
      q: "What are the benefits of metal roofing?",
      a: "Metal roofing offers numerous benefits, including durability, energy efficiency, low maintenance requirements, and the ability to withstand Queensland's extreme weather conditions – such as high winds and heavy rain."
    },
    {
      q: "How long does a metal roof last and does it require ongoing maintenance?",
      a: "A properly installed and maintained metal roof can last 40 to 70 years, making it one of the longest-lasting roofing options available. Whilst metal roofs are low maintenance, it's still recommended to have periodic inspections to check for issues like loose screws or worn sealant. Gutter cleaning and debris removal will also help extend the roof's lifespan."
    },
    {
      q: "Can I replace my existing roof with a metal roof?",
      a: "Yes, we can convert your decramastic tiles or concrete tiles to a metal roof. There are just a few extra steps involved."
    },
    {
      q: "Are metal roofs environmentally friendly?",
      a: "Yes, metal roofing is 100% recyclable and often contains a significant portion of recycled materials."
    },
    {
      q: "Do I need building approval for a metal roof replacement in Queensland?",
      a: "Depending on the scope of the work, you may need council approval for a metal roof replacement. We will organise this on your behalf."
    },
    {
      q: "How long does it take to complete a metal roof replacement?",
      a: "The time it takes to complete a metal roof replacement varies based on factors such as roof size and complexity. On average, a metal roof replacement can take anywhere from a few days to a week."
    },
    {
      q: "What happens if it rains during my metal roof replacement?",
      a: "Our roofers remove sections of roof at a time, and install the new metal roof as they go. This ensures the roof is watertight before we leave for the day."
    },
    {
      q: "What warranties are available for metal roofs?",
      a: "Most metal roofing products come with a manufacturer's warranty. In addition, we offer a 7 year workmanship warranty on full roof replacements to ensure quality installation. Our workmanship warranty is subject to terms and conditions."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header */}
      <header className="bg-white py-4 px-6 border-b border-gray-200 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="https://assets.guestsnapper.com/wedding-gallery-media/mra/mra%20logo.webp"
              alt="MRA Roofing"
              className="h-12"
            />
          </div>
          <p className="hidden lg:block text-muted-foreground text-sm tracking-wide absolute left-1/2 -translate-x-1/2">
            SERVICING <span className="font-bold text-foreground">BRISBANE</span>, <span className="font-bold text-foreground">THE GOLD COAST</span> AND SURROUNDING SUBURBS
          </p>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline text-foreground font-medium">Call For Instant Quote:</span>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 border-0 shadow-none">
              <a href="tel:1300080883">
                <Phone className="w-4 h-4 mr-2" />
                1300 080 883
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row">
        {/* Left Side - Before/After Image */}
        <div className="relative lg:w-1/2 bg-foreground flex items-center justify-center overflow-hidden">
          <div className="relative p-6 lg:p-12 w-full">
            <div className="relative">
              <img
                src="https://assets.guestsnapper.com/wedding-gallery-media/mra/before%20and%20after.webp"
                alt="Before and after roof replacement"
                className="rounded-xl shadow-2xl w-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-foreground text-white px-3 py-1.5 lg:px-4 lg:py-2 font-bold text-xs lg:text-sm tracking-wider rounded shadow-lg">
                BEFORE
              </div>
              <div className="absolute bottom-4 right-4 bg-primary text-foreground px-3 py-1.5 lg:px-4 lg:py-2 font-bold text-xs lg:text-sm tracking-wider rounded shadow-lg">
                AFTER
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2 bg-white p-6 py-10 lg:p-16 flex flex-col justify-center">
          <div>
            <p className="text-foreground font-bold text-lg lg:text-xl tracking-wide mb-4">BRISBANE & GOLD COAST'S MOST TRUSTED ROOFERS</p>
            <Suspense fallback={<DefaultHeadline />}>
              <HeroHeadline />
            </Suspense>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Leaking roofs, rising energy bills, and constant repairs add up fast. Get a brand new COLORBOND® roof installed in as little as 3 days — built to protect your home for decades.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                { bold: "FREE quote", text: "within 24 hours" },
                { bold: "7 year", text: "workmanship warranty" },
                { bold: "Certified", text: "asbestos removal" },
                { bold: "Fully licensed", text: "and insured" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                  <div className="bg-primary rounded-full p-1">
                    <Check className="w-4 h-4 text-primary-foreground flex-shrink-0" />
                  </div>
                  <p className="text-foreground text-sm">
                    <span className="font-bold">{item.bold}</span> {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <Button
                size="lg"
                onClick={scrollToForm}
                className="bg-primary hover:bg-primary/90 text-foreground font-bold px-10 py-7 text-lg w-full sm:w-auto border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                Get A FREE Quote In 24 Hours
              </Button>
              <p className="text-foreground/70 font-semibold text-sm">No obligation. Serving Brisbane & the Gold Coast.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Bar */}
      <div className="bg-foreground text-white py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-4 lg:gap-8">
          <span className="font-semibold text-gray-400">We Specialise In:</span>
          {["Metal Roofs", "Asbestos Roofs", "Concrete Tile Roofs", "Decramastic Roofs", "Commercial Roofing"].map((service, index) => (
            <span key={index} className="flex items-center gap-4 lg:gap-8">
              <span className="font-bold text-primary">{service}</span>
              {index < 4 && <span className="text-gray-600 hidden lg:inline">|</span>}
            </span>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">
            Our Happy Homeowners
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Don't just take our word for it - see what our customers are saying on Google.
          </p>

          <div className="max-w-4xl mx-auto">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="items-center">
                {reviewScreenshots.map((screenshot, index) => (
                  <CarouselItem key={index} className="basis-full flex items-center justify-center">
                    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-lg">
                      <img
                        src={screenshot}
                        alt={`Google review ${index + 1}`}
                        className="w-full h-auto"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center items-center gap-4 mt-8">
                <CarouselPrevious className="relative left-0 translate-y-0" />
                <CarouselDots />
                <CarouselNext className="relative right-0 translate-y-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 lg:py-24 px-6 bg-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div>
              <img
                src="https://assets.guestsnapper.com/wedding-gallery-media/mra/mra%20service%20area.jpg"
                alt="MRA Roofing service area map"
                className="rounded-xl shadow-xl w-full object-cover"
              />
            </div>

            {/* Right - Content */}
            <div>
              <p className="text-primary font-bold text-sm tracking-wider mb-2">OUR LOCATION</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                Areas We Service
              </h2>

              <div className="space-y-6">
                {/* Service Areas */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <p className="text-gray-300 mb-4">
                    We provide metal roofing services across Greater Brisbane, including:
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {["Brisbane", "Logan", "Redlands", "Ipswich"].map((area, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="bg-primary rounded-full p-1">
                          <Check className="w-3 h-3 text-foreground" />
                        </div>
                        <span className="text-white font-medium">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Business Hours
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-gray-300">
                      <span>Monday - Friday</span>
                      <span className="text-white font-medium">8:00am - 5:00pm</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Saturday - Sunday</span>
                      <span className="text-white font-medium">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty & Certification Section */}
      <section className="py-16 lg:py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div>
              <img
                src="https://assets.guestsnapper.com/wedding-gallery-media/mra/mra%20utes.jpg"
                alt="MRA Roofing work vehicles"
                className="rounded-xl shadow-xl w-full object-cover"
              />
            </div>

            {/* Right - Warranties & Certification */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">Warranties & Certification</h2>

              <div className="space-y-6">
                {/* 7 Year Workmanship */}
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex gap-4 items-start">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Hammer className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg mb-1">7 Year Workmanship Warranty</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Written warranty for the installation of metal roofing, fascia and gutter on full roof replacements.
                    </p>
                  </div>
                </div>

                {/* Product Warranty */}
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex gap-4 items-start">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg mb-1">Product Warranty</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Bluescope Steel warranties available for up to 36 years for roofing and 50 years for framing.
                    </p>
                  </div>
                </div>

                {/* Building Certification */}
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex gap-4 items-start">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <ScrollText className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg mb-1">Building Certification</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      We handle the certification process and provide a Final Inspection Certificate upon completion.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                onClick={scrollToForm}
                className="bg-primary hover:bg-primary/90 text-foreground font-bold px-8 py-6 border-0 shadow-lg hover:shadow-xl transition-shadow mt-8 w-full md:w-auto"
              >
                Get A FREE Quote In 24 Hours
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-16 lg:py-24 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">
            View Some Of Our Recent Projects
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            See the dramatic transformations we've achieved for Brisbane & the Gold Coast homeowners.
          </p>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {projectImages.map((image, index) => (
                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <img
                      src={image}
                      alt={`Before and after project ${index + 1}`}
                      className="w-full h-auto"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center items-center gap-4 mt-8">
              <CarouselPrevious className="relative left-0 translate-y-0" />
              <CarouselDots />
              <CarouselNext className="relative right-0 translate-y-0" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Asbestos Replacement Section */}
      <section className="py-16 lg:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Main Image with Before/After overlay */}
            <div className="relative">
              <img
                src="https://assets.guestsnapper.com/wedding-gallery-media/mra/476836642_1144888640757705_7027799367783525584_n.jpg"
                alt="MRA Roofing asbestos removal team"
                className="rounded-xl w-full shadow-xl"
              />
              {/* Before/After overlay in bottom right */}
              <div className="absolute bottom-4 right-4 w-[45%] max-w-[250px]">
                <img
                  src="https://assets.guestsnapper.com/wedding-gallery-media/mra/before%20and%20after4.jpg"
                  alt="Asbestos roof replaced with COLORBOND®"
                  className="rounded-lg shadow-lg border-2 border-white"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <p className="text-primary font-bold text-sm tracking-wider mb-2">CERTIFIED ASBESTOS REMOVAL</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Safe Asbestos Roof Replacement
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                MRA Roofing is one of the few roofing companies in Brisbane & the Gold Coast fully certified and licensed to safely remove and replace asbestos roofs. We follow all Australian safety standards and regulations, ensuring the health and safety of your family and our team.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Once your old asbestos roof is safely removed, we replace it with high-quality COLORBOND® metal roofing — the superior choice for Queensland homes.
              </p>

              <h3 className="text-xl font-bold text-foreground mb-4">Why Choose COLORBOND®?</h3>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Durability</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Built to withstand the harsh Australian climate — intense heat, UV radiation, and severe storms. Highly resistant to cracking, chipping and peeling.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Sun className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Energy Efficiency</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Reflective properties help reduce cooling costs during hot Queensland summers.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Wrench className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Low Maintenance</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Easy to clean and maintain, saving you time and money over the long term.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Palette className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Style Variety</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Wide range of colours and styles to complement your home's aesthetic.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Longevity</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Long lifespan makes COLORBOND® a cost-effective investment for your home.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-16 lg:py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Residential Metal Roof Replacements
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                MRA Roofing specialises in delivering comprehensive metal roofing services, with a focus on roof replacements. Our dedication to quality shines through every stage of our process.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We expertly handle the removal of your old roof, replacing it with superior metal roofing materials. Going beyond the surface, we assess and upgrade your roof's tie-downs as necessary to ensure compliance with Australian Standards, complete with all required certifications.
              </p>
              <Button
                size="lg"
                onClick={scrollToForm}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 border-0 w-full md:w-auto"
              >
                Get Your FREE Quote
              </Button>
            </div>

            <div>
              <img
                src="https://assets.guestsnapper.com/wedding-gallery-media/roofer%20in%20action.webp"
                alt="Professional roofer installing metal roofing"
                className="rounded-xl w-full object-cover"
              />
            </div>
          </div>

          {/* Roof Types We Replace */}
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Roof Types We Replace
            </h3>
            <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
              We specialise in replacing all types of old roofing with modern, durable metal roofing.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { image: "https://assets.guestsnapper.com/wedding-gallery-media/asbestos.jpg", label: "Asbestos" },
                { image: "https://assets.guestsnapper.com/wedding-gallery-media/mra/metal%20roof.webp", label: "Metal Roof" },
                { image: "https://assets.guestsnapper.com/wedding-gallery-media/mra/concrete%20tile.webp", label: "Concrete Tile" },
                { image: "https://assets.guestsnapper.com/wedding-gallery-media/mra/decramastic.jpg", label: "Decramastic" },
              ].map((roof, index) => (
                <div key={index} className="group">
                  <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow mb-3">
                    <img
                      src={roof.image}
                      alt={roof.label}
                      className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="font-bold text-foreground">{roof.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-8 px-6 bg-foreground">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white text-lg lg:text-xl font-bold text-center md:text-left">
            Providing Metal Roofing Services Across Greater Brisbane, Including Brisbane, Logan, Redlands and Ipswich
          </p>
          <Button
            size="lg"
            onClick={scrollToForm}
            className="bg-primary hover:bg-primary/90 text-foreground font-bold px-8 py-6 border-0 shadow-lg hover:shadow-xl transition-shadow w-full md:w-auto md:whitespace-nowrap md:flex-shrink-0"
          >
            Request A FREE Quote Now!
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">
            Why Convert To COLORBOND® Metal Roofing?
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Discover the benefits of Australia's most trusted roofing material.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* COLORBOND® Colour Swatches */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground text-center mb-2">
              COLORBOND® Colour Range
            </h3>
            <p className="text-muted-foreground text-center mb-8">
              Choose from a wide range of colours to match your home
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-7 gap-3">
              {colorbondColours.map((colour, index) => (
                <div key={index} className="group">
                  <div
                    className="aspect-square rounded-lg shadow-md group-hover:scale-105 group-hover:shadow-lg transition-all cursor-pointer border border-gray-200"
                    style={{ backgroundColor: colour.color }}
                  />
                  <p className="text-xs text-center mt-2 text-muted-foreground font-medium truncate">
                    {colour.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 lg:py-24 px-6 bg-foreground">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-4">
            What To Expect
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Our streamlined process ensures a smooth experience from start to finish.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Timeline */}
            <div>
              <div className="relative">
                {/* Vertical line - only spans the accordion items */}
                <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-primary/30" />

                <Accordion type="single" collapsible className="space-y-4">
                  {processSteps.map((step, index) => (
                    <AccordionItem
                      key={index}
                      value={`step-${index}`}
                      className="border-0"
                    >
                      <div className="flex gap-4">
                        {/* Icon circle */}
                        <div className="w-10 h-10 bg-primary text-foreground rounded-full flex items-center justify-center flex-shrink-0 z-10 shadow-lg shadow-primary/20">
                          <step.icon className="w-5 h-5" />
                        </div>
                        {/* Accordion box */}
                        <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-primary/50 transition-colors overflow-hidden">
                          <AccordionTrigger className="hover:no-underline px-4 py-3 w-full">
                            <span className="text-white font-medium text-left">{step.text}</span>
                          </AccordionTrigger>
                          <AccordionContent className="px-4 pb-4 pt-0">
                            <p className="text-gray-400 leading-relaxed">{step.description}</p>
                          </AccordionContent>
                        </div>
                      </div>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* CTA Button */}
              <div className="mt-10 flex justify-center">
                <Button
                  size="lg"
                  onClick={scrollToForm}
                  className="bg-primary hover:bg-primary/90 text-foreground font-bold px-8 py-6 border-0 shadow-lg hover:shadow-xl transition-shadow w-full md:w-auto"
                >
                  Request A FREE Quote
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="hidden lg:block sticky top-24">
              <img
                src="https://assets.guestsnapper.com/wedding-gallery-media/mra/67fca3f5f1404.webp"
                alt="Professional roofer at work"
                className="rounded-xl w-full aspect-square object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Got questions? We've got answers.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-foreground pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5">
                    <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section with Form */}
      <section id="quote-form" className="py-16 lg:py-24 px-6 bg-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - CTA Content */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready To Transform Your Roof?
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Join hundreds of satisfied Brisbane & the Gold Coast homeowners who have trusted MRA Roofing with their roof replacements. Get a free, no-obligation quote today.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Free quotes within 24 hours",
                  "7 year workmanship warranty",
                  "Fully licensed and insured",
                  "Certified asbestos removal",
                  "Serving Brisbane & the Gold Coast",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-primary rounded-full p-1">
                      <Check className="w-4 h-4 text-foreground" />
                    </div>
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>

              <div className="rounded-xl overflow-hidden">
                <img
                  src="https://assets.guestsnapper.com/wedding-gallery-media/mra/476833075_1144886990757870_8627225330475392970_n.jpg"
                  alt="MRA Roofing team at work"
                  className="w-full aspect-video object-cover"
                />
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Get A Free Quote In 24 Hours!
              </h3>
              <p className="text-muted-foreground mb-6">
                Or Call <a href="tel:1300080883" className="text-primary font-bold hover:underline">1300 080 883</a> to Schedule Your Estimate!
              </p>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <img
                src="https://assets.guestsnapper.com/wedding-gallery-media/mra/mra%20dark%20logo.webp"
                alt="MRA Roofing"
                className="h-12 mb-4"
              />
              <p className="text-gray-400 text-sm leading-relaxed">
                Brisbane & the Gold Coast's trusted metal roofing specialists. Quality workmanship guaranteed.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-primary mb-4">Contact</h3>
              <div className="space-y-3">
                <a href="tel:1300080883" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>1300 080 883</span>
                </a>
                <div className="flex items-center gap-3 text-gray-300">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Mon - Fri: 8:00am - 5:00pm</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-primary mb-4">Credentials</h3>
              <div className="flex items-center gap-3">
                <div className="border border-primary px-3 py-1 text-xs">
                  <span className="font-bold text-primary">QBCC</span>
                </div>
                <div className="text-sm">
                  <p className="text-gray-400">QBCC LICENSE</p>
                  <p className="text-white">NO: 15308507</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} MRA Roofing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
