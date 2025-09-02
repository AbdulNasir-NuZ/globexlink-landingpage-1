"use client"

import { motion } from "framer-motion"
import { Instagram, Twitter, Facebook, MapPin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-transparent border-t border-white/10">
      {/* Zooming Background Image */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/cargo-ship-global-trade-logistics-teal-tone.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-3xl md:text-4xl font-black tracking-wider text-white mb-4">GLOBXLINK</h3>
            <p className="text-lg text-gray-200 leading-relaxed mb-6 max-w-md">
              We’re building trust-driven trade corridors across Africa, Turkey, and Asia. Verified SMEs, live shipment
              tracking, and compliance-first workflows — not a listing site, a long-term trade ecosystem.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors duration-300 border border-white/20"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors duration-300 border border-white/20"
                aria-label="X (Twitter)"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors duration-300 border border-white/20"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-white mb-6 tracking-wide">QUICK LINKS</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#join-supplier"
                  className="text-gray-200 hover:text-white transition-colors duration-300 font-medium"
                >
                  Join as Supplier
                </a>
              </li>
              <li>
                <a
                  href="#join-buyer"
                  className="text-gray-200 hover:text-white transition-colors duration-300 font-medium"
                >
                  Find Suppliers
                </a>
              </li>
              <li>
                <a href="#esg" className="text-gray-200 hover:text-white transition-colors duration-300 font-medium">
                  ESG & Compliance
                </a>
              </li>
              <li>
                <a
                  href="#logistics"
                  className="text-gray-200 hover:text-white transition-colors duration-300 font-medium"
                >
                  Logistics Partners
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-200 hover:text-white transition-colors duration-300 font-medium">
                  About GlobXLink
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-white mb-6 tracking-wide">GET IN TOUCH</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-gray-300" />
                <span className="text-gray-200 font-medium">Istanbul, Türkiye • Lagos, Nigeria</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-gray-300" />
                <a
                  href="mailto:contact@globxlink.com"
                  className="text-gray-200 hover:text-white transition-colors duration-300 font-medium"
                >
                  contact@globxlink.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-gray-300" />
                <span className="text-gray-200 font-medium">Available on request</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-12 mb-12"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-wide">STAY INFORMED</h4>
            <p className="text-lg text-gray-200 mb-8">
              Get updates on trade corridors, compliance changes, and new verified suppliers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border-2 border-white/40 bg-transparent rounded-md focus:border-white focus:outline-none text-white placeholder:text-white/60 font-medium"
                aria-label="Email address"
              />
              <button className="px-8 py-3 bg-white hover:bg-gray-200 text-gray-900 font-bold rounded-md transition-colors duration-300 tracking-wide">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-gray-300 font-medium">© {new Date().getFullYear()} GlobXLink. All rights reserved.</p>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
