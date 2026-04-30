"use client"

import { useEffect, useState } from "react"
import { Landmark, Globe, Factory } from "lucide-react"
import { EuIcon } from "@/components/eu-icon"
import { SpoolIcon } from "@/components/spool-icon"

const stats = [
  {
    icon: Landmark,
    title: "HSBC",
    subtitle: "Backed Trade Finance",
    desc: "Through our Matrix Platform entity in Hong Kong we offer flexible payment terms and secure global transactions.",
    iconColor: "text-rose-400",
    bgColor: "bg-rose-500/20"
  },
  {
    icon: EuIcon,
    title: "EU Based",
    subtitle: "Import and Invoicing",
    desc: "Matrix Design d.o.o. Slovenia enabling direct EU imports local EUR invoicing and simplified compliance.",
    iconColor: "text-blue-400",
    bgColor: "bg-blue-500/20"
  },
  {
    icon: Globe,
    title: "Flexible Shipping",
    subtitle: "",
    desc: "FOB at origin or full DDP delivery across EU UK and USA built around your needs.",
    iconColor: "text-emerald-400",
    bgColor: "bg-emerald-500/20"
  },
  {
    icon: Factory,
    title: "Owned",
    subtitle: "Manufacturing Platform",
    desc: "6+ owned units across 3 countries with full control over quality capacity and delivery.",
    iconColor: "text-amber-400",
    bgColor: "bg-amber-500/20"
  },
  {
    icon: SpoolIcon,
    title: "Own Integrated",
    subtitle: "Fabric Platform",
    desc: "Over 3 million meters monthly with full control from R&D to finishing ensuring consistent quality and faster development.",
    iconColor: "text-purple-400",
    bgColor: "bg-purple-500/20"
  }
];

export function WhoWeAreStatsCardsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="w-full bg-[#090e17] py-8 lg:py-12 border-b border-[#4cb5e4]/10">
      <div className="w-full overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4 md:pb-0">
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-5 gap-3 xl:gap-4 px-4 lg:px-6 xl:px-12 md:container md:mx-auto w-max md:w-auto">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`w-[300px] sm:w-[340px] md:w-auto min-h-[260px] bg-[#0b121e]/90 backdrop-blur-md border border-[#4cb5e4]/30 rounded-xl p-2 lg:p-2 transition-all duration-1000 flex-shrink-0 snap-start flex flex-col ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${200 + (i * 100)}ms` }}
            >
              <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center mb-6 ${stat.bgColor}`}>
                <stat.icon className={`w-6 h-6 lg:w-7 lg:h-7 ${stat.iconColor}`} />
              </div>

              <h3 className="text-white font-bold text-base lg:text-lg leading-tight min-h-[48px] flex flex-col justify-end">
                <span>{stat.title}</span>
                {stat.subtitle && <span>{stat.subtitle}</span>}
              </h3>

              <div className="w-6 h-1 bg-[#4cb5e4] mt-4 mb-4 rounded-full flex-shrink-0" />

              <p className="text-slate-300 text-xs lg:text-sm leading-relaxed flex-grow">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
