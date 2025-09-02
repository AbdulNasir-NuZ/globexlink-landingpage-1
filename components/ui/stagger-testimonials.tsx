"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const SQRT_5000 = Math.sqrt(5000)

// Global Eco Trade partner feedback data with randomly generated icons
const testimonials = [
  {
    tempId: 0,
    testimonial:
      "We verified suppliers in two new countries and moved our first shipment with live milestone updates. It felt like turning on a trusted trade corridor.",
    by: "Nadia S., Export Manager, Accra",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=NadiaS&backgroundColor=0ea5e9&textColor=ffffff",
  },
  {
    tempId: 1,
    testimonial:
      "Their compliance-first workflow cut our onboarding from weeks to days. Documentation checks and traceability are finally centralized.",
    by: "Uğur K., Customs & Compliance, Istanbul",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=UgurK&backgroundColor=10b981&textColor=ffffff",
  },
  {
    tempId: 2,
    testimonial:
      "As a distributor, finding verified SMEs with consistent quality used to be guesswork. Now we have proof, audits, and shipment history at a glance.",
    by: "Lin Y., Distributor, Kuala Lumpur",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=LinY&backgroundColor=6366f1&textColor=ffffff",
  },
  {
    tempId: 3,
    testimonial:
      "The platform matched us with a logistics partner that understands our cold-chain requirements and routes. Fewer delays, better visibility.",
    by: "Ade O., Operations Lead, Lagos",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AdeO&backgroundColor=ef4444&textColor=ffffff",
  },
  {
    tempId: 4,
    testimonial:
      "We aligned our ESG reporting with supplier data from source—farms, co-ops, and processors. It’s audit-ready and buyer-friendly.",
    by: "Grace T., Sustainability Director, Nairobi",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=GraceT&backgroundColor=f59e0b&textColor=ffffff",
  },
  {
    tempId: 5,
    testimonial:
      "Payment and shipment milestones unlocked automatically after each verification step. The risk profile of new lanes is finally manageable.",
    by: "Mehmet A., Trade Finance, Ankara",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=MehmetA&backgroundColor=84cc16&textColor=ffffff",
  },
  {
    tempId: 6,
    testimonial:
      "Product specs, lab tests, and certifications live in one place. Our buyers can evaluate quality before we quote—saves everyone time.",
    by: "Chidinma E., SME Owner, Abuja",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=ChidinmaE&backgroundColor=ec4899&textColor=ffffff",
  },
  {
    tempId: 7,
    testimonial:
      "We onboarded three processors and standardized packaging. The corridor data helps us plan capacity and seasonality better.",
    by: "Ravi P., Supply Planner, Hyderabad",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=RaviP&backgroundColor=06b6d4&textColor=ffffff",
  },
  {
    tempId: 8,
    testimonial:
      "Our first Africa↔Türkiye lane used to be opaque. Now we have document status, time to clear, and partner SLAs—end to end.",
    by: "Selin D., Freight Forwarder, Izmir",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=SelinD&backgroundColor=f97316&textColor=ffffff",
  },
  {
    tempId: 9,
    testimonial:
      "The buyer discovery is intentional—sector, capacity, and compliance filters actually reflect how trade works on the ground.",
    by: "Kwame B., Regional Sales, Kumasi",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=KwameB&backgroundColor=3b82f6&textColor=ffffff",
  },
  {
    tempId: 10,
    testimonial:
      "We built a repeatable route with the same partners. Once trust is validated, every shipment is faster. That’s real corridor building.",
    by: "Fatma Z., Export Ops, Gaziantep",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=FatmaZ&backgroundColor=a855f7&textColor=ffffff",
  },
  {
    tempId: 11,
    testimonial:
      "The packaging and labeling support helped us meet EU buyer requirements without rework. Lead times and costs dropped.",
    by: "Sibusiso M., Co-op Manager, Durban",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=SibusisoM&backgroundColor=059669&textColor=ffffff",
  },
  {
    tempId: 12,
    testimonial:
      "Our compliance team can review digitally—no more email chains for certificates. Status is visible to everyone involved.",
    by: "Anita R., Quality & Compliance, Pune",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AnitaR&backgroundColor=0ea5e9&textColor=ffffff",
  },
  {
    tempId: 13,
    testimonial:
      "Corridor analytics made our demand planning more accurate. We can forecast seasonality and price swings per route.",
    by: "Omar F., Category Manager, Cairo",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=OmarF&backgroundColor=dc2626&textColor=ffffff",
  },
  {
    tempId: 14,
    testimonial:
      "We were skeptical about new markets. With verified partners and clear SLAs, we expanded with confidence.",
    by: "Leila H., Procurement Lead, Casablanca",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=LeilaH&backgroundColor=7c3aed&textColor=ffffff",
  },
  {
    tempId: 15,
    testimonial:
      "Global Eco Trade brought structure to our multi-party shipments. Roles, approvals, and documents are finally synchronized.",
    by: "James W., Freight Ops, Mombasa",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=JamesW&backgroundColor=ea580c&textColor=ffffff",
  },
  {
    tempId: 16,
    testimonial:
      "Once onboarded, repeating orders is easy—same docs, same partners, same expectations. That predictability is gold.",
    by: "Amina K., Buyer Relations, Doha",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AminaK&backgroundColor=16a34a&textColor=ffffff",
  },
  {
    tempId: 17,
    testimonial: "We connected with certified processors close to origin. Better margins and shorter transit times.",
    by: "Hassan E., Sourcing Manager, Alexandria",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=HassanE&backgroundColor=2563eb&textColor=ffffff",
  },
  {
    tempId: 18,
    testimonial:
      "The platform reduces disputes—each milestone is timestamped and agreed. We spend less time chasing updates.",
    by: "Ruth M., Import Coordinator, Nairobi",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=RuthM&backgroundColor=be185d&textColor=ffffff",
  },
  {
    tempId: 19,
    testimonial: "Support is hands-on. They understand the realities of emerging markets and design around them.",
    by: "Deniz T., Trade Ops, Antalya",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=DenizT&backgroundColor=0891b2&textColor=ffffff",
  },
]

