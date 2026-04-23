import Image from "next/image"

const leftNodes = [
  {
    id: "slovenia",
    title: "Matrix Design d.o.o.",
    location: "Slovenia",
    desc: "EU legal entity. EORI registration, EU VAT, logistics coordination, sample handling.",
    color: "#b59410", // Yellow
  },
  {
    id: "hongkong",
    title: "Matrix Platform Limited",
    location: "Hong Kong",
    desc: "Trade finance, HSBC credit facility, LC operations, parent entity for all factory relationships",
    color: "#0ea5e9", // Light Blue
  },
  {
    id: "china",
    title: "Zhejiang Monalisa Textile",
    location: "Shaoxing, China",
    desc: "30% owned. 3 million metres/month fabric capacity. Polyester, viscose, blended, knit fabrics.",
    color: "#a855f7", // Purple
  },
  {
    id: "srilanka",
    title: "Sri Lanka Operations",
    location: "Colombo",
    desc: "Technical lingerie and polyamide products. BOI approved, amanté brand.",
    color: "#f97316", // Orange
  }
];

const rightNodes = [
  {
    id: "bd1",
    title: "Matrix Apparels Ltd",
    location: "Dhaka, Bangladesh",
    desc: "Built from scratch. Design centre, product development, multi-product flexibility.",
    color: "#a3e635", // Lime
  },
  {
    id: "bd2",
    title: "IFS Texwear Ltd",
    location: "Dhaka, Bangladesh",
    desc: "80 sewing lines, 20 tons/day output. The volume engine.",
    color: "#10b981", // Emerald
  },
  {
    id: "bd3",
    title: "MB Knit Fashion Ltd",
    location: "Dhaka, Bangladesh",
    desc: "Est. 1992, 1.4 million pcs/month (peak 2.1M). LPP Rated A.",
    color: "#15803d", // Green
  },
  {
    id: "bd4",
    title: "Westknit",
    location: "Bangladesh",
    desc: "Knit specialist. Partner factory, same family ownership as Lithe and IFS.",
    color: "#2dd4bf", // Teal
  }
];

const allNodes = [...leftNodes, ...rightNodes];

