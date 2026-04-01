import Link from "next/link"
import Navbar from "@/components/navbar"
import FooterSection from "@/components/footer-section"
import {
  DashboardSquare01Icon,
  Analytics01Icon,
  Task01Icon,
  DeliveryBox01Icon,
  File01Icon,
  UserMultipleIcon,
} from "hugeicons-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Для директоров — Alashed",
  description: "Аналитика школы, управление инвентарём и цифровая отчётность в одном дашборде.",
}

const features = [
  {
    icon: <DashboardSquare01Icon size={24} color="#2E9DE0" />,
    title: "Единый дашборд школы",
    desc: "Все показатели в одном экране: успеваемость по классам, активность учителей, статусы документов. Никаких Excel-таблиц и ручного сбора данных.",
  },
  {
    icon: <Analytics01Icon size={24} color="#2E9DE0" />,
    title: "Аналитика успеваемости",
    desc: "Динамика оценок по предметам, классам и четвертям. Автоматические алерты при падении успеваемости — принимайте решения до того, как ситуация ухудшится.",
  },
  {
    icon: <Task01Icon size={24} color="#2E9DE0" />,
    title: "Контроль документации",
    desc: "Видите в реальном времени: кто из учителей сдал КМЖ, кто ещё нет. Журнал проверок, статусы и комментарии — без бумажных обходов.",
  },
  {
    icon: <DeliveryBox01Icon size={24} color="#2E9DE0" />,
    title: "Инвентарь оборудования",
    desc: "Учёт всего оборудования: Arduino, компьютеры, проекторы. История обслуживания, плановые замены, закупки. Интеграция с официальным импортом Alashed Hardware.",
  },
  {
    icon: <File01Icon size={24} color="#2E9DE0" />,
    title: "Автоматические отчёты",
    desc: "Генерация квартальных и годовых отчётов для управления образования в один клик. Соответствие форматам МОН РК — без ручного заполнения бланков.",
  },
  {
    icon: <UserMultipleIcon size={24} color="#2E9DE0" />,
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
            <DashboardSquare01Icon size={12} color="#2E9DE0" />
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
