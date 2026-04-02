"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import ScrollReveal from "@/components/motion/scroll-reveal"

const stats = [
  { value: 9, label: "продуктов в экосистеме" },
  { value: 3, label: "направления бизнеса" },
  { value: 6, label: "доменов в продакшене" },
  { value: 2024, label: "год основания" },
]

function AnimatedNumber({ value, inView }: { value: number; inView: boolean }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return

    const duration = 1200
    const steps = 40
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
    <section
      ref={ref}
      className="w-full border-y py-12 sm:py-16"
      style={{ borderColor: "rgba(55, 50, 47, 0.12)" }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center ${
                  i < stats.length - 1
                    ? "md:border-r md:border-[rgba(55,50,47,0.12)]"
                    : ""
                }`}
              >
                <motion.span
                  className="text-4xl sm:text-5xl font-serif font-medium text-[#37322F]"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <AnimatedNumber value={stat.value} inView={inView} />
                </motion.span>
                <span className="text-sm text-[#605A57] font-sans mt-2">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
