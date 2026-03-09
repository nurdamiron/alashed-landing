"use client"

import { useState, useEffect, useRef } from "react"

const slides = [
  {
    tag: "Alashed EDU",
    title: "AI генерирует КМЖ за 2 минуты",
    description:
      "Выберите предмет, класс и тему — AI автоматически создаёт краткосрочный план с привязкой к ОМ-кодам ГОСО 2026. Учитель проверяет и сохраняет.",
    image: "/modern-dashboard-interface-with-data-visualization.jpg",
    features: ["Автопривязка к ОМ-кодам", "ГОСО 2026 из коробки", "ФО, БЖБ, ТЖБ одним кликом"],
  },
  {
    tag: "CodeStudio",
    title: "Браузерное IDE — без установки",
    description:
      "Ученики открывают редактор в браузере и пишут код на Python, JavaScript или Scratch. Готовый проект деплоится напрямую на Arduino или ESP32.",
    image: "/team-collaboration-interface-with-shared-workspace.jpg",
    features: ["Python, JS, Scratch", "Деплой на реальное железо", "AI-подсказки в редакторе"],
  },
  {
    tag: "Аналитика директора",
    title: "Полная картина по всей школе",
    description:
      "Директор видит прогресс каждого класса, активность учителей и статус документов в реальном времени. Всё в одном дашборде без Excel-отчётов.",
    image: "/analytics-dashboard-with-charts-graphs-and-data-vi.jpg",
    features: ["Активность учителей", "Прогресс по классам", "Отчёты без Excel"],
  },
  {
    tag: "Электронный журнал",
    title: "Журнал, расписание и оценки",
    description:
      "Удобный интерфейс для выставления оценок, ведения посещаемости и планирования уроков. Связан с AI-помощником и аналитикой директора.",
    image: "/modern-dashboard-interface-for-schedule-planning-w.jpg",
    features: ["Оценки и посещаемость", "Расписание занятий", "Связь с AI-планами"],
  },
]

const SLIDE_DURATION = 5000

