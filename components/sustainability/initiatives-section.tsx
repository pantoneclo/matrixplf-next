"use client"

import { Leaf, Droplet, Recycle, FlaskConical, Bot, Droplets } from "lucide-react"

const initiatives = [
  {
    id: "fabrics",
    title: "Fabrics",
    align: "left" as const,
    image: "/assets/sustainability/1.png",
    paragraphs: [
      {
        text: "We develop and source fabrics using sustainable fibres designed to reduce environmental impact while maintaining performance and quality. Our approach prioritizes responsible materials, low-impact dyeing processes, and safer chemical usage — ensuring better outcomes for both people and the environment.",
        icon: <Leaf className="w-5 h-5 text-white" />,
        iconBg: "bg-[#3E8E41]"
      },
      {
        text: "We actively invest in materials such as organic cotton, linen, and other resource-efficient fibres that require less water and support more sustainable production methods.",
        icon: <Droplets className="w-5 h-5 text-white" />,
        iconBg: "bg-[#1ea1d7]"
      }
    ]
  },
  {
    id: "caustic",
    title: "CAUSTIC RECOVERY PLANT",
    align: "right" as const,
    image: "/assets/sustainability/2.png",
    paragraphs: [
      {
        text: "We operate a caustic recovery system that enables the recycling and reuse of sodium hydroxide (NaOH) within our production processes, significantly reducing chemical consumption and environmental impact.",
        icon: <FlaskConical className="w-5 h-5 text-white" />,
        iconBg: "bg-[#1ea1d7]"
      },
      {
        text: "By recovering and reprocessing caustic soda, we improve resource efficiency, minimize waste, and ensure safer, more sustainable operations across our facilities.",
        icon: <Recycle className="w-5 h-5 text-white" />,
        iconBg: "bg-[#3E8E41]"
      }
    ]
  },
  {
    id: "machines",
    title: "Machines",
    align: "left" as const,
    image: "/assets/sustainability/3.png",
    paragraphs: [
      {
        text: "We continuously invest in advanced technologies to improve both environmental and workplace safety standards. Our transition to laser-based dry processing replaces conventional methods such as PP spray, significantly reducing chemical usage and exposure.",
        icon: <Bot className="w-5 h-5 text-white" />,
        iconBg: "bg-[#1ea1d7]"
      },
      {
        text: "Traditional PP spray processes can release hazardous micro-particles that impact both worker health and the surrounding environment. By adopting cleaner technologies, we minimize risk, enhance operational safety, and support more responsible manufacturing practices.",
        icon: null,
        iconBg: ""
      }
    ]
  },
  {
    id: "water",
    title: "WATER TREATMENT PLANT",
    align: "right" as const,
    image: "/assets/sustainability/4.png",
    paragraphs: [
      {
        text: "We operate a fully integrated water treatment system, ensuring that all water used in our textile and garment processing is properly treated before reuse or discharge.",
        icon: <Droplet className="w-5 h-5 text-white" />,
        iconBg: "bg-[#1ea1d7]"
      },
      {
        text: "Our process removes impurities and optimizes water quality, allowing safe reuse across operations while reducing environmental impact and supporting responsible manufacturing practices.",
        icon: <Recycle className="w-5 h-5 text-white" />,
        iconBg: "bg-[#3E8E41]"
      }
    ]
  }
]

export function SustainabilityInitiativesSection() {
  return (
    <section className="w-full bg-white flex flex-col font-sans">

      <style dangerouslySetInnerHTML={{
        __html: `
        @media (min-width: 1024px) {
          .slant-right { clip-path: polygon(0 0, 100% 0, 100% 100%, 15% 100%); }
          .slant-left { clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%); }
        }
      `}} />

      {initiatives.map((item) => {
        const isLeftAlign = item.align === 'left'

        return (
          <div key={item.id} className="relative w-full min-h-[450px] my-5 bg-[#2B3136] border-b-[6px] border-white flex items-center overflow-hidden">

            {/* Image Container for Mobile (Top) and Desktop (Side) */}
            <div
              className={`absolute top-0 w-full h-[250px] lg:h-full lg:bottom-0 lg:w-[55%] z-10 ${isLeftAlign ? 'lg:right-0 slant-right' : 'lg:left-0 slant-left'
                }`}
            >
              {/* Add a dimming overlay so text handles well if it ever overlaps, though the split avoids it */}
              <div className="absolute inset-0 bg-black/10 mix-blend-overlay z-10" />
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Container */}
            <div className={`container mx-auto px-6 lg:px-12 relative z-20 flex mt-[250px] lg:mt-0 py-12 lg:py-20 ${isLeftAlign ? 'justify-start' : 'justify-end'
              }`}>

              <div className={`lg:w-[45%] text-white flex flex-col ${isLeftAlign ? 'lg:pr-16 text-left items-start' : 'lg:pl-16 text-right items-end'
                }`}>

                <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1ea1d7] mb-8 break-words ${isLeftAlign ? '' : 'uppercase text-right'}`}>
                  {isLeftAlign ? item.title : item.title.split(' ').map((word, i) => <span key={i} className="block">{word}</span>)}
                </h2>

                <div className="flex flex-col gap-8 w-full">
                  {item.paragraphs.map((p, pIdx) => (
                    <div key={pIdx} className={`flex items-start gap-5 w-full ${isLeftAlign ? 'flex-row' : 'flex-row-reverse'}`}>

                      {p.icon && (
                        <div className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 shadow-lg ${p.iconBg}`}>
                          {p.icon}
                        </div>
                      )}

                      {!p.icon && !isLeftAlign && <div className="w-11 h-11 shrink-0" />} {/* Spacer for alignment if no icon on right */}
                      {!p.icon && isLeftAlign && <div className="w-11 h-11 shrink-0" />}

                      <p className={`text-[13px] lg:text-[14px] leading-relaxed font-semibold text-slate-300 ${isLeftAlign ? 'text-left' : 'text-right'}`}>
                        {p.text}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        )
      })}
    </section>
  )
}
