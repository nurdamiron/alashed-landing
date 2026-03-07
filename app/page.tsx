"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Navbar from "../components/navbar"
import SmartSimpleBrilliant from "../components/smart-simple-brilliant"
import YourWorkInSync from "../components/your-work-in-sync"
import EffortlessIntegration from "../components/effortless-integration-updated"
import NumbersThatSpeak from "../components/numbers-that-speak"
import DocumentationSection from "../components/documentation-section"
import TestimonialsSection from "../components/testimonials-section"
import FAQSection from "../components/faq-section"
import CTASection from "../components/cta-section"
import FooterSection from "../components/footer-section"
import StatsSection from "../components/stats-section"
import HowItWorksSection from "../components/how-it-works-section"
import BeforeAfterSection from "../components/before-after-section"
import ROICalculatorSection from "../components/roi-calculator-section"
import AwardsSection from "../components/awards-section"
import ContactFormSection from "../components/contact-form-section"
import PlatformShowcaseSection from "../components/platform-showcase-section"

// Reusable Badge Component
function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="px-[14px] py-[6px] bg-[#EBF7FF] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[#5BB8F5]/30">
      <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">{icon}</div>
      <div className="text-center flex justify-center flex-col text-[#2E9DE0] text-xs font-semibold leading-3 font-sans tracking-wide uppercase">
        {text}
      </div>
    </div>
  )
}