export function GlobalNetworkSection() {
  return (
    <section className="bg-[#1a1c1e] text-white relative overflow-hidden min-h-screen py-16 lg:py-24">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight text-sky-400 uppercase">
            One Integrated Group
          </h2>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto">
            Our Infrastructure Was Built To Solve The Complexity Of Modern Apparel Sourcing
          </p>
        </div>

        {/* Mobile View (< lg) */}
        <div className="lg:hidden">
          {/* Mobile Map */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] mb-8 opacity-60 pointer-events-none flex justify-center">
            <Image
              src="/images/world-map.png"
              alt="World Map"
              fill
              sizes="(max-width: 1024px) 100vw, 0vw"
              className="object-contain"
            />
            {/* We could add generic pins for mobile here if needed, but keeping it clean works best */}
          </div>

          {/* Mobile Horizontal Scrolling Cards */}
          <div className="flex flex-row overflow-x-auto snap-x snap-mandatory gap-4 pb-6 scrollbar-hide -mx-4 px-4 sm:-mx-6 sm:px-6">
            {allNodes.map((node) => (
              <div
                key={node.id}
                className="relative flex-shrink-0 w-[85vw] max-w-[340px] snap-center"
              >
                <div
                  className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border-2 h-full flex flex-col transition-all duration-300"
                  style={{ borderColor: node.color }}
                >
                  <h3 className="text-lg font-bold mb-1" style={{ color: node.color }}>{node.title}</h3>
                  <p className="text-sm font-bold text-white mb-3">{node.location}</p>
                  <p className="text-sm text-slate-300 leading-relaxed">{node.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop View (>= lg) */}
        <div className="hidden lg:block relative w-full aspect-[1200/850] mx-auto mt-10">
          {/* Map Background */}
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
            <img 
              alt="World Map Silhouette" 
              className="w-full h-auto object-contain" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwbZPaoZQbMyqHNyGuCMOMhHJsawb6979ZEE8MwQTRIgI1OFzGElghBG9S-Mkfh_jJigbtkN3riNOu3vwNAFi_mz6krXIELJA7bmm_ZKXF929ClbOyCx0gEc79d1t9W57HqnJP1wdZR0Vx6u__NVKZGgiJupf7j4NtNrJzTh6Hiv5bpwQO0vblb0KpDTAWsRdMo6QvSU2QPwmNr7ecF1Zbxs6AKZZ7aZ82qlw6NRWperCkj13Ru0qI7sFZlntYZX7rcTJ7_UgwxTgS"
            />
          </div>

          {/* Animated SVG Connections */}
          <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 1200 850">
            <style>
              {`
                .network-line {
                  stroke-dasharray: 6;
                  animation: dash 30s linear infinite;
                  stroke-opacity: 0.8;
                }
                @keyframes dash {
                  to { stroke-dashoffset: 1000; }
                }
              `}
            </style>
            
            {/* Left Connectors */}
            <path className="network-line" d="M 340 100 L 515 100 L 515 450" fill="transparent" stroke="#b59410" strokeWidth="2.5"></path>
            <path className="network-line" d="M 340 310 L 415 310 L 415 480" fill="transparent" stroke="#0ea5e9" strokeWidth="2.5"></path>
            <path className="network-line" d="M 340 520 L 490 520 L 490 515" fill="transparent" stroke="#a855f7" strokeWidth="2.5"></path>
            <path className="network-line" d="M 340 730 L 560 730 L 560 540" fill="transparent" stroke="#f97316" strokeWidth="2.5"></path>
            
            {/* Right Connectors */}
            <path className="network-line" d="M 860 100 L 710 100 L 710 495" fill="transparent" stroke="#a3e635" strokeWidth="2.5"></path>
            <path className="network-line" d="M 860 310 L 730 310 L 730 515" fill="transparent" stroke="#10b981" strokeWidth="2.5"></path>
            <path className="network-line" d="M 860 520 L 750 520 L 750 530" fill="transparent" stroke="#15803d" strokeWidth="2.5"></path>
            <path className="network-line" d="M 860 730 L 780 730 L 780 545" fill="transparent" stroke="#2dd4bf" strokeWidth="2.5"></path>
            
            {/* Ping Dots */}
            <circle cx="515" cy="450" fill="#b59410" r="8"></circle>
            <circle cx="415" cy="480" fill="#0ea5e9" r="8"></circle>
            <circle cx="490" cy="515" fill="#a855f7" r="8"></circle>
            <circle cx="560" cy="540" fill="#f97316" r="8"></circle>
            <circle cx="710" cy="495" fill="#a3e635" r="8"></circle>
            <circle cx="730" cy="515" fill="#10b981" r="8"></circle>
            <circle cx="750" cy="530" fill="#15803d" r="8"></circle>
            <circle cx="780" cy="545" fill="#2dd4bf" r="8"></circle>

            {/* Pulsing effects on dots */}
            <circle cx="515" cy="450" fill="#b59410" r="16" className="animate-ping opacity-30"></circle>
            <circle cx="415" cy="480" fill="#0ea5e9" r="16" className="animate-ping opacity-30" style={{ animationDelay: '0.2s' }}></circle>
            <circle cx="490" cy="515" fill="#a855f7" r="16" className="animate-ping opacity-30" style={{ animationDelay: '0.4s' }}></circle>
            <circle cx="560" cy="540" fill="#f97316" r="16" className="animate-ping opacity-30" style={{ animationDelay: '0.6s' }}></circle>
            <circle cx="710" cy="495" fill="#a3e635" r="16" className="animate-ping opacity-30" style={{ animationDelay: '0.8s' }}></circle>
            <circle cx="730" cy="515" fill="#10b981" r="16" className="animate-ping opacity-30" style={{ animationDelay: '1.0s' }}></circle>
            <circle cx="750" cy="530" fill="#15803d" r="16" className="animate-ping opacity-30" style={{ animationDelay: '1.2s' }}></circle>
            <circle cx="780" cy="545" fill="#2dd4bf" r="16" className="animate-ping opacity-30" style={{ animationDelay: '1.4s' }}></circle>
          </svg>

          {/* Cards Layout */}
          <div className="relative z-20 grid grid-cols-2 gap-x-[520px] h-full pointer-events-none">
            {/* Left Column */}
            <div className="space-y-[4.7rem] pt-3 flex flex-col items-end">
              {leftNodes.map((node) => (
                <div key={node.id} className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border-2 w-[340px] relative pointer-events-auto transition-transform hover:-translate-y-1 hover:shadow-lg" style={{ borderColor: node.color }}>
                  <h3 className="text-lg font-bold mb-0.5" style={{ color: node.color }}>{node.title}</h3>
                  <p className="text-sm font-bold text-white mb-3">{node.location}</p>
                  <p className="text-xs text-slate-300 leading-relaxed">{node.desc}</p>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1.5 w-3 h-3 rounded-full" style={{ backgroundColor: node.color }}></div>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-[4.7rem] pt-3 flex flex-col items-start">
              {rightNodes.map((node) => (
                <div key={node.id} className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border-2 w-[340px] relative pointer-events-auto transition-transform hover:-translate-y-1 hover:shadow-lg" style={{ borderColor: node.color }}>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1.5 w-3 h-3 rounded-full" style={{ backgroundColor: node.color }}></div>
                  <h3 className="text-lg font-bold mb-0.5" style={{ color: node.color }}>{node.title}</h3>
                  <p className="text-sm font-bold text-white mb-3">{node.location}</p>
                  <p className="text-xs text-slate-300 leading-relaxed">{node.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
