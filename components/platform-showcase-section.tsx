"use client"

import { useState, useEffect } from "react"
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

export default function PlatformShowcaseSection() {
  const [active, setActive] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
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
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className="animate-spin-slow"
              >
                <path d="M6 1v10M1 6h10" stroke="#2E9DE0" strokeWidth="1" strokeLinecap="round" />
              </svg>
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
            <button
              key={index}
              onClick={() => handleSelect(index)}
              className={`relative p-5 rounded-xl transition-all duration-300 border animate-fade-in-up hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] ${
                active === index
                  ? "bg-white border-[#5BB8F5] shadow-sm"
                  : "bg-[#F7F5F3] border-[rgba(55,50,47,0.12)] hover:border-[#5BB8F5]/50"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-left">
                <div className={`text-xs font-semibold uppercase tracking-wider mb-2 transition-colors duration-300 ${active === index ? "text-[#5BB8F5]" : "text-[#605A57]"}`}>
                  {slide.tag}
                </div>
                <div className={`text-sm font-semibold leading-tight transition-colors duration-300 ${active === index ? "text-[#37322F]" : "text-[#605A57]"}`}>
                  {slide.title}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div
          className={`bg-white rounded-xl border border-[rgba(55,50,47,0.12)] overflow-hidden transition-all duration-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left: Demo */}
            <div className="relative bg-[#F7F5F3] min-h-[500px] lg:min-h-[600px] flex items-center justify-center p-8">
              {slides.map((slide, index) => {
                if (active !== index) return null
                return (
                  <div
                    key={index}
                    className="w-full h-full animate-slide-in"
                  >
                    {slide.component === "edu" && <AlashedEduDemo width="100%" height="100%" />}
                    {slide.component === "code" && <CodeStudioDemo width="100%" height="100%" />}
                    {slide.component === "hardware" && <HardwareCatalogDemo width="100%" height="100%" />}
                    {slide.component === "journal" && <JournalDemo width="100%" height="100%" />}
                  </div>
                )
              })}
            </div>

            {/* Right: Description */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div
                key={active}
                className="space-y-6 animate-fade-slide-in"
              >
                <div>
                  <div
                    className="inline-block px-3 py-1 bg-[#EBF7FF] text-[#2E9DE0] text-xs font-semibold uppercase tracking-wider rounded-full mb-4 border border-[#5BB8F5]/30 animate-scale-in"
                  >
                    {slides[active].tag}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#37322F] mb-3 font-sans">
                    {slides[active].title}
                  </h3>
                  <p className="text-[#605A57] text-base leading-relaxed font-sans">
                    {slides[active].description}
                  </p>
                </div>

                <div className="space-y-3">
                  {slides[active].features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 animate-slide-in-left"
                      style={{ animationDelay: `${i * 80 + 250}ms` }}
                    >
                      <div
                        className="w-6 h-6 rounded-lg bg-[#EBF7FF] flex items-center justify-center flex-shrink-0 animate-scale-bounce"
                        style={{ animationDelay: `${i * 80 + 300}ms` }}
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l2.5 2.5L10 3" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="text-[#37322F] font-medium font-sans">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://edu.alashed.kz"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#5BB8F5] text-white font-semibold rounded-[99px] shadow-[0px_2px_4px_rgba(91,184,245,0.30)] hover:bg-[#2E9DE0] transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 active:scale-95 mt-4 font-sans animate-fade-in-up"
                  style={{ animationDelay: "500ms" }}
                >
                  <span>Попробовать бесплатно</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M10 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: scale(0.92) translateX(40px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateX(0);
          }
        }

        @keyframes fade-slide-in {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes scale-bounce {
          0% {
            transform: scale(0);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.4s ease-out backwards;
        }

        .animate-slide-in {
          animation: slide-in 0.7s cubic-bezier(0.25, 0.1, 0.25, 1) backwards;
        }

        .animate-fade-slide-in {
          animation: fade-slide-in 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) backwards;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.4s cubic-bezier(0.25, 0.1, 0.25, 1) backwards;
        }

        .animate-scale-in {
          animation: scale-in 0.3s cubic-bezier(0.25, 0.1, 0.25, 1) 0.15s backwards;
        }

        .animate-scale-bounce {
          animation: scale-bounce 0.4s cubic-bezier(0.25, 0.1, 0.25, 1) backwards;
        }
      `}</style>
    </div>
  )
}
