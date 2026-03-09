import Link from "next/link"
import Navbar from "@/components/navbar"
import FooterSection from "@/components/footer-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Соревнования — Alashed",
  description: "Подготовка к Infomatrix, KazRobotics и WRO. Тренеры, учебные материалы и оборудование для победы.",
}

const competitions = [
  {
    name: "Infomatrix",
    level: "Международный",
    desc: "Один из крупнейших международных конкурсов школьных IT-проектов. Казахстанские команды выходят в финал каждый год.",
    tracks: ["Программирование", "Робототехника", "Web-разработка", "Мобильные приложения"],
    color: "#1A6FA8",
    bg: "#EBF7FF",
    border: "#5BB8F5",
  },
  {
    name: "KazRobotics",
    level: "Республиканский",
    desc: "Главный чемпионат по робототехнике в Казахстане. Соревнования по WRO-формату для школьников всех возрастов.",
    tracks: ["WRO Regular", "WRO Open", "Freestyle", "RoboMission"],
    color: "#059669",
    bg: "#ECFDF5",
    border: "#6EE7B7",
  },
  {
    name: "WRO",
    level: "Международный",
    desc: "World Robot Olympiad — мировой чемпионат по робототехнике. Казахстан представлен в финале ежегодно.",
    tracks: ["RoboMission", "RoboSports", "Future Engineers", "Future Innovators"],
    color: "#D97706",
    bg: "#FEF3C7",
    border: "#FCD34D",
  },
]

const preparation = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Разбор прошлых задач",
    desc: "База заданий с Infomatrix, KazRobotics и WRO за последние 5 лет. Подробные решения и разбор типичных ошибок.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="9" cy="7" r="4" stroke="#2E9DE0" strokeWidth="1.5"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Опытные тренеры",
    desc: "Наставники с опытом участия и победы в международных соревнованиях. Персональный план подготовки для каждой команды.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="7" width="20" height="14" rx="2" stroke="#2E9DE0" strokeWidth="1.5"/>
        <path d="M16 7V5a2 2 0 0 0-4 0v2M9 14l2 2 4-4" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Оборудование WRO-стандарта",
    desc: "Роботы и наборы, идентичные тем, что используются на официальных соревнованиях. Тренируйся на том же железе.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M8 6.5L3 12l5 5.5M16 6.5L21 12l-5 5.5M14 4l-4 16" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "CodeStudio для тренировок",
    desc: "Браузерное IDE с задачами олимпиадного уровня. Автоматическая проверка, подсказки и статистика прогресса команды.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 11l3 3L22 4" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Пробные соревнования",
    desc: "Ежеквартальные внутренние турниры между школами-партнёрами Alashed. Реальный опыт соревнований до официального старта.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Помощь с документацией",
    desc: "Помогаем оформить заявки, анкеты участников и проектную документацию. Знаем требования каждого соревнования.",
  },
]

const results = [
  { value: "12+", label: "медалей на Infomatrix", sub: "за последние 3 года" },
  { value: "40+", label: "команд подготовлено", sub: "к международным соревнованиям" },
  { value: "3", label: "крупных турнира", sub: "Infomatrix, KazRobotics, WRO" },
  { value: "100%", label: "команд выходят в финал", sub: "республиканского уровня" },
]

