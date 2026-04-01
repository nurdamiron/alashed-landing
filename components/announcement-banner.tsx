"use client"

import { useState } from "react"
import { Cancel01Icon } from "hugeicons-react"

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="w-full bg-[#1A6FA8] px-4 py-2 flex justify-center items-center gap-3 relative">
      <div className="flex items-center gap-2 flex-wrap justify-center">
        <span className="text-[#D6EFFE] text-xs font-semibold uppercase tracking-wide font-sans">Пилот 2025–2026</span>
        <span className="w-1 h-1 rounded-full bg-[#5BB8F5]/60" />
        <span className="text-white text-xs font-normal font-sans">
          Принимаем заявки от школ Казахстана — бесплатный доступ на весь учебный год
        </span>
        <a
          href="#contact"
          className="text-[#D6EFFE] text-xs font-semibold font-sans underline underline-offset-2 hover:text-white transition-colors whitespace-nowrap"
        >
          Подать заявку →
        </a>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A8D8F5] hover:text-white transition-colors"
        aria-label="Закрыть"
      >
        <Cancel01Icon size={14} color="currentColor" />
      </button>
    </div>
  )
}
