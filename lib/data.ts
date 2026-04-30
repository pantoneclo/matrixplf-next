import { Truck, Shield, Lightbulb, Palette, Award, Box, Landmark } from "lucide-react"
import { EuIcon } from "@/components/eu-icon"

export interface Category {
  id: number;
  slug: string;
  name: string;
  bgColor: string;
  images: string[];
  subtitle: string;
  description: string;
  featured_cards: { title: string; subtitle: string; body: string }[];
  link: string;
  bannerImage: string;
}

export const categories: Category[] = [
  {
    id: 1,
    slug: "loungewear",
    name: "LOUNGEWEAR",
    bgColor: "bg-slate-600",
    link: "/product/loungewear",
    subtitle: "ENGINEERED COMFORT",
    description: "We engineer high-recovery fiber blends and anatomical silhouettes designed for lasting comfort and structural longevity. We control every stage of development for bulk consistency.",
    featured_cards: [
      {
        title: "Comfort",
        subtitle: "Driven R&D",
        body: "We develop soft-structure fabrics that balance a premium hand-feel with daily wear durability.",
      },
      {
        title: "Adaptive",
        subtitle: "Stretch",
        body: "We utilize high-recovery materials that allow total movement while maintaining garment shape.",
      },
      {
        title: "Refined",
        subtitle: "Silhouettes",
        body: "We design balanced, versatile fits suitable for both indoor relaxation and high-end casual use.",
      },
      {
        title: "Stability",
        subtitle: "At Scale",
        body: "We ensure superior fabric stability to maintain color and performance through repeated washing.",
      }
    ],

    images: [
      "/assets/categories/lounge-nightwear/Lounge-&-Nightwear-2.jpeg",
      "/assets/categories/lounge-nightwear/Lounge-&-Nightwear-1.jpeg",
      "/assets/categories/lounge-nightwear/Lounge-&-Nightwear-3.jpeg",
      "/assets/categories/lounge-nightwear/Lounge-&-Nightwear-4.jpeg",
      "/assets/categories/lounge-nightwear/Lounge-&-Nightwear-5.jpg",
      "/assets/categories/lounge-nightwear/Lounge-&-Nightwear-6.jpg",
      "/assets/categories/lounge-nightwear/Lounge-&-Nightwear-7.jpeg",
      "/assets/categories/lounge-nightwear/Lounge-&-Nightwear-8.jpeg",
      "/assets/categories/lounge-nightwear/Lounge-&-Nightwear-9.jpeg",
      "/assets/categories/lounge-nightwear/Lounge-&-Nightwear-10.jpeg"
    ],
    bannerImage: "/assets/categories/banner/lounge.jpg",
  },
  {
    id: 2,
    slug: "nightwear",
    name: "NIGHTWEAR",
    bgColor: "bg-red-600",
    link: "/product/nightwear",
    subtitle: "TACTILE SCIENCE",
    description: "We source low-micron fibers and engineer breathable knit structures to optimize thermal regulation and restorative comfort. We ensure fabric stability for consistent bulk results.",
    featured_cards: [
      {
        title: "Soft",
        subtitle: "Touch Mastery",
        body: "We source ultra-smooth, skin-friendly fibers designed specifically for sensitive, all-night comfort.",
      },
      {
        title: "Thermal",
        subtitle: "Balance",
        body: "We select high-breathability materials to naturally regulate body temperature during rest cycles.",
      },
      {
        title: "Relaxed",
        subtitle: "Silhouettes",
        body: "We design anatomical silhouettes that allow for natural movement without restriction or binding.",
      },
      {
        title: "Gentle",
        subtitle: "Construction",
        body: "We apply low-friction seam technology to eliminate skin irritation during extended wear.",
      }
    ],
    images: [
      "/assets/categories/nightwear/Lounge-&-Nightwear-1.jpeg",
      "/assets/categories/nightwear/Lounge-&-Nightwear-2.jpg",
      "/assets/categories/nightwear/Lounge-&-Nightwear-3.jpeg",
      "/assets/categories/nightwear/Lounge-&-Nightwear-4.jpg",
      "/assets/categories/nightwear/Lounge-&-Nightwear-5.jpg",
      "/assets/categories/nightwear/Lounge-&-Nightwear-6.jpg",
      "/assets/categories/nightwear/Lounge-&-Nightwear-7.jpg",
      "/assets/categories/nightwear/Lounge-&-Nightwear-8.jpeg"
    ],
    bannerImage: "/assets/categories/banner/nightwear.jpg",
  },
  {
    id: 3,
    slug: "innerwear",
    name: "INNERWEAR & ESSENTIALS",
    bgColor: "bg-slate-500",
    link: "/product/innerwear",
    subtitle: "PRECISION ENGINEERING",
    description: "We utilize fine-gauge technology and seamless construction to create lightweight essentials with high elastic recovery. We control every stitch for 100% fit accuracy.",
    featured_cards: [
      {
        title: "Next-to-Skin",
        subtitle: "Engineering",
        body: "We source ultra-soft, hypoallergenic fabrics engineered for direct skin contact and all-day use.",
      },
      {
        title: "Seamless",
        subtitle: "Innovation",
        body: "We apply advanced bonding and flat-stitch construction to reduce friction and pressure points.",
      },
      {
        title: "Shape",
        subtitle: "Retention",
        body: "We engineer precision elastic recovery systems to maintain fit consistency over hundreds of wear cycles.",
      },
      {
        title: "Hygiene",
        subtitle: "Intelligence",
        body: "We integrate breathable, moisture-control textiles to support freshness and skin health.",
      }
    ],
    images: [
      "/assets/categories/inner-essentials/Innerwear-&-Essentials-1.jpg",
      "/assets/categories/inner-essentials/Innerwear-&-Essentials-2.jpg",
      "/assets/categories/inner-essentials/Innerwear-&-Essentials-3.jpg",
      "/assets/categories/inner-essentials/Innerwear-&-Essentials-4.jpg",
      "/assets/categories/inner-essentials/Innerwear-&-Essentials-5.jpg",
      "/assets/categories/inner-essentials/Innerwear-&-Essentials-6.jpeg",
      "/assets/categories/inner-essentials/Innerwear-&-Essentials-7.jpeg",
      "/assets/categories/inner-essentials/Innerwear-&-Essentials-8.jpeg",
      "/assets/categories/inner-essentials/Innerwear-&-Essentials-9.jpeg",
      "/assets/categories/inner-essentials/Innerwear-&-Essentials-10.jpeg",


    ],
    bannerImage: "/assets/categories/banner/innerwear.jpg",
  },
  {
    id: 4,
    slug: "activewear",
    name: "ACTIVEWEAR & SPORTSWEAR",
    bgColor: "bg-sky-700",
    link: "/product/activewear",
    subtitle: "PERFORMANCE DRIVEN",
    description: "Technical fabrics and ergonomic designs that move with you. Engineered for peak athletic performance.",
    featured_cards: [
      {
        title: "Performance",
        subtitle: "Engineered",
        body: "We engineer moisture-wicking textiles and multi-way stretch systems built for high-intensity movement.",
      },
      {
        title: "Technical",
        subtitle: "Fit Systems",
        body: "We design ergonomic patterns and targeted compression zones to maximize stability and mobility.",
      },
      {
        title: "Breathable",
        subtitle: "Structures",
        body: "We develop specialized ventilated constructions to optimize airflow and active thermal regulation.",
      },
      {
        title: "Durable",
        subtitle: "Reinforcement",
        body: "We reinforce high-stress seams and source abrasion-resistant fabrics for long-term athletic performance.",
      }
    ],
    images: [
      "/assets/categories/activewear/Sports-2.jpg",
      "/assets/categories/activewear/Sports-3.jpg",
      "/assets/categories/activewear/Sports-4.jpg",
      "/assets/categories/activewear/Sports-5.jpg",
      "/assets/categories/activewear/Sports-6.jpg",
      "/assets/categories/activewear/Sports-7.jpg",

    ],
    bannerImage: "/assets/categories/banner/activewear.png",
  },
  {
    id: 5,
    slug: "sweatshirt",
    name: "SWEATSHIRT",
    bgColor: "bg-amber-700",
    link: "/product/sweatshirt",
    subtitle: "STRUCTURED DURABILITY",
    description: "We engineer dense loopback textiles and reinforced seams designed for thermal retention and silhouette stability. We manage high-volume production with total shade uniformity.",
    featured_cards: [
      {
        title: "Structured",
        subtitle: "Comfort",
        body: "We develop mid-to-heavyweight fabrics that balance core warmth with a clean, professional aesthetic.",
      },
      {
        title: "Thermal",
        subtitle: "Retention",
        body: "We engineer high-density fleece and brushed interiors to trap heat efficiently without adding bulk.",
      },
      {
        title: "Shape",
        subtitle: "Stability",
        body: "We utilize heavy-duty rib and recovery systems to ensure structure is retained after repeated wear.",
      },
      {
        title: "Rugged",
        subtitle: "Build",
        body: "We reinforce garment construction to support long-term performance in both indoor and outdoor use.",
      }
    ],
    images: [
      "/assets/categories/sweat/sweat-1.jpeg",
      "/assets/categories/sweat/sweat-2.jpeg",
      "/assets/categories/sweat/sweat-3.jpeg",
      "/assets/categories/sweat/sweat-4.jpeg",
      "/assets/categories/sweat/sweat-5.jpeg",
      "/assets/categories/sweat/sweat-6.jpeg",
      "/assets/categories/sweat/sweat-7.jpeg",
      "/assets/categories/sweat/sweat-8.jpeg",
    ],
    bannerImage: "/assets/categories/banner/sweatwear.jpg",
  },
  {
    id: 6,
    slug: "denim",
    name: "DENIM",
    bgColor: "bg-blue-800",
    link: "/product/denim",
    subtitle: "VERTICAL INTEGRATION",
    description: "We control the complete denim lifecycle from indigo-dyeing to automated laser finishing. We deliver high-volume programs with zero variance in wash, shade, or fit integrity.",
    featured_cards: [
      {
        title: "Industrial",
        subtitle: "Strength",
        body: "We source high-density denim constructions designed for rugged longevity and authentic character.",
      },
      {
        title: "Wash",
        subtitle: "Precision",
        body: "We control in-house wash processes to ensure total color consistency across global bulk production.",
      },
      {
        title: "Engineered",
        subtitle: "Integrity",
        body: "We develop precise technical patterns to maintain shape and prevent bagging in key stress areas.",
      },
      {
        title: "Reinforced",
        subtitle: "Hardware",
        body: "We apply industrial-grade stitching and premium trims to enhance durability in high-wear zones.",
      }
    ],
    images: [
      "/assets/categories/denim/Denim-1.jpg",
      "/assets/categories/denim/Denim-2.jpg",
      "/assets/categories/denim/Denim-3.jpg",
      "/assets/categories/denim/Denim-4.jpg",
      "/assets/categories/denim/Denim-5.jpg",

    ],
    bannerImage: "/assets/categories/banner/denim.jpg",
  },
  {
    id: 7,
    slug: "swimwear",
    name: "SWIMWEAR",
    bgColor: "bg-cyan-600",
    link: "/product/swimwear",
    subtitle: "TECHNICAL RESILIENCE",
    description: "We source polymer-coated yarns and high-modulus fabrics to resist chlorine degradation and maintain hydrodynamic fit. We verify performance standards for global compliance.",
    featured_cards: [
      {
        title: "Advanced",
        subtitle: "Quick-Dry",
        body: "We utilize hydrophobic fabric systems designed for rapid evaporation and comfort in and out of water.",
      },
      {
        title: "Chemical",
        subtitle: "Resilience",
        body: "We select specialized, high-performance yarns to improve durability against chlorine and salt exposure.",
      },
      {
        title: "Elastic",
        subtitle: "Recovery",
        body: "We engineer high-modulus materials to maintain tension and fit integrity when wet.",
      },
      {
        title: "Secure",
        subtitle: "Stability",
        body: "We design supportive, high-motion cuts that ensure garment stability during active aquatic use.",
      }
    ],
    images: [
      "/assets/categories/swimwear/swimwear-1.jpg",
      "/assets/categories/swimwear/swimwear-2.jpg",
      "/assets/categories/swimwear/swimwear-3.jpg",
      "/assets/categories/swimwear/swimwear-4.jpg",
      "/assets/categories/swimwear/swimwear-5.jpeg",
      "/assets/categories/swimwear/swimwear-6.jpeg"
    ],
    bannerImage: "/assets/categories/banner/swimmer.jpg",
  }
];


