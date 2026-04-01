"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import HowItWorksSection from "../components/how-it-works-section"
import Navbar from "@/components/navbar"
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/motion/scroll-reveal"
import EduDemo from "@/components/demos/edu-demo"
import CodeStudioDemo from "@/components/demos/codestudio-demo"
import HardwareDemo from "@/components/demos/hardware-demo"
import JournalDemo from "@/components/demos/journal-demo"
import FooterSection from "@/components/footer-section"
import ContactSection from "@/components/contact-section"
import {
  ArrowRight02Icon,
  CheckmarkCircle02Icon,
  SparklesIcon,
  Rocket01Icon,
  AiBrain01Icon,
  CodeIcon,
  Shield01Icon,
} from "hugeicons-react"

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
  const [heroVideoPlaying, setHeroVideoPlaying] = useState(false)

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
            <Navbar />

            {/* Hero Section */}
            <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-[216px] pb-8 sm:pb-12 md:pb-16 flex flex-col justify-start items-center px-2 sm:px-4 md:px-8 lg:px-0 w-full sm:pl-0 sm:pr-0 pl-0 pr-0">
                <div className="w-full max-w-[937px] lg:w-[937px] flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                <div className="self-stretch rounded-[3px] flex flex-col justify-center items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8">

                  {/* Top pill badge */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EBF7FF] rounded-full border border-[#5BB8F5]/30"
                  >
                    <SparklesIcon size={14} color="#2E9DE0" strokeWidth={2} />
                    <span className="text-[#2E9DE0] text-xs font-semibold tracking-wide uppercase font-sans">STEM-платформа для школ</span>
                  </motion.div>

                  {/* Animated headline */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    className="w-full max-w-[800px] lg:w-[800px] text-center flex justify-center flex-col text-[#37322F] text-[26px] sm:text-[34px] md:text-[44px] lg:text-[54px] font-normal leading-[1.15] font-serif px-2 sm:px-4 md:px-0"
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      Полная STEM-экосистема
                    </motion.span>
                    <br />
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      для школ Казахстана
                    </motion.span>
                  </motion.div>

                  {/* Animated subtitle */}
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                    className="w-full max-w-[560px] lg:w-[560px] text-center flex justify-center flex-col text-[rgba(55,50,47,0.80)] sm:text-lg md:text-xl leading-[1.4] sm:leading-[1.45] md:leading-[1.5] lg:leading-7 font-sans px-2 sm:px-4 md:px-0 lg:text-lg font-medium text-sm"
                  >
                    AI-помощник для учителей, браузерное IDE для информатики и робототехники,
                    <br className="hidden sm:block" />
                    официальный импорт оборудования — всё в одной платформе.
                  </motion.div>
                </div>
              </div>

              {/* Animated CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
                className="w-full max-w-[540px] lg:w-[540px] flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-10 relative z-10 mt-6 sm:mt-8 md:mt-10 lg:mt-10"
              >
                <div className="backdrop-blur-[8.25px] flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
                  <motion.a
                    href="https://edu.alashed.kz"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="h-11 sm:h-12 px-7 sm:px-8 md:px-10 bg-[#5BB8F5] hover:bg-[#2E9DE0] transition-colors rounded-full flex items-center justify-center gap-2.5 shadow-[0px_1px_3px_rgba(91,184,245,0.40),0px_0px_0px_1px_rgba(91,184,245,0.15)] w-full sm:w-auto"
                  >
                    <Rocket01Icon size={16} color="white" strokeWidth={2} />
                    <span className="text-white text-sm font-semibold font-sans">
                      Попробовать бесплатно
                    </span>
                    <ArrowRight02Icon size={16} color="white" strokeWidth={2} />
                  </motion.a>
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="h-11 sm:h-12 px-7 bg-white hover:bg-[#F7F5F3] text-[#37322F] rounded-full font-semibold text-sm transition-colors flex items-center justify-center gap-2 shadow-[0px_1px_2px_rgba(55,50,47,0.12),0px_0px_0px_1px_rgba(55,50,47,0.06)] w-full sm:w-auto"
                  >
                    Запросить демо
                  </motion.a>
                </div>

                {/* Trust indicators */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.85, type: "spring", stiffness: 300 }}
                  className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-[rgba(55,50,47,0.55)] text-[13px] font-medium"
                >
                  <span className="inline-flex items-center gap-1.5">
                    <CheckmarkCircle02Icon size={14} color="#2E9DE0" strokeWidth={2} />
                    <span>ГОСО 2026</span>
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[rgba(55,50,47,0.25)]" />
                  <span className="inline-flex items-center gap-1.5">
                    <AiBrain01Icon size={14} color="#2E9DE0" strokeWidth={2} />
                    <span>AI-powered</span>
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[rgba(55,50,47,0.25)]" />
                  <span className="inline-flex items-center gap-1.5">
                    <Shield01Icon size={14} color="#2E9DE0" strokeWidth={2} />
                    <span>50+ школ</span>
                  </span>
                </motion.div>
              </motion.div>

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

              {/* Animated Video Section */}
              <ScrollReveal animation="scaleIn" delay={0.2} duration={0.8} className="w-full max-w-[960px] lg:w-[960px] pt-2 sm:pt-4 px-2 sm:px-4 md:px-6 lg:px-11 flex flex-col justify-center items-center gap-2 relative z-5 my-8 sm:my-12 md:my-16 lg:my-16 mb-0 lg:pb-0">
                {!heroVideoPlaying ? (
                  <motion.button
                    onClick={() => setHeroVideoPlaying(true)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full aspect-video rounded-[6px] sm:rounded-[8px] lg:rounded-[12px] overflow-hidden relative group cursor-pointer shadow-[0px_0px_0px_0.9px_rgba(0,0,0,0.08),0px_8px_32px_rgba(55,50,47,0.12)] bg-[#0F2744] flex items-center justify-center"
                    aria-label="Смотреть демо Alashed"
                  >
                    {/* Gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1A6FA8] via-[#0F2744] to-[#37322F]" />

                    {/* Animated glow */}
                    <div className="absolute inset-0 opacity-20">
                      <motion.div
                        animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#5BB8F5] rounded-full blur-[80px]"
                      />
                      <motion.div
                        animate={{ x: [0, -15, 0], y: [0, 15, 0] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#2E9DE0] rounded-full blur-[60px]"
                      />
                    </div>

                    {/* Grid pattern overlay */}
                    <div className="absolute inset-0 opacity-10" style={{backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "40px 40px"}} />

                    {/* Center content */}
                    <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-5">
                      <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center group-hover:bg-white/25 transition-all duration-300 shadow-[0px_0px_40px_rgba(91,184,245,0.4)]"
                      >
                        <svg className="ml-1" width="28" height="28" viewBox="0 0 28 28" fill="none">
                          <path d="M8 5l18 9-18 9V5z" fill="white"/>
                        </svg>
                      </motion.div>
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

                  </motion.button>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="w-full aspect-video rounded-[6px] sm:rounded-[8px] lg:rounded-[12px] overflow-hidden shadow-[0px_0px_0px_0.9px_rgba(0,0,0,0.08),0px_8px_32px_rgba(55,50,47,0.12)]"
                  >
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                      title="Alashed EDU Demo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </motion.div>
                )}
              </ScrollReveal>

              {/* Bento Grid Section */}
              <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
                {/* Header Section */}
                <ScrollReveal className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
                  <div className="w-full max-w-[616px] lg:w-[616px] px-4 sm:px-6 py-4 sm:py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4">
                    <ScrollReveal animation="scaleIn" delay={0.1}>
                      <Badge
                        icon={<CodeIcon size={14} color="#2E9DE0" strokeWidth={2} />}
                        text="Продукты"
                      />
                    </ScrollReveal>
                    <ScrollReveal delay={0.15}>
                      <div className="w-full max-w-[598.06px] lg:w-[598.06px] text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-[28px] font-semibold leading-tight font-sans tracking-tight">
                        Единая платформа для всей школы
                      </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.25}>
                      <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
                        От AI-помощника учителю до реального железа на парте —
                        <br />
                        всё связано между собой и работает вместе.
                      </div>
                    </ScrollReveal>
                  </div>
                </ScrollReveal>

                {/* Bento Grid Content */}
                <div className="self-stretch flex justify-center items-start">
                  <div className="hidden md:block w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
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

                  <StaggerContainer staggerDelay={0.15} className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 border-l-0 md:border-l border-r-0 md:border-r border-[rgba(55,50,47,0.12)]">
                    {/* Top Left - Alashed EDU */}
                    <StaggerItem className="border-b border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                          Alashed EDU — AI Copilot
                        </h3>
                        <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                          Генерация КМЖ, ФО, БЖБ, ТЖБ с автопривязкой к ОМ-кодам ГОСО 2026. AI знает профиль учителя, классы и успеваемость.
                        </p>
                      </div>
                      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] rounded-lg overflow-hidden">
                        <EduDemo />
                      </div>
                    </StaggerItem>

                    {/* Top Right - CodeStudio */}
                    <StaggerItem className="border-b border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#37322F] font-semibold leading-tight font-sans text-lg sm:text-xl">
                          CodeStudio — браузерное IDE
                        </h3>
                        <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                          Python, JavaScript, Scratch + Arduino, ESP32, Micro:bit. Деплой на реальное железо, не симулятор. AI-помощник для кода.
                        </p>
                      </div>
                      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] rounded-lg overflow-hidden">
                        <CodeStudioDemo />
                      </div>
                    </StaggerItem>

                    {/* Bottom Left - Hardware */}
                    <StaggerItem className="border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6 bg-transparent">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                          Hardware — официальный импорт
                        </h3>
                        <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                          Arduino, ESP32, Raspberry Pi, Micro:bit — напрямую в школы без посредников. Заказ из дашборда директора.
                        </p>
                      </div>
                      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] rounded-lg overflow-hidden">
                        <HardwareDemo />
                      </div>
                    </StaggerItem>

                    {/* Bottom Right - Journal */}
                    <StaggerItem className="border-b md:border-b-0 border-[rgba(55,50,47,0.12)] last:border-b-0 p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                          Электронный журнал
                        </h3>
                        <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                          Оценки, посещаемость, расписание — всё в одном месте. Связан с AI-планами и аналитикой директора.
                        </p>
                      </div>
                      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] rounded-lg overflow-hidden">
                        <JournalDemo />
                      </div>
                    </StaggerItem>
                  </StaggerContainer>

                  <div className="hidden md:block w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
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

              {/* How It Works Section */}
              <HowItWorksSection />

              {/* Contact Section */}
              <ContactSection />

              {/* Footer */}
              <FooterSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
