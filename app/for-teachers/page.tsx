import Link from "next/link"
import Navbar from "@/components/navbar"
import FooterSection from "@/components/footer-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Для учителей — Alashed",
  description: "AI-ассистент, который знает ГОСО 2026 и ваш класс. Генерация КМЖ, БЖБ, ТЖБ за 2 минуты.",
}

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Генерация КМЖ за 2 минуты",
    desc: "AI создаёт краткосрочный план урока по любому предмету с привязкой к ГОСО 2026. Вы указываете тему — система генерирует цели, задания, критерии оценивания.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#2E9DE0" strokeWidth="1.5"/>
        <path d="M9 9h6M9 12h6M9 15h4" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "БЖБ и ТЖБ по стандарту",
    desc: "Автоматическая генерация бланков жетістіктерін бағалау и тоқсандық жиынтық бағалау с правильной структурой, дескрипторами и дифференцированными заданиями.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#2E9DE0" strokeWidth="1.5"/>
        <path d="M12 7v5l3 3" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Экономия 5+ часов в неделю",
    desc: "Учителя тратят до 40% рабочего времени на документацию. Alashed EDU автоматизирует рутину — вы фокусируетесь на преподавании и учениках.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="9" cy="7" r="4" stroke="#2E9DE0" strokeWidth="1.5"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Профили учеников",
    desc: "Система запоминает прогресс каждого ученика. AI учитывает сильные и слабые стороны класса при генерации заданий и подбирает дифференцированные материалы.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Готовые шаблоны",
    desc: "Библиотека из 500+ шаблонов уроков, проверочных работ и раздаточных материалов по всем предметам казахстанской школьной программы.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Поддержка на казахском",
    desc: "Все документы генерируются на казахском, русском или обоих языках одновременно. AI обучен на актуальных учебных программах МОН РК.",
  },
]

const steps = [
  { num: "01", title: "Укажите тему урока", desc: "Введите тему, класс и предмет. Система сама определит раздел ГОСО." },
  { num: "02", title: "AI генерирует документ", desc: "За 20–30 секунд получаете готовый КМЖ, БЖБ или ТЖБ." },
  { num: "03", title: "Отредактируйте при необходимости", desc: "Все поля редактируемые. Сохраните в PDF или Word одним кликом." },
]

const testimonials = [
  {
    quote: "Раньше КМЖ на неделю занимал у меня воскресный вечер. Теперь — 10 минут в пятницу.",
    name: "Айгуль М.",
    role: "Учитель математики, Алматы",
    initials: "АМ",
    color: "#1A6FA8",
    bg: "#EBF7FF",
  },
  {
    quote: "Наконец-то БЖБ соответствует требованиям. Раньше администрация постоянно возвращала на доработку.",
    name: "Дамир С.",
    role: "Учитель информатики, Астана",
    initials: "ДС",
    color: "#059669",
    bg: "#ECFDF5",
  },
  {
    quote: "Особенно нравится что помнит мой класс. Не надо каждый раз объяснять кто у нас слабый, кто сильный.",
    name: "Гүлнар Т.",
    role: "Учитель биологии, Шымкент",
    initials: "ГТ",
    color: "#D97706",
    bg: "#FEF3C7",
  },
]

export default function ForTeachersPage() {
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
              <circle cx="6" cy="4" r="2.5" stroke="#2E9DE0" strokeWidth="1"/>
              <path d="M1 11c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="#2E9DE0" strokeWidth="1" strokeLinecap="round"/>
            </svg>
            <span className="text-[#2E9DE0] text-xs font-semibold font-sans uppercase tracking-wide">Для учителей</span>
          </div>

          <h1 className="text-[#37322F] text-3xl sm:text-4xl md:text-[44px] font-semibold font-serif leading-tight tracking-tight mb-5">
            AI-ассистент, который знает ГОСО и ваш класс
          </h1>
          <p className="text-[#605A57] text-base sm:text-lg font-sans leading-7 mb-8 max-w-[540px]">
            Генерируйте КМЖ, БЖБ и ТЖБ за минуты — не за часы. Alashed EDU берёт документацию на себя, чтобы вы могли заниматься тем, что важно: учить детей.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link href="https://edu.alashed.kz/login"
              className="px-6 py-3 bg-[#5BB8F5] hover:bg-[#2E9DE0] transition-colors rounded-full text-white text-sm font-semibold font-sans">
              Попробовать бесплатно
            </Link>
            <Link href="/#contact"
              className="px-6 py-3 bg-white border border-[rgba(55,50,47,0.20)] hover:bg-[#F0EFEE] transition-colors rounded-full text-[#37322F] text-sm font-medium font-sans">
              Запросить демо
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-[rgba(55,50,47,0.10)]">
            {[
              { value: "5+ часов", label: "экономии в неделю" },
              { value: "2 мин", label: "на один КМЖ" },
              { value: "500+", label: "шаблонов документов" },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-[#37322F] text-2xl font-semibold font-serif">{s.value}</div>
                <div className="text-[rgba(55,50,47,0.50)] text-sm font-sans mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="bg-white border-t border-b border-[rgba(55,50,47,0.10)]">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="mb-10">
            <h2 className="text-[#37322F] text-2xl sm:text-3xl font-semibold font-serif leading-tight">Как это работает</h2>
            <p className="text-[#605A57] text-sm font-sans mt-2">Три шага до готового документа</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#EBF7FF] border border-[#5BB8F5]/30 flex items-center justify-center">
                  <span className="text-[#2E9DE0] text-sm font-semibold font-sans">{step.num}</span>
                </div>
                <div>
                  <h3 className="text-[#37322F] text-base font-semibold font-sans mb-1.5">{step.title}</h3>
                  <p className="text-[#605A57] text-sm font-sans leading-6">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-[1060px] mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="mb-10">
          <h2 className="text-[#37322F] text-2xl sm:text-3xl font-semibold font-serif leading-tight">Всё что нужно учителю</h2>
          <p className="text-[#605A57] text-sm font-sans mt-2">Инструменты для ежедневной работы</p>
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

      {/* Testimonials */}
      <div className="bg-white border-t border-b border-[rgba(55,50,47,0.10)]">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="mb-10">
            <h2 className="text-[#37322F] text-2xl sm:text-3xl font-semibold font-serif leading-tight">Что говорят учителя</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-[#F7F5F3] rounded-2xl p-6">
                <p className="text-[#37322F] text-sm font-sans leading-6 mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold font-sans flex-shrink-0"
                    style={{ background: t.bg, color: t.color }}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-[#37322F] text-sm font-semibold font-sans">{t.name}</div>
                    <div className="text-[rgba(55,50,47,0.50)] text-xs font-sans">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-[1060px] mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="bg-white border border-[rgba(55,50,47,0.12)] rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-[#37322F] text-2xl sm:text-3xl font-semibold font-serif mb-3">
            Готовы сэкономить 5 часов в неделю?
          </h2>
          <p className="text-[#605A57] text-sm font-sans leading-6 mb-8 max-w-md mx-auto">
            Бесплатный доступ на весь пилотный период. Подключение за 48 часов. Без кредитной карты.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="https://edu.alashed.kz/login"
              className="px-6 py-3 bg-[#5BB8F5] hover:bg-[#2E9DE0] transition-colors rounded-full text-white text-sm font-semibold font-sans">
              Попробовать бесплатно
            </Link>
            <Link href="/#contact"
              className="px-6 py-3 bg-white border border-[rgba(55,50,47,0.20)] hover:bg-[#F7F5F3] transition-colors rounded-full text-[#37322F] text-sm font-medium font-sans">
              Запросить демо
            </Link>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  )
}
