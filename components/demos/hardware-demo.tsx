"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

const products = [
  {
    name: "Arduino Uno R4 WiFi",
    price: "12 900",
    tag: "Хит",
    tagColor: "#2E9DE0",
    gradient: "from-[#0097D1] to-[#00BCD4]",
  },
  {
    name: "ESP32-S3 DevKit",
    price: "6 400",
    tag: "Новинка",
    tagColor: "#28C840",
    gradient: "from-[#28C840] to-[#4ADE80]",
  },
  {
    name: "Raspberry Pi 5 (8GB)",
    price: "42 500",
    tag: "PRO",
    tagColor: "#C51A4A",
    gradient: "from-[#C51A4A] to-[#E84D72]",
  },
  {
    name: "Micro:bit V2 Starter Kit",
    price: "15 800",
    tag: "Набор",
    tagColor: "#F5A623",
    gradient: "from-[#F5A623] to-[#FBBF24]",
  },
]

export default function HardwareDemo() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  useEffect(() => {
    if (!isInView) return
    const timers = products.map((_, i) =>
      setTimeout(() => setVisibleItems(prev => [...prev, i]), 400 + i * 250)
    )
    return () => timers.forEach(clearTimeout)
  }, [isInView])

  return (
    <div ref={ref} className="w-full h-full rounded-lg overflow-hidden bg-white border border-[rgba(55,50,47,0.08)] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col">
      {/* Store Header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-[rgba(55,50,47,0.06)] bg-[#FAFAF9]">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-[#1a1715] flex items-center justify-center">
            <span className="text-[7px] font-black text-white tracking-tight">AE</span>
          </div>
          <span className="text-[11px] font-semibold text-[#37322F] font-sans">Alash Electronics</span>
        </div>
        <a
          href="https://alash-electronics.kz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[9px] text-[#2E9DE0] font-semibold font-sans hidden sm:block hover:underline"
        >
          alash-electronics.kz →
        </a>
      </div>

      {/* Products Grid */}
      <div className="flex-1 p-2 sm:p-2.5 grid grid-cols-2 gap-1.5 sm:gap-2 overflow-hidden">
        {products.map((product, i) => {
          const isVisible = visibleItems.includes(i)
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 25 }}
              className="flex flex-col rounded-lg border border-[rgba(55,50,47,0.06)] bg-white overflow-hidden group"
            >
              {/* Product image placeholder */}
              <div className={`h-[60px] sm:h-[72px] bg-gradient-to-br ${product.gradient} relative flex items-center justify-center`}>
                {/* Circuit board pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full" style={{
                    backgroundImage: `
                      linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px),
                      linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: "8px 8px",
                  }} />
                </div>
                {/* Chip icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="opacity-40">
                  <rect x="6" y="6" width="12" height="12" rx="2" stroke="white" strokeWidth="1.5"/>
                  <rect x="9" y="9" width="6" height="6" rx="1" fill="white" opacity="0.3"/>
                  <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" stroke="white" strokeWidth="1" strokeLinecap="round"/>
                </svg>
                {/* Tag */}
                <span
                  className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded text-[7px] font-bold text-white uppercase tracking-wider"
                  style={{ backgroundColor: "rgba(0,0,0,0.25)", backdropFilter: "blur(4px)" }}
                >
                  {product.tag}
                </span>
              </div>
              {/* Product info */}
              <div className="p-2 flex flex-col gap-0.5">
                <span className="text-[10px] sm:text-[11px] font-medium text-[#37322F] font-sans leading-tight line-clamp-2">
                  {product.name}
                </span>
                <span className="text-[11px] sm:text-[12px] font-bold text-[#1a1715] font-sans">
                  {product.price} ₸
                </span>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={visibleItems.length >= 4 ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
        className="px-2.5 pb-2.5"
      >
        <div className="w-full py-1.5 rounded-lg bg-[#1a1715] flex items-center justify-center gap-1.5">
          <span className="text-[10px] font-semibold text-white font-sans">Перейти в каталог</span>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M3 5h4M5.5 3L7.5 5L5.5 7" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </motion.div>
    </div>
  )
}
