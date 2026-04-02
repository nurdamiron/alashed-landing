"use client"

import type React from "react"
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/motion/scroll-reveal"
import {
  SearchList01Icon,
  CodeIcon,
  BookOpen01Icon,
  ChipIcon,
  ComputerProgramming01Icon,
  Briefcase01Icon,
  Clock01Icon,
  StarIcon,
  ArrowRight02Icon,
} from "hugeicons-react"

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

interface Product {
  name: string
  description: string
  icon: React.ReactNode
  href?: string
  comingSoon?: boolean
}

interface Vertical {
  title: string
  subtitle: string
  accentColor: string
  products: Product[]
}

const verticals: Vertical[] = [
  {
    title: "Образование",
    subtitle: "EdTech-платформа для школ Казахстана",
    accentColor: "#2E9DE0",
    products: [
      {
        name: "Alashed EDU",
        description: "AI-копилот для учителей",
        icon: <SearchList01Icon size={16} color="#2E9DE0" strokeWidth={1.5} />,
        href: "https://edu.alashed.kz",
      },
      {
        name: "CodeStudio",
        description: "Браузерное IDE для робототехники",
        icon: <CodeIcon size={16} color="#2E9DE0" strokeWidth={1.5} />,
        href: "https://studio.alashed.kz",
      },
      {
        name: "Wiki",
        description: "Курсы и документация",
        icon: <BookOpen01Icon size={16} color="#2E9DE0" strokeWidth={1.5} />,
        href: "https://wiki.alashed.kz",
      },
      {
        name: "Соревнования",
        description: "Подготовка к Infomatrix, WRO",
        icon: <StarIcon size={16} color="#2E9DE0" strokeWidth={1.5} />,
        href: "/competitions",
      },
    ],
  },
  {
    title: "Робототехника",
    subtitle: "Оборудование и роботы для СНГ",
    accentColor: "#1a1715",
    products: [
      {
        name: "Alash Electronics",
        description: "Импорт STEM-оборудования",
        icon: <ChipIcon size={16} color="#1a1715" strokeWidth={1.5} />,
        href: "https://alash-electronics.kz",
      },
      {
        name: "Unitree.kz",
        description: "Дистрибьютор роботов Unitree в СНГ",
        icon: <ComputerProgramming01Icon size={16} color="#1a1715" strokeWidth={1.5} />,
        href: "https://unitree.kz",
      },
    ],
  },
  {
    title: "Бизнес и IT",
    subtitle: "IT-услуги, продукты, автоматизация",
    accentColor: "#8B5CF6",
    products: [
      {
        name: "Alashed IT",
        description: "IT-услуги и AI-интеграции",
        icon: <CodeIcon size={16} color="#8B5CF6" strokeWidth={1.5} />,
        href: "https://it.alashed.kz",
      },
      {
        name: "Tendon",
        description: "Task-трекер для разработчиков",
        icon: <Clock01Icon size={16} color="#8B5CF6" strokeWidth={1.5} />,
        href: "https://tendon.alashed.kz",
      },
      {
        name: "Alashed BIZ",
        description: "Управление бизнесом",
        icon: <Briefcase01Icon size={16} color="#8B5CF6" strokeWidth={1.5} />,
        comingSoon: true,
      },
    ],
  },
]

function ProductRow({
  product,
  accentColor,
}: {
  product: Product
  accentColor: string
}) {
  const content = (
    <div className="flex items-center gap-3 py-3 group/row">
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: `${accentColor}10` }}
      >
        {product.icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-[#37322F] text-sm font-semibold font-sans leading-tight">
            {product.name}
          </span>
          {product.comingSoon && (
            <span className="text-[10px] font-medium text-[#605A57] bg-[rgba(55,50,47,0.06)] px-1.5 py-0.5 rounded font-sans uppercase tracking-wider">
              Soon
            </span>
          )}
        </div>
        <p className="text-[#605A57] text-xs font-normal font-sans leading-tight mt-0.5">
          {product.description}
        </p>
      </div>
      {product.href && !product.comingSoon && (
        <ArrowRight02Icon
          size={14}
          color={accentColor}
          strokeWidth={2}
          className="flex-shrink-0 opacity-0 -translate-x-1 group-hover/row:opacity-100 group-hover/row:translate-x-0 transition-all duration-200"
        />
      )}
    </div>
  )

  if (product.href && !product.comingSoon) {
    const isExternal = product.href.startsWith("http")
    return (
      <a
        href={product.href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="block hover:bg-[rgba(55,50,47,0.03)] -mx-3 px-3 rounded-lg transition-colors duration-200"
      >
        {content}
      </a>
    )
  }

  return content
}

function VerticalCard({ vertical }: { vertical: Vertical }) {
  return (
    <div className="flex flex-col border border-[rgba(55,50,47,0.12)] rounded-xl bg-white overflow-hidden">
      {/* Colored top bar */}
      <div className="h-1" style={{ backgroundColor: vertical.accentColor }} />

      <div className="p-5 sm:p-6 flex flex-col gap-4 flex-1">
        {/* Header */}
        <div className="flex flex-col gap-1">
          <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold font-sans leading-tight">
            {vertical.title}
          </h3>
          <p className="text-[#605A57] text-sm font-normal font-sans leading-relaxed">
            {vertical.subtitle}
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-[rgba(55,50,47,0.08)]" />

        {/* Products list */}
        <div className="flex flex-col">
          {vertical.products.map((product) => (
            <ProductRow
              key={product.name}
              product={product}
              accentColor={vertical.accentColor}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function VerticalsSection() {
  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col items-center">
      {/* Section header */}
      <ScrollReveal className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center">
        <div className="w-full max-w-[616px] flex flex-col items-center gap-3 sm:gap-4">
          <ScrollReveal animation="scaleIn" delay={0.1}>
            <Badge
              icon={<Briefcase01Icon size={14} color="#2E9DE0" strokeWidth={2} />}
              text="Направления"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="text-center text-[#49423D] text-xl sm:text-2xl md:text-[28px] font-semibold leading-tight font-sans tracking-tight">
              Три направления, одна экосистема
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <p className="text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
              Образование, робототехника, бизнес — каждое направление
              <br className="hidden sm:block" />
              усиливает остальные внутри платформы Alashed.
            </p>
          </ScrollReveal>
        </div>
      </ScrollReveal>

      {/* Cards grid */}
      <StaggerContainer
        staggerDelay={0.15}
        className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 px-4 sm:px-6 md:px-8 lg:px-6 py-8 sm:py-10 md:py-12 max-w-[1060px]"
      >
        {verticals.map((vertical) => (
          <StaggerItem key={vertical.title}>
            <VerticalCard vertical={vertical} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  )
}
