"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useState, useEffect } from "react"

export default function BentoHardware() {
  const [activeIndex, setActiveIndex] = useState(0)
  const shouldReduceMotion = useReducedMotion()

  const items = [
    {
      name: "Arduino Uno",
      price: "15,000₸",
      color: "#2E9DE0",
      iconPath: "M2 2h8v2H2zM2 5h8v2H2zM2 8h8v2H2z"
    },
    {
      name: "ESP32 DevKit",
      price: "8,500₸",
      color: "#7C3AED",
      iconPath: "M3 2h6v3H3zM2 6h8v3H2zM3 10h6v2H3z"
    },
    {
      name: "Raspberry Pi 4",
      price: "45,000₸",
      color: "#DC2626",
      iconPath: "M6 2c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zM4 3h4v1H4z"
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full h-full bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 flex flex-col gap-4">
      <div className="text-center">
        <h4 className="font-bold text-gray-900 text-sm mb-1">Hardware Store</h4>
        <p className="text-xs text-gray-600">Прямая поставка без наценки</p>
      </div>

      <div className="flex-1 space-y-2">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: activeIndex === index ? (shouldReduceMotion ? 1 : 1.03) : 1,
              x: activeIndex === index ? (shouldReduceMotion ? 0 : 4) : 0,
            }}
            transition={{
              duration: shouldReduceMotion ? 0.15 : 0.3,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className={`p-3 rounded-lg border-2 transition-all ${
              activeIndex === index
                ? "border-orange-500 bg-white shadow-lg"
                : "border-gray-200 bg-white/50"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${item.color}15` }}
              >
                <svg width="16" height="16" viewBox="0 0 12 12" fill="none">
                  <path
                    d={item.iconPath}
                    stroke={item.color}
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900 text-xs">{item.name}</div>
                <div className="text-xs text-gray-600">{item.price}</div>
              </div>
              {activeIndex === index && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center"
                >
                  <svg width="14" height="14" fill="none">
                    <path d="M7 3v8M3 7h8" strokeWidth="1.5" stroke="white" strokeLinecap="round" />
                  </svg>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
