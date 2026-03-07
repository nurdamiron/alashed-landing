"use client"

import { useEffect, useRef, useState } from "react"

interface StatItem {
  value: number
  suffix: string
  label: string
  sublabel: string
}

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])

  return count
}

function StatCard({ value, suffix, label, sublabel, index }: StatItem & { index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const count = useCountUp(value, 1400 + index * 150, visible)

  return (
    <div
      ref={ref}
      className="flex-1 flex flex-col items-center justify-center py-8 sm:py-10 md:py-14 px-4 border-r border-[rgba(55,50,47,0.10)] last:border-r-0 first:border-l-0 gap-1"
    >
      <div className="flex items-end gap-0.5">
        <span className="text-[#37322F] text-3xl sm:text-4xl md:text-5xl font-semibold leading-none font-sans tabular-nums">
          {count.toLocaleString("ru")}
        </span>
        <span className="text-[#5BB8F5] text-xl sm:text-2xl md:text-3xl font-semibold leading-none pb-1 font-sans">
          {suffix}
        </span>
      </div>
      <div className="text-[#37322F] text-sm sm:text-base font-semibold leading-snug font-sans mt-1">
        {label}
      </div>
      <div className="text-[rgba(55,50,47,0.50)] text-xs sm:text-[13px] font-normal leading-snug font-sans text-center max-w-[140px]">
        {sublabel}
      </div>
    </div>
  )
}

const stats: StatItem[] = [
  { value: 40, suffix: "%", label: "Экономия времени", sublabel: "Учителей на документах" },
  { value: 2, suffix: "мин", label: "Генерация КМЖ", sublabel: "Вместо 2 часов вручную" },
  { value: 5, suffix: "+", label: "Языков программирования", sublabel: "Python, JS, Scratch и другие" },
  { value: 3, suffix: "в 1", label: "Продукт", sublabel: "EDU + CodeStudio + Hardware" },
]

export default function StatsSection() {
  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)]">
      <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 divide-[rgba(55,50,47,0.10)]">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} index={i} />
        ))}
      </div>
    </div>
  )
}