export default function CompetitionsPage() {
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FEF3C7] rounded-full border border-[#FCD34D]/60 mb-6">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 1l1.2 2.5L10 4l-2 1.9.5 2.6L6 7.4l-2.5 1.1.5-2.6L2 4l2.8-.5L6 1z" stroke="#D97706" strokeWidth="1" strokeLinejoin="round"/>
            </svg>
            <span className="text-[#D97706] text-xs font-semibold font-sans uppercase tracking-wide">Соревнования</span>
          </div>

          <h1 className="text-[#37322F] text-3xl sm:text-4xl md:text-[44px] font-semibold font-serif leading-tight tracking-tight mb-5">
            Готовь команду к победе на международных олимпиадах
          </h1>
          <p className="text-[#605A57] text-base sm:text-lg font-sans leading-7 mb-8 max-w-[540px]">
            Программы подготовки к Infomatrix, KazRobotics и WRO. Опытные тренеры, оборудование стандарта соревнований и система тренировок, которая работает.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link href="/#contact"
              className="px-6 py-3 bg-[#D97706] hover:bg-[#B45309] transition-colors rounded-full text-white text-sm font-semibold font-sans">
              Записаться на подготовку
            </Link>
            <Link href="/#contact"
              className="px-6 py-3 bg-white border border-[rgba(55,50,47,0.20)] hover:bg-[#F0EFEE] transition-colors rounded-full text-[#37322F] text-sm font-medium font-sans">
              Узнать подробнее
            </Link>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="bg-white border-t border-b border-[rgba(55,50,47,0.10)]">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {results.map((r, i) => (
              <div key={i} className="text-center sm:text-left">
                <div className="text-[#37322F] text-3xl font-semibold font-serif">{r.value}</div>
                <div className="text-[#37322F] text-sm font-semibold font-sans mt-1">{r.label}</div>
                <div className="text-[rgba(55,50,47,0.45)] text-xs font-sans mt-0.5">{r.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Competitions */}
      <div className="max-w-[1060px] mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="mb-10">
          <h2 className="text-[#37322F] text-2xl sm:text-3xl font-semibold font-serif leading-tight">Соревнования</h2>
          <p className="text-[#605A57] text-sm font-sans mt-2">Готовим к трём ключевым турнирам</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-5">
          {competitions.map((c, i) => (
            <div key={i} className="bg-white border border-[rgba(55,50,47,0.10)] rounded-2xl p-6 hover:shadow-[0px_4px_20px_rgba(55,50,47,0.07)] transition-shadow">
              <div className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold font-sans border mb-4"
                style={{ color: c.color, background: c.bg, borderColor: c.border }}>
                {c.level}
              </div>
              <h3 className="text-[#37322F] text-xl font-semibold font-serif mb-3">{c.name}</h3>
              <p className="text-[#605A57] text-sm font-sans leading-6 mb-4">{c.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {c.tracks.map((t, j) => (
                  <span key={j} className="px-2.5 py-1 bg-[#F7F5F3] rounded-full text-[11px] font-medium font-sans text-[rgba(55,50,47,0.60)]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Preparation */}
      <div className="bg-white border-t border-b border-[rgba(55,50,47,0.10)]">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="mb-10">
            <h2 className="text-[#37322F] text-2xl sm:text-3xl font-semibold font-serif leading-tight">Как мы готовим</h2>
            <p className="text-[#605A57] text-sm font-sans mt-2">Комплексная программа подготовки</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {preparation.map((p, i) => (
              <div key={i} className="bg-[#F7F5F3] rounded-2xl p-6 hover:bg-white hover:shadow-[0px_4px_20px_rgba(55,50,47,0.07)] hover:border hover:border-[rgba(55,50,47,0.10)] transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#EBF7FF] flex items-center justify-center mb-4">
                  {p.icon}
                </div>
                <h3 className="text-[#37322F] text-base font-semibold font-sans mb-2">{p.title}</h3>
                <p className="text-[#605A57] text-sm font-sans leading-6">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-[1060px] mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="bg-white border border-[rgba(55,50,47,0.12)] rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-[#37322F] text-2xl sm:text-3xl font-semibold font-serif mb-3">
            Готовы выйти на международный уровень?
          </h2>
          <p className="text-[#605A57] text-sm font-sans leading-6 mb-8 max-w-md mx-auto">
            Запишитесь на консультацию. Расскажем о программе подготовки, расписании и стоимости.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/#contact"
              className="px-6 py-3 bg-[#D97706] hover:bg-[#B45309] transition-colors rounded-full text-white text-sm font-semibold font-sans">
              Записаться на консультацию
            </Link>
            <Link href="https://edu.alashed.kz/login"
              className="px-6 py-3 bg-white border border-[rgba(55,50,47,0.20)] hover:bg-[#F7F5F3] transition-colors rounded-full text-[#37322F] text-sm font-medium font-sans">
              Попробовать CodeStudio
            </Link>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  )
}
