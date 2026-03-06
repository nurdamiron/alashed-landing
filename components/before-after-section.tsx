"use client"

import { useState } from "react"

const items = [
  {
    before: { label: "2 часа", desc: "составить КМЖ вручную" },
    after: { label: "2 минуты", desc: "AI генерирует с ОМ-кодами" },
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 1v6l4 2" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="8" cy="8" r="7" stroke="#2E9DE0" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    before: { label: "5–7 систем", desc: "журнал + планы + тесты отдельно" },
    after: { label: "1 платформа", desc: "всё связано и работает вместе" },
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="6" height="6" rx="1" stroke="#2E9DE0" strokeWidth="1.5"/>
        <rect x="9" y="1" width="6" height="6" rx="1" stroke="#2E9DE0" strokeWidth="1.5"/>
        <rect x="1" y="9" width="6" height="6" rx="1" stroke="#2E9DE0" strokeWidth="1.5"/>
        <rect x="9" y="9" width="6" height="6" rx="1" stroke="#2E9DE0" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    before: { label: "0 данных", desc: "директор не знает что происходит" },
    after: { label: "Аналитика", desc: "реальные данные по каждому классу" },
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 12l3-4 3 2 3-5 3 3" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    before: { label: "Симулятор", desc: "программирование без реального железа" },
    after: { label: "Деплой", desc: "код сразу на Arduino/ESP32/Micro:bit" },
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="12" height="8" rx="1" stroke="#2E9DE0" strokeWidth="1.5"/>
        <path d="M6 8h4M8 6v4" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function BeforeAfterSection() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] flex flex-col justify-start items-center gap-4">
          <div className="px-[14px] py-[6px] bg-[#EBF7FF] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[#5BB8F5]/30">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 6h10M6 1l5 5-5 5" stroke="#2E9DE0" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="text-center text-[#2E9DE0] text-xs font-semibold leading-3 font-sans tracking-wide uppercase">
              До / После
            </div>
          </div>
          <div className="self-stretch text-center text-[#49423D] text-3xl md:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
            Как меняется школа с Alashed
          </div>
          <div className="self-stretch text-center text-[#605A57] text-base font-normal leading-7 font-sans">
            Одна платформа устраняет главные боли учителей и директоров.
          </div>
        </div>
      </div>

      {/* Comparison rows */}
      <div className="self-stretch flex justify-center items-start">
        <div className="w-12 self-stretch relative overflow-hidden hidden md:block">
          <div className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            {Array.from({ length: 200 }).map((_, i) => (
              <div key={i} className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]" />
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          {/* Column headers */}
          <div className="grid grid-cols-2 border-b border-[rgba(55,50,47,0.12)]">
            <div className="px-6 py-3 border-r border-[rgba(55,50,47,0.12)] flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#D97706]" />
              <span className="text-[#847971] text-xs font-semibold uppercase tracking-wide font-sans">Было — без Alashed</span>
            </div>
            <div className="px-6 py-3 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#5BB8F5]" />
              <span className="text-[#2E9DE0] text-xs font-semibold uppercase tracking-wide font-sans">Стало — с Alashed</span>
            </div>
          </div>

          {items.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-2 border-b border-[rgba(55,50,47,0.12)] transition-colors duration-200 ${hovered === index ? "bg-[#F0FAFF]/40" : ""}`}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Before */}
              <div className="px-6 py-5 border-r border-[rgba(55,50,47,0.12)] flex items-center gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${hovered === index ? "bg-[#FEF3C7]" : "bg-[rgba(55,50,47,0.06)]"}`}>
                  <span className="text-[#D97706] text-base">✕</span>
                </div>
                <div>
                  <div className="text-[#847971] text-sm font-medium leading-5 font-sans line-through decoration-[#D97706]/40">
                    {item.before.label}
                  </div>
                  <div className="text-[rgba(55,50,47,0.55)] text-xs leading-4 font-sans mt-0.5">
                    {item.before.desc}
                  </div>
                </div>
              </div>

              {/* After */}
              <div className="px-6 py-5 flex items-center gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${hovered === index ? "bg-[#D6EFFE]" : "bg-[#EBF7FF]"}`}>
                  {item.icon}
                </div>
                <div>
                  <div className="text-[#37322F] text-sm font-semibold leading-5 font-sans">
                    {item.after.label}
                  </div>
                  <div className="text-[#605A57] text-xs leading-4 font-sans mt-0.5">
                    {item.after.desc}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-12 self-stretch relative overflow-hidden hidden md:block">
          <div className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            {Array.from({ length: 200 }).map((_, i) => (
              <div key={i} className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
