import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const afterImage = "https://assets.guestsnapper.com/wedding-gallery-media/5fb4de74-boonah-after_10000000ky0hh02x012000.jpg"
  const beforeImage = "https://assets.guestsnapper.com/wedding-gallery-media/b5d73238-boonah-before_10ow0gm0ho0gm03e000000.jpg"

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">
            <span className="text-primary italic">The</span>
            <span className="text-foreground">ROOFER</span>
          </span>
        </div>
        <p className="hidden md:block text-muted-foreground text-sm tracking-wide">
          SERVICING GREATER BRISBANE, IPSWICH AND SURROUNDING SUBURBS
        </p>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline text-foreground font-medium">Call For Instant Quote:</span>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 border-0 shadow-none">
            1300 080 883
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row">
        {/* Left Side - Before/After Image Showcase */}
        <div className="relative lg:w-1/2 bg-primary min-h-[500px] lg:min-h-[650px] flex items-center justify-center overflow-hidden">
          <div className="relative p-6 lg:p-10 w-full max-w-2xl">
            {/* Main AFTER image - large */}
            <div className="relative">
              {/* AFTER label */}
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 font-bold text-sm tracking-wider z-30 rounded shadow-lg">
                AFTER
              </div>
              <img
                src={afterImage}
                alt="After roof replacement - new white metal roof"
                className="rounded-xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
              {/* Small BEFORE image overlay */}
              <div className="absolute bottom-[-30px] right-[-10px] lg:right-[-40px] w-36 lg:w-52 z-20">
                {/* BEFORE label */}
                <div className="absolute top-2 left-2 bg-foreground text-white px-3 py-1 font-bold text-xs tracking-wider z-30 rounded shadow-lg">
                  BEFORE
                </div>
                <div className="rounded-xl overflow-hidden border-4 border-white shadow-2xl">
                  <img
                    src={beforeImage}
                    alt="Before roof replacement - old weathered roof"
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2 bg-white p-8 lg:p-16 flex flex-col justify-center">
          <div className="max-w-lg">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6">
              Brisbane's Premier
              <br />
              <span className="text-primary">Residential Metal Roofer</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Specialising in high-quality metal roof replacements, we understand the importance of a durable roof to
              protect your home.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                { bold: "Fast", text: "turnaround & pricing" },
                { bold: "7 year", text: "workmanship warranty" },
                { bold: "20+ years", text: "roofing experience" },
                { bold: "Fully certified", text: "and licensed" },
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

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 py-7 text-lg w-full sm:w-auto border-0 shadow-lg hover:shadow-xl transition-shadow"
            >
              Get A FREE Quote in 24 Hours
            </Button>
          </div>
        </div>
      </section>

      <div className="bg-foreground text-white py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-4 lg:gap-8">
          <span className="text-gray-400">We're Experienced In:</span>
          {[
            { highlight: "New", text: "Roofing" },
            { highlight: "Re-roofing", text: "" },
            { highlight: "Asbestos", text: "Removal" },
            { highlight: "Guttering", text: "& Fascia" },
          ].map((service, index) => (
            <span key={index} className="flex items-center gap-4">
              <span className="text-center">
                <span className="text-primary font-semibold block">{service.highlight}</span>
                {service.text && <span className="text-white text-sm">{service.text}</span>}
              </span>
              {index < 3 && <span className="text-gray-500 hidden lg:inline">|</span>}
            </span>
          ))}
          <div className="flex items-center gap-3 ml-4">
            <div className="border border-white px-2 py-1 text-xs">
              <span className="font-bold">QBCC</span>
            </div>
            <div className="text-xs">
              <p className="text-gray-400">QBCC LICENSE</p>
              <p>NO: 15204309</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
