"use client"

import { motion } from "framer-motion"
import { ArrowRight02Icon } from "hugeicons-react"

const products = [
  { name: "EDU", href: "https://edu.alashed.kz" },
  { name: "CodeStudio", href: "https://studio.alashed.kz" },
  { name: "Alash Electronics", href: "https://alash-electronics.kz" },
  { name: "Unitree.kz", href: "https://unitree.kz" },
  { name: "Tendon", href: "https://tendon.alashed.kz" },
  { name: "IT", href: "https://it.alashed.kz" },
  { name: "Wiki", href: "https://wiki.alashed.kz" },
  { name: "BIZ", href: "#" },
]

export function HeroSection() {
  return (
    <div className="relative pt-8 sm:pt-12 lg:pt-[72px] pb-0 flex flex-col justify-start items-center w-full">
      {/* Subtle radial gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none z-0 opacity-[0.04]">
        <div
          className="w-full h-full"
          style={{ background: "radial-gradient(ellipse at center, #37322F 0%, transparent 70%)" }}
        />
      </div>

      {/* Content */}
      <div className="w-full max-w-[860px] flex flex-col items-center relative z-10 px-4">
        {/* Headline — large, serif, commanding */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center text-[#1a1715] text-[32px] sm:text-[42px] md:text-[56px] lg:text-[64px] font-normal leading-[1.05] font-serif tracking-[-0.025em] mb-5 sm:mb-6"
        >
          Технологическая
          <br />
          экосистема из Казахстана
        </motion.h1>

        {/* Subtitle — understated, precise */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center text-[#605A57] text-[15px] sm:text-[17px] leading-[1.65] font-sans max-w-[480px] mb-10 sm:mb-12"
        >
          8 продуктов в 3 направлениях. От AI&#8209;копилота
          для учителей до дистрибуции промышленных роботов.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-3 mb-16 sm:mb-20"
        >
          <a
            href="#products"
            className="group h-[48px] px-7 bg-[#1a1715] hover:bg-[#0a0a0a] text-white rounded-full text-[14px] font-semibold font-sans flex items-center gap-2.5 transition-colors duration-200"
          >
            Продукты
            <ArrowRight02Icon size={14} color="white" strokeWidth={2} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>
          <a
            href="#contact"
            className="h-[48px] px-7 bg-transparent hover:bg-[rgba(55,50,47,0.04)] text-[#37322F] rounded-full text-[14px] font-semibold font-sans flex items-center border border-[rgba(55,50,47,0.2)] hover:border-[rgba(55,50,47,0.35)] transition-all duration-200"
          >
            Связаться
          </a>
        </motion.div>
      </div>

      {/* Product marquee strip — full width, edge-to-edge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="w-full border-t border-b border-[rgba(55,50,47,0.12)] py-4 overflow-hidden"
      >
        <div className="flex items-center justify-center gap-6 sm:gap-10 px-4 flex-wrap sm:flex-nowrap">
          {products.map((p, i) => (
            <a
              key={i}
              href={p.href}
              target={p.href.startsWith("http") ? "_blank" : undefined}
              rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-[#37322F]/40 hover:text-[#37322F] text-[13px] sm:text-[14px] font-semibold font-sans tracking-[0.02em] transition-colors duration-200 whitespace-nowrap"
            >
              {p.name}
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default HeroSection
