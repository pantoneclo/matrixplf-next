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
  mobileBannerImage: string;
}

export const categories: Category[] = [
  {
    id: 1,
    slug: "loungewear-nightwear",
    name: "Loungewear & Nightwear",
    bgColor: "bg-slate-600",
    link: "/product/loungewear-nightwear",
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
      "/assets/categories/lounge-nightwear/Lounge-&-Nightwear-1.png",
      "/assets/categories/lounge-nightwear/Lounge-&-Nightwear-5.png",
      "/assets/categories/lounge-nightwear/Lounge-&-Nightwear-8.png",
      "/assets/categories/lounge-nightwear/Lounge-&-Nightwear-9.png",
      "/assets/categories/lounge-nightwear/Lounge-&-Nightwear-10.png",
      "/assets/categories/lounge-nightwear/Lounge-&-Nightwear-11.png",
      "/assets/categories/lounge-nightwear/Lounge-&-Nightwear-13.png",
      "/assets/categories/lounge-nightwear/Lounge-&-Nightwear-14.png",
      "/assets/categories/lounge-nightwear/Lounge-&-Nightwear-15.png"

    ],
    bannerImage: "/assets/categories/banner/nightwear.png",
    mobileBannerImage: "/assets/categories/banner/mobile/nightwear-9X16.jpg"
  },
  {
    id: 2,
    slug: "essentials",
    name: "Essentials",
    bgColor: "bg-red-600",
    link: "/product/essentials",
    subtitle: "TACTILE SCIENCE",
    description: "We source low-micron fibers and engineer breathable knit structures to optimize thermal regulation and restorative comfort. We ensure fabric stability for consistent bulk results.",
    featured_cards: [
      {
        title: "Precision",
        subtitle: "Engineering",
        body: "We utilize fine-gauge technology and seamless construction to create lightweight staples with high elastic recovery.",
      },
      {
        title: "Seamless",
        subtitle: "Innovation",
        body: "We apply advanced bonding and flat-stitch construction to reduce friction and pressure points in high-volume basics.",
      },
      {
        title: "Shape",
        subtitle: "Retention",
        body: "We engineer precision elastic recovery systems to maintain fit consistency over hundreds of wear cycles.",
      },
      {
        title: "Structural",
        subtitle: "Longevity",
        body: "We control every stitch to ensure 100% fit accuracy and durability for essential core collections.",
      }
    ],
    images: [
      "/assets/categories/inner-essentials/Essentials-5.png",
      "/assets/categories/inner-essentials/Essentials-1.png",
      "/assets/categories/inner-essentials/Essentials-2.jpg",
      "/assets/categories/inner-essentials/Essentials-3.png",
      "/assets/categories/inner-essentials/Essentials-4.jpeg",
      "/assets/categories/inner-essentials/Essentials-8.jpg",
      "/assets/categories/inner-essentials/Essentials-9.jpeg",
      "/assets/categories/inner-essentials/Essentials-10.jpg",
      "/assets/categories/inner-essentials/Essentials-13.jpg"
    ],
    bannerImage: "/assets/categories/banner/Essentials.png",
    mobileBannerImage: "/assets/categories/banner/mobile/Essentials-Mobile.jpg"
  },
  {
    id: 3,
    slug: "lingerie-intimates",
    name: "Lingerie & Intimates",
    bgColor: "bg-slate-500",
    link: "/product/lingerie-intimates",
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
      "/assets/categories/lingerie/Innerwear-&-Essentials-1.jpg",
      "/assets/categories/lingerie/Innerwear-&-Essentials-2.jpg",
      "/assets/categories/lingerie/Innerwear-&-Essentials-3.jpg",
      "/assets/categories/lingerie/Innerwear-&-Essentials-4.jpg",
      "/assets/categories/lingerie/Innerwear-&-Essentials-5.jpg",
      "/assets/categories/lingerie/Innerwear-&-Essentials-7.jpg",
      "/assets/categories/lingerie/Innerwear-&-Essentials-8.jpg",
      "/assets/categories/lingerie/Innerwear-&-Essentials-9.jpg",
      "/assets/categories/lingerie/Innerwear-&-Essentials-13.jpg"



    ],
    bannerImage: "/assets/categories/banner/Lingerie-&-Intimates.jpg",
    mobileBannerImage: "/assets/categories/banner/mobile/Lingerie-&-Intimates-mobile.jpg"
  },
  {
    id: 4,
    slug: "activewear",
    name: "Activewear & Sportswear",
    bgColor: "bg-sky-500",
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
      "/assets/categories/activewear/Sports-1.jpg",
      "/assets/categories/activewear/Sports-3.jpg",
      "/assets/categories/activewear/Sports-4.jpg",
      "/assets/categories/activewear/Sports-5.jpg",
      "/assets/categories/activewear/Sports-6.jpg",
      "/assets/categories/activewear/Sports-7.jpg",
      "/assets/categories/activewear/Sports-8.jpg",
      "/assets/categories/activewear/Sports-9.jpg"

    ],
    bannerImage: "/assets/categories/banner/activewear.png",
    mobileBannerImage: "/assets/categories/banner/mobile/activewear-mobile.jpg"
  },

  {
    id: 5,
    slug: "swimwear",
    name: "Swimwear",
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
      "/assets/categories/swimwear/swimwear-6.jpg",
      "/assets/categories/swimwear/swimwear-1.png",
      "/assets/categories/swimwear/swimwear-2.jpg",
      "/assets/categories/swimwear/swimwear-3.jpg",
      "/assets/categories/swimwear/swimwear-4.jpg",
      "/assets/categories/swimwear/swimwear-5.jpg",
      "/assets/categories/swimwear/swimwear-7.jpg",
      "/assets/categories/swimwear/swimwear-8.jpg",
      "/assets/categories/swimwear/swimwear-9.jpg"

    ],
    bannerImage: "/assets/categories/banner/swim.png",
    mobileBannerImage: "/assets/categories/banner/mobile/swim-mobile.png"
  },
  {
    id: 7,
    slug: "sweatshirts-fleece",
    name: "Sweatshirts & Fleece",
    bgColor: "bg-amber-700",
    link: "/product/sweatshirts-fleece",
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
      "/assets/categories/sweat/Sweatshirt-Fleece-1.png",
      "/assets/categories/sweat/Sweatshirt-Fleece-2.png",
      "/assets/categories/sweat/Sweatshirt-Fleece-3.png",
      "/assets/categories/sweat/Sweatshirt-Fleece-4.jpg",
      "/assets/categories/sweat/Sweatshirt-Fleece-5.png",
      "/assets/categories/sweat/Sweatshirt-Fleece-6.png",
      "/assets/categories/sweat/Sweatshirt-Fleece-7.png",
      "/assets/categories/sweat/Sweatshirt-Fleece-8.png",
      "/assets/categories/sweat/Sweatshirt-Fleece-9.png"

    ],
    bannerImage: "/assets/categories/banner/Sweat-shirt-Fleece.png",
    mobileBannerImage: "/assets/categories/banner/mobile/Sweat-shirt-&-Fleece-mobile.jpg"
  },
  {
    id: 8,
    slug: "jersey-tees-polos",
    name: "Jersey Tees & Polos",
    bgColor: "bg-amber-700",
    link: "/product/jersey-tees-polos",
    subtitle: "MATERIAL PRECISION",
    description: "We source high-grade combed cotton and technical blends to ensure superior hand-feel and dimensional stability. We control the knitting process to prevent torque and maintain consistent silhouette integrity across global bulk programs.",
    featured_cards: [
      {
        title: "Material",
        subtitle: "Precision",
        body: "We source high-grade combed cotton and technical blends to ensure superior hand-feel and dimensional stability.",
      },
      {
        title: "Structural",
        subtitle: "Integrity",
        body: "We control the knitting process to prevent torque and maintain consistent silhouette integrity across global programs.",
      },
      {
        title: "Industrial",
        subtitle: "Resilience",
        body: "We utilize reinforced plackets and high-tenacity yarns to maintain a premium profile through industrial wash cycles.",
      },
      {
        title: "Batch",
        subtitle: "Consistency",
        body: "We manage every stage of production to guarantee identical fabric weighting and shade uniformity at scale.",
      }
    ],
    images: [
      "/assets/categories/jersey-tee/jersey-tee-9.png",
      "/assets/categories/jersey-tee/jersey-tee-1.png",
      "/assets/categories/jersey-tee/jersey-tee-2.png",
      "/assets/categories/jersey-tee/jersey-tee-3.png",
      "/assets/categories/jersey-tee/jersey-tee-4.png",
      "/assets/categories/jersey-tee/jersey-tee-5.png",
      "/assets/categories/jersey-tee/jersey-tee-6.jpg",
      "/assets/categories/jersey-tee/jersey-tee-7.jpg",
      "/assets/categories/jersey-tee/jersey-tee-8.png"
    ],
    bannerImage: "/assets/categories/banner/Polo.jpg",
    mobileBannerImage: "/assets/categories/banner/mobile/polo-mobile.jpg"
  },
];


export const upsc = [
  {
    icon: Truck,
    title: "Seamless Logistics",
    subtitle: "End-to-end delivery. Zero complexity.",
    description: "FOB or DDP  built around your delivery needs. We support both origin-based FOB shipments and full door-to-door DDP delivery across the EU, UK, and USA. From duties and customs clearance to final fulfilment, our logistics model is structured to keep products moving smoothly and retail-ready.",
    gradient: "from-sky-500 to-cyan-500",
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
    gradient: "from-sky-500 to-sky-500",
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
