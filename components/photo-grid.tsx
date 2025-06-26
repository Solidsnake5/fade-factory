import Image from "next/image"

interface PhotoGridProps {
  images: Array<{
    src: string
    alt: string
  }>
}

export default function PhotoGrid({ images }: PhotoGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {images.map((image, index) => (
        <div key={index} className="aspect-square relative overflow-hidden rounded-lg shadow-lg group">
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
        </div>
      ))}
    </div>
  )
}
