import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/Reveal"
import factoriesData from "@/lib/factories.json"
import { MapPin, Users, Package, LayoutGrid, ArrowRight } from "lucide-react"

// Build a typed list from the JSON
interface FactoryEntry {
    slug: string
    namePart1: string
    namePart2: string
    location: string
    image: string
    stats: { workers: string; capacity: string; lines: string; area: string }
    categories: string[]
    description: string
}

const factories: FactoryEntry[] = Object.entries(
    factoriesData as Record<string, any>
).map(([slug, f]) => ({
    slug,
    namePart1: f.namePart1,
    namePart2: f.namePart2,
    location: f.location,
    image:
        f.bannerImages?.find((b: any) => b.status === "active")?.image ??
        f.bannerImages?.[0]?.image ??
        "",
    stats: f.stats,
    categories: f.categories ?? [],
    description: f.description?.[0] ?? "",
}))

// Group by country
const byCountry: Record<string, FactoryEntry[]> = {}
factories.forEach((f) => {
    const country = f.location.split(",").at(-1)?.trim() ?? "Other"
    if (!byCountry[country]) byCountry[country] = []
    byCountry[country].push(f)
})

export default function FactoriesPage() {
    return (
        <main className="min-h-screen bg-[#0d1420]">
            <Header />

            {/* ── Hero ── */}
            <section className="relative pt-40 pb-24 overflow-hidden">
                {/* Background glow */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-sky-500/10 rounded-full blur-[120px]" />
                </div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <Reveal>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 rounded-full mb-6 border border-white/10">
                            <div className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-pulse" />
                            <span className="text-sky-500 text-[10px] font-bold uppercase tracking-widest">
                                Manufacturing Network
                            </span>
                        </div>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8 max-w-4xl">
                            Our{" "}
                            <span className="text-sky-500">Factories</span>
                        </h1>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl">
                            Six vertically integrated manufacturing units across Bangladesh and Sri Lanka — each selected for technical capability, compliance standards, and production scale.
                        </p>
                    </Reveal>

                    {/* Summary stats */}
                    <Reveal delay={0.3}>
                        <div className="flex flex-wrap gap-6 mt-12">
                            {[
                                { value: "6", label: "Manufacturing Units" },
                                { value: "3M+", label: "Garments / Month" },
                                { value: "15+", label: "Certifications" },
                                { value: "3", label: "Countries" },
                            ].map((s) => (
                                <div
                                    key={s.label}
                                    className="bg-white/5 border border-white/10 rounded-2xl px-8 py-5 backdrop-blur-sm"
                                >
                                    <p className="text-3xl font-black text-sky-500">{s.value}</p>
                                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">
                                        {s.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ── Factory Cards ── */}
            <section className="pb-32">
                <div className="container mx-auto px-6 lg:px-12">
                    {Object.entries(byCountry).map(([country, list], ci) => (
                        <div key={country} className="mb-20">
                            {/* Country header */}
                            <Reveal delay={ci * 0.1}>
                                <div className="flex items-center gap-4 mb-10">
                                    <MapPin className="w-5 h-5 text-sky-500" />
                                    <h2 className="text-xl font-black text-white uppercase tracking-widest">
                                        {country}
                                    </h2>
                                    <div className="flex-1 h-px bg-white/5" />
                                    <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                                        {list.length} {list.length === 1 ? "Unit" : "Units"}
                                    </span>
                                </div>
                            </Reveal>

                            {/* Cards grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {list.map((factory, i) => (
                                    <Reveal key={factory.slug} delay={0.1 + i * 0.08}>
                                        <Link
                                            href={`/factory/${factory.slug}`}
                                            className="group block bg-white/[0.03] border border-white/8 rounded-2xl overflow-hidden hover:border-sky-500/30 hover:bg-white/[0.06] transition-all duration-500 shadow-xl shadow-black/30"
                                        >
                                            {/* Image */}
                                            <div className="relative h-56 overflow-hidden">
                                                {factory.image ? (
                                                    <Image
                                                        src={factory.image}
                                                        alt={`${factory.namePart1} ${factory.namePart2}`}
                                                        fill
                                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                    />
                                                ) : (
                                                    <div className="absolute inset-0 bg-gradient-to-br from-sky-500/40 to-slate-900" />
                                                )}
                                                {/* Gradient overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1420] via-[#0d1420]/40 to-transparent" />

                                                {/* Location badge */}
                                                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                                                    <MapPin className="w-3 h-3 text-sky-500" />
                                                    <span className="text-white text-[11px] font-semibold">
                                                        {factory.location}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Body */}
                                            <div className="p-6">
                                                {/* Name */}
                                                <h3 className="text-xl font-black text-white leading-tight mb-1 group-hover:text-sky-500 transition-colors">
                                                    {factory.namePart1}{" "}
                                                    <span className="text-sky-500 group-hover:text-white transition-colors">
                                                        {factory.namePart2}
                                                    </span>
                                                </h3>

                                                {/* Description */}
                                                <p className="text-slate-400 text-[13px] leading-relaxed mt-3 line-clamp-2">
                                                    {factory.description}
                                                </p>

                                                {/* Stats row */}
                                                <div className="grid grid-cols-3 gap-3 mt-5 py-4 border-t border-white/5">
                                                    <div className="text-center">
                                                        <div className="flex items-center justify-center gap-1 mb-1">
                                                            <Users className="w-3 h-3 text-sky-500" />
                                                            <span className="text-white font-bold text-sm">
                                                                {factory.stats.workers}
                                                            </span>
                                                        </div>
                                                        <span className="text-slate-500 text-[9px] font-bold uppercase tracking-widest">
                                                            Workers
                                                        </span>
                                                    </div>
                                                    <div className="text-center border-x border-white/5">
                                                        <div className="flex items-center justify-center gap-1 mb-1">
                                                            <Package className="w-3 h-3 text-sky-500" />
                                                            <span className="text-white font-bold text-sm">
                                                                {factory.stats.capacity}
                                                            </span>
                                                        </div>
                                                        <span className="text-slate-500 text-[9px] font-bold uppercase tracking-widest">
                                                            pcs/mo
                                                        </span>
                                                    </div>
                                                    <div className="text-center">
                                                        <div className="flex items-center justify-center gap-1 mb-1">
                                                            <LayoutGrid className="w-3 h-3 text-sky-500" />
                                                            <span className="text-white font-bold text-sm">
                                                                {factory.stats.lines}
                                                            </span>
                                                        </div>
                                                        <span className="text-slate-500 text-[9px] font-bold uppercase tracking-widest">
                                                            Lines
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Categories */}
                                                <div className="flex flex-wrap gap-1.5 mt-4">
                                                    {factory.categories.slice(0, 3).map((cat) => (
                                                        <span
                                                            key={cat}
                                                            className="px-2.5 py-1 bg-sky-500/8 border border-sky-500/20 text-sky-500 text-[10px] font-bold uppercase tracking-widest rounded-full"
                                                        >
                                                            {cat}
                                                        </span>
                                                    ))}
                                                    {factory.categories.length > 3 && (
                                                        <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-slate-400 text-[10px] font-bold rounded-full">
                                                            +{factory.categories.length - 3}
                                                        </span>
                                                    )}
                                                </div>

                                                {/* CTA */}
                                                <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/5">
                                                    <span className="text-sky-500 text-xs font-bold uppercase tracking-widest group-hover:text-sky-500 transition-colors">
                                                        View Factory Profile
                                                    </span>
                                                    <div className="w-8 h-8 rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center group-hover:bg-sky-500 group-hover:border-sky-500 transition-all">
                                                        <ArrowRight className="w-3.5 h-3.5 text-sky-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    )
}
