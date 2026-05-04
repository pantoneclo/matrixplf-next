"use client"

import { useEffect, useRef, useState } from "react"

export function WhoWeAreLegacySection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="flex flex-col lg:block bg-slate-950 relative overflow-hidden">
      {/* Image Container: Relative on mobile (stacks top), Absolute on desktop (background) */}
      <div className="relative lg:absolute lg:inset-0 h-[280px] sm:h-[400px] lg:h-full z-0">
        <img
          src="/assets/pages/The-Matrix-Advantage.jpg"
          alt="Factory Background"
          className="w-full h-full object-cover object-center md:object-right"
        />

        {/* Deskstop Selective Blur Overlay */}
        <div
          className="absolute inset-y-0 left-0 w-full lg:w-[65%] bg-slate-950/30 z-10 hidden lg:block"
          style={{
            maskImage: 'linear-gradient(to right, black 70%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, black 70%, transparent 100%)'
          }}
        />

        {/* Desktop Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent z-0 hidden lg:block" />

        {/* Mobile Gradient Overlay (Fade bottom) */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent lg:hidden" />
      </div>

      {/* Legacy Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-20 py-8 lg:py-12">
        <div className="max-w-2xl lg:max-w-[50%]">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-sky-500 mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            The Matrix <span className="text-white">Advantage</span>
          </h2>

          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-xl md:text-2xl text-white font-semibold leading-tight mb-8">
              One integrated platform. Built for global retail execution.
            </p>

            <div className="grid gap-6">
              {[
                {
                  title: "Fabric Control at Source",
                  desc: "Own integrated fabric platform producing 3M+ meters monthly ensuring consistency, speed, and cost control."
                },
                {
                  title: "Scalable Manufacturing Network",
                  desc: "6 owned units across 3 countries optimized for flexibility, specialization, and volume execution."
                },
                {
                  title: "Global Delivery Capability",
                  desc: "FOB and DDP logistics structured for EU, UK, and USA market access with reliable delivery."
                },
                {
                  title: "Real Market Understanding",
                  desc: "Operating across 16 European markets with direct retail insight into consumer demand and sell-through."
                },
                {
                  title: "Quality Built In",
                  desc: "Right-first-time approach driven by TQM, ISO standards, and full traceability across the supply chain."
                },
                {
                  title: "Design-Led Development",
                  desc: "Turning insight into product through integrated design and market intelligence.",
                  stats: "2 Design Directors · 3 Fashion Designers · 6 Product Developers · 13 Retail & Digital Specialists"
                }
              ].map((item, index) => (
                <div key={index} className="group">
                  <div className="inline-flex items-center gap-2.5 px-4 py-2 border rounded-full  mb-3 transition-all duration-300 border-sky-500/40 bg-sky-500/10">
                    <div className="relative flex items-center justify-center h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500 shadow-[0_0_8px_rgba(14,165,233,0.5)]"></span>
                    </div>
                    <h3 className="text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] leading-none">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-slate-300 text-sm md:text-base leading-snug opacity-90">
                    {item.desc}
                  </p>
                  {item.stats && (
                    <div className="mt-3 py-2 px-4 bg-white/5 border-l-2 border-sky-500 rounded-r-lg">
                      <p className="text-xs md:text-sm text-sky-400 font-medium tracking-wide">
                        {item.stats}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10 mt-8">
              <strong className="text-lg md:text-xl text-white/90 leading-tight">
                One platform. Total control. From concept to customer.
              </strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
