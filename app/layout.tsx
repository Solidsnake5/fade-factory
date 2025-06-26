import type React from "react"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation" // Import Navigation
import FixedGoogleReviews from "@/components/fixed-google-reviews"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
})

export const metadata: Metadata = {
  title: "Fade Factory NYC",
  description: "Premium Barber Shop Services in NYC",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="relative min-h-screen overflow-hidden">
          {/* Background Video */}
          <video
            className="fixed inset-0 w-full h-full object-cover z-[-1]"
            src="/fade-factory-bg.mp4"
            loop
            autoPlay
            muted
            playsInline
            aria-hidden="true"
          />
          {/* Overlay for readability */}
          <div className="fixed inset-0 bg-black/60 z-0" />
          {/* Content Wrapper */}
          <div className="relative z-10 min-h-screen flex flex-col">
            <Navigation /> {/* Render Navigation here */}
            {children}
            <FixedGoogleReviews /> {/* Add the new fixed component here */}
          </div>
        </div>
      </body>
    </html>
  )
}
