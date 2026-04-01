"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

function ChipIcon({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="3" y="3" width="10" height="10" rx="2" stroke={color} strokeWidth="1.2"/>
      <rect x="5.5" y="5.5" width="5" height="5" rx="1" fill={color} opacity="0.15"/>
      <path d="M6 1v2M10 1v2M6 13v2M10 13v2M1 6h2M1 10h2M13 6h2M13 10h2" stroke={color} strokeWidth="1" strokeLinecap="round"/>
    </svg>
  )
}

const products = [
  { name: "Arduino Uno R4", price: "125 A", qty: "x30", color: "#2E9DE0", status: "inStock" },
  { name: "ESP32 DevKit", price: "82 A", qty: "x30", color: "#28C840", status: "inStock" },
  { name: "Micro:bit V2", price: "158 A", qty: "x15", color: "#F5A623", status: "inStock" },
  { name: "Raspberry Pi 5", price: "389 A", qty: "x5", color: "#E84D4D", status: "limited" },
]

export default function HardwareDemo() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedItems, setSelectedItems] = useState<number[]>([])
  const [showTotal, setShowTotal] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)

  useEffect(() => {
    if (!isInView) return
    const timers = [
      setTimeout(() => setSelectedItems([0]), 800),
      setTimeout(() => setSelectedItems([0, 1]), 1200),
      setTimeout(() => setSelectedItems([0, 1, 2]), 1600),
      setTimeout(() => setShowTotal(true), 2000),
      setTimeout(() => setOrderPlaced(true), 2800),
    ]
    return () => timers.forEach(clearTimeout)
  }, [isInView])

  return (
    <div ref={ref} className="w-full h-full rounded-lg overflow-hidden bg-white border border-[rgba(55,50,47,0.08)] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-[rgba(55,50,47,0.06)] bg-[#FAFAF9]">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <rect x="2" y="3" width="6" height="5" rx="0.5" stroke="white" strokeWidth="0.8"/>
              <path d="M4 3V2h2v1" stroke="white" strokeWidth="0.8"/>
            </svg>
          </div>
          <span className="text-[11px] font-semibold text-[#37322F] font-sans">Заказ оборудования</span>
        </div>
        <span className="text-[9px] text-[#605A57] font-sans hidden sm:block">Дашборд директора</span>
      </div>

      {/* Product list */}
      <div className="flex-1 p-2 sm:p-2.5 flex flex-col gap-1 sm:gap-1.5 overflow-hidden">
        {products.map((product, i) => {
          const isSelected = selectedItems.includes(i)
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.35 }}
              className={`flex items-center gap-2 p-2 rounded-md border transition-colors duration-300 ${
                isSelected
                  ? "border-[#5BB8F5]/40 bg-[#EBF7FF]/50"
                  : "border-[rgba(55,50,47,0.06)] bg-white"
              }`}
            >
              <motion.div
                animate={isSelected ? { scale: [1, 1.15, 1] } : {}}
                transition={{ duration: 0.25 }}
                className="flex-shrink-0"
              >
                <ChipIcon color={product.color} />
              </motion.div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-medium text-[#37322F] font-sans truncate">{product.name}</div>
                <div className="text-[9px] text-[#605A57] font-sans">{product.price} coins / шт</div>
              </div>
              <span className="text-[10px] font-medium text-[#37322F] font-sans">{product.qty}</span>
              <motion.div
                initial={{ scale: 0 }}
                animate={isSelected ? { scale: 1 } : { scale: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
                className="w-4 h-4 rounded-full bg-[#5BB8F5] flex items-center justify-center flex-shrink-0"
              >
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M2 4l1.5 1.5L6 3" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </motion.div>
          )
        })}

        {/* Total & Order */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={showTotal ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mt-auto pt-2 border-t border-[rgba(55,50,47,0.06)]"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] text-[#605A57] font-sans">Итого (75 шт)</span>
            <span className="text-[12px] font-semibold text-[#37322F] font-sans">10 935 A coins</span>
          </div>
          <motion.div
            animate={orderPlaced ? { backgroundColor: "#28C840" } : { backgroundColor: "#5BB8F5" }}
            transition={{ duration: 0.3 }}
            className="w-full py-1.5 rounded-md flex items-center justify-center gap-1.5"
          >
            {orderPlaced ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex items-center gap-1.5"
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[10px] font-semibold text-white font-sans">Заказ оформлен</span>
              </motion.div>
            ) : (
              <span className="text-[10px] font-semibold text-white font-sans">Заказать</span>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
