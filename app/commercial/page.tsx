"use client"

import { useState } from "react"
import { Check, ChevronDown, Phone, Clock, Shield, Building2, Wrench, Factory, ClipboardCheck, FileText, Search, Send, PenLine, Calendar, Truck, Hammer, Award, HardHat, Zap, Droplets, Wind, Lightbulb } from "lucide-react"
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

export default function CommercialPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const scrollToForm = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  const services = [
    "Re-roofing of shopping centres, public buildings including schools, warehouses, industrial sites, hotels, and other commercial structures",
    "Roof Replacement",
    "New Build Commercial Roofs",
    "Overhaul of all plumbing and pipes",
    "Disconnecting and reconnecting air-conditioning units",
    "Revamping all facades",
    "Upgrade steel work",
    "Supply structural steel members to change roof slope",
    "Colorbond wall cladding",
    "Insulated panel installation",
  ]

  const processSteps = [
    {
      text: "Inspection & Measurements",
      icon: Search,
      description: "Our first step is always a thorough inspection of your existing roof, assessing its condition, identifying potential issues, and taking precise measurements. This crucial step helps us provide an accurate, detailed quote tailored specifically to your building."
    },
    {
      text: "Quote Creation & Plan",
      icon: FileText,
      description: "Once our inspection is complete, we'll provide you with a detailed quote including the cost of materials, labour, and any other elements specific to your project. We'll also give you details about the timeline, different stages of construction, and any disruptions that you may have to plan for."
    },
    {
      text: "Contract & Start Date",
      icon: PenLine,
      description: "Once you're happy with the quote, we'll finalise the contract with clear terms and payment schedule, then work with your schedule to lock in a start date that minimises disruption to your business operations."
    },
    {
      text: "Site Preparation & Old Roof Removal",
      icon: Truck,
      description: "Before the new roof goes up, we'll carefully prepare the worksite and remove the old roofing materials. Safety is always our top priority, especially when dealing with asbestos or other hazardous materials. We dispose of waste responsibly and ensure minimal disruption to your business."
    },
    {
      text: "New Roofing Installation",
      icon: Hammer,
      description: "Our team of skilled roofers will work efficiently to install your new commercial roofing system, ensuring each panel is perfectly aligned and securely fastened. Throughout the installation, we continually check all materials for durability, giving you peace of mind that your new commercial roof is built to last."
    },
    {
      text: "Final Inspection & Certification",
      icon: Award,
      description: "We conduct a final quality inspection, provide all relevant certifications for compliance, and hand over your workmanship warranty documentation. Your commercial roof is ready to protect your business for decades."
    },
  ]

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Industry Standard Workmanship Warranty",
      desc: "We stand by the durability and excellence of our work with comprehensive warranty coverage."
    },
    {
      icon: Clock,
      title: "Fast Scheduling & Turnaround",
      desc: "We understand time is money. Our efficient processes minimise downtime for your business."
    },
    {
      icon: HardHat,
      title: "Daily Cleanup Guarantee",
      desc: "We keep your site clean and safe throughout the project, maintaining a professional worksite at all times."
    },
    {
      icon: Wrench,
      title: "Alterations & Design Improvements",
      desc: "We identify and fix existing design faults, improving your roof's performance and longevity."
    },
  ]

  const faqs = [
    {
      q: "How do I know if my commercial roof needs repairs or replacement?",
      a: "Key signs include water ingress, obvious damage, or non-compliance issues that could negate insurance policies. We recommend regular inspections to catch problems early and avoid costly emergency repairs."
    },
    {
      q: "Can you work on large-scale industrial or warehouse roofing?",
      a: "Yes, MRA Roofing has extensive experience with large-scale industrial and warehouse roofing projects. Our team is equipped to handle projects of any size, from small commercial buildings to large industrial complexes."
    },
    {
      q: "Do you offer Colorbond roofing for commercial properties?",
      a: "Absolutely. We specialise in Colorbond roofing and wall cladding for commercial properties. Colorbond is an excellent choice for commercial buildings due to its durability, low maintenance, and wide range of colours."
    },
    {
      q: "Are you fully licensed and insured for commercial roofing jobs?",
      a: "Yes, MRA Roofing is fully licensed (QBCC License No: 15308507) and comprehensively insured for all commercial and industrial roofing work."
    },
    {
      q: "How long does a commercial roofing project usually take?",
      a: "Project duration varies based on the size and complexity of the job. We'll provide a detailed timeline during the quoting process and work to minimise disruption to your business operations."
    },
    {
      q: "Is there a warranty on your commercial roofing work?",
      a: "Yes, we provide an industry standard workmanship warranty on our commercial roofing installations. Additionally, Bluescope Steel product warranties are available for up to 36 years for roofing materials. Terms and conditions apply."
    },
    {
      q: "Can you help with insurance claims for commercial roof damage?",
      a: "Yes, we can provide detailed reports and documentation to support insurance claims for commercial roof damage. Our team has experience working with insurance companies and can help streamline the claims process."
    },
    {
      q: "Do you provide roof inspections and reports for commercial buildings?",
      a: "Yes, we offer comprehensive roof inspection services for commercial buildings. Our detailed reports can help you understand the current condition of your roof and plan for any necessary maintenance or replacements."
    },
    {
      q: "How much does commercial roofing cost in Brisbane & the Gold Coast?",
      a: "Commercial roofing costs vary significantly based on the size of the building, type of roofing system, accessibility, and specific requirements. Contact us for a free, no-obligation quote tailored to your project."
    },
    {
      q: "Can you install skylights, vents, or other roof features?",
      a: "Yes, we can install skylights, vents, whirlybirds, and other roof features as part of your commercial roofing project. These additions can improve natural lighting and ventilation in your commercial space."
    },
  ]

  const reviewScreenshots = [
    "https://assets.guestsnapper.com/wedding-gallery-media/mra/Screenshot%202026-01-09%20at%2012.35.53%E2%80%AFpm.png",
    "https://assets.guestsnapper.com/wedding-gallery-media/mra/Screenshot%202026-01-09%20at%2012.36.06%E2%80%AFpm.png",
    "https://assets.guestsnapper.com/wedding-gallery-media/mra/Screenshot%202026-01-09%20at%2012.36.16%E2%80%AFpm.png",
    "https://assets.guestsnapper.com/wedding-gallery-media/mra/Screenshot%202026-01-09%20at%2012.36.28%E2%80%AFpm.png",
    "https://assets.guestsnapper.com/wedding-gallery-media/mra/Screenshot%202026-01-09%20at%2012.36.38%E2%80%AFpm.png",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header */}
      <header className="bg-white py-4 px-6 border-b border-gray-200 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="/">
              <img
                src="https://assets.guestsnapper.com/wedding-gallery-media/mra/mra%20logo.webp"
                alt="MRA Roofing"
                className="h-12"
              />
            </a>
          </div>
          <p className="hidden xl:block text-muted-foreground text-sm tracking-wide absolute left-1/2 -translate-x-1/2">
            SERVICING <span className="font-bold text-foreground">SE QLD</span> & <span className="font-bold text-foreground">NORTHERN NSW</span>
          </p>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline text-foreground font-medium">Call For Instant Quote:</span>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-4 py-4 sm:px-8 sm:py-6 text-sm sm:text-base border-0 shadow-none">
              <a href="tel:0730633352">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">(07) 3063 3352</span>
                <span className="sm:hidden">Call Now</span>
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-foreground overflow-hidden">
        <div className="px-6 lg:px-12 py-16 lg:py-24 max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-primary font-bold text-sm tracking-wider mb-4">COMMERCIAL & INDUSTRIAL ROOFING EXPERTS</p>
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-6">
                Commercial Roofing
                <br />
                <span className="text-primary">SE QLD & Northern NSW</span>
              </h1>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                MRA Roofing & Construction offers commercial clients comprehensive roofing services from start to finish. Our experienced team can tackle any commercial job, from building a brand-new commercial structure to renovating an established one.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  { bold: "Fast Scheduling", text: "& Turnaround" },
                  { bold: "Industry Standard", text: "Workmanship Warranty" },
                  { bold: "Daily Cleanup", text: "Guarantee" },
                  { bold: "7000+", text: "Projects Completed" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                    <div className="bg-primary rounded-full p-1">
                      <Check className="w-4 h-4 text-foreground flex-shrink-0" />
                    </div>
                    <p className="text-white text-sm">
                      <span className="font-bold">{item.bold}</span> {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                onClick={scrollToForm}
                className="bg-primary hover:bg-primary/90 text-foreground font-bold px-6 py-5 sm:px-10 sm:py-7 text-base sm:text-lg border-0 shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto"
              >
                Get A FREE Commercial Quote
              </Button>
            </div>

            <div className="hidden lg:block">
              <div className="relative aspect-video rounded-xl shadow-2xl overflow-hidden">
                <iframe
                  src="https://player.vimeo.com/video/757387573?autoplay=1&loop=1&muted=1&background=1"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="MRA Roofing Commercial Video"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Bar */}
      <div className="bg-primary text-foreground py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-4 lg:gap-8">
          <span className="font-semibold text-foreground/70">Commercial Services:</span>
          {["Metal Re-Roofing", "Wall Cladding", "Insulated Panels", "Asbestos Removal", "Structural Steel"].map((service, index) => (
            <span key={index} className="flex items-center gap-4 lg:gap-8">
              <span className="font-bold text-foreground">{service}</span>
              {index < 4 && <span className="text-foreground/30 hidden lg:inline">|</span>}
            </span>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 lg:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-bold text-sm tracking-wider mb-2">COMPREHENSIVE SOLUTIONS</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Our Commercial Roofing Services in SE QLD & Northern NSW
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                MRA Roofing & Construction provides a range of both commercial and industrial roofing services throughout SE QLD and Northern NSW designed to meet the needs of different businesses. From updating an old roof to installing a brand new roofing system, our expert team is ready to help.
              </p>

              <div className="space-y-3 mb-8">
                {services.slice(0, 8).map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    </div>
                    <p className="text-foreground">{service}</p>
                  </div>
                ))}
                <p className="text-muted-foreground italic pl-8">...and many more. Call us today to discuss your needs!</p>
              </div>

              <Button
                size="lg"
                onClick={scrollToForm}
                className="bg-primary hover:bg-primary/90 text-foreground font-bold px-6 py-5 sm:px-10 sm:py-7 text-base sm:text-lg border-0 shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto"
              >
                Discuss Your Project
              </Button>
            </div>

            <div className="relative">
              <img
                src="https://assets.guestsnapper.com/wedding-gallery-media/mra/QBuild%20Re-roof.webp"
                alt="QBuild commercial reroofing project"
                className="rounded-xl shadow-xl w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-foreground text-white px-4 py-2 rounded-lg">
                <p className="font-bold text-sm">QBUILD REROOFING</p>
                <p className="text-xs text-gray-300">Toowoomba</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-bold text-sm tracking-wider mb-2">WHY MRA ROOFING</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose MRA As Your Commercial Roofing Specialist?
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We believe in delivering not only the best quality roofing services, but also peace of mind. When you choose MRA Roofing, you'll get quality craftsmanship, industry-leading materials, and a personalised service tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-foreground rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Trusted By Businesses Across SE QLD & Northern NSW
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Commercial roofing involves a complicated and specialised set of needs. A commercial roof must protect assets, materials, and personnel from external elements while providing insulation against sound and temperature. As commercial roofers, it is our responsibility to ensure projects are completed with the highest quality of craftsmanship for long-term durability and reliability.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We have the expertise and accountability to deliver commercial rooftop solutions backed by the best industry warranties available. Trust MRA to get the job done right, on time, on budget, and with minimal disruption to your operations.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://assets.guestsnapper.com/wedding-gallery-media/mra/mra%20utes.jpg"
                  alt="MRA Roofing work vehicles"
                  className="rounded-xl shadow-xl max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 px-6 bg-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-bold text-sm tracking-wider mb-2">OUR PROCESS</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Commercial Roofing Installation Process
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Every roofing project is unique, but our proven process ensures a seamless experience from start to finish. Our approach is designed to be efficient, transparent, and tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Timeline */}
            <div>
              <div className="relative">
                {/* Vertical line */}
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
                            <span className="text-white font-medium text-left">Step {index + 1}: {step.text}</span>
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
                  className="bg-primary hover:bg-primary/90 text-foreground font-bold px-6 py-5 sm:px-10 sm:py-7 text-base sm:text-lg border-0 shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto"
                >
                  Start Your Commercial Project
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="hidden lg:block sticky top-24">
              <img
                src="https://assets.guestsnapper.com/wedding-gallery-media/mra/commercial%20roof%20cottonvale.jpg"
                alt="Commercial roof installation Cottonvale"
                className="rounded-xl w-full aspect-square object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-bold text-sm tracking-wider mb-2">TESTIMONIALS</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Customers Love Us... We Know You Will Too!
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - see what our customers are saying on Google.
            </p>
          </div>

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
                src="https://assets.guestsnapper.com/wedding-gallery-media/Map%20Commercial%20mra.jpg"
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
                    We provide commercial roofing services across South East Queensland and Northern NSW, including:
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {["Brisbane", "Gold Coast", "Logan", "Ipswich", "Toowoomba", "Northern NSW"].map((area, index) => (
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

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-bold text-sm tracking-wider mb-2">FAQ</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Got questions about commercial roofing? We've got answers.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
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
              <p className="text-primary font-bold text-sm tracking-wider mb-2">GET STARTED</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Request a Free Consultation on Commercial Roofing
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Whether you're thinking of replacing a commercial roof entirely or there are repairs that need to be carried out, we're here to help. MRA Roofing offers free consultations, and our roofing specialists will discuss your specific needs, inspect your building, and provide a detailed plan for moving forward, along with a free, no-obligation quote.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Free quotes within 24 hours",
                  "Industry standard workmanship warranty",
                  "Fully licensed and insured (QBCC: 15308507)",
                  "Certified asbestos removal",
                  "Minimal disruption to your business",
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
                Get A Free Commercial Quote
              </h3>
              <p className="text-muted-foreground mb-6">
                Call <a href="tel:1300080883" className="text-primary font-bold hover:underline">1300 080 883</a> or fill out the form below for your commercial roofing project.
              </p>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 px-6 border-t border-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <a href="/">
                <img
                  src="https://assets.guestsnapper.com/wedding-gallery-media/mra/mra%20dark%20logo.webp"
                  alt="MRA Roofing"
                  className="h-12 mb-4"
                />
              </a>
              <p className="text-gray-400 text-sm leading-relaxed">
                SE QLD & Northern NSW's trusted commercial and industrial roofing specialists. Quality workmanship guaranteed.
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
            <p>&copy; {new Date().getFullYear()} MRA Roofing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
