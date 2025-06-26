import PhotoGrid from "@/components/photo-grid"

export default function OurWorkPage() {
  const workImages = [
    { src: "/IMG_0258.JPG", alt: "Man with a fresh fade haircut and short beard" },
    { src: "/IMG_0255.JPG", alt: "Man with a styled haircut and full beard" },
    { src: "/IMG_0256.JPG", alt: "Man with a short haircut and mustache" },
    { src: "/IMG_0254.JPG", alt: "Man with a short haircut and well-groomed beard" },
    { src: "/IMG_0257.JPG", alt: "Back view of a person with a clean fade haircut" },
    { src: "/IMG_0260.JPG", alt: "Man with a fresh fade haircut and trimmed beard" },
    { src: "/IMG_0259.JPG", alt: "Man with a fresh haircut smiling" },
    { src: "/IMG_0263.JPG", alt: "Young man with a clean fade haircut" },
    { src: "/IMG_0262.JPG", alt: "Person with an undercut and top knot" },
    { src: "/IMG_0261.JPG", alt: "Man with a fresh haircut and neatly shaped beard" },
  ]

  return (
    <>
      <main className="flex flex-1 flex-col items-center pt-20 text-white animate-fadeIn">
        <h1 className="text-4xl sm:text-5xl font-bold my-8 sm:my-12 drop-shadow-lg">Our Work</h1>
        <div className="w-full max-w-6xl px-4">
          <PhotoGrid images={workImages} />
        </div>
      </main>
    </>
  )
}
