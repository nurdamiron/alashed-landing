"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import AlashedEduDemo from "./alashed-edu-demo"
import CodeStudioDemo from "./codestudio-demo"
import HardwareCatalogDemo from "./hardware-catalog-demo"
import JournalDemo from "./journal-demo"

const slides = [
  {
    tag: "Alashed EDU",
    title: "AI генерирует КМЖ за 2 минуты",
    description:
      "Выберите предмет, класс и тему — AI автоматически создаёт краткосрочный план с привязкой к ОМ-кодам ГОСО 2026. Учитель проверяет и сохраняет.",
    component: "edu",
    features: ["Автопривязка к ОМ-кодам", "ГОСО 2026 из коробки", "ФО, БЖБ, ТЖБ одним кликом"],
  },
  {
    tag: "CodeStudio",
    title: "Браузерное IDE — без установки",
    description:
      "Ученики открывают редактор в браузере и пишут код на Python, JavaScript или Scratch. Готовый проект деплоится напрямую на Arduino или ESP32.",
    component: "code",
    features: ["Python, JS, Scratch", "Деплой на реальное железо", "AI-подсказки в редакторе"],
  },
  {
    tag: "Hardware",
    title: "Официальный импорт оборудования",
    description:
      "Arduino, ESP32, Raspberry Pi, Micro:bit — напрямую в школы без посредников. Заказ из дашборда директора с доставкой за 7-14 дней.",
    component: "hardware",
    features: ["120+ SKU в каталоге", "7-14 дней доставка", "0% наценка"],
  },
  {
    tag: "Электронный журнал",
    title: "Журнал, расписание и оценки",
    description:
      "Удобный интерфейс для выставления оценок, ведения посещаемости и планирования уроков. Связан с AI-помощником и аналитикой директора.",
    component: "journal",
    features: ["Оценки и посещаемость", "Расписание занятий", "Связь с AI-планами"],
  },
]

const SLIDE_DURATION = 5000

