import ScrollReveal from "@/components/scroll-reveal"
import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center p-4 text-center pt-20 text-white animate-fadeIn">
      <ScrollReveal delay={0} yOffset={50}>
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden mx-auto mb-8 shadow-lg">
          <Image
            src="/IMG_0251.JPG"
            alt="Exterior view of Fade Factory NYC barbershop"
            fill
            sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, 224px"
            className="object-cover"
            priority
          />
        </div>
      </ScrollReveal>

      <h1 className="text-4xl sm:text-5xl font-bold my-8 sm:my-12 drop-shadow-lg">About Fade Factory NYC</h1>
      <div className="max-w-3xl mx-auto space-y-6 px-4">
        <ScrollReveal delay={100}>
          <p className="text-lg sm:text-xl leading-relaxed drop-shadow-md">
            Julian, the visionary behind Fade Factory NYC, has dedicated over a decade to mastering the art of
            barbering. His journey began with a deep-seated passion for precision cuts and a keen eye for detail,
            quickly establishing him as a sought-after stylist. He honed his craft in some of New York City's most
            prestigious barbershops, learning diverse techniques and understanding the unique needs of each client.
            Julian's commitment to excellence and his ability to blend traditional barbering with modern trends set him
            apart, earning him a loyal clientele and a reputation for delivering impeccable results.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <p className="text-lg sm:text-xl leading-relaxed drop-shadow-md">
            Driven by a desire to create a unique grooming experience, Julian envisioned Fade Factory NYC not just as a
            barbershop, but as a community hub where quality meets comfort. He founded the business with the philosophy
            that a great haircut is more than just a service—it's an experience that boosts confidence and reflects
            personal style. From the carefully curated ambiance to the personalized consultations, every aspect of Fade
            Factory NYC is a testament to Julian's dedication to his craft and his clients. He built this business from
            the ground up, pouring his expertise and passion into every detail to ensure Fade Factory NYC stands as a
            beacon of exceptional grooming in the heart of New York City.
          </p>
        </ScrollReveal>
      </div>
    </main>
  )
}
