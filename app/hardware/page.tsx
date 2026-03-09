import Link from "next/link"
import Navbar from "@/components/navbar"
import FooterSection from "@/components/footer-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hardware — Alashed",
  description: "Официальный импорт Arduino, ESP32, Raspberry Pi в Казахстан. Быстрая доставка, гарантия, поддержка.",
}

const catalog = [
  {
    name: "Arduino Uno R3",
    category: "Микроконтроллеры",
    desc: "Классический стартовый микроконтроллер. Подходит для большинства школьных проектов и уроков информатики.",
    badge: "Хит продаж",
    badgeColor: "#1A6FA8",
    badgeBg: "#EBF7FF",
    badgeBorder: "#5BB8F5",
  },
  {
    name: "Arduino Nano",
    category: "Микроконтроллеры",
    desc: "Компактная версия Arduino. Идеально для встраиваемых проектов и носимой электроники.",
    badge: null,
  },
  {
    name: "ESP32 Dev Board",
    category: "Wi-Fi / IoT",
    desc: "Мощный микроконтроллер с Wi-Fi и Bluetooth. Для IoT-проектов, умного дома и телеметрии.",
    badge: "Популярное",
    badgeColor: "#059669",
    badgeBg: "#ECFDF5",
    badgeBorder: "#6EE7B7",
  },
  {
    name: "Raspberry Pi 4",
    category: "Одноплатные ПК",
    desc: "Полноценный миникомпьютер. Для проектов с Linux, машинным обучением и медиацентров.",
    badge: null,
  },
  {
    name: "Набор датчиков 37-в-1",
    category: "Сенсоры",
    desc: "Полный набор для старта: температура, влажность, свет, звук, ультразвук, ИК и многое другое.",
    badge: "Для начинающих",
    badgeColor: "#D97706",
    badgeBg: "#FEF3C7",
    badgeBorder: "#FCD34D",
  },
  {
    name: "Образовательный робот-набор",
    category: "Роботы",
    desc: "Конструктор колёсного робота с управлением через Arduino. Всё включено: шасси, моторы, драйверы.",
    badge: "Для школ",
    badgeColor: "#7C3AED",
    badgeBg: "#F5F3FF",
    badgeBorder: "#C4B5FD",
  },
]

const advantages = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Официальный импорт",
    desc: "Прямые поставки от производителей. Сертифицированное оборудование, таможенное оформление и полный пакет документов для школ.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Быстрая доставка",
    desc: "Доставка по всему Казахстану за 2–5 рабочих дней. Экспресс-доставка в Алматы и Астану на следующий день.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Гарантия и замена",
    desc: "12 месяцев гарантии на всё оборудование. Быстрая замена при заводском браке — без лишней бюрократии.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="9" cy="7" r="4" stroke="#2E9DE0" strokeWidth="1.5"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Поддержка для школ",
    desc: "Помощь с оформлением заявок для государственных закупок. Счета, акты и все необходимые документы для бухгалтерии.",
  },
]

