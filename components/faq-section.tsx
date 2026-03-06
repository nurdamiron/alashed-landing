"use client"

import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "Что такое Alashed и для кого это?",
    answer:
      "Alashed — это полная STEM-экосистема для школ Казахстана. Мы объединяем AI-помощника для учителей, браузерное IDE для информатики и робототехники, официальный импорт оборудования и помощь в соревнованиях.",
  },
  {
    question: "Как работает генерация документов AI?",
    answer:
      "AI знает профиль учителя, его классы, текущую неделю и успеваемость каждого ученика. Он автоматически генерирует КМЖ, ФО, БЖБ, ТЖБ с привязкой к ОМ-кодам ГОСО 2026 за 2 минуты вместо 2 часов.",
  },
  {
    question: "Чем CodeStudio отличается от других IDE?",
    answer:
      "Ключевое отличие — деплой на реальное железо, а не симуляция. Ученики программируют на Python, JavaScript, Scratch и работают с Arduino, ESP32, Micro:bit. Wokwi/Tinkercad для практики, но цель — настоящее устройство.",
  },
  {
    question: "Как заказать оборудование?",
    answer:
      "Мы — официальный импортёр Arduino, ESP32, Raspberry Pi, Micro:bit в Казахстан. Заказ прямо из дашборда директора, без посредников. Управление инвентарём школы тоже внутри платформы.",
  },
  {
    question: "Какие соревнования вы поддерживаете?",
    answer:
      "Мы соорганизуем и помогаем школам участвовать в Infomatrix (Азия), KazRobotics, ITFest, WRO. Подготовка команд, сопровождение и консультации включены в пакет.",
  },
  {
    question: "Как начать работу с Alashed?",
    answer:
      "Подайте заявку на пилот 2025–2026. Мы подключим вашу школу, настроим платформу и проведём обучение учителей. B2B подписка — школы платят из бюджета через тендеры или прямые переговоры.",
  },
]

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div className="w-full flex justify-center items-start">
      <div className="flex-1 px-4 md:px-12 py-16 md:py-20 flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-12">
        {/* Left Column - Header */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-start gap-4 lg:py-5">
          <div className="px-[14px] py-[6px] bg-[#EBF7FF] overflow-hidden rounded-[90px] flex items-center gap-[8px] border border-[#5BB8F5]/30 self-start">
            <span className="text-[#2E9DE0] text-xs font-semibold leading-3 font-sans tracking-wide uppercase">FAQ</span>
          </div>
          <div className="w-full flex flex-col justify-center text-[#49423D] font-semibold leading-tight md:leading-[44px] font-sans text-4xl tracking-tight">
            Частые вопросы
          </div>
          <div className="w-full text-[#605A57] text-base font-normal leading-7 font-sans">
            Всё, что нужно знать о платформе Alashed
            <br className="hidden md:block" />
            для школ Казахстана.
          </div>
        </div>

        {/* Right Column - FAQ Items */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col">
            {faqData.map((item, index) => {
              const isOpen = openItems.includes(index)

              return (
                <div key={index} className="w-full border-b border-[rgba(73,66,61,0.16)] overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-5 py-[18px] flex justify-between items-center gap-5 text-left hover:bg-[rgba(73,66,61,0.02)] transition-colors duration-200"
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1 text-[#49423D] text-base font-medium leading-6 font-sans">
                      {item.question}
                    </div>
                    <div className="flex justify-center items-center">
                      <ChevronDownIcon
                        className={`w-6 h-6 transition-transform duration-300 ease-in-out ${
                          isOpen ? "rotate-180 text-[#5BB8F5]" : "rotate-0 text-[rgba(73,66,61,0.50)]"
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-[18px] text-[#605A57] text-sm font-normal leading-6 font-sans">
                      {item.answer}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
