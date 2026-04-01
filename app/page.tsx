"use client"

import type React from "react"
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
import { HeroSection } from "@/components/hero-section"
import { CodeIcon } from "hugeicons-react"

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
            <HeroSection />

            <div className="flex flex-col justify-start items-center w-full">
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
