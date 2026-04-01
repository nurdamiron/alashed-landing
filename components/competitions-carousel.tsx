"use client"

import { useState, useEffect, useCallback } from "react"
import { ArrowLeft02Icon, ArrowRight02Icon } from "hugeicons-react"

const slides = [
  // Infomatrix
  { src: "/competitions/infomatrix/infomatrix-award-ceremony-winners-team-15.png", label: "Infomatrix", caption: "Церемония награждения" },
  { src: "/competitions/infomatrix/infomatrix-asia-opening-ceremony-stage-05.png", label: "Infomatrix", caption: "Церемония открытия" },
  { src: "/competitions/infomatrix/infomatrix-international-competition-participants-02.png", label: "Infomatrix", caption: "Участники из Казахстана" },
  { src: "/competitions/infomatrix/infomatrix-robotics-competition-arena-06.png", label: "Infomatrix", caption: "Арена робототехники" },
  { src: "/competitions/infomatrix/infomatrix-programming-robotics-students-13.png", label: "Infomatrix", caption: "Программирование роботов" },
  { src: "/competitions/infomatrix/infomatrix-innovation-projects-showcase-14.png", label: "Infomatrix", caption: "Выставка проектов" },
  { src: "/competitions/infomatrix/infomatrix-student-robot-demonstration-10.png", label: "Infomatrix", caption: "Демонстрация роботов" },
  { src: "/competitions/infomatrix/infomatrix-technology-exhibition-students-04.png", label: "Infomatrix", caption: "Технологическая выставка" },
  // KazRobotics
  { src: "/competitions/kazrobotics/kazrobotics-national-robotics-olympiad-01.jpg", label: "KazRobotics", caption: "Национальная олимпиада" },
  { src: "/competitions/kazrobotics/kazrobotics-robot-sumo-competition-02.jpg", label: "KazRobotics", caption: "Соревнование роботов-сумо" },
  { src: "/competitions/kazrobotics/kazrobotics-line-following-challenge-03.jpg", label: "KazRobotics", caption: "Следование по линии" },
  // WRO
  { src: "/competitions/wro/wro-international-robotics-olympiad-03.jpg", label: "WRO", caption: "Международная олимпиада" },
  { src: "/competitions/wro/wro-robot-competition-kazakhstan-04.jpg", label: "WRO", caption: "Казахстан на WRO" },
  { src: "/competitions/wro/wro-robotics-challenge-ziggurat-02.jpg", label: "WRO", caption: "Robotics Challenge" },
  // ITFest
  { src: "/competitions/itfest/itfest-kazakhstan-robotics-competition-arena-01.jpg", label: "ITFest", caption: "Арена соревнований" },
  { src: "/competitions/itfest/itfest-award-ceremony-winners-07.jpg", label: "ITFest", caption: "Победители" },
  { src: "/competitions/itfest/itfest-robotics-competition-teamwork-03.jpg", label: "ITFest", caption: "Командная работа" },
  { src: "/competitions/itfest/itfest-champions-robotics-kazakhstan-08.jpg", label: "ITFest", caption: "Чемпионы Казахстана" },
  { src: "/competitions/itfest/itfest-robotics-arena-competition-05.jpg", label: "ITFest", caption: "Арена робототехники" },
]

const labelColors: Record<string, { text: string; bg: string; border: string }> = {
  "Infomatrix": { text: "#1A6FA8", bg: "#EBF7FF", border: "#5BB8F5" },
  "KazRobotics": { text: "#059669", bg: "#ECFDF5", border: "#6EE7B7" },
  "WRO":         { text: "#D97706", bg: "#FEF3C7", border: "#FCD34D" },
  "ITFest":      { text: "#7C3AED", bg: "#F5F3FF", border: "#C4B5FD" },
}

export default function CompetitionsCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setCurrent(c => (c + 1) % slides.length), [])
  const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length)

  useEffect(() => {
    if (paused) return
    const t = setInterval(next, 3500)
    return () => clearInterval(t)
  }, [paused, next])

  const slide = slides[current]
  const col = labelColors[slide.label]

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl bg-[#1a1a1a]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{ aspectRatio: "16/9" }}
    >
      {/* Images */}
      {slides.map((s, i) => (
        <img
          key={i}
          src={s.src}
          alt={s.caption}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 flex items-end justify-between gap-4">
        <div>
          <span
            className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold font-sans border mb-2"
            style={{ color: col.text, background: col.bg, borderColor: col.border }}
          >
            {slide.label}
          </span>
          <p className="text-white text-sm sm:text-base font-semibold font-sans drop-shadow">{slide.caption}</p>
        </div>

        {/* Arrows */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={prev}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center transition-colors"
          >
            <ArrowLeft02Icon size={14} color="white" />
          </button>
          <button
            onClick={next}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center transition-colors"
          >
            <ArrowRight02Icon size={14} color="white" />
          </button>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute top-4 right-4 flex gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="transition-all duration-300 rounded-full"
            style={{
              width: i === current ? 20 : 6,
              height: 6,
              background: i === current ? "white" : "rgba(255,255,255,0.4)",
            }}
          />
        ))}
      </div>
    </div>
  )
}
