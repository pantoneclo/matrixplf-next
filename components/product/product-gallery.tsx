"use client"

import Image from "next/image"
import { Reveal } from "@/components/Reveal"
import { ArrowRight } from "lucide-react"

interface ProductGalleryProps {
  category: {
    name: string
    description: string
    subtitle?: string
    images: string[]
  }
}

// Two static feature cards to interleave in the gallery
const FEATURE_CARDS = [
  {
    title: "Sustainable",
    subtitle: "Fabrics",
    body: "We source eco-friendly bamboo, modal, organic cotton, and recycled polyesters to ensure incredibly soft and breathable comfort, naturally protecting the planet.",
  },
  {
    title: "Precision",
    subtitle: "Craftsmanship",
    body: "Every seam, stitch, and cut is engineered by our state-of-the-art facilities across South Asia. We utilize advanced flatlock and ultrasonic welding techniques.",
  },
  {
    title: "Test 3",
    subtitle: "Craftsmanship",
    body: "Every seam, stitch, and cut is engineered by our state-of-the-art facilities across South Asia. We utilize advanced flatlock and ultrasonic welding techniques.",
  },
  {
    title: "Test 4",
    subtitle: "Craftsmanship",
    body: "Every seam, stitch, and cut is engineered by our state-of-the-art facilities across South Asia. We utilize advanced flatlock and ultrasonic welding techniques.",
  }
]

function FeatureCard({ title, subtitle, body }: { title: string; subtitle: string; body: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-10 lg:p-12 text-white flex flex-col justify-between min-h-[350px] backdrop-blur-sm">
      <div>
        <h3 className="text-3xl font-bold mb-1">{title}</h3>
        <h4 className="text-3xl font-bold text-sky-400 mb-6">{subtitle}</h4>
        <div className="w-12 h-1 bg-sky-400/30 mb-8" />
        <p className="text-slate-400 leading-relaxed text-[15px]">{body}</p>
      </div>
      <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors mt-12 group">
        Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  )
}

function ImageCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-black/40 group border border-white/5">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </div>
  )
}

export function ProductGallery({ category }: ProductGalleryProps) {
  const images = category.images

  // Build column items:
  // Col 1 → img[0], img[3], img[6], img[9], …
  // Col 2 → FeatureCard[0], img[1], img[4], img[7], …
  // Col 3 → img[2], FeatureCard[1], img[5], img[8], …
  type ColItem =
    | { type: "image"; src: string; index: number }
    | { type: "card"; cardIndex: number }

  const col1: ColItem[] = []
  const col2: ColItem[] = [{ type: "card", cardIndex: 0 }]
  const col3: ColItem[] = []

  // First pass: assign images 0,1,2 to their base positions
  if (images[0]) col1.push({ type: "image", src: images[0], index: 0 })
  if (images[1]) col2.push({ type: "image", src: images[1], index: 1 })
  if (images[2]) col3.push({ type: "image", src: images[2], index: 2 })

  // Col 3 gets FeatureCard[1] after its first image
  col3.push({ type: "card", cardIndex: 1 })

  // Distribute remaining images round-robin: 3,4,5 → col1,col2,col3 etc.
  for (let i = 3; i < images.length; i++) {
    const col = i % 3
    const item: ColItem = { type: "image", src: images[i], index: i }
    if (col === 0) col1.push(item)
    else if (col === 1) col2.push(item)
    else col3.push(item)
  }

  let delayCounter = 0
  const nextDelay = () => {
    delayCounter += 0.1
    return Math.round(delayCounter * 10) / 10
  }

  const renderItem = (item: ColItem, key: string) => {
    const delay = nextDelay()
    if (item.type === "image") {
      return (
        <Reveal key={key} delay={delay}>
          <ImageCard src={item.src} alt={`${category.name} ${item.index + 1}`} />
        </Reveal>
      )
    }
    const card = FEATURE_CARDS[item.cardIndex]
    return (
      <Reveal key={key} delay={delay}>
        <FeatureCard title={card.title} subtitle={card.subtitle} body={card.body} />
      </Reveal>
    )
  }

  return (
    <section className="py-24 bg-[#0d1420]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 rounded-full mb-6 border border-white/10">
              <div className="w-1.5 h-1.5 bg-sky-400 rounded-full" />
              <span className="text-sky-400 text-[10px] font-bold uppercase tracking-widest">
                Why Matrix
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-none">
              <span className="text-white drop-shadow-sm opacity-90">Integrated </span>
              <span className="text-sky-500">Systems</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              We source sustainable materials and utilize a vertically integrated production platform to ensure scalable manufacturing and high-volume quality control for global retail brands.
            </p>
          </Reveal>
        </div>

        {/* Dynamic Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {/* Column 1 */}
          <div className="space-y-8">
            {col1.map((item, i) => renderItem(item, `col1-${i}`))}
          </div>

          {/* Column 2 */}
          <div className="space-y-8">
            {col2.map((item, i) => renderItem(item, `col2-${i}`))}
          </div>

          {/* Column 3 */}
          <div className="space-y-8">
            {col3.map((item, i) => renderItem(item, `col3-${i}`))}
          </div>
        </div>
      </div>
    </section>
  )
}
