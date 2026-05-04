"use client"

import { useEffect, useState, useRef } from "react"
import { Landmark, Globe, Factory, ArrowRight } from "lucide-react"
import { EuIcon } from "@/components/eu-icon"
import { SpoolIcon } from "@/components/spool-icon"
import Link from "next/link"

const stats = [
  {
    icon: Landmark,
    title: "HSBC",
    subtitle: "Backed Trade Finance",
    desc: "Through our Matrix Platform entity in Hong Kong, we offer flexible payment terms and structured credit facilities, ensuring secure and reliable global transactions.",
    iconColor: "text-rose-400",
    bgColor: "bg-rose-500/20",
    lineColor: "bg-rose-500",
    link: "/what-we-do#hsbc-trade-finance-facility"
  },
  {
    icon: EuIcon,
    title: "EU Based",
    subtitle: "Import and Invoicing",
    desc: "Matrix Design d.o.o. Slovenia enabling direct EU imports local EUR invoicing and simplified compliance.",
    iconColor: "text-sky-500",
    bgColor: "bg-sky-500/20",
    lineColor: "bg-sky-500",
    link: "/what-we-do#eu-based-import-&-invoicing"
  },
  {
    icon: Globe,
    title: "Flexible Shipping",
    subtitle: "",
    desc: "FOB at origin or full DDP delivery across EU UK and USA built around your needs.",
    iconColor: "text-emerald-400",
    bgColor: "bg-emerald-500/20",
    lineColor: "bg-emerald-500",
    link: "/what-we-do#seamless-logistics"
  },
  {
    icon: Factory,
    title: "Owned",
    subtitle: "Manufacturing Platform",
    desc: "6 owned units across 3 countries with full control over quality capacity and delivery.",
    iconColor: "text-amber-400",
    bgColor: "bg-amber-500/20",
    lineColor: "bg-amber-500",
    link: "/#manufacturing-strength"
  },
  {
    icon: SpoolIcon,
    title: "Own Integrated",
    subtitle: "Fabric Platform",
    desc: "Over 3 million meters monthly with full control from R&D to finishing ensuring consistent quality and faster development.",
    iconColor: "text-purple-400",
    bgColor: "bg-purple-500/20",
    lineColor: "bg-purple-500",
    link: "/#our-own-fabric-mill"
  }
];

export function WhoWeAreStatsCardsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleScroll = () => {
    if (!scrollRef.current) return
    const container = scrollRef.current
    const cards = container.querySelectorAll('.snap-start')

    let closestIndex = 0
    let minDistance = Infinity

    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect()
      const containerRect = container.getBoundingClientRect()
      const distance = Math.abs(rect.left - containerRect.left)

      if (distance < minDistance) {
        minDistance = distance
        closestIndex = index
      }
    })

    setActiveIndex(closestIndex)
  }

  const scrollToCard = (index: number) => {
    if (!scrollRef.current) return
    const container = scrollRef.current
    const cards = container.querySelectorAll('.snap-start')
    const targetCard = cards[index] as HTMLElement

    if (targetCard) {
      targetCard.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      })
    }
  }

  return (
    <section className="relative w-full bg-[#0d121b] py-10 lg:py-14 border-t border-white/5 overflow-hidden">
      {/* Top separation line with glow */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-sky-500/20 blur-sm" />

      {/* Background World Map Overlay */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <img
          src="/images/world-map.png"
          alt=""
          className="w-full h-full object-cover filter brightness-125 contrast-125"
        />
      </div>

      {/* Subtle Radial Highlight for differentiation */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.1),transparent_50%)] pointer-events-none" />

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="relative z-10 w-full overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4 md:pb-0"
      >
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-5 gap-3 xl:gap-4 px-4 lg:px-6 xl:px-12 md:container md:mx-auto w-max md:w-auto">
          {stats.map((stat, i) => (
            <Link
              key={i}
              href={stat.link}
              className={`group/card w-[300px] sm:w-[340px] md:w-auto min-h-[260px] bg-[#0b121e]/90 backdrop-blur-md border border-sky-500/30 hover:border-sky-500/60 hover:shadow-[0_0_20px_rgba(14,165,233,0.1)] rounded-xl p-2 lg:p-2 transition-all duration-500 flex-shrink-0 snap-start flex flex-col ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${200 + (i * 100)}ms` }}
            >
              <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center mb-4 transition-transform duration-500 group-hover/card:scale-110 ${stat.bgColor}`}>
                <stat.icon className={`w-6 h-6 lg:w-7 lg:h-7 ${stat.iconColor}`} />
              </div>

              <h3 className="text-white font-bold text-base lg:text-lg leading-tight min-h-[48px] flex flex-col justify-end group-hover/card:text-sky-400 transition-colors">
                <span>{stat.title}</span>
                {stat.subtitle && <span>{stat.subtitle}</span>}
              </h3>

              <div className={`w-8 h-1 ${stat.lineColor} mt-4 mb-4 rounded-full flex-shrink-0 transition-all duration-500 group-hover/card:w-12`} />

              <p className="text-slate-300 text-xs lg:text-sm leading-relaxed mb-4">{stat.desc}</p>

              <div className="mt-auto">
                <div
                  className="inline-flex items-center gap-2 text-sky-400 group-hover/card:text-sky-300 text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-3 h-3 transition-transform group-hover/card:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Pagination Bullets - Mobile Only */}
      <div className="flex md:hidden justify-center items-center gap-2 mt-4">
        {stats.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToCard(i)}
            className={`transition-all duration-300 rounded-full ${activeIndex === i
              ? "w-6 h-1.5 bg-sky-500 shadow-[0_0_8px_rgba(14,165,233,0.5)]"
              : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
              }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
