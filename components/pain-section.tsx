"use client"

import { useState, useEffect, useRef } from "react"

export default function PainSection() {
  const [activeTime, setActiveTime] = useState(0)
  const [hours, setHours] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const timeWasters = [
    {
      task: "КМЖ вручную",
      hours: 8,
      color: "#DC2626",
      bg: "#FEE2E2",
      description: "Поиск ОМ-кодов, форматирование, проверка соответствия ГОСО 2026"
    },
    {
      task: "ФО и БЖБ",
      hours: 6,
      color: "#EA580C",
      bg: "#FFEDD5",
      description: "Составление рубрик, дескрипторов, критериев оценивания"
    },
    {
      task: "Поиск материалов",
      hours: 4,
      color: "#D97706",
      bg: "#FEF3C7",
      description: "Задания, примеры кода, презентации по разным источникам"
    },
    {
      task: "Отчеты и документы",
      hours: 3,
      color: "#2E9DE0",
      bg: "#EBF7FF",
      description: "Заполнение электронного журнала, отчеты для администрации"
    },
  ]

  const totalHours = timeWasters.reduce((acc, item) => acc + item.hours, 0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTime((prev) => (prev + 1) % timeWasters.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  // Intersection Observer for scroll trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Animated number counter
  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = totalHours / steps
    let current = 0

    const counter = setInterval(() => {
      current += 1
      if (current <= steps) {
        setHours(Math.floor(increment * current))
      } else {
        clearInterval(counter)
        setHours(totalHours)
      }
    }, duration / steps)

    return () => clearInterval(counter)
  }, [isVisible, totalHours])

  return (
    <div ref={sectionRef} className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header */}
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] py-12 sm:py-16 md:py-20 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full px-4 sm:px-6 py-4 sm:py-5 flex flex-col justify-start items-center gap-6">
          {/* Badge */}
          <div
            className={`px-[14px] py-[6px] bg-[#FEF3C7] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[#D97706]/30 transition-all duration-300 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 1v10M1 6h10" stroke="#D97706" strokeWidth="1" strokeLinecap="round" />
              </svg>
            </div>
            <div className="text-center flex justify-center flex-col text-[#D97706] text-xs font-semibold leading-3 font-sans tracking-wide uppercase">
              Проблема
            </div>
          </div>

          {/* Heading with animated counter */}
          <div className="w-full max-w-[600px] text-center flex justify-center flex-col text-[#37322F] text-2xl sm:text-3xl md:text-[32px] font-semibold leading-tight font-sans tracking-tight">
            <div className="flex items-center justify-center gap-3 mb-2 flex-wrap">
              <span className={`text-5xl md:text-6xl font-bold text-[#DC2626] transition-all duration-500 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`}>
                {hours}
              </span>
              <span className="text-2xl md:text-3xl">часов в неделю</span>
            </div>
            <div className={`transition-all duration-300 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}>
              учителя тратят на бумажную работу
            </div>
          </div>

          {/* Description */}
          <div className={`w-full max-w-[600px] text-center text-[#605A57] text-base font-normal leading-7 font-sans transition-all duration-300 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}>
            Вместо того чтобы учить детей программированию, учителя заполняют КМЖ,
            <br className="hidden md:block" />
            ищут ОМ-коды ГОСО 2026, пишут отчеты. Это выгорание и текучка кадров.
          </div>

          {/* Time Visualization */}
          <div className="w-full max-w-[700px] flex flex-col gap-3">
            {timeWasters.map((item, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl border border-[rgba(55,50,47,0.12)] shadow-sm cursor-default transition-all duration-200 ${
                  activeTime === index ? "scale-[1.02] bg-white" : "bg-[#F7F5F3]"
                }`}
                style={{
                  transitionDelay: `${index * 80}ms`,
                }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-200 hover:scale-110 hover:rotate-3"
                    style={{ backgroundColor: item.bg }}
                  >
                    <div className="text-lg font-bold" style={{ color: item.color }}>
                      {item.hours}ч
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-base font-semibold text-[#37322F] mb-1">{item.task}</div>
                    <div className="text-xs text-[#605A57] leading-relaxed">{item.description}</div>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="h-2 bg-[#E0DEDB] rounded-full overflow-hidden">
                  <div
                    className="h-full transition-all duration-500 ease-out"
                    style={{
                      backgroundColor: item.color,
                      width: isVisible ? `${(item.hours / totalHours) * 100}%` : "0%",
                      transitionDelay: `${index * 80 + 300}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Stats Cards */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
            {[
              { value: "40%", label: "времени на документы вместо преподавания", color: "#DC2626", delay: 500 },
              { value: "60%", label: "учителей в профессиональном выгорании", color: "#EA580C", delay: 600 },
              { value: "2026", label: "новый ГОСО еще сложнее", color: "#D97706", delay: 700 },
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center p-6 bg-white rounded-lg border border-[rgba(55,50,47,0.12)] shadow-sm transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${stat.delay}ms` }}
              >
                <div className="text-4xl font-bold mb-2" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <div className="text-sm text-[#605A57]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