export default function PlatformShowcaseSection() {
  const [active, setActive] = useState(0)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  const handleSelect = (index: number) => {
    setActive(index)
  }

  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] py-12 sm:py-16 md:py-20 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full px-4 sm:px-6 py-4 sm:py-5 flex flex-col justify-start items-center gap-6">
          {/* Badge */}
          <div className="px-[14px] py-[6px] bg-[#EBF7FF] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[#5BB8F5]/30">
            <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">
              <motion.svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <path d="M6 1v10M1 6h10" stroke="#2E9DE0" strokeWidth="1" strokeLinecap="round" />
              </motion.svg>
            </div>
            <div className="text-center flex justify-center flex-col text-[#2E9DE0] text-xs font-semibold leading-3 font-sans tracking-wide uppercase">
              Платформа в действии
            </div>
          </div>

          {/* Heading */}
          <div className="w-full max-w-[600px] text-center flex justify-center flex-col text-[#37322F] text-2xl sm:text-3xl md:text-[32px] font-semibold leading-tight font-sans tracking-tight">
            Посмотрите как это работает
          </div>

          {/* Description */}
          <div className="w-full max-w-[600px] text-center text-[#605A57] text-base font-normal leading-7 font-sans">
            Каждый модуль решает конкретную задачу — вместе они дают полный цикл управления школой
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] py-8 sm:py-12">

        {/* Cards Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {slides.map((slide, index) => (
            <motion.button
              key={index}
              onClick={() => handleSelect(index)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative p-5 rounded-xl transition-all duration-300 border ${
                active === index
                  ? "bg-white border-[#5BB8F5] shadow-sm"
                  : "bg-[#F7F5F3] border-[rgba(55,50,47,0.12)] hover:border-[#5BB8F5]/50"
              }`}
            >
              <div className="text-left">
                <div className={`text-xs font-semibold uppercase tracking-wider mb-2 ${active === index ? "text-[#5BB8F5]" : "text-[#605A57]"}`}>
                  {slide.tag}
                </div>
                <div className={`text-sm font-semibold leading-tight ${active === index ? "text-[#37322F]" : "text-[#605A57]"}`}>
                  {slide.title}
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Main Content Area */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-xl border border-[rgba(55,50,47,0.12)] overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left: Demo */}
            <div className="relative bg-[#F7F5F3] min-h-[500px] lg:min-h-[600px] flex items-center justify-center p-8">
              <AnimatePresence mode="wait">
                {slides.map((slide, index) => {
                  if (active !== index) return null
                  return (
                    <motion.div
                      key={index}
                      initial={{
                        opacity: 0,
                        scale: shouldReduceMotion ? 1 : 0.92,
                        x: shouldReduceMotion ? 0 : 40
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        x: 0
                      }}
                      exit={{
                        opacity: 0,
                        scale: shouldReduceMotion ? 1 : 0.92,
                        x: shouldReduceMotion ? 0 : -40
                      }}
                      transition={{
                        duration: shouldReduceMotion ? 0.2 : 0.7,
                        ease: [0.25, 0.1, 0.25, 1]
                      }}
                      className="w-full h-full"
                    >
                      {slide.component === "edu" && <AlashedEduDemo width="100%" height="100%" />}
                      {slide.component === "code" && <CodeStudioDemo width="100%" height="100%" />}
                      {slide.component === "hardware" && <HardwareCatalogDemo width="100%" height="100%" />}
                      {slide.component === "journal" && <JournalDemo width="100%" height="100%" />}
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>

            {/* Right: Description */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: shouldReduceMotion ? 0 : -30 }}
                  transition={{
                    duration: shouldReduceMotion ? 0.2 : 0.6,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  className="space-y-6"
                >
                  <div>
                    <motion.div
                      initial={{ scale: shouldReduceMotion ? 1 : 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: shouldReduceMotion ? "tween" : "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: shouldReduceMotion ? 0 : 0.15
                      }}
                      className="inline-block px-3 py-1 bg-[#EBF7FF] text-[#2E9DE0] text-xs font-semibold uppercase tracking-wider rounded-full mb-4 border border-[#5BB8F5]/30"
                    >
                      {slides[active].tag}
                    </motion.div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#37322F] mb-3 font-sans">
                      {slides[active].title}
                    </h3>
                    <p className="text-[#605A57] text-base leading-relaxed font-sans">
                      {slides[active].description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {slides[active].features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: shouldReduceMotion ? 0 : i * 0.08 + 0.25,
                          duration: shouldReduceMotion ? 0.2 : 0.4,
                          ease: [0.25, 0.1, 0.25, 1]
                        }}
                        className="flex items-center gap-3"
                      >
                        <motion.div
                          initial={{ scale: shouldReduceMotion ? 1 : 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            delay: shouldReduceMotion ? 0 : i * 0.08 + 0.3,
                            type: shouldReduceMotion ? "tween" : "spring",
                            stiffness: 260,
                            damping: 20
                          }}
                          className="w-6 h-6 rounded-lg bg-[#EBF7FF] flex items-center justify-center flex-shrink-0"
                        >
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6l2.5 2.5L10 3" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </motion.div>
                        <span className="text-[#37322F] font-medium font-sans">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.a
                    href="https://edu.alashed.kz"
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: shouldReduceMotion ? 0 : 0.5,
                      duration: shouldReduceMotion ? 0.2 : 0.5,
                      ease: [0.25, 0.1, 0.25, 1]
                    }}
                    whileHover={{
                      scale: shouldReduceMotion ? 1 : 1.05,
                      y: shouldReduceMotion ? 0 : -2,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: shouldReduceMotion ? 1 : 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#5BB8F5] text-white font-semibold rounded-[99px] shadow-[0px_2px_4px_rgba(91,184,245,0.30)] hover:bg-[#2E9DE0] transition-colors mt-4 font-sans"
                  >
                    <span>Попробовать бесплатно</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M10 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
