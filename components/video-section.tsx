"use client"

import { useState } from "react"
import { PlayCircle02Icon, PlayIcon } from "hugeicons-react"

export default function VideoSection() {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] flex flex-col justify-start items-center gap-4">
          <div className="px-[14px] py-[6px] bg-[#EBF7FF] overflow-hidden rounded-[90px] flex items-center gap-[8px] border border-[#5BB8F5]/30">
            <PlayCircle02Icon size={12} color="#2E9DE0" strokeWidth={1} />
            <div className="text-[#2E9DE0] text-xs font-semibold leading-3 font-sans tracking-wide uppercase">
              Демо
            </div>
          </div>
          <div className="self-stretch text-center text-[#49423D] text-3xl md:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
            Посмотрите как это работает
          </div>
          <div className="self-stretch text-center text-[#605A57] text-base font-normal leading-7 font-sans">
            3-минутный обзор платформы: AI-генерация документов, CodeStudio и электронный журнал.
          </div>
        </div>
      </div>

      {/* Video container */}
      <div className="self-stretch px-6 md:px-16 py-10 md:py-14 flex justify-center items-center">
        <div className="w-full max-w-[800px] relative">
          {!playing ? (
            <button
              onClick={() => setPlaying(true)}
              className="w-full aspect-video rounded-2xl overflow-hidden relative group cursor-pointer border border-[rgba(55,50,47,0.12)] bg-[#1A1A2E] flex items-center justify-center"
              aria-label="Смотреть демо"
            >
              {/* Thumbnail gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A6FA8]/90 to-[#37322F]/90" />

              {/* Play button */}
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <PlayIcon size={28} color="white" />
                </div>
                <div className="text-white text-base font-semibold font-sans">Смотреть демо (3 мин)</div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-white text-xs font-semibold font-sans">Alashed EDU</span>
              </div>
            </button>
          ) : (
            <div className="w-full aspect-video rounded-2xl overflow-hidden border border-[rgba(55,50,47,0.12)]">
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
      </div>

      {/* Bottom CTA */}
      <div className="self-stretch px-6 py-6 border-t border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-4 flex-wrap">
        <span className="text-[#605A57] text-sm font-normal font-sans">Хотите живую демонстрацию для вашей школы?</span>
        <a
          href="#contact"
          className="px-5 py-2 bg-white border border-[rgba(55,50,47,0.20)] rounded-[99px] text-[#37322F] text-sm font-medium font-sans hover:bg-[#F7F5F3] transition-colors shadow-[0px_1px_2px_rgba(55,50,47,0.08)]"
        >
          Запросить личное демо →
        </a>
      </div>
    </div>
  )
}
