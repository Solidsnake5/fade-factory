import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"

export default function FixedGoogleReviews() {
  const rating = 4.8
  const reviewCount = 82
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0

  return (
    <Link
      href="https://www.google.com/search?q=fade+factory+valley+stream&sca_esv=ccb8066356fd07b7&sxsrf=AE3TifNbEsBaICTh7qFe4gW6mOTSu7V_hQ%3A1750791786500&source=hp&ei=avZaaKTOHLmW5OMPtd-xwA8&iflsig=AOw8s4IAAAAAaFsEej7QAwcIwI5fALEcmmNylVpp7rtX&ved=0ahUKEwikq4jU34qOAxU5C3kGHbVvDPgQ4dUDCBk&uact=5&oq=fade+factory+valley+stream&gs_lp=Egdnd3Mtd2l6GgIYAiIaZmFkZSBmYWN0b3J5IHZhbGxleSBzdHJlYW0yChAjGIAEGCcYigUyDhAuGIAEGMcBGI4FGK8BMgYQABgWGB4yBhAAGBYYHjICECYyCBAAGIAEGKIEMggQABiABBiiBDIFEAAY7wUyCBAAGIAEGKIESLQpUOgEWMEmcAF4AJABAJgBzQGgAeYWqgEGOS4xNi4xuAEDyAEA-AEBmAIboALMF6gCCsICBxAjGCcY6gLCAg0QIxjwBRgnGMkCGOoCwgILEAAYgAQYkQIYigXCAgsQLhiABBiRAhiKBcICERAuGIAEGLEDGNEDGIMBGMcBwgILEAAYgAQYsQMYgwHCAg4QLhiABBixAxiDARiKBcICCBAAGIAEGLEDwgITEC4YgAQYxwEYJxiKBRiOBRivAcICFhAuGIAEGLEDGNEDGEMYgwEYxwEYigXCAgoQLhiABBhDGIoFwgIKEAAYgAQYQxiKBcICCRAuGIAEGEMY5QQYigXCAg0QABiABBixAxhDGIoFwgILEC4YgAQYsQMY5QTCAggQLhiABBixA8ICDRAuGIAEGLEDGEMYigXCAggQABiABBiLA8ICCxAAGIAEGLEDGIsDwgIFEAAYgATCAgsQLhiABBixAxiDAcICCxAuGIAEGMcBGK8BwgIUEC4YgAQYpgMYxwEYqAMYiwMYrwHCAgcQABipBhgewgIIEAAYogQYiQWYAwbxBVRLguNxHJ-NkgcGNy4xOS4xoAfo_gKyBwY2LjE5LjG4B8YXwgcGMC43LjIwyAdS&sclient=gws-wiz"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 inline-flex flex-col items-center justify-center gap-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 hover:bg-white/20 transition-all duration-300 hover:scale-105 group max-w-[150px] text-center"
    >
      {/* Google Logo */}
      <div className="relative w-5 h-5 flex-shrink-0">
        <Image src="/google-logo.svg" alt="Google" fill className="object-contain" />
      </div>

      {/* Rating and Stars */}
      <div className="flex items-center gap-1">
        <span className="text-white font-semibold text-sm">{rating}</span>
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, index) => {
            if (index < fullStars) {
              return <Star key={index} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            } else if (index === fullStars && hasHalfStar) {
              return (
                <div key={index} className="relative w-3 h-3">
                  <Star className="w-3 h-3 text-gray-300 absolute" />
                  <div className="overflow-hidden w-1/2">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  </div>
                </div>
              )
            } else {
              return <Star key={index} className="w-3 h-3 text-gray-300" />
            }
          })}
        </div>
      </div>

      {/* Review Count */}
      <span className="text-white/80 text-xs">({reviewCount} reviews)</span>
    </Link>
  )
}
