"use client"

import { useState } from "react"

export default function TargetAudienceSection() {
  const [activeTab, setActiveTab] = useState(0)

  const audiences = [
    {
      title: "Учителя информатики",
      iconPath: "M6 1.5c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zM1.5 11.5c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5",
      benefits: [
        { text: "КМЖ за 2 минуты вместо 8 часов", metric: "-95%", color: "#059669" },
        { text: "AI находит ОМ-коды ГОСО 2026 автоматически", metric: "100%", color: "#2E9DE0" },
        { text: "Готовые уроки с кодом и заданиями", metric: "500+", color: "#7C3AED" },
      ],
      iconColor: "#2E9DE0",
      iconBg: "#EBF7FF",
    },
    {
      title: "Директора школ",
      iconPath: "M1 1h4v4H1zM7 1h4v4H7zM1 7h4v4H1zM7 7h4v4H7z",
      benefits: [
        { text: "Аналитика по каждому классу в реальном времени", metric: "Live", color: "#7C3AED" },
        { text: "Заказ оборудования в один клик", metric: "1 клик", color: "#2E9DE0" },
        { text: "Отчеты для МОН готовы автоматически", metric: "Auto", color: "#059669" },
      ],
      iconColor: "#7C3AED",
      iconBg: "#F5F3FF",
    },
    {
      title: "Ученики",
      iconPath: "M3 4L1.5 6.5 3 9M9 4l1.5 2.5L9 9M6.5 3L5 10",
      benefits: [
        { text: "Программирование на реальном железе", metric: "Arduino", color: "#00979D" },
        { text: "Подготовка к Infomatrix, WRO, KazRobotics", metric: "3 олимп.", color: "#D97706" },
        { text: "Портфолио проектов для поступления", metric: "GitHub", color: "#2E9DE0" },
      ],
      iconColor: "#059669",
      iconBg: "#ECFDF5",
    },
  ]

  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] py-12 sm:py-16 md:py-20 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full px-4 sm:px-6 py-4 sm:py-5 flex flex-col justify-start items-center gap-6 sm:gap-8">
          {/* Badge */}
          <div className="px-[14px] py-[6px] bg-[#EBF7FF] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[#5BB8F5]/30">
            <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">
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
            </div>
            <div className="text-center flex justify-center flex-col text-[#2E9DE0] text-xs font-semibold leading-3 font-sans tracking-wide uppercase">
              Для кого
            </div>
          </div>

          {/* Heading */}
          <div className="w-full max-w-[600px] text-center flex justify-center flex-col text-[#37322F] text-2xl sm:text-3xl md:text-[32px] font-semibold leading-tight font-sans tracking-tight">
            Выгода для всех участников образовательного процесса
          </div>

          {/* Tabs */}
          <div className="w-full max-w-[700px] flex flex-col sm:flex-row gap-3 justify-center">
            {audiences.map((audience, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex-1 px-4 py-3 rounded-lg border transition-all duration-300 ${
                  activeTab === index
                    ? "bg-white border-[#5BB8F5] shadow-sm"
                    : "bg-[#F7F5F3] border-[rgba(55,50,47,0.12)] hover:border-[#5BB8F5]/50"
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300`}
                    style={{ backgroundColor: activeTab === index ? audience.iconBg : "transparent" }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d={audience.iconPath}
                        stroke={activeTab === index ? audience.iconColor : "#605A57"}
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className={`text-sm font-semibold transition-colors duration-300 ${
                    activeTab === index ? "text-[#2E9DE0]" : "text-[#605A57]"
                  }`}>
                    {audience.title}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Content */}
          <div
            key={activeTab}
            className="w-full max-w-[700px] bg-white rounded-xl border border-[rgba(55,50,47,0.12)] p-6 sm:p-8 shadow-sm animate-fade-in"
          >
            <div className="flex flex-col gap-4">
              {audiences[activeTab].benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-[#F7F5F3] rounded-lg transition-all duration-200 hover:scale-[1.02] hover:translate-x-1 animate-slide-in-benefit"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div
                    className="px-3 py-1 rounded-full text-white text-xs font-bold transition-transform duration-200 hover:scale-110"
                    style={{ backgroundColor: benefit.color }}
                  >
                    {benefit.metric}
                  </div>
                  <div className="flex-1 text-sm text-[#37322F] font-medium">
                    {benefit.text}
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="animate-check-appear"
                    style={{ animationDelay: `${index * 120 + 200}ms` }}
                  >
                    <path d="M4 8l2.5 2.5 5.5-5.5" stroke="#5BB8F5" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-in-benefit {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes check-appear {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-slide-in-benefit {
          animation: slide-in-benefit 0.4s cubic-bezier(0.25, 0.1, 0.25, 1) backwards;
        }

        .animate-check-appear {
          animation: check-appear 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) backwards;
        }
      `}</style>
    </div>
  )
}
