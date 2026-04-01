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
import {
  CodeIcon,
  AiBrain01Icon,
  ChipIcon,
  BookOpen01Icon,
  Briefcase01Icon,
  Clock01Icon,
  ComputerProgramming01Icon,
  ArrowRight02Icon,
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
  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      <div className="relative flex flex-col justify-start items-center w-full">
        {/* Main container with proper margins */}
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen">
          {/* Left vertical line */}
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          {/* Right vertical line */}
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          <div className="self-stretch pt-[9px] border-b border-[rgba(55,50,47,0.06)] flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-[66px] relative z-10">
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
                        Экосистема продуктов Alashed
                      </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.25}>
                      <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
                        Образование, робототехника, бизнес и IT —
                        <br />
                        9 продуктов, связанных в единую платформу.
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

                    {/* Bottom Left - Alash Electronics Store */}
                    <StaggerItem className="border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6 bg-transparent">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                          Alash Electronics — официальный импорт
                        </h3>
                        <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                          Онлайн-магазин STEM-оборудования для школ. Arduino, ESP32, Raspberry Pi, датчики, роботы — с доставкой по Казахстану.
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

              {/* More Products Section */}
              <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col items-center">
                <ScrollReveal className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 py-8 sm:py-12 md:py-14 border-b border-[rgba(55,50,47,0.12)] flex justify-center">
                  <div className="w-full max-w-[616px] flex flex-col items-center gap-3">
                    <ScrollReveal animation="scaleIn" delay={0.1}>
                      <Badge
                        icon={<AiBrain01Icon size={14} color="#2E9DE0" strokeWidth={2} />}
                        text="Ещё продукты"
                      />
                    </ScrollReveal>
                    <ScrollReveal delay={0.15}>
                      <div className="text-center text-[#49423D] text-xl sm:text-2xl md:text-[28px] font-semibold leading-tight font-sans tracking-tight">
                        Робототехника, бизнес и инструменты
                      </div>
                    </ScrollReveal>
                  </div>
                </ScrollReveal>

                <StaggerContainer staggerDelay={0.1} className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
                  {/* Unitree.kz */}
                  <StaggerItem className="border-b sm:border-r border-[rgba(55,50,47,0.12)] p-6 sm:p-8 flex flex-col gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-[#1a1715] flex items-center justify-center">
                      <ComputerProgramming01Icon size={20} color="white" strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <h3 className="text-[#37322F] text-base font-semibold font-sans">Unitree.kz</h3>
                      <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                        Официальный дистрибьютор роботов Unitree в СНГ. Четвероногие роботы, гуманоиды, промышленная робототехника.
                      </p>
                    </div>
                    <a href="https://unitree.kz" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[#2E9DE0] text-sm font-semibold font-sans group-hover:gap-2.5 transition-all">
                      unitree.kz <ArrowRight02Icon size={14} color="#2E9DE0" strokeWidth={2} />
                    </a>
                  </StaggerItem>

                  {/* Alashed IT */}
                  <StaggerItem className="border-b lg:border-r border-[rgba(55,50,47,0.12)] p-6 sm:p-8 flex flex-col gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-[#2E9DE0] flex items-center justify-center">
                      <CodeIcon size={20} color="white" strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <h3 className="text-[#37322F] text-base font-semibold font-sans">Alashed IT</h3>
                      <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                        IT-услуги и AI-интеграции для бизнеса. Разработка, консалтинг, внедрение AI-решений под ключ.
                      </p>
                    </div>
                    <a href="https://it.alashed.kz" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[#2E9DE0] text-sm font-semibold font-sans group-hover:gap-2.5 transition-all">
                      it.alashed.kz <ArrowRight02Icon size={14} color="#2E9DE0" strokeWidth={2} />
                    </a>
                  </StaggerItem>

                  {/* Alashed BIZ */}
                  <StaggerItem className="border-b sm:border-r lg:border-r-0 border-[rgba(55,50,47,0.12)] p-6 sm:p-8 flex flex-col gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-[#F59E0B] flex items-center justify-center">
                      <Briefcase01Icon size={20} color="white" strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <h3 className="text-[#37322F] text-base font-semibold font-sans">Alashed BIZ</h3>
                      <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                        Управление бизнесом: заказы, склад, поставщики, фискализация через Webkassa. PWA-приложение.
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[#605A57] text-sm font-medium font-sans">
                      Скоро
                    </span>
                  </StaggerItem>

                  {/* Tendon */}
                  <StaggerItem className="border-b sm:border-b-0 lg:border-b-0 sm:border-r lg:border-r border-[rgba(55,50,47,0.12)] p-6 sm:p-8 flex flex-col gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-[#8B5CF6] flex items-center justify-center">
                      <Clock01Icon size={20} color="white" strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <h3 className="text-[#37322F] text-base font-semibold font-sans">Tendon</h3>
                      <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                        Task-трекер для разработчиков. Интеграция с Claude Code, фокус-сессии, стендапы, ревью.
                      </p>
                    </div>
                    <a href="https://tendon.alashed.kz" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[#2E9DE0] text-sm font-semibold font-sans group-hover:gap-2.5 transition-all">
                      tendon.alashed.kz <ArrowRight02Icon size={14} color="#2E9DE0" strokeWidth={2} />
                    </a>
                  </StaggerItem>

                  {/* Wiki */}
                  <StaggerItem className="sm:border-r-0 lg:border-r border-[rgba(55,50,47,0.12)] p-6 sm:p-8 flex flex-col gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-[#10B981] flex items-center justify-center">
                      <BookOpen01Icon size={20} color="white" strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <h3 className="text-[#37322F] text-base font-semibold font-sans">Wiki Alashed</h3>
                      <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                        Документация, курсы и обучающие материалы по электронике и робототехнике для учеников.
                      </p>
                    </div>
                    <a href="https://wiki.alashed.kz" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[#2E9DE0] text-sm font-semibold font-sans group-hover:gap-2.5 transition-all">
                      wiki.alashed.kz <ArrowRight02Icon size={14} color="#2E9DE0" strokeWidth={2} />
                    </a>
                  </StaggerItem>
                </StaggerContainer>
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
