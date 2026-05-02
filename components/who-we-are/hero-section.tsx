"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Landmark, Globe, Factory } from "lucide-react"
import { EuIcon } from "@/components/eu-icon"
import { SpoolIcon } from "@/components/spool-icon"

const stats = [
  {
    icon: Landmark,
    title: "HSBC",
    subtitle: "Backed Trade Finance",
    desc: "Through our Matrix Platform entity in Hong Kong we offer flexible payment terms and secure global transactions."
  },
  {
    icon: EuIcon,
    title: "EU Based",
    subtitle: "Import and Invoicing",
    desc: "Matrix Design d.o.o. Slovenia enabling direct EU imports local EUR invoicing and simplified compliance."
  },
  {
    icon: Globe,
    title: "Flexible Shipping",
    subtitle: "",
    desc: "FOB at origin or full DDP delivery across EU UK and USA built around your needs."
  },
  {
    icon: Factory,
    title: "Owned",
    subtitle: "Manufacturing Platform",
    desc: "6+ owned units across 3 countries with full control over quality capacity and delivery."
  },
  {
    icon: SpoolIcon,
    title: "Own Integrated",
    subtitle: "Fabric Platform",
    desc: "Over 3 million meters monthly with full control from R&D to finishing ensuring consistent quality and faster development."
  }
];

export function WhoWeAreHeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-slate-900">
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0 transition-opacity duration-1000 opacity-100">
        <Image
          src="/hero/who-we-are.png"
          alt="Manufacturing operations"
          fill
          priority
          sizes="100vw"
          loading="eager"
          className="object-cover"
        />
        {/* Darkish Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center pt-40">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            {/* Main Heading */}
            <h1
              className={`transition-all duration-1000 uppercase ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                BUILT ON <span className="text-[#0ea5e9]">DECADES OF</span>
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0ea5e9] leading-[1.1] tracking-tight">
                MANUFACTURING
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                EXPERIENCE
              </span>
            </h1>

            {/* Subtitle */}
            <div
              className={`mt-10 space-y-4 max-w-3xl transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <p className="text-lg md:text-xl lg:text-2xl text-slate-200 font-medium leading-relaxed">
                From a 1989 printing house to a global manufacturing platform, Matrix connects China’s textile strength with South Asia’s production precision delivering end-to-end solutions for global retail brands.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes kenBurns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
      `}} />
    </section>
  )
}
