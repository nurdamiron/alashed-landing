"use client"

import { useState } from "react"

export default function ROICalculatorSection() {
  const [teachers, setTeachers] = useState(20)
  const [docsPerWeek, setDocsPerWeek] = useState(3)

  const hoursPerDoc = 2
  const minutesWithAI = 2
  const weeksPerYear = 36

  const hoursSaved = teachers * docsPerWeek * (hoursPerDoc - minutesWithAI / 60) * weeksPerYear
  const daysEquivalent = Math.round(hoursSaved / 8)
  const moneySaved = Math.round(hoursSaved * 1500) // 1500 ₸ per hour estimate

  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] flex flex-col justify-start items-center gap-4">
          <div className="px-[14px] py-[6px] bg-[#EBF7FF] overflow-hidden rounded-[90px] flex items-center gap-[8px] border border-[#5BB8F5]/30">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 1V11M8.5 3H4.75C3.78 3 3 3.78 3 4.75s.78 1.75 1.75 1.75H7.25C8.22 6.5 9 7.28 9 8.25S8.22 10 7.25 10H3.5" stroke="#2E9DE0" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="text-[#2E9DE0] text-xs font-semibold leading-3 font-sans tracking-wide uppercase">
              Калькулятор
            </div>
          </div>
          <div className="self-stretch text-center text-[#49423D] text-2xl md:text-[28px] font-semibold leading-tight font-sans tracking-tight">
            Сколько времени сэкономит ваша школа?
          </div>
          <div className="self-stretch text-center text-[#605A57] text-base font-normal leading-7 font-sans">
            Посчитайте реальную экономию от перехода на AI-генерацию документов.
          </div>
        </div>
      </div>

      {/* Calculator */}
      <div className="self-stretch flex justify-center items-start">
        <div className="w-12 self-stretch relative overflow-hidden hidden md:block">
          <div className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            {Array.from({ length: 200 }).map((_, i) => (
              <div key={i} className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]" />
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col md:flex-row border-l border-r border-[rgba(55,50,47,0.12)]">
          {/* Controls */}
          <div className="flex-1 px-8 md:px-12 py-10 border-b md:border-b-0 md:border-r border-[rgba(55,50,47,0.12)] flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <label className="text-[#37322F] text-sm font-medium font-sans">Количество учителей</label>
                <span className="text-[#2E9DE0] text-lg font-semibold font-sans">{teachers}</span>
              </div>
              <input
                type="range"
                min={1}
                max={100}
                value={teachers}
                onChange={(e) => setTeachers(Number(e.target.value))}
                className="w-full accent-[#5BB8F5] h-1.5 rounded-full cursor-pointer"
              />
              <div className="flex justify-between text-[rgba(55,50,47,0.40)] text-xs font-sans">
                <span>1</span>
                <span>50</span>
                <span>100</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <label className="text-[#37322F] text-sm font-medium font-sans">Документов в неделю на учителя</label>
                <span className="text-[#2E9DE0] text-lg font-semibold font-sans">{docsPerWeek}</span>
              </div>
              <input
                type="range"
                min={1}
                max={10}
                value={docsPerWeek}
                onChange={(e) => setDocsPerWeek(Number(e.target.value))}
                className="w-full accent-[#5BB8F5] h-1.5 rounded-full cursor-pointer"
              />
              <div className="flex justify-between text-[rgba(55,50,47,0.40)] text-xs font-sans">
                <span>1</span>
                <span>5</span>
                <span>10</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-4 border-t border-[rgba(55,50,47,0.08)]">
              <p className="text-[rgba(55,50,47,0.50)] text-xs font-sans leading-5">
                * Расчёт: 2 часа на ручное составление vs 2 минуты с AI. Учебный год — 36 недель.
              </p>
            </div>
          </div>

          {/* Results */}
          <div className="flex-1 px-8 md:px-12 py-10 flex flex-col gap-6 justify-center">
            <div className="text-[#605A57] text-sm font-medium font-sans uppercase tracking-wide">Ваша экономия в год:</div>

            <div className="flex flex-col gap-4">
              <div className="p-5 bg-[#EBF7FF] rounded-xl border border-[#5BB8F5]/20 flex flex-col gap-1">
                <div className="text-[#37322F] text-3xl font-semibold font-sans">
                  {hoursSaved.toLocaleString("ru")} ч
                </div>
                <div className="text-[#605A57] text-sm font-normal font-sans">рабочего времени учителей</div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 bg-white border border-[rgba(55,50,47,0.12)] rounded-xl flex flex-col gap-1">
                  <div className="text-[#37322F] text-2xl font-semibold font-sans">{daysEquivalent}</div>
                  <div className="text-[#605A57] text-xs font-normal font-sans leading-4">рабочих дней эквивалент</div>
                </div>
                <div className="p-4 bg-white border border-[rgba(55,50,47,0.12)] rounded-xl flex flex-col gap-1">
                  <div className="text-[#37322F] text-2xl font-semibold font-sans">
                    {(moneySaved / 1000).toFixed(0)}К ₸
                  </div>
                  <div className="text-[#605A57] text-xs font-normal font-sans leading-4">стоимость этого времени</div>
                </div>
              </div>
            </div>

            <a
              href="https://edu.alashed.kz"
              className="self-stretch px-4 py-[10px] bg-[#5BB8F5] shadow-[0px_2px_4px_rgba(91,184,245,0.30)] overflow-hidden rounded-[99px] flex justify-center items-center gap-2 hover:bg-[#2E9DE0] transition-colors"
            >
              <div className="text-white text-[13px] font-semibold leading-5 font-sans">Начать экономить</div>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7H11.5M11.5 7L8 3.5M11.5 7L8 10.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
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
