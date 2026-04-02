"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  StarIcon,
  CodeIcon,
  ChipIcon,
  ComputerProgramming01Icon,
} from "hugeicons-react"

const highlights = [
  {
    icon: <StarIcon size={20} color="#F59E0B" strokeWidth={1.5} />,
    title: "Соревнования",
    description: "Со-организуем Infomatrix Kazakhstan, KazRobotics, WRO — готовим участников и предоставляем инфраструктуру",
    accent: "#FEF3C7",
  },
  {
    icon: <ComputerProgramming01Icon size={20} color="#1a1715" strokeWidth={1.5} />,
    title: "Дистрибуция",
    description: "Официальный импортёр STEM-оборудования и единственный дистрибьютор роботов Unitree в СНГ",
    accent: "#F0EFEE",
  },
  {
    icon: <CodeIcon size={20} color="#6366F1" strokeWidth={1.5} />,
    title: "Разработка",
    description: "Собственные продукты от проектирования до продакшена — 8 продуктов на собственных доменах",
    accent: "#EEF2FF",
  },
  {
    icon: <ChipIcon size={20} color="#059669" strokeWidth={1.5} />,
    title: "Образование",
    description: "AI-платформа для учителей по ГОСО 2026, браузерное IDE, курсы по робототехнике и электронике",
    accent: "#ECFDF5",
  },
]

export default function CompanyStatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <div
      ref={ref}
      className="w-full border-b border-[rgba(55,50,47,0.12)]"
    >
      {/* Section header */}
      <div className="w-full border-b border-[rgba(55,50,47,0.12)] py-12 sm:py-16 px-4">
        <div className="max-w-[1060px] mx-auto flex flex-col items-center gap-3">
          <p className="text-[#605A57] text-[13px] font-medium font-sans tracking-[0.08em] uppercase">
            Чем мы занимаемся
          </p>
          <h2 className="text-center text-[#1a1715] text-[26px] sm:text-[34px] font-normal font-serif leading-[1.1] tracking-[-0.02em]">
            Больше чем продукты
          </h2>
        </div>
      </div>

      {/* Highlights grid */}
      <div className="max-w-[1060px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`p-6 sm:p-8 flex flex-col gap-4 ${
              i < highlights.length - 1 ? "border-b sm:border-b-0 sm:border-r lg:border-r border-[rgba(55,50,47,0.08)]" : ""
            } ${i === 1 ? "lg:border-r" : ""}`}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: item.accent }}
            >
              {item.icon}
            </div>
            <div>
              <h3 className="text-[#1a1715] text-[15px] font-semibold font-sans mb-1.5">
                {item.title}
              </h3>
              <p className="text-[#847971] text-[13px] leading-[1.6] font-sans">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
