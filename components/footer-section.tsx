"use client"

import { motion } from "framer-motion"
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/motion/scroll-reveal"

const productLinks = [
  { label: "Alashed EDU", href: "https://edu.alashed.kz" },
  { label: "CodeStudio", href: "/for-students" },
  { label: "Hardware", href: "/hardware" },
  { label: "Соревнования", href: "/competitions" },
]

const companyLinks = [
  { label: "О нас", href: "#" },
  { label: "Для учителей", href: "/for-teachers" },
  { label: "Для директоров", href: "/for-directors" },
  { label: "Блог", href: "/blog" },
  { label: "Контакты", href: "#contact" },
]

const resourceLinks = [
  { label: "ГОСО 2026", href: "#" },
  { label: "Документация", href: "#" },
  { label: "Обучение", href: "#" },
  { label: "Поддержка", href: "#" },
]

export default function FooterSection() {
  return (
    <footer className="w-full pt-10 flex flex-col justify-start items-start">
      {/* Main Footer Content */}
      <ScrollReveal animation="fadeUp" className="self-stretch">
        <div className="self-stretch flex flex-col md:flex-row justify-between items-stretch pb-8">
          {/* Brand Section */}
          <div className="p-4 md:p-8 flex flex-col justify-start items-start gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3"
            >
              <img src="/alashed-wide-logo.svg" alt="Alashed" className="h-6 w-auto" />
            </motion.div>
            <div className="text-[rgba(73,66,61,0.90)] text-sm font-medium leading-[18px] font-sans max-w-[240px]">
              STEM-экосистема для школ Казахстана.
              <br />
              AI, код, железо — в одной платформе.
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-start items-start gap-3">
              {[
                { label: "Instagram", href: "https://instagram.com/alashed.kz", icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="#49423D" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="5" stroke="#49423D" strokeWidth="2"/>
                    <circle cx="18" cy="6" r="1.5" fill="#49423D"/>
                  </svg>
                )},
                { label: "LinkedIn", href: "#", icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" fill="#49423D"/>
                  </svg>
                )},
                { label: "GitHub", href: "https://github.com/nurdamiron", icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.300 24 12c0-6.627-5.374-12-12-12z" fill="#49423D"/>
                  </svg>
                )},
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="w-8 h-8 rounded-full bg-[#F7F5F3] border border-[rgba(55,50,47,0.08)] flex items-center justify-center hover:bg-[#EBF7FF] hover:border-[#5BB8F5]/30 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <StaggerContainer staggerDelay={0.08} className="p-4 md:p-8 flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start gap-6 md:gap-10">
            {/* Products Column */}
            <StaggerItem className="flex flex-col justify-start items-start gap-3 min-w-[120px]">
              <div className="text-[rgba(73,66,61,0.50)] text-xs font-semibold leading-5 font-sans uppercase tracking-wider">
                Продукты
              </div>
              <div className="flex flex-col justify-end items-start gap-2">
                {productLinks.map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.href}
                    whileHover={{ x: 3, color: "#2E9DE0" }}
                    transition={{ duration: 0.15 }}
                    className="text-[#49423D] text-sm font-normal leading-5 font-sans"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </StaggerItem>

            {/* Company Column */}
            <StaggerItem className="flex flex-col justify-start items-start gap-3 min-w-[120px]">
              <div className="text-[rgba(73,66,61,0.50)] text-xs font-semibold leading-5 font-sans uppercase tracking-wider">
                Компания
              </div>
              <div className="flex flex-col justify-center items-start gap-2">
                {companyLinks.map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.href}
                    whileHover={{ x: 3, color: "#2E9DE0" }}
                    transition={{ duration: 0.15 }}
                    className="text-[#49423D] text-sm font-normal leading-5 font-sans"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </StaggerItem>

            {/* Resources Column */}
            <StaggerItem className="flex flex-col justify-start items-start gap-3 min-w-[120px]">
              <div className="text-[rgba(73,66,61,0.50)] text-xs font-semibold leading-5 font-sans uppercase tracking-wider">
                Ресурсы
              </div>
              <div className="flex flex-col justify-center items-start gap-2">
                {resourceLinks.map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.href}
                    whileHover={{ x: 3, color: "#2E9DE0" }}
                    transition={{ duration: 0.15 }}
                    className="text-[#49423D] text-sm font-normal leading-5 font-sans"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </ScrollReveal>

      {/* Bottom bar */}
      <div className="self-stretch border-t border-[rgba(55,50,47,0.12)]">
        <div className="flex flex-col sm:flex-row justify-between items-center px-4 md:px-8 py-5 gap-3">
          <span className="text-[rgba(73,66,61,0.50)] text-xs font-normal font-sans">
            © 2025 Alashed. Все права защищены.
          </span>
          <div className="flex items-center gap-4">
            <a href="#" className="text-[rgba(73,66,61,0.50)] text-xs font-normal font-sans hover:text-[#49423D] transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-[rgba(73,66,61,0.50)] text-xs font-normal font-sans hover:text-[#49423D] transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>

      {/* Decorative pattern strip */}
      <div className="self-stretch h-10 relative overflow-hidden border-t border-[rgba(55,50,47,0.12)]">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="w-full h-full relative">
            {Array.from({ length: 400 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-[300px] h-16 border border-[rgba(3,7,18,0.06)]"
                style={{
                  left: `${i * 300 - 600}px`,
                  top: "-120px",
                  transform: "rotate(-45deg)",
                  transformOrigin: "top left",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
