"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const stats = [
  {
    title: "HSBC",
    subtitle: "Backed Trade Finance",
    desc: "LC operations via Hong Kong"
  },
  {
    title: "EU Entity",
    subtitle: "Direct Import into EU",
    desc: "Matrix Design d.o.o. — Slovenia"
  },
  {
    title: "FOB · DDP",
    subtitle: "EU · UK · USA",
    desc: "Door-to-door delivery"
  },
  {
    title: "6",
    subtitle: "Owned Manufacturing Units",
    desc: "Across 3 countries"
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
          loading="eager"
          className="object-cover"
        />
        {/* Darkish Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            {/* Main Heading */}
            <h1
              className={`transition-all duration-1000 uppercase ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <span className="block text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                BUILT TO <span className="text-sky-500">MANUFACTURE</span>
              </span>
              <span className="block text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                <span className="text-sky-500">STRUCTURED</span> TO DELIVER
              </span>
            </h1>

            {/* Subtitle */}
            <div
              className={`mt-10 space-y-4 max-w-3xl transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <p className="text-lg md:text-xl lg:text-2xl text-slate-200 font-medium leading-relaxed">
                Matrix Platform Is An Integrated Manufacturing Group That Owns Its Fabric Supply, Controls Its Production & Delivers Globally
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Cards */}
      <div className="absolute bottom-6 lg:bottom-12 left-0 right-0 z-20 w-full">
        <div className="w-full overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4 md:pb-0">
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 px-6 lg:px-12 md:container md:mx-auto w-max md:w-auto">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`w-[280px] sm:w-[320px] md:w-auto bg-[#0d1420]/80 backdrop-blur-md border border-sky-500/30 rounded-xl p-6 transition-all duration-1000 flex-shrink-0 snap-start ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${600 + (i * 100)}ms` }}
              >
                <h3 className="text-white font-bold text-xl mb-3">{stat.title}</h3>
                <p className="text-slate-200 text-sm font-semibold mb-1.5">{stat.subtitle}</p>
                <p className="text-slate-400 text-xs">{stat.desc}</p>
              </div>
            ))}
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
