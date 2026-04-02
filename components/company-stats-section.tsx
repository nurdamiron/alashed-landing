"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

const stats = [
  { value: 8, suffix: "", label: "продуктов" },
  { value: 3, suffix: "", label: "направления" },
  { value: 6, suffix: "+", label: "доменов" },
  { value: 2024, suffix: "", label: "с года" },
]

function AnimatedNumber({ value, inView }: { value: number; inView: boolean }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1000
    const steps = 30
    const stepTime = duration / steps
    let current = 0

    const timer = setInterval(() => {
      current++
      const progress = current / steps
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * value))
      if (current >= steps) {
        setDisplay(value)
        clearInterval(timer)
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [inView, value])

  return <>{display}</>
}

export default function CompanyStatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <div
      ref={ref}
      className="w-full border-b border-[rgba(55,50,47,0.12)] bg-white"
    >
      <div className="max-w-[1060px] mx-auto grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`flex flex-col items-center justify-center py-10 sm:py-14 ${
              i < stats.length - 1 ? "md:border-r border-[rgba(55,50,47,0.08)]" : ""
            } ${i < 2 ? "border-b md:border-b-0 border-[rgba(55,50,47,0.08)]" : ""}`}
          >
            <span className="text-[#1a1715] text-[36px] sm:text-[48px] font-normal font-serif leading-none tracking-[-0.03em]">
              <AnimatedNumber value={stat.value} inView={inView} />
              {stat.suffix}
            </span>
            <span className="text-[#847971] text-[13px] font-medium font-sans mt-2 tracking-[0.02em]">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