export default function HardwarePage() {
  return (
    <div className="w-full min-h-screen bg-[#F7F5F3]">
      {/* Nav */}
      <div className="w-full border-b border-[rgba(55,50,47,0.12)] bg-[#F7F5F3] sticky top-0 z-30">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6 h-14 flex items-center">
          <Navbar />
        </div>
      </div>

      {/* Hero */}
      <div className="max-w-[1060px] mx-auto px-4 sm:px-6 pt-16 pb-20 sm:pt-20 sm:pb-28">
        <div className="max-w-[680px]">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FFF7ED] rounded-full border border-[#FDBA74]/50 mb-6">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <rect x="1" y="4" width="10" height="5" rx="0.75" stroke="#EA580C" strokeWidth="1"/>
              <path d="M3.5 4V3a2.5 2.5 0 015 0v1" stroke="#EA580C" strokeWidth="1"/>
              <path d="M3.5 6.5h1.5M7 6.5h1.5" stroke="#EA580C" strokeWidth="1" strokeLinecap="round"/>
            </svg>
            <span className="text-[#EA580C] text-xs font-semibold font-sans uppercase tracking-wide">Hardware</span>
          </div>

          <h1 className="text-[#37322F] text-3xl sm:text-4xl md:text-[44px] font-semibold font-serif leading-tight tracking-tight mb-5">
            Официальный импорт Arduino и ESP32 в Казахстан
          </h1>
          <p className="text-[#605A57] text-base sm:text-lg font-sans leading-7 mb-8 max-w-[540px]">
            Сертифицированное оборудование для школьных STEM-лабораторий. Прямые поставки от производителей, полный пакет документов для госзакупок.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link href="/#contact"
              className="px-6 py-3 bg-[#EA580C] hover:bg-[#C2410C] transition-colors rounded-full text-white text-sm font-semibold font-sans">
              Оформить заявку
            </Link>
            <Link href="/#contact"
              className="px-6 py-3 bg-white border border-[rgba(55,50,47,0.20)] hover:bg-[#F0EFEE] transition-colors rounded-full text-[#37322F] text-sm font-medium font-sans">
              Получить прайс-лист
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-[rgba(55,50,47,0.10)]">
            {[
              { value: "2–5 дней", label: "доставка по Казахстану" },
              { value: "12 мес", label: "гарантия" },
              { value: "50+", label: "позиций в каталоге" },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-[#37322F] text-2xl font-semibold font-serif">{s.value}</div>
                <div className="text-[rgba(55,50,47,0.50)] text-sm font-sans mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Catalog */}
      <div className="bg-white border-t border-b border-[rgba(55,50,47,0.10)]">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="mb-10">
            <h2 className="text-[#37322F] text-2xl sm:text-3xl font-semibold font-serif leading-tight">Каталог оборудования</h2>
            <p className="text-[#605A57] text-sm font-sans mt-2">Популярные позиции для STEM-лабораторий</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {catalog.map((item, i) => (
              <div key={i} className="bg-[#F7F5F3] border border-[rgba(55,50,47,0.10)] rounded-2xl p-6 flex flex-col gap-3 hover:shadow-[0px_4px_20px_rgba(55,50,47,0.07)] transition-shadow">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[rgba(55,50,47,0.45)] text-xs font-semibold font-sans uppercase tracking-wide">{item.category}</span>
                  {item.badge && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold font-sans border flex-shrink-0"
                      style={{ color: item.badgeColor, background: item.badgeBg, borderColor: item.badgeBorder }}>
                      {item.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-[#37322F] text-base font-semibold font-sans">{item.name}</h3>
                <p className="text-[#605A57] text-sm font-sans leading-6 flex-1">{item.desc}</p>
                <Link href="/#contact"
                  className="inline-flex items-center gap-1.5 text-[#2E9DE0] text-sm font-semibold font-sans hover:text-[#1A6FA8] transition-colors mt-1">
                  Уточнить наличие
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M3 6h6M7 4l2 2-2 2" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Advantages */}
      <div className="max-w-[1060px] mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="mb-10">
          <h2 className="text-[#37322F] text-2xl sm:text-3xl font-semibold font-serif leading-tight">Почему Alashed Hardware</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {advantages.map((a, i) => (
            <div key={i} className="bg-white border border-[rgba(55,50,47,0.10)] rounded-2xl p-6 flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#EBF7FF] flex items-center justify-center flex-shrink-0">
                {a.icon}
              </div>
              <div>
                <h3 className="text-[#37322F] text-base font-semibold font-sans mb-1.5">{a.title}</h3>
                <p className="text-[#605A57] text-sm font-sans leading-6">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-[1060px] mx-auto px-4 sm:px-6 pb-14 sm:pb-20">
        <div className="bg-white border border-[rgba(55,50,47,0.12)] rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-[#37322F] text-2xl sm:text-3xl font-semibold font-serif mb-3">
            Оснастите STEM-лабораторию
          </h2>
          <p className="text-[#605A57] text-sm font-sans leading-6 mb-8 max-w-md mx-auto">
            Подберём комплект оборудования под ваш бюджет. Поможем с документами для государственных закупок.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/#contact"
              className="px-6 py-3 bg-[#EA580C] hover:bg-[#C2410C] transition-colors rounded-full text-white text-sm font-semibold font-sans">
              Оставить заявку
            </Link>
            <Link href="/#contact"
              className="px-6 py-3 bg-white border border-[rgba(55,50,47,0.20)] hover:bg-[#F7F5F3] transition-colors rounded-full text-[#37322F] text-sm font-medium font-sans">
              Скачать прайс-лист
            </Link>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  )
}
