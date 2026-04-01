"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  ArrowRight02Icon,
  CheckmarkCircle02Icon,
  SparklesIcon,
  Rocket01Icon,
  AiBrain01Icon,
  CodeIcon,
  Shield01Icon,
  Atom01Icon,
  ComputerProgramming01Icon,
  BookOpen01Icon,
  CpuIcon,
} from "hugeicons-react"
import ScrollReveal from "@/components/motion/scroll-reveal"

// Floating feature pill that orbits around the hero
function FloatingPill({
  icon,
  label,
  className,
  delay = 0,
}: {
  icon: React.ReactNode
  label: string
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 200 }}
      className={`absolute hidden lg:flex items-center gap-2 px-3.5 py-2 bg-white/80 backdrop-blur-md rounded-xl border border-[rgba(55,50,47,0.08)] shadow-[0_2px_12px_rgba(0,0,0,0.06)] z-20 ${className}`}
    >
      <div className="w-7 h-7 rounded-lg bg-[#EBF7FF] flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <span className="text-[#37322F] text-[13px] font-semibold font-sans whitespace-nowrap">{label}</span>
    </motion.div>
  )
}

export function HeroSection() {
  const [videoPlaying, setVideoPlaying] = useState(false)

  return (
    <div className="relative pt-16 sm:pt-20 md:pt-24 lg:pt-[196px] pb-8 sm:pb-12 md:pb-16 flex flex-col justify-start items-center px-2 sm:px-4 md:px-8 lg:px-0 w-full">

      {/* Background gradient orb */}
      <div className="absolute top-[100px] lg:top-[160px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none z-0">
        <motion.div
          animate={{ scale: [1, 1.08, 1], rotate: [0, 3, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full rounded-full opacity-[0.07]"
          style={{
            background: "radial-gradient(circle, #5BB8F5 0%, #2E9DE0 40%, transparent 70%)",
          }}
        />
      </div>

      {/* Floating feature pills — desktop only */}
      <FloatingPill
        icon={<AiBrain01Icon size={16} color="#2E9DE0" strokeWidth={1.8} />}
        label="AI Copilot"
        className="top-[180px] -left-[20px]"
        delay={1.0}
      />
      <FloatingPill
        icon={<ComputerProgramming01Icon size={16} color="#2E9DE0" strokeWidth={1.8} />}
        label="Браузерное IDE"
        className="top-[260px] -right-[30px]"
        delay={1.15}
      />
      <FloatingPill
        icon={<CpuIcon size={16} color="#2E9DE0" strokeWidth={1.8} />}
        label="Arduino & ESP32"
        className="top-[380px] -left-[10px]"
        delay={1.3}
      />
      <FloatingPill
        icon={<BookOpen01Icon size={16} color="#2E9DE0" strokeWidth={1.8} />}
        label="ГОСО 2026"
        className="top-[350px] -right-[15px]"
        delay={1.45}
      />

      {/* Main content */}
      <div className="w-full max-w-[937px] flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 relative z-10">
        <div className="self-stretch flex flex-col justify-center items-center gap-5 sm:gap-6 md:gap-7 lg:gap-8">

          {/* Animated pill badge */}
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full border border-[rgba(55,50,47,0.08)] shadow-[0_1px_6px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-1.5 px-2 py-0.5 bg-[#EBF7FF] rounded-full">
                <SparklesIcon size={12} color="#2E9DE0" strokeWidth={2} />
                <span className="text-[#2E9DE0] text-[11px] font-bold tracking-wider uppercase font-sans">Новое</span>
              </div>
              <span className="text-[#49423D] text-[13px] font-medium font-sans">STEM-платформа для школ Казахстана</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full max-w-[780px] text-center text-[#1a1715] text-[28px] sm:text-[36px] md:text-[48px] lg:text-[58px] font-normal leading-[1.1] font-serif px-2 sm:px-4 md:px-0 tracking-[-0.02em]"
          >
            <span className="block">Полная STEM-экосистема</span>
            <span className="block mt-1">
              для{" "}
              <span className="relative inline-block">
                <span className="relative z-10">школ Казахстана</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                  className="absolute bottom-[6px] sm:bottom-[8px] md:bottom-[10px] left-0 right-0 h-[6px] sm:h-[8px] md:h-[10px] bg-[#5BB8F5]/20 rounded-full origin-left z-0"
                />
              </span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full max-w-[520px] text-center text-[rgba(55,50,47,0.70)] text-[15px] sm:text-base md:text-lg leading-[1.6] font-sans px-4 md:px-0 font-medium"
          >
            AI-помощник для учителей, браузерное IDE для робототехники, официальный импорт оборудования — всё в одной платформе.
          </motion.p>
        </div>
      </div>

      {/* CTA block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex flex-col items-center gap-7 sm:gap-8 relative z-10 mt-8 sm:mt-10"
      >
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-3.5 w-full sm:w-auto px-4 sm:px-0">
          <motion.a
            href="https://edu.alashed.kz"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="group h-12 sm:h-[52px] px-7 sm:px-9 bg-[#37322F] hover:bg-[#1a1715] transition-all duration-200 rounded-[14px] flex items-center justify-center gap-2.5 shadow-[0_1px_2px_rgba(0,0,0,0.2),0_0_0_1px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.06)] w-full sm:w-auto"
          >
            <span className="text-white text-sm font-semibold font-sans">
              Попробовать бесплатно
            </span>
            <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <ArrowRight02Icon size={12} color="white" strokeWidth={2.5} />
            </div>
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="h-12 sm:h-[52px] px-7 bg-white hover:bg-[#FAFAF9] text-[#37322F] rounded-[14px] font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_0_0_1px_rgba(55,50,47,0.1)] w-full sm:w-auto"
          >
            <Rocket01Icon size={15} color="#37322F" strokeWidth={2} />
            Запросить демо
          </motion.a>
        </div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap justify-center items-center gap-3 sm:gap-5"
        >
          {[
            { icon: <CheckmarkCircle02Icon size={14} color="#2E9DE0" strokeWidth={2} />, text: "ГОСО 2026" },
            { icon: <AiBrain01Icon size={14} color="#2E9DE0" strokeWidth={2} />, text: "AI-powered" },
            { icon: <Shield01Icon size={14} color="#2E9DE0" strokeWidth={2} />, text: "50+ школ" },
            { icon: <Atom01Icon size={14} color="#2E9DE0" strokeWidth={2} />, text: "STEM" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95 + i * 0.08 }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/60 border border-[rgba(55,50,47,0.06)]"
            >
              {item.icon}
              <span className="text-[#605A57] text-[12px] font-semibold font-sans">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Video Section */}
      <ScrollReveal animation="scaleIn" delay={0.2} duration={0.8} className="w-full max-w-[960px] lg:w-[960px] pt-2 sm:pt-4 px-2 sm:px-4 md:px-6 lg:px-11 flex flex-col justify-center items-center gap-2 relative z-5 my-8 sm:my-12 md:my-16 lg:my-16 mb-0 lg:pb-0">
        {!videoPlaying ? (
          <motion.button
            onClick={() => setVideoPlaying(true)}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="w-full aspect-video rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] overflow-hidden relative group cursor-pointer shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_12px_48px_rgba(55,50,47,0.15)] bg-[#0F2744] flex items-center justify-center"
            aria-label="Смотреть демо Alashed"
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A3A5C] via-[#0F2744] to-[#1a1715]" />

            {/* Animated glow */}
            <div className="absolute inset-0 opacity-25">
              <motion.div
                animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#5BB8F5] rounded-full blur-[100px]"
              />
              <motion.div
                animate={{ x: [0, -20, 0], y: [0, 25, 0] }}
                transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-[#2E9DE0] rounded-full blur-[80px]"
              />
            </div>

            {/* Subtle grid */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />

            {/* Center content */}
            <div className="relative z-10 flex flex-col items-center gap-5">
              <motion.div
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-16 h-16 sm:w-[72px] sm:h-[72px] md:w-20 md:h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 shadow-[0px_0px_50px_rgba(91,184,245,0.3)]"
              >
                <svg className="ml-0.5" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M7 4v16l13-8L7 4z" fill="white" />
                </svg>
              </motion.div>
              <div className="flex flex-col items-center gap-1.5">
                <span className="text-white text-sm sm:text-base font-semibold font-sans tracking-[-0.01em]">
                  Смотреть как работает Alashed
                </span>
                <span className="text-white/50 text-xs sm:text-[13px] font-medium font-sans">
                  3 минуты · AI-документы, CodeStudio, журнал
                </span>
              </div>
            </div>

            {/* Top left badge */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-3 py-1.5 bg-white/8 backdrop-blur-md rounded-xl border border-white/10 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#5BB8F5] animate-pulse" />
              <span className="text-white/80 text-[11px] font-semibold font-sans tracking-wide">Alashed EDU · Demo</span>
            </div>
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full aspect-video rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] overflow-hidden shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_12px_48px_rgba(55,50,47,0.15)]"
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

      {/* Background pattern */}
      <div className="absolute top-[232px] sm:top-[248px] md:top-[264px] lg:top-[320px] left-1/2 transform -translate-x-1/2 z-0 pointer-events-none">
        <img
          src="/mask-group-pattern.svg"
          alt=""
          className="w-[936px] sm:w-[1404px] md:w-[2106px] lg:w-[2808px] h-auto opacity-20 sm:opacity-25 md:opacity-30 mix-blend-multiply"
          style={{ filter: "hue-rotate(15deg) saturate(0.5) brightness(1.3)" }}
        />
      </div>
    </div>
  )
}

export default HeroSection