interface TestimonialCardProps {
  position: number
  testimonial: (typeof testimonials)[0]
  handleMove: (steps: number) => void
  cardSize: number
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ position, testimonial, handleMove, cardSize }) => {
  const isCenter = position === 0
  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 bg-gray-900 text-white border-gray-900"
          : "z-0 bg-white text-gray-900 border-gray-200 hover:border-gray-400",
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent",
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-gray-300"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />
      <img
        src={testimonial.imgSrc || "/placeholder.svg"}
        alt={`${testimonial.by.split(",")[0]}`}
        className="mb-4 h-14 w-12 bg-gray-100 object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px hsl(var(--background))",
        }}
      />
      <h3 className={cn("text-base sm:text-xl font-medium", isCenter ? "text-white" : "text-gray-900")}>
        "{testimonial.testimonial}"
      </h3>
      <p
        className={cn(
          "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
          isCenter ? "text-gray-300" : "text-gray-600",
        )}
      >
        - {testimonial.by}
      </p>
    </div>
  )
}

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365)
  const [testimonialsList, setTestimonialsList] = useState(testimonials)

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList]
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift()
        if (!item) return
        newList.push({ ...item, tempId: Math.random() })
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop()
        if (!item) return
        newList.unshift({ ...item, tempId: Math.random() })
      }
    }
    setTestimonialsList(newList)
  }

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)")
      setCardSize(matches ? 365 : 290)
    }
    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return (
    <div className="relative w-full overflow-hidden bg-white" style={{ height: 600 }}>
      {testimonialsList.map((testimonial, index) => {
        const position =
          testimonialsList.length % 2 ? index - (testimonialsList.length + 1) / 2 : index - testimonialsList.length / 2
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        )
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-300 hover:bg-gray-900 hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-300 hover:bg-gray-900 hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}
