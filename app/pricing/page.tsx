import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Tag } from "lucide-react"

export default function PricingPage() {
  const services = [
    {
      name: "Any haircut and beard",
      description: "Full service. Any haircut with beard. Hot towel included",
      extraInfo: "Lowest price in 30 days, before discount: $45.00",
      originalPrice: "$50.00",
      price: "$45.00",
      duration: "35min",
      discountTag: "Save up to 10%",
      bookLink: "https://booksy.com/en-us/1308536_fade-factory-barbershop_barber-shop_30060_valley-stream#ba_s=seo",
    },
    {
      name: "Any haircut only",
      description: "Any haircut.",
      price: "$40.00",
      duration: "30min",
      bookLink: "https://booksy.com/en-us/1308536_fade-factory-barbershop_barber-shop_30060_valley-stream#ba_s=seo",
    },
    {
      name: "Shape up",
      description: "Sharp shape up with razor.",
      price: "$20.00",
      duration: "10min",
      bookLink: "https://booksy.com/en-us/1308536_fade-factory-barbershop_barber-shop_30060_valley-stream#ba_s=seo",
    },
    {
      name: "Full service",
      description: "Full haircut with beard or no beard. Face mask. Steam...",
      price: "$100.00",
      duration: "1h",
      bookLink: "https://booksy.com/en-us/1308536_fade-factory-barbershop_barber-shop_30060_valley-stream#ba_s=seo",
    },
    {
      name: "Beard Shaping",
      description: "Sculpting and lining up beard",
      price: "$30.00",
      duration: "20min",
      bookLink: "https://booksy.com/en-us/1308536_fade-factory-barbershop_barber-shop_30060_valley-stream#ba_s=seo",
    },
    {
      name: "Eyebrows",
      description: "Quick and precise eyebrow shaping.",
      price: "$15.00",
      duration: "5min",
      bookLink: "https://booksy.com/en-us/1308536_fade-factory-barbershop_barber-shop_30060_valley-stream#ba_s=seo",
    },
  ]

  return (
    <main className="flex flex-1 flex-col items-center p-4 pt-20 text-white animate-fadeIn">
      <div className="w-full max-w-4xl mx-auto bg-black/20 backdrop-blur-md rounded-xl p-4 sm:p-8 my-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Services</h1>
        <div className="space-y-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-700 pb-6"
            >
              {/* Left Side: Service Details */}
              <div className="flex-grow mb-4 sm:mb-0">
                <h2 className="text-xl font-semibold text-white">{service.name}</h2>
                <p className="text-gray-300 mt-1">{service.description}</p>
                {service.extraInfo && <p className="text-gray-400 text-sm mt-2">{service.extraInfo}</p>}
                {service.discountTag && (
                  <div className="mt-3 inline-flex items-center bg-teal-500/10 text-teal-400 text-xs font-medium px-3 py-1 rounded-full">
                    <Tag className="w-3 h-3 mr-1.5" />
                    {service.discountTag}
                  </div>
                )}
              </div>

              {/* Right Side: Price & Book Button */}
              <div className="flex items-center gap-4 sm:gap-6 flex-shrink-0 w-full sm:w-auto justify-between">
                <div className="text-right">
                  <div className="flex items-baseline gap-2">
                    {service.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">{service.originalPrice}</span>
                    )}
                    <span className="text-xl font-bold text-white">{service.price}</span>
                  </div>
                  <p className="text-sm text-gray-400">{service.duration}</p>
                </div>
                <Button
                  asChild
                  className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-8 py-5 rounded-lg text-base"
                >
                  <Link href={service.bookLink}>Book</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
