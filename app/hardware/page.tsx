import Link from "next/link"
import Navbar from "@/components/navbar"
import FooterSection from "@/components/footer-section"
import {
  CheckmarkBadge01Icon,
  FlashIcon,
  Shield01Icon,
  UserMultipleIcon,
  ChipIcon,
  ArrowRight02Icon,
} from "hugeicons-react"
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
    icon: <CheckmarkBadge01Icon size={24} color="#2E9DE0" />,
    title: "Официальный импорт",
    desc: "Прямые поставки от производителей. Сертифицированное оборудование, таможенное оформление и полный пакет документов для школ.",
  },
  {
    icon: <FlashIcon size={24} color="#2E9DE0" />,
    title: "Быстрая доставка",
    desc: "Доставка по всему Казахстану за 2–5 рабочих дней. Экспресс-доставка в Алматы и Астану на следующий день.",
  },
  {
    icon: <Shield01Icon size={24} color="#2E9DE0" />,
    title: "Гарантия и замена",
    desc: "12 месяцев гарантии на всё оборудование. Быстрая замена при заводском браке — без лишней бюрократии.",
  },
  {
    icon: <UserMultipleIcon size={24} color="#2E9DE0" />,
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
            <ChipIcon size={12} color="#EA580C" />
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
                  <ArrowRight02Icon size={12} color="currentColor" />
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
