import { Button } from "@/components/ui/button"
import Link from "next/link"
// import GoogleReviews from "@/components/google-reviews"
// import Navigation from "@/components/navigation" // Removed from here

export default function HomePage() {
  return (
    <>
      {/* <Navigation /> Removed from here */}
      <main className="flex flex-1 flex-col items-center justify-center p-4 text-center pt-20">
        <div className="flex flex-col items-center">
          {/* Google Reviews Component */}
          <div className="flex flex-col items-center text-center mt-6 text-white">
            {/* Address */}
            <div className="flex flex-col items-center text-center">
              {/* Removed h3 tag */}
              <p className="text-lg font-medium">70 S Central Ave</p>
              <p className="text-lg font-medium">Valley Stream, NY 11580</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button
              asChild
              className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Link href="https://booksy.com/en-us/1308536_fade-factory-barbershop_barber-shop_30060_valley-stream#ba_s=seo">
                Book Now
              </Link>
            </Button>
            <Button
              asChild
              className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  )
}
