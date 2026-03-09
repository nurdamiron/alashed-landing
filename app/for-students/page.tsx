import Link from "next/link"
import Navbar from "@/components/navbar"
import FooterSection from "@/components/footer-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Для учеников — Alashed",
  description: "CodeStudio, геймификация и подготовка к соревнованиям — программирование для школьников Казахстана.",
}

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M8 6.5L3 12l5 5.5M16 6.5L21 12l-5 5.5M14 4l-4 16" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "CodeStudio — браузерное IDE",
    desc: "Пиши код прямо в браузере — без установки программ. Python, JavaScript и Scratch. Автосохранение, подсветка синтаксиса и встроенный дебаггер.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Геймификация и очки",
    desc: "За каждое выполненное задание — баллы и достижения. Таблица лидеров в классе мотивирует учиться быстрее. Открывай новые уровни и получай сертификаты.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="9" cy="7" r="4" stroke="#2E9DE0" strokeWidth="1.5"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Командные проекты",
    desc: "Создавай проекты вместе с одноклассниками в реальном времени. Общий редактор кода, чат и управление задачами — всё как у настоящих разработчиков.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="2" width="14" height="20" rx="2" stroke="#2E9DE0" strokeWidth="1.5"/>
        <path d="M9 7h6M9 11h6M9 15h4" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Подготовка к Infomatrix",
    desc: "Специальные курсы и задания для подготовки к Infomatrix, KazRobotics и WRO. Разбор прошлых олимпиадных задач с объяснениями от тренеров.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="7" width="20" height="14" rx="2" stroke="#2E9DE0" strokeWidth="1.5"/>
        <path d="M16 7V5a2 2 0 0 0-4 0v2M9 14l2 2 4-4" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Проекты с Arduino",
    desc: "Деплой кода прямо на Arduino и ESP32 из браузера. Учись создавать реальные устройства: умный дом, робот, метеостанция — шаг за шагом.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 4L12 14.01l-3-3" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Персональный прогресс",
    desc: "Видишь свой прогресс по каждой теме. AI определяет пробелы в знаниях и предлагает упражнения именно там, где ты ещё не уверен.",
  },
]

const tracks = [
  {
    title: "Scratch",
    level: "Начальный",
    age: "7–10 лет",
    desc: "Визуальное программирование. Создавай игры и анимации без написания кода.",
    color: "#EBF7FF",
    border: "#5BB8F5",
    text: "#1A6FA8",
  },
  {
    title: "Python",
    level: "Средний",
    age: "11–14 лет",
    desc: "Самый популярный язык для Data Science, AI и автоматизации. Начни с основ.",
    color: "#ECFDF5",
    border: "#6EE7B7",
    text: "#059669",
  },
  {
    title: "JavaScript",
    level: "Средний",
    age: "12–16 лет",
    desc: "Язык веба. Создавай сайты и интерактивные приложения с нуля.",
    color: "#FEF3C7",
    border: "#FCD34D",
    text: "#D97706",
  },
  {
    title: "Arduino / IoT",
    level: "Продвинутый",
    age: "13–18 лет",
    desc: "Физические проекты: роботы, умные устройства и IoT-системы.",
    color: "#FFF7ED",
    border: "#FDBA74",
    text: "#EA580C",
  },
]

export default function ForStudentsPage() {
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
              <path d="M3 3.5L1 6l2 2.5M9 3.5L11 6 9 8.5M7 2l-2 8" stroke="#2E9DE0" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[#2E9DE0] text-xs font-semibold font-sans uppercase tracking-wide">Для учеников</span>
          </div>

          <h1 className="text-[#37322F] text-3xl sm:text-4xl md:text-[44px] font-semibold font-serif leading-tight tracking-tight mb-5">
            Научись программировать и выигрывай олимпиады
          </h1>
          <p className="text-[#605A57] text-base sm:text-lg font-sans leading-7 mb-8 max-w-[540px]">
            CodeStudio — браузерная среда разработки для школьников. Python, JavaScript, Scratch и Arduino прямо в браузере. Без установок, без сложностей — просто открой и кодь.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link href="https://studio.alashed.kz"
              className="px-6 py-3 bg-[#5BB8F5] hover:bg-[#2E9DE0] transition-colors rounded-full text-white text-sm font-semibold font-sans">
              Начать бесплатно
            </Link>
            <Link href="#tracks"
              className="px-6 py-3 bg-white border border-[rgba(55,50,47,0.20)] hover:bg-[#F0EFEE] transition-colors rounded-full text-[#37322F] text-sm font-medium font-sans">
              Выбрать курс
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-[rgba(55,50,47,0.10)]">
            {[
              { value: "4 языка", label: "программирования" },
              { value: "3 олимпиады", label: "Infomatrix, KazRobotics, WRO" },
              { value: "0 установок", label: "всё в браузере" },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-[#37322F] text-2xl font-semibold font-serif">{s.value}</div>
                <div className="text-[rgba(55,50,47,0.50)] text-sm font-sans mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tracks */}
      <div id="tracks" className="bg-white border-t border-b border-[rgba(55,50,47,0.10)]">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="mb-10">
            <h2 className="text-[#37322F] text-2xl sm:text-3xl font-semibold font-serif leading-tight">Выбери направление</h2>
            <p className="text-[#605A57] text-sm font-sans mt-2">Учись с нуля или углубляй знания</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tracks.map((t, i) => (
              <div key={i} className="rounded-2xl border p-5" style={{ background: t.color, borderColor: t.border }}>
                <div className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold font-sans border mb-3"
                  style={{ color: t.text, background: "white", borderColor: t.border }}>
                  {t.level} · {t.age}
                </div>
                <h3 className="text-[#37322F] text-lg font-semibold font-serif mb-2">{t.title}</h3>
                <p className="text-[#605A57] text-xs font-sans leading-5">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-[1060px] mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="mb-10">
          <h2 className="text-[#37322F] text-2xl sm:text-3xl font-semibold font-serif leading-tight">Что умеет CodeStudio</h2>
          <p className="text-[#605A57] text-sm font-sans mt-2">Всё нужное для обучения в одной платформе</p>
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
            Начни кодить прямо сейчас
          </h2>
          <p className="text-[#605A57] text-sm font-sans leading-6 mb-8 max-w-md mx-auto">
            Бесплатная регистрация. Никаких установок. Открой браузер и напиши первую программу за 5 минут.
          </p>
          <Link href="https://studio.alashed.kz"
            className="inline-flex px-8 py-3.5 bg-[#5BB8F5] hover:bg-[#2E9DE0] transition-colors rounded-full text-white text-sm font-semibold font-sans">
            Зарегистрироваться бесплатно
          </Link>
        </div>
      </div>

      <FooterSection />
    </div>
  )
}
