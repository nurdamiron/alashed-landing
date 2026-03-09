import Link from "next/link"
import Navbar from "@/components/navbar"
import FooterSection from "@/components/footer-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Для директоров — Alashed",
  description: "Аналитика школы, управление инвентарём и цифровая отчётность в одном дашборде.",
}

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="#2E9DE0" strokeWidth="1.5"/>
        <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="#2E9DE0" strokeWidth="1.5"/>
        <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="#2E9DE0" strokeWidth="1.5"/>
        <path d="M17.5 14v7M14 17.5h7" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Единый дашборд школы",
    desc: "Все показатели в одном экране: успеваемость по классам, активность учителей, статусы документов. Никаких Excel-таблиц и ручного сбора данных.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M18 20V10M12 20V4M6 20v-6" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Аналитика успеваемости",
    desc: "Динамика оценок по предметам, классам и четвертям. Автоматические алерты при падении успеваемости — принимайте решения до того, как ситуация ухудшится.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2M9 12h6M9 16h4" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Контроль документации",
    desc: "Видите в реальном времени: кто из учителей сдал КМЖ, кто ещё нет. Журнал проверок, статусы и комментарии — без бумажных обходов.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="7" width="20" height="14" rx="2" stroke="#2E9DE0" strokeWidth="1.5"/>
        <path d="M16 7V5a2 2 0 0 0-4 0v2M12 12v4M10 14h4" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Инвентарь оборудования",
    desc: "Учёт всего оборудования: Arduino, компьютеры, проекторы. История обслуживания, плановые замены, закупки. Интеграция с официальным импортом Alashed Hardware.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2v6h6M16 13H8M16 17H8" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Автоматические отчёты",
    desc: "Генерация квартальных и годовых отчётов для управления образования в один клик. Соответствие форматам МОН РК — без ручного заполнения бланков.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="9" cy="7" r="4" stroke="#2E9DE0" strokeWidth="1.5"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Управление педколлективом",
    desc: "Профили учителей, нагрузка, повышение квалификации и сертификаты в одном месте. Планирование расписания с учётом доступности и компетенций.",
  },
]

const metrics = [
  { value: "48 ч", label: "подключение школы", sub: "от регистрации до работы" },
  { value: "3×", label: "быстрее отчётность", sub: "автоматическая генерация" },
  { value: "100%", label: "соответствие МОН", sub: "актуальные форматы" },
  { value: "0", label: "бумажных обходов", sub: "всё в цифре" },
]

export default function ForDirectorsPage() {
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#EBF7FF] rounded-full border border-[#5BB8F5]/30 mb-6">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <rect x="1" y="1" width="4" height="4" rx="0.75" stroke="#2E9DE0" strokeWidth="1"/>
              <rect x="7" y="1" width="4" height="4" rx="0.75" stroke="#2E9DE0" strokeWidth="1"/>
              <rect x="1" y="7" width="4" height="4" rx="0.75" stroke="#2E9DE0" strokeWidth="1"/>
              <path d="M9 7v4M7 9h4" stroke="#2E9DE0" strokeWidth="1" strokeLinecap="round"/>
            </svg>
            <span className="text-[#2E9DE0] text-xs font-semibold font-sans uppercase tracking-wide">Для директоров</span>
          </div>

          <h1 className="text-[#37322F] text-3xl sm:text-4xl md:text-[44px] font-semibold font-serif leading-tight tracking-tight mb-5">
            Управляйте школой на основе данных
          </h1>
          <p className="text-[#605A57] text-base sm:text-lg font-sans leading-7 mb-8 max-w-[540px]">
            Аналитика успеваемости, контроль документации, управление оборудованием — всё в одном дашборде. Принимайте решения быстрее, тратьте меньше времени на отчёты.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link href="/#contact"
              className="px-6 py-3 bg-[#5BB8F5] hover:bg-[#2E9DE0] transition-colors rounded-full text-white text-sm font-semibold font-sans">
              Запросить демо
            </Link>
            <Link href="https://edu.alashed.kz"
              className="px-6 py-3 bg-white border border-[rgba(55,50,47,0.20)] hover:bg-[#F0EFEE] transition-colors rounded-full text-[#37322F] text-sm font-medium font-sans">
              Попробовать бесплатно
            </Link>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="bg-white border-t border-b border-[rgba(55,50,47,0.10)]">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {metrics.map((m, i) => (
              <div key={i} className="text-center sm:text-left">
                <div className="text-[#37322F] text-3xl font-semibold font-serif">{m.value}</div>
                <div className="text-[#37322F] text-sm font-semibold font-sans mt-1">{m.label}</div>
                <div className="text-[rgba(55,50,47,0.45)] text-xs font-sans mt-0.5">{m.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-[1060px] mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="mb-10">
          <h2 className="text-[#37322F] text-2xl sm:text-3xl font-semibold font-serif leading-tight">Инструменты директора</h2>
          <p className="text-[#605A57] text-sm font-sans mt-2">Полный контроль над школой в одном месте</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div key={i} className="bg-white border border-[rgba(55,50,47,0.10)] rounded-2xl p-6 hover:shadow-[0px_4px_20px_rgba(55,50,47,0.07)] transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#EBF7FF] flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="text-[#37322F] text-base font-semibold font-sans mb-2">{f.title}</h3>
              <p className="text-[#605A57] text-sm font-sans leading-6">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-[1060px] mx-auto px-4 sm:px-6 pb-14 sm:pb-20">
        <div className="bg-white border border-[rgba(55,50,47,0.12)] rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-[#37322F] text-2xl sm:text-3xl font-semibold font-serif mb-3">
            Подключите школу за 48 часов
          </h2>
          <p className="text-[#605A57] text-sm font-sans leading-6 mb-8 max-w-md mx-auto">
            Бесплатный пилотный период. Обучение команды включено. Полная поддержка на казахском и русском.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/#contact"
              className="px-6 py-3 bg-[#5BB8F5] hover:bg-[#2E9DE0] transition-colors rounded-full text-white text-sm font-semibold font-sans">
              Запросить демо для школы
            </Link>
            <Link href="https://edu.alashed.kz"
              className="px-6 py-3 bg-white border border-[rgba(55,50,47,0.20)] hover:bg-[#F7F5F3] transition-colors rounded-full text-[#37322F] text-sm font-medium font-sans">
              Войти в платформу
            </Link>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  )
}