export default function PlatformShowcaseSection() {
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const activeRef = useRef(0)

  const startCycle = (index: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (progressRef.current) clearInterval(progressRef.current)

    activeRef.current = index
    setActive(index)
    setProgress(0)

    let p = 0
    progressRef.current = setInterval(() => {
      p += 100 / (SLIDE_DURATION / 100)
      if (p >= 100) p = 100
      setProgress(p)
    }, 100)

    intervalRef.current = setInterval(() => {
      const next = (activeRef.current + 1) % slides.length
      startCycle(next)
    }, SLIDE_DURATION)
  }

  useEffect(() => {
    startCycle(0)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (progressRef.current) clearInterval(progressRef.current)
    }
  }, [])

  const handleSelect = (index: number) => {
    startCycle(index)
  }

  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center">
        <div className="w-full max-w-[586px] flex flex-col justify-start items-center gap-4">
          <div className="px-[14px] py-[6px] bg-[#EBF7FF] overflow-hidden rounded-[90px] flex items-center gap-[8px] border border-[#5BB8F5]/30">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <rect x="1" y="1" width="4" height="4" stroke="#2E9DE0" strokeWidth="1" fill="none" />
              <rect x="7" y="1" width="4" height="4" stroke="#2E9DE0" strokeWidth="1" fill="none" />
              <rect x="1" y="7" width="4" height="4" stroke="#2E9DE0" strokeWidth="1" fill="none" />
              <rect x="7" y="7" width="4" height="4" stroke="#2E9DE0" strokeWidth="1" fill="none" />
            </svg>
            <span className="text-[#2E9DE0] text-xs font-semibold leading-3 font-sans tracking-wide uppercase">
              Платформа
            </span>
          </div>
          <div className="self-stretch text-center text-[#49423D] text-2xl md:text-[28px] font-semibold leading-tight font-sans tracking-tight">
            Посмотрите как это работает
          </div>
          <div className="self-stretch text-center text-[#605A57] text-base font-normal leading-7 font-sans">
            Каждый модуль решает конкретную задачу — вместе они дают полный цикл управления школой.
          </div>
        </div>
      </div>

      {/* Showcase */}
      <div className="self-stretch flex justify-center items-start">
        {/* Left decorative pattern */}
        <div className="w-12 self-stretch relative overflow-hidden hidden md:block flex-shrink-0">
          <div className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            {Array.from({ length: 200 }).map((_, i) => (
              <div key={i} className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]" />
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col lg:flex-row border-l border-r border-[rgba(55,50,47,0.12)] min-h-[480px]">
          {/* Tabs — left on desktop, top on mobile */}
          <div className="w-full lg:w-[280px] flex-shrink-0 flex flex-row lg:flex-col border-b lg:border-b-0 lg:border-r border-[rgba(55,50,47,0.12)] overflow-x-auto lg:overflow-x-visible">
            {slides.map((slide, index) => {
              const isActive = active === index
              return (
                <button
                  key={index}
                  onClick={() => handleSelect(index)}
                  className={`relative flex-shrink-0 lg:flex-shrink text-left px-5 py-4 lg:py-5 flex flex-col gap-1 transition-colors duration-200 border-r lg:border-r-0 lg:border-b border-[rgba(55,50,47,0.10)] last:border-r-0 last:border-b-0 ${
                    isActive ? "bg-white" : "hover:bg-[#F7F5F3]"
                  }`}
                >
                  {/* Progress bar at top */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-[#EBF7FF]">
                    {isActive && (
                      <div
                        className="bg-[#5BB8F5] h-full transition-none"
                        style={{ width: `${progress}%` }}
                      />
                    )}
                  </div>

                  <span
                    className={`text-[11px] font-semibold font-sans uppercase tracking-wide ${
                      isActive ? "text-[#2E9DE0]" : "text-[rgba(55,50,47,0.40)]"
                    }`}
                  >
                    {slide.tag}
                  </span>
                  <span
                    className={`text-sm font-semibold leading-snug font-sans hidden lg:block ${
                      isActive ? "text-[#37322F]" : "text-[rgba(55,50,47,0.55)]"
                    }`}
                  >
                    {slide.title}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col lg:flex-row">
            {/* Screenshot */}
            <div className="flex-1 relative overflow-hidden bg-[#F0F4F8] min-h-[240px] lg:min-h-0">
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                  style={{ opacity: active === index ? 1 : 0 }}
                />
              ))}
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

              {/* Active tag badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[#37322F] text-[11px] font-semibold font-sans border border-white/50">
                  {slides[active].tag}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="w-full lg:w-[280px] flex-shrink-0 px-6 py-8 lg:px-8 lg:py-10 flex flex-col gap-5 border-t lg:border-t-0 lg:border-l border-[rgba(55,50,47,0.12)]">
              <div
                key={active}
                className="flex flex-col gap-4"
                style={{ animation: "fadeSlideIn 0.4s ease" }}
              >
                <h3 className="text-[#37322F] text-lg font-semibold leading-snug font-sans">
                  {slides[active].title}
                </h3>
                <p className="text-[#605A57] text-sm font-normal leading-6 font-sans">
                  {slides[active].description}
                </p>
                <ul className="flex flex-col gap-2 mt-1">
                  {slides[active].features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#EBF7FF] flex items-center justify-center flex-shrink-0">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M1.5 4l1.5 1.5 3-3" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="text-[rgba(55,50,47,0.80)] text-[13px] font-normal font-sans">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://edu.alashed.kz"
                className="mt-auto self-start px-5 py-2 bg-[#5BB8F5] hover:bg-[#2E9DE0] text-white text-[13px] font-semibold font-sans rounded-full transition-colors flex items-center gap-2"
              >
                Попробовать
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M7 3l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right decorative pattern */}
        <div className="w-12 self-stretch relative overflow-hidden hidden md:block flex-shrink-0">
          <div className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            {Array.from({ length: 200 }).map((_, i) => (
              <div key={i} className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]" />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