export default function LandingPage() {
  const [activeCard, setActiveCard] = useState(0)
  const [progress, setProgress] = useState(0)
  const [heroVideoPlaying, setHeroVideoPlaying] = useState(false)
  const mountedRef = useRef(true)

  useEffect(() => {
    const progressInterval = setInterval(() => {
      if (!mountedRef.current) return

      setProgress((prev) => {
        if (prev >= 100) {
          if (mountedRef.current) {
            setActiveCard((current) => (current + 1) % 3)
          }
          return 0
        }
        return prev + 2 // 2% every 100ms = 5 seconds total
      })
    }, 100)

    return () => {
      clearInterval(progressInterval)
      mountedRef.current = false
    }
  }, [])

  useEffect(() => {
    return () => {
      mountedRef.current = false
    }
  }, [])

  const handleCardClick = (index: number) => {
    if (!mountedRef.current) return
    setActiveCard(index)
    setProgress(0)
  }

  const getDashboardContent = () => {
    switch (activeCard) {
      case 0:
        return <div className="text-[#828387] text-sm">Alashed EDU — AI-генерация документов для учителей</div>
      case 1:
        return <div className="text-[#828387] text-sm">CodeStudio — браузерное IDE для информатики</div>
      case 2:
        return <div className="text-[#828387] text-sm">Hardware & Соревнования — оборудование и подготовка</div>
      default:
        return <div className="text-[#828387] text-sm">Alashed EDU — AI-генерация документов для учителей</div>
    }
  }

  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      <div className="relative flex flex-col justify-start items-center w-full">
        {/* Main container with proper margins */}
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen">
          {/* Left vertical line */}
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          {/* Right vertical line */}
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          <div className="self-stretch pt-[9px] overflow-hidden border-b border-[rgba(55,50,47,0.06)] flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-[66px] relative z-10">
            {/* Navigation */}
            <div className="w-full h-[84px] absolute left-0 top-0 flex justify-center items-center z-20 px-4 sm:px-6 lg:px-0">
              <Navbar />
            </div>

            {/* Hero Section */}
            <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-[216px] pb-8 sm:pb-12 md:pb-16 flex flex-col justify-start items-center px-2 sm:px-4 md:px-8 lg:px-0 w-full sm:pl-0 sm:pr-0 pl-0 pr-0">
                <div className="w-full max-w-[937px] lg:w-[937px] flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                <div className="self-stretch rounded-[3px] flex flex-col justify-center items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                  <div className="w-full max-w-[800px] lg:w-[800px] text-center flex justify-center flex-col text-[#37322F] text-[26px] sm:text-[34px] md:text-[44px] lg:text-[54px] font-normal leading-[1.15] font-serif px-2 sm:px-4 md:px-0">
                    Полная STEM-экосистема
                    <br />
                    для школ Казахстана
                  </div>
                  <div className="w-full max-w-[560px] lg:w-[560px] text-center flex justify-center flex-col text-[rgba(55,50,47,0.80)] sm:text-lg md:text-xl leading-[1.4] sm:leading-[1.45] md:leading-[1.5] lg:leading-7 font-sans px-2 sm:px-4 md:px-0 lg:text-lg font-medium text-sm">
                    AI-помощник для учителей, браузерное IDE для информатики и робототехники,
                    <br className="hidden sm:block" />
                    официальный импорт оборудования — всё в одной платформе.
                  </div>
                </div>
              </div>

              <div className="w-full max-w-[497px] lg:w-[497px] flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 relative z-10 mt-6 sm:mt-8 md:mt-10 lg:mt-12">
                <div className="backdrop-blur-[8.25px] flex justify-start items-center gap-4">
                  <a href="https://edu.alashed.kz/login" className="h-10 sm:h-11 px-6 sm:px-8 md:px-10 lg:px-12 bg-[#5BB8F5] hover:bg-[#2E9DE0] transition-colors rounded-full flex items-center gap-2 shadow-[0px_1px_3px_rgba(91,184,245,0.40)]">
                    <span className="text-white text-sm font-semibold font-sans">
                      Попробовать бесплатно
                    </span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.5 7H11.5M11.5 7L8 3.5M11.5 7L8 10.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a href="#contact" className="h-10 px-6 bg-white hover:bg-[#F7F5F3] text-[#37322F] rounded-full font-medium text-sm transition-colors flex items-center shadow-[0px_1px_2px_rgba(55,50,47,0.12)]">
                    Запросить демо
                  </a>
                </div>
                <div className="flex items-center gap-2 text-[rgba(55,50,47,0.60)] text-sm font-medium">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#EBF7FF] text-[#2E9DE0] text-xs font-semibold border border-[#5BB8F5]/30">
                    ГОСО 2026
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </div>
              </div>

              <div className="absolute top-[232px] sm:top-[248px] md:top-[264px] lg:top-[320px] left-1/2 transform -translate-x-1/2 z-0 pointer-events-none">
                <img
                  src="/mask-group-pattern.svg"
                  alt=""
                  className="w-[936px] sm:w-[1404px] md:w-[2106px] lg:w-[2808px] h-auto opacity-30 sm:opacity-40 md:opacity-50 mix-blend-multiply"
                  style={{
                    filter: "hue-rotate(15deg) saturate(0.7) brightness(1.2)",
                  }}
                />
              </div>

              <div className="w-full max-w-[960px] lg:w-[960px] pt-2 sm:pt-4 px-2 sm:px-4 md:px-6 lg:px-11 flex flex-col justify-center items-center gap-2 relative z-5 my-8 sm:my-12 md:my-16 lg:my-16 mb-0 lg:pb-0">
                {!heroVideoPlaying ? (
                  <button
                    onClick={() => setHeroVideoPlaying(true)}
                    className="w-full aspect-video rounded-[6px] sm:rounded-[8px] lg:rounded-[12px] overflow-hidden relative group cursor-pointer shadow-[0px_0px_0px_0.9px_rgba(0,0,0,0.08),0px_8px_32px_rgba(55,50,47,0.12)] bg-[#0F2744] flex items-center justify-center"
                    aria-label="Смотреть демо Alashed"
                  >
                    {/* Gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1A6FA8] via-[#0F2744] to-[#37322F]" />

                    {/* Animated glow */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#5BB8F5] rounded-full blur-[80px]" />
                      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#2E9DE0] rounded-full blur-[60px]" />
                    </div>

                    {/* Grid pattern overlay */}
                    <div className="absolute inset-0 opacity-10" style={{backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "40px 40px"}} />

                    {/* Center content */}
                    <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-5">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center group-hover:bg-white/25 group-hover:scale-105 transition-all duration-300 shadow-[0px_0px_40px_rgba(91,184,245,0.4)]">
                        <svg className="ml-1" width="28" height="28" viewBox="0 0 28 28" fill="none">
                          <path d="M8 5l18 9-18 9V5z" fill="white"/>
                        </svg>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-white text-sm sm:text-base md:text-lg font-semibold font-sans">Смотреть как работает Alashed</span>
                        <span className="text-white/60 text-xs sm:text-sm font-normal font-sans">3 минуты · AI-документы, CodeStudio, журнал</span>
                      </div>
                    </div>

                    {/* Top left badge */}
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#5BB8F5] animate-pulse" />
                      <span className="text-white text-[11px] font-semibold font-sans">Alashed EDU · Demo</span>
                    </div>

                  </button>
                ) : (
                  <div className="w-full aspect-video rounded-[6px] sm:rounded-[8px] lg:rounded-[12px] overflow-hidden shadow-[0px_0px_0px_0.9px_rgba(0,0,0,0.08),0px_8px_32px_rgba(55,50,47,0.12)]">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                      title="Alashed EDU Demo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                )}
              </div>

              <div className="self-stretch border-t border-[#E0DEDB] border-b border-[#E0DEDB] flex justify-center items-start">
                <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                  {/* Left decorative pattern */}
                  <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                    {Array.from({ length: 50 }).map((_, i) => (
                      <div
                        key={i}
                        className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                      ></div>
                    ))}
                  </div>
                </div>

                <div className="flex-1 px-0 sm:px-2 md:px-0 flex flex-col md:flex-row justify-center items-stretch gap-0">
                  {/* Feature Cards */}
                  <FeatureCard
                    title="Alashed EDU"
                    description="AI-генерация КМЖ, ФО, БЖБ с автопривязкой к ОМ-кодам ГОСО 2026 за 2 минуты."
                    isActive={activeCard === 0}
                    progress={activeCard === 0 ? progress : 0}
                    onClick={() => handleCardClick(0)}
                  />
                  <FeatureCard
                    title="CodeStudio"
                    description="Браузерное IDE для Python, JS, Scratch + деплой на реальное железо Arduino/ESP32."
                    isActive={activeCard === 1}
                    progress={activeCard === 1 ? progress : 0}
                    onClick={() => handleCardClick(1)}
                  />
                  <FeatureCard
                    title="Hardware & Соревнования"
                    description="Официальный импорт Arduino, Raspberry Pi + помощь в Infomatrix, KazRobotics, WRO."
                    isActive={activeCard === 2}
                    progress={activeCard === 2 ? progress : 0}
                    onClick={() => handleCardClick(2)}
                  />
                </div>

                <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                  {/* Right decorative pattern */}
                  <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                    {Array.from({ length: 50 }).map((_, i) => (
                      <div
                        key={i}
                        className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social Proof Section */}
              <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
                <div className="self-stretch px-4 sm:px-6 md:px-24 py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
                  <div className="w-full max-w-[586px] px-4 sm:px-6 py-4 sm:py-5 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4 shadow-none">
                    <Badge
                      icon={
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="1" y="3" width="4" height="6" stroke="#2E9DE0" strokeWidth="1" fill="none" />
                          <rect x="7" y="1" width="4" height="8" stroke="#2E9DE0" strokeWidth="1" fill="none" />
                          <rect x="2" y="4" width="1" height="1" fill="#2E9DE0" />
                          <rect x="3.5" y="4" width="1" height="1" fill="#2E9DE0" />
                          <rect x="2" y="5.5" width="1" height="1" fill="#2E9DE0" />
                          <rect x="3.5" y="5.5" width="1" height="1" fill="#2E9DE0" />
                          <rect x="8" y="2" width="1" height="1" fill="#2E9DE0" />
                          <rect x="9.5" y="2" width="1" height="1" fill="#2E9DE0" />
                          <rect x="8" y="3.5" width="1" height="1" fill="#2E9DE0" />
                          <rect x="9.5" y="3.5" width="1" height="1" fill="#2E9DE0" />
                          <rect x="8" y="5" width="1" height="1" fill="#2E9DE0" />
                          <rect x="9.5" y="5" width="1" height="1" fill="#2E9DE0" />
                        </svg>
                      }
                      text="Для кого"
                    />
                    <div className="w-full max-w-[472.55px] text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-[28px] font-semibold leading-tight font-sans tracking-tight">
                      Закрываем боли всех участников
                    </div>
                    <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
                      Учителя экономят 40% времени на документах,
                      <br className="hidden sm:block" />
                      директора получают аналитику, ученики — мотивацию.
                    </div>
                  </div>
                </div>

              </div>

              {/* Stats Section */}
              <StatsSection />

              {/* How It Works Section */}
              <HowItWorksSection />

              {/* Bento Grid Section */}
              <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
                {/* Header Section */}
                <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
                  <div className="w-full max-w-[616px] lg:w-[616px] px-4 sm:px-6 py-4 sm:py-5 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4 shadow-none">
                    <Badge
                      icon={
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="1" y="1" width="4" height="4" stroke="#2E9DE0" strokeWidth="1" fill="none" />
                          <rect x="7" y="1" width="4" height="4" stroke="#2E9DE0" strokeWidth="1" fill="none" />
                          <rect x="1" y="7" width="4" height="4" stroke="#2E9DE0" strokeWidth="1" fill="none" />
                          <rect x="7" y="7" width="4" height="4" stroke="#2E9DE0" strokeWidth="1" fill="none" />
                        </svg>
                      }
                      text="Продукты"
                    />
                    <div className="w-full max-w-[598.06px] lg:w-[598.06px] text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-[28px] font-semibold leading-tight font-sans tracking-tight">
                      Единая платформа для всей школы
                    </div>
                    <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
                      От AI-помощника учителю до реального железа на парте —
                      <br />
                      всё связано между собой и работает вместе.
                    </div>
                  </div>
                </div>

                {/* Bento Grid Content */}
                <div className="self-stretch flex justify-center items-start">
                  <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                    {/* Left decorative pattern */}
                    <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                      {Array.from({ length: 200 }).map((_, i) => (
                        <div
                          key={i}
                          className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
                    {/* Top Left - Alashed EDU */}
                    <div className="border-b border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                          Alashed EDU — AI Copilot
                        </h3>
                        <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                          Генерация КМЖ, ФО, БЖБ, ТЖБ с автопривязкой к ОМ-кодам ГОСО 2026. AI знает профиль учителя, классы и успеваемость.
                        </p>
                      </div>
                      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex items-center justify-center overflow-hidden">
                        <SmartSimpleBrilliant
                          width="100%"
                          height="100%"
                          theme="light"
                          className="scale-50 sm:scale-65 md:scale-75 lg:scale-90"
                        />
                      </div>
                    </div>

                    {/* Top Right - CodeStudio */}
                    <div className="border-b border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#37322F] font-semibold leading-tight font-sans text-lg sm:text-xl">
                          CodeStudio — браузерное IDE
                        </h3>
                        <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                          Python, JavaScript, Scratch + Arduino, ESP32, Micro:bit. Деплой на реальное железо, не симулятор. AI-помощник для кода.
                        </p>
                      </div>
                      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex overflow-hidden text-right items-center justify-center">
                        <YourWorkInSync
                          width="400"
                          height="250"
                          theme="light"
                          className="scale-60 sm:scale-75 md:scale-90"
                        />
                      </div>
                    </div>

                    {/* Bottom Left - Hardware */}
                    <div className="border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6 bg-transparent">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                          Hardware — официальный импорт
                        </h3>
                        <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                          Arduino, ESP32, Raspberry Pi, Micro:bit — напрямую в школы без посредников. Заказ из дашборда директора.
                        </p>
                      </div>
                      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex overflow-hidden justify-center items-center relative bg-transparent">
                        <div className="w-full h-full flex items-center justify-center bg-transparent">
                          <EffortlessIntegration width={400} height={250} className="max-w-full max-h-full" />
                        </div>
                        {/* Gradient mask for soft bottom edge */}
                        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#F7F5F3] to-transparent pointer-events-none"></div>
                      </div>
                    </div>

                    {/* Bottom Right - Competitions */}
                    <div className="p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                          Соревнования
                        </h3>
                        <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                          Помогаем школам участвовать в Infomatrix (Азия), KazRobotics, ITFest, WRO. Подготовка и сопровождение команд.
                        </p>
                      </div>
                      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex overflow-hidden items-center justify-center relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <NumbersThatSpeak
                            width="100%"
                            height="100%"
                            theme="light"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        {/* Gradient mask for soft bottom edge */}
                        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#F7F5F3] to-transparent pointer-events-none"></div>
                      </div>
                    </div>
                  </div>

                  <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                    {/* Right decorative pattern */}
                    <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                      {Array.from({ length: 200 }).map((_, i) => (
                        <div
                          key={i}
                          className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Before / After Section */}
              <BeforeAfterSection />

              {/* Platform Showcase */}
              <PlatformShowcaseSection />

              {/* Documentation Section */}
              <DocumentationSection />

              {/* Testimonials Section */}
              <TestimonialsSection />

              {/* ROI Calculator */}
              <ROICalculatorSection />

              {/* Awards & Partners */}
              <AwardsSection />

              {/* FAQ Section */}
              <FAQSection />

              {/* Contact Form */}
              <ContactFormSection />

              {/* CTA Section */}
              <CTASection />

              {/* Footer Section */}
              <FooterSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// FeatureCard component definition inline to fix import error
function FeatureCard({
  title,
  description,
  isActive,
  progress,
  onClick,
}: {
  title: string
  description: string
  isActive: boolean
  progress: number
  onClick: () => void
}) {
  return (
    <div
      className={`w-full md:flex-1 self-stretch px-6 py-5 overflow-hidden flex flex-col justify-start items-start gap-2 cursor-pointer relative border-b md:border-b-0 last:border-b-0 transition-colors duration-200 ${
        isActive
          ? "bg-white shadow-[0px_0px_0px_0.75px_#D6EFFE_inset]"
          : "border-l-0 border-r-0 md:border border-[#E0DEDB]/80 hover:bg-[#F0FAFF]/40"
      }`}
      onClick={onClick}
    >
      {isActive && (
        <div className="absolute top-0 left-0 w-full h-0.5 bg-[#D6EFFE]">
          <div
            className="h-full bg-[#5BB8F5] transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <div className="self-stretch flex justify-center flex-col text-[#49423D] text-sm md:text-sm font-semibold leading-6 md:leading-6 font-sans">
        {title}
      </div>
      <div className="self-stretch text-[#605A57] text-[13px] md:text-[13px] font-normal leading-[22px] md:leading-[22px] font-sans">
        {description}
      </div>
    </div>
  )
}
