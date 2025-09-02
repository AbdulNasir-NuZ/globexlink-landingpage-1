"use client"

import type React from "react"

import { LiquidButton } from "@/components/ui/liquid-glass-button"
import { motion } from "framer-motion"
import { MapPin, Users, Calendar, Trophy } from "lucide-react"
import { useState } from "react"

export default function CTASection() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setSuccess(null)
    setError(null)

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement)?.value,
      email: (form.elements.namedItem("email") as HTMLInputElement)?.value,
      company: (form.elements.namedItem("company") as HTMLInputElement)?.value,
      role: (form.elements.namedItem("role") as HTMLInputElement)?.value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)?.value,
      source: "cta-join",
    }

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error("Failed to submit")
      setSuccess("Thanks — our team will reach out shortly.")
      form.reset()
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="join" className="relative py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />

      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gray-900/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gray-900/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main CTA Heading */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-wider mb-6 text-gray-900 leading-none">
            READY TO
            <br />
            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
              TRADE SMARTER?
            </span>
          </h2>

          {/* Supporting Text */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-12 leading-relaxed font-medium">
            Join a trusted network of verified SMEs, logistics partners, and fintech providers across Africa, Turkey,
            and Asia. Build transparent, secure cross-border trade with cultural intelligence and live shipment
            visibility.
          </p>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-black text-gray-900 mb-1">2K+</div>
              <div className="text-sm md:text-base text-gray-600 font-medium">Verified SMEs</div>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-black text-gray-900 mb-1">30+</div>
              <div className="text-sm md:text-base text-gray-600 font-medium">Trade Corridors</div>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-black text-gray-900 mb-1">15+</div>
              <div className="text-sm md:text-base text-gray-600 font-medium">Compliance Standards</div>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-black text-gray-900 mb-1">98%</div>
              <div className="text-sm md:text-base text-gray-600 font-medium">On‑Time Delivery</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <LiquidButton
              size="xxl"
              className="font-bold text-xl tracking-wide px-12 py-4 bg-gray-900 hover:bg-gray-800 text-white border-2 border-gray-900 hover:scale-105 transition-all duration-300"
            >
              JOIN GLOBXLINK NOW
            </LiquidButton>
          </motion.div>

          {/* Compact Join/Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="mx-auto max-w-3xl rounded-xl border border-gray-200 bg-white/90 p-6 shadow-sm backdrop-blur">
              <h3 className="text-2xl md:text-3xl font-black tracking-wide text-gray-900 mb-2">
                Tell us about your trade needs
              </h3>
              <p className="text-gray-600 mb-6">
                Share a few details and we’ll help you connect with verified partners across Africa, Türkiye, and Asia.
              </p>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-1">
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-md border-2 border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none"
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-1">
                    Work email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-md border-2 border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none"
                    placeholder="jane@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-800 mb-1">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    className="w-full rounded-md border-2 border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none"
                    placeholder="Company Ltd."
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-semibold text-gray-800 mb-1">
                    I am a
                  </label>
                  <select
                    id="role"
                    name="role"
                    className="w-full rounded-md border-2 border-gray-300 px-3 py-2 text-gray-900 focus:border-gray-900 focus:outline-none bg-white"
                    defaultValue="buyer"
                  >
                    <option value="buyer">Buyer / Distributor</option>
                    <option value="supplier">Supplier / Exporter</option>
                    <option value="logistics">Logistics Partner</option>
                    <option value="fintech">Fintech / Escrow</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-1">
                    What do you want to trade?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full rounded-md border-2 border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none"
                    placeholder="Product, volumes, corridors, timeline..."
                  />
                </div>

                <div className="md:col-span-2 flex items-center justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-md transition-colors duration-300"
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>

                  {success && <p className="text-sm font-semibold text-green-700">{success}</p>}
                  {error && <p className="text-sm font-semibold text-red-700">{error}</p>}
                </div>
              </form>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-gray-200"
          >
            <p className="text-sm text-gray-500 mb-4 font-medium">
              TRUSTED BY EXPORTERS, DISTRIBUTORS & LOGISTICS PARTNERS
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
              <span className="text-sm font-semibold">Verified Suppliers</span>
              <span className="text-sm font-semibold">Escrow & Fintech Partners</span>
              <span className="text-sm font-semibold">Live Shipment Tracking</span>
              <span className="text-sm font-semibold">Compliance Ready</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
