"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function CompanyStatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <div
      ref={ref}
      className="w-full border-b border-[rgba(55,50,47,0.12)] bg-white"
    >
      <div className="max-w-[680px] mx-auto px-6 py-16 sm:py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >
          <p className="text-[#605A57] text-[13px] font-medium font-sans tracking-[0.08em] uppercase">
            О компании
          </p>
          <h2 className="text-[#1a1715] text-[24px] sm:text-[30px] md:text-[36px] font-normal font-serif leading-[1.2] tracking-[-0.02em]">
            Alashed — технологическая компания из Казахстана
          </h2>
          <div className="flex flex-col gap-4 text-[#605A57] text-[15px] sm:text-base leading-[1.7] font-sans">
            <p>
              Мы строим экосистему продуктов на стыке образования, робототехники и бизнеса. Alashed EDU помогает учителям генерировать учебную документацию по ГОСО 2026 с помощью AI. CodeStudio даёт ученикам браузерное IDE для программирования роботов. Alash Electronics импортирует оборудование напрямую в школы.
            </p>
            <p>
              Мы со-организуем крупнейшие STEM-соревнования Казахстана — Infomatrix, KazRobotics, WRO — и являемся официальным дистрибьютором роботов Unitree в СНГ. Tendon — наш task-трекер для разработчиков с интеграцией в Claude Code.
            </p>
            <p>
              Каждый продукт в экосистеме усиливает остальные: данные, пользователи и процессы связаны между собой.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
