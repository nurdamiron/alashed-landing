"use client"

import { useState } from "react"

const CheckIcon = ({ color = "#9CA3AF" }: { color?: string }) => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 3L4.5 8.5L2 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

// Diagonal pattern helper
function DiagonalPattern() {
  return (
    <div className="w-12 self-stretch relative overflow-hidden hidden md:block">
      <div className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
        {Array.from({ length: 200 }).map((_, i) => (
          <div
            key={i}
            className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
          />
        ))}
      </div>
    </div>
  )
}

export default function PricingSection() {
  const [billing, setBilling] = useState<"monthly" | "annually">("annually")

  const schoolPrice = billing === "annually" ? "6 000 ₸" : "7 500 ₸"
  const schoolPeriod = billing === "annually" ? "/мес · годовая подписка" : "/мес · месячная оплата"

  return (
    <div id="pricing" className="w-full flex flex-col justify-center items-center gap-2">
      {/* Header */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] px-6 py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4">
          {/* Badge */}
          <div className="px-[14px] py-[6px] bg-[#EBF7FF] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[#5BB8F5]/30">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 1V11M8.5 3H4.75C4.28587 3 3.84075 3.18437 3.51256 3.51256C3.18437 3.84075 3 4.28587 3 4.75C3 5.21413 3.18437 5.65925 3.51256 5.98744C3.84075 6.31563 4.28587 6.5 4.75 6.5H7.25C7.71413 6.5 8.15925 6.68437 8.48744 7.01256C8.81563 7.34075 9 7.78587 9 8.25C9 8.71413 8.81563 9.15925 8.48744 9.48744C8.15925 9.81563 7.71413 10 7.25 10H3.5" stroke="#2E9DE0" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="text-center text-[#2E9DE0] text-xs font-semibold leading-3 font-sans tracking-wide uppercase">
              Тарифы
            </div>
          </div>
          {/* Title */}
          <div className="self-stretch text-center text-[#49423D] text-3xl md:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
            Один тариф под любую школу
          </div>
          {/* Description */}
          <div className="self-stretch text-center text-[#605A57] text-base font-normal leading-7 font-sans">
            Начните бесплатно — переходите на полный план когда будете готовы.
            <br />
            Без скрытых платежей. Без привязки карты.
          </div>
        </div>
      </div>

      {/* Billing Toggle */}
      <div className="self-stretch px-6 md:px-16 py-9 relative flex justify-center items-center gap-4">
        <div className="w-full max-w-[1060px] h-0 absolute left-1/2 transform -translate-x-1/2 top-[63px] border-t border-[rgba(55,50,47,0.12)] z-0"></div>
        <div className="p-3 relative bg-[rgba(55,50,47,0.03)] border border-[rgba(55,50,47,0.02)] backdrop-blur-[44px] flex justify-center items-center rounded-lg z-20 before:absolute before:inset-0 before:bg-white before:opacity-60 before:rounded-lg before:-z-10">
          <div className="p-[2px] bg-[rgba(55,50,47,0.10)] shadow-[0px_1px_0px_white] rounded-[99px] border-[0.5px] border-[rgba(55,50,47,0.08)] flex justify-center items-center gap-[2px] relative">
            <div
              className={`absolute top-[2px] w-[calc(50%-1px)] h-[calc(100%-4px)] bg-white shadow-[0px_2px_4px_rgba(0,0,0,0.08)] rounded-[99px] transition-all duration-300 ease-in-out ${
                billing === "annually" ? "left-[2px]" : "right-[2px]"
              }`}
            />
            <button
              onClick={() => setBilling("annually")}
              className="px-4 py-1 rounded-[99px] flex justify-center items-center gap-2 transition-colors duration-300 relative z-10 flex-1"
            >
              <div className={`text-[13px] font-medium leading-5 font-sans transition-colors duration-300 ${billing === "annually" ? "text-[#37322F]" : "text-[#6B7280]"}`}>
                Годовой
              </div>
              {billing === "annually" && (
                <div className="px-1.5 py-0.5 bg-[#EBF7FF] rounded text-[#2E9DE0] text-[10px] font-semibold">−20%</div>
              )}
            </button>
            <button
              onClick={() => setBilling("monthly")}
              className="px-4 py-1 rounded-[99px] flex justify-center items-center gap-2 transition-colors duration-300 relative z-10 flex-1"
            >
              <div className={`text-[13px] font-medium leading-5 font-sans transition-colors duration-300 ${billing === "monthly" ? "text-[#37322F]" : "text-[#6B7280]"}`}>
                Месячный
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="self-stretch border-b border-t border-[rgba(55,50,47,0.12)] flex justify-center items-center">
        <div className="flex justify-center items-start w-full">
          <DiagonalPattern />

          <div className="flex-1 flex flex-col md:flex-row justify-center items-stretch gap-0">
            {/* Free Plan */}
            <div className="flex-1 max-w-full self-stretch px-6 py-5 border border-[rgba(50,45,43,0.12)] bg-[rgba(255,255,255,0)] overflow-hidden flex flex-col justify-start items-start gap-12">
              <div className="self-stretch flex flex-col justify-start items-center gap-9">
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="text-[rgba(55,50,47,0.90)] text-lg font-medium leading-7 font-sans">Бесплатно</div>
                  <div className="w-full max-w-[242px] text-[rgba(41,37,35,0.70)] text-sm font-normal leading-5 font-sans">
                    Для одного учителя — попробуйте без риска.
                  </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="flex flex-col justify-start items-start gap-1">
                    <div className="relative h-[60px] flex items-center text-[#37322F] text-5xl font-medium leading-[60px] font-serif">
                      0 ₸
                    </div>
                    <div className="text-[#847971] text-sm font-medium font-sans">навсегда бесплатно</div>
                  </div>
                </div>
                <a
                  href="https://edu.alashed.kz"
                  className="self-stretch px-4 py-[10px] bg-[#5BB8F5] shadow-[0px_2px_4px_rgba(91,184,245,0.30)] overflow-hidden rounded-[99px] flex justify-center items-center hover:bg-[#2E9DE0] transition-colors"
                >
                  <div className="text-white text-[13px] font-semibold leading-5 font-sans">Начать бесплатно</div>
                </a>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                {[
                  "1 учитель",
                  "AI-генерация: 10 ҚМЖ в месяц",
                  "AI-генерация: 5 БЖБ/ТЖБ в месяц",
                  "Электронный журнал (1 класс)",
                  "Доступ к ГОСО 2026 базе",
                ].map((feature, index) => (
                  <div key={index} className="self-stretch flex justify-start items-center gap-[13px]">
                    <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                      <CheckIcon color="#9CA3AF" />
                    </div>
                    <div className="flex-1 text-[rgba(55,50,47,0.80)] text-[12.5px] font-normal leading-5 font-sans">{feature}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* School Plan (Featured) */}
            <div className="flex-1 max-w-full self-stretch px-6 py-5 bg-[#1A6FA8] border border-[#1565A0] overflow-hidden flex flex-col justify-start items-start gap-12">
              <div className="self-stretch flex flex-col justify-start items-center gap-9">
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="flex items-center gap-2">
                    <div className="text-white text-lg font-medium leading-7 font-sans">Школа</div>
                    <div className="px-2 py-0.5 bg-[#5BB8F5]/30 rounded text-[#D6EFFE] text-[11px] font-semibold font-sans">Популярный</div>
                  </div>
                  <div className="w-full max-w-[242px] text-[#A8D8F5] text-sm font-normal leading-5 font-sans">
                    Весь педагогический состав школы. Полный AI.
                  </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="flex flex-col justify-start items-start gap-1">
                    <div className="relative h-[60px] flex items-center text-white text-4xl font-medium leading-[60px] font-serif">
                      {schoolPrice}
                    </div>
                    <div className="text-[#A8D8F5] text-sm font-medium font-sans">{schoolPeriod}</div>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="self-stretch px-4 py-[10px] bg-white shadow-[0px_2px_4px_rgba(0,0,0,0.12)] overflow-hidden rounded-[99px] flex justify-center items-center hover:bg-[#EBF7FF] transition-colors"
                >
                  <div className="text-[#1A6FA8] text-[13px] font-semibold leading-5 font-sans">Подключить школу</div>
                </a>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                {[
                  "Неограниченное число учителей",
                  "Безлимитная AI-генерация ҚМЖ, БЖБ, ТЖБ",
                  "Электронный журнал для всей школы",
                  "Расписание и аналитика",
                  "Smart Inventory (учёт оборудования)",
                  "Alashed Code Studio (робототехника)",
                  "Геймификация для учеников",
                  "Приоритетная поддержка",
                ].map((feature, index) => (
                  <div key={index} className="self-stretch flex justify-start items-center gap-[13px]">
                    <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                      <CheckIcon color="#FF8000" />
                    </div>
                    <div className="flex-1 text-[#F0EFEE] text-[12.5px] font-normal leading-5 font-sans">{feature}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Network Plan */}
            <div className="flex-1 max-w-full self-stretch px-6 py-5 bg-white border border-[#E0DEDB] overflow-hidden flex flex-col justify-start items-start gap-12">
              <div className="self-stretch flex flex-col justify-start items-center gap-9">
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="text-[rgba(55,50,47,0.90)] text-lg font-medium leading-7 font-sans">Сеть школ</div>
                  <div className="w-full max-w-[242px] text-[rgba(41,37,35,0.70)] text-sm font-normal leading-5 font-sans">
                    Несколько школ или управление образования района.
                  </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="flex flex-col justify-start items-start gap-1">
                    <div className="relative h-[60px] flex items-center text-[#37322F] text-4xl font-medium leading-[60px] font-serif">
                      По договору
                    </div>
                    <div className="text-[#847971] text-sm font-medium font-sans">индивидуальные условия</div>
                  </div>
                </div>
                <a
                  href="mailto:dias@alashed.kz"
                  className="self-stretch px-4 py-[10px] bg-[#37322F] overflow-hidden rounded-[99px] flex justify-center items-center hover:bg-[#49423D] transition-colors"
                >
                  <div className="text-[#FBFAF9] text-[13px] font-medium leading-5 font-sans">Обсудить условия</div>
                </a>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                {[
                  "Любое количество школ",
                  "Единая аналитика по сети",
                  "Выделенный менеджер",
                  "Кастомный онбординг и обучение",
                  "SLA и приоритетный деплой",
                  "Интеграция с МОН / e-mektep",
                  "Помощь с тендерами и госзакупками",
                  "Заказ оборудования оптом",
                ].map((feature, index) => (
                  <div key={index} className="self-stretch flex justify-start items-center gap-[13px]">
                    <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                      <CheckIcon color="#9CA3AF" />
                    </div>
                    <div className="flex-1 text-[rgba(55,50,47,0.80)] text-[12.5px] font-normal leading-5 font-sans">{feature}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <DiagonalPattern />
        </div>
      </div>

      {/* Footer note */}
      <div className="self-stretch py-6 flex justify-center items-center">
        <p className="text-[#847971] text-sm font-normal font-sans text-center">
          Все тарифы включают бесплатный онбординг и техническую поддержку · B2B оплата через тендеры
        </p>
      </div>
    </div>
  )
}
