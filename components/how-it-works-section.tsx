"use client"

import { motion } from "framer-motion"
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/motion/scroll-reveal"

const steps = [
  {
    number: "01",
    title: "Школа подаёт заявку",
    description:
      "Директор заполняет форму заявки на пилот. Мы подключаем школу за 48 часов, создаём аккаунты и проводим вводный инструктаж.",
    tag: "Онбординг",
  },
  {
    number: "02",
    title: "Учителя начинают с EDU",
    description:
      "Каждый учитель информатики получает AI-ассистента. Первое КМЖ генерируется за 2 минуты с автопривязкой к ОМ-кодам ГОСО 2026.",
    tag: "Alashed EDU",
  },
  {
    number: "03",
    title: "Ученики программируют на CodeStudio",
    description:
      "Браузерное IDE открывается без установки. Scratch → Python → реальное железо: ученики деплоят код на Arduino прямо с урока.",
    tag: "CodeStudio",
  },
  {
    number: "04",
    title: "Школа заказывает оборудование",
    description:
      "Директор видит весь инвентарь в дашборде и делает заказ в один клик. Мы — официальный импортёр, доставка напрямую без посредников.",
    tag: "Hardware",
  },
]

export default function HowItWorksSection() {
  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)]">
      {/* Header */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20 border-b border-[rgba(55,50,47,0.12)] flex flex-col items-center gap-4 text-center">
        <ScrollReveal animation="scaleIn">
          <div className="px-[14px] py-[6px] bg-[#EBF7FF] overflow-hidden rounded-[90px] flex items-center gap-[8px] border border-[#5BB8F5]/30">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="6" cy="6" r="4" stroke="#2E9DE0" strokeWidth="1.2" />
              <path d="M6 4V6.5L7.5 7.5" stroke="#2E9DE0" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <span className="text-[#2E9DE0] text-xs font-semibold leading-3 font-sans tracking-wide uppercase">
              Как это работает
            </span>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-[#49423D] text-xl sm:text-2xl md:text-[28px] font-semibold leading-tight font-sans tracking-tight text-balance">
            От заявки до первого урока за 48 часов
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-[#605A57] text-sm sm:text-base font-normal leading-7 font-sans max-w-[520px]">
            Простой процесс подключения без IT-специалиста. Работает в браузере,
            не требует установки ничего на компьютеры школы.
          </p>
        </ScrollReveal>
      </div>

      {/* Steps */}
      <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <StaggerItem key={index}>
            <div className={`flex flex-col gap-5 p-6 sm:p-8 md:p-10 border-[rgba(55,50,47,0.12)] relative h-full ${index < steps.length - 1 ? "border-b sm:border-b-0 sm:border-r" : "sm:border-r-0"}`}>
              {/* Connector line between steps on desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[52px] right-0 w-0 h-px border-t border-dashed border-[#5BB8F5]/40 translate-x-[1px]" />
              )}

              {/* Step number circle */}
              <div className="flex items-center gap-3">
                <motion.div
                  whileHover={{ scale: 1.1, backgroundColor: "#5BB8F5", borderColor: "#5BB8F5" }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="w-10 h-10 rounded-full bg-[#EBF7FF] border border-[#5BB8F5]/30 flex items-center justify-center flex-shrink-0 cursor-default"
                >
                  <span className="text-[#2E9DE0] text-sm font-bold leading-none font-sans">{step.number}</span>
                </motion.div>
                <div className="h-px flex-1 bg-[#5BB8F5]/20 hidden sm:block lg:hidden" />
              </div>

              {/* Tag */}
              <div className="inline-flex">
                <span className="px-2 py-0.5 bg-[#F7F5F3] border border-[rgba(55,50,47,0.12)] rounded text-[#37322F] text-[11px] font-medium font-sans">
                  {step.tag}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2">
                <h3 className="text-[#37322F] text-base sm:text-lg font-semibold leading-snug font-sans">
                  {step.title}
                </h3>
                <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  )
}