export const upsc = [
  {
    icon: Truck,
    title: "Seamless Logistics",
    subtitle: "End-to-end delivery. Zero complexity.",
    description: "Full door-to-door delivery across EU, UK, and USA with complete DDP support. We manage duties, clearance, and fulfillment — ensuring your products arrive ready for retail.",
    gradient: "from-blue-500 to-cyan-500",
    image: "/assets/upsc/Seamless-Logistics.jpg",
    link: "/what-we-do#seamless-logistics",
  },
  {
    icon: Shield,
    title: "Audit Ready",
    subtitle: "Compliance built into every step.",
    description: "Fully aligned with global standards from day one. Ethical sourcing, certified production, and audit-ready systems ensure reliability and risk-free sourcing.",
    gradient: "from-sky-500 to-cyan-500",
    image: "/assets/upsc/audit-ready.jpg",
    link: "/sustainability#certifications",
  },
  {
    icon: Award,
    title: "Certified Excellence",
    subtitle: "Globally recognized standards.",
    description: "15+ international certifications covering quality, sustainability, and ethical manufacturing — ensuring full compliance for global retail partners.",
    gradient: "from-violet-500 to-purple-500",
    image: "/assets/upsc/certified-ex.jpg",
    link: "/sustainability#certifications",
  },
  {
    icon: Landmark,
    title: "HSBC Trade Finance Facility",
    subtitle: "Strong Financial Partnership",
    description: "Backed by HSBC in Hong Kong, through our entity Matrix Platform, we offer flexible payment terms, structured credit facilities, and secure transactions to support your business growth.",
    gradient: "from-rose-500 to-pink-500",
    image: "/assets/upsc/hsbc.png",
    link: "/what-we-do#hsbc-trade-finance-facility",
  },
  {
    icon: EuIcon,
    title: "EU-Based Import & Invoicing",
    subtitle: "Direct Eu Market Access",
    description: "Through our registered entity Matrix Design d.o.o. in Slovenia, we enable direct EU imports. local invoicing in EUR and Simplified compliance for European buyers.",
    gradient: "from-blue-900 to-blue-900",
    image: "/assets/upsc/european-union.png",
    link: "/what-we-do#eu-based-import-&-invoicing",
  },
  {
    icon: Box,
    title: "Flexible MOQ Starting From 500 Pcs.",
    subtitle: "Flexible. Scalable. Reliable.",
    description: "Designed for growing brands backed by fully integrated manufacturing, not outsourced capacity",
    gradient: "from-rose-500 to-pink-500",
    image: "/assets/upsc/moq.png",
    link: "/what-we-do#flexible-moq-starting-from-500-pcs.",
  },

  {
    icon: Lightbulb,
    title: "Brand Owners Mindset",
    subtitle: "We think like your end customer.",
    description: "As active brand operators across European markets, we understand product performance, pricing, and positioning — delivering what truly sells.",
    gradient: "from-amber-500 to-orange-500",
    image: "/assets/upsc/Brand-Owners-Mindset.jpg",
    link: "/what-we-do#brand-owners-mindset",
  },
  {
    icon: Palette,
    title: "Design to Reality",
    subtitle: "From concept to scalable production",
    description: "Our in-house design and development teams transform ideas into market-ready products with precision, speed, and technical expertise.",
    gradient: "from-rose-500 to-pink-500",
    image: "/assets/upsc/design-to-reality.jpg",
    link: "/what-we-do#design-to-reality",
  }
]
