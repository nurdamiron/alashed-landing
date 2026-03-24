"use client"

import { useState, useEffect } from "react"

export default function SocialProofSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Айгуль Сериковна",
      role: "Учитель информатики, СОШ №42, Алматы",
      quote: "Раньше на КМЖ уходило 8 часов. Теперь 2 минуты — AI всё делает сам. Освободилось время для детей.",
      iconPath: "M6 1.5c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zM1.5 11.5c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5",
      color: "#2E9DE0",
      bg: "#EBF7FF",
    },
    {
      name: "Ержан Бекболатов",
      role: "Директор, Гимназия им. Абая, Астана",
      quote: "Заказали Arduino в один клик, пришло за неделю. Раньше искали поставщиков месяцами. Экономия бюджета 30%.",
      iconPath: "M1 1h4v4H1zM7 1h4v4H7zM1 7h4v4H1zM7 7h4v4H7z",
      color: "#7C3AED",
      bg: "#F5F3FF",
    },
    {
      name: "Дана Жусупова",
      role: "Ученица 9 класса, школа-лицей №165",
      quote: "Написала код на Python и загрузила на ESP32 прямо с урока. Теперь хочу на Infomatrix!",
      iconPath: "M3 4L1.5 6.5 3 9M9 4l1.5 2.5L9 9M6.5 3L5 10",
      color: "#059669",
      bg: "#ECFDF5",
    },
  ]


  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Testimonials */}
      <div className="w-full border-b border-[rgba(55,50,47,0.12)]">
        <div className="px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] mx-auto py-12 sm:py-16">
          <div className="max-w-[800px] mx-auto">
            {testimonials.map((testimonial, index) => {
              if (activeTestimonial !== index) return null
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-[rgba(55,50,47,0.12)] p-8 sm:p-12 shadow-sm animate-testimonial-fade"
                >
                  <div className="flex flex-col items-center text-center gap-6">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center animate-icon-spin"
                      style={{ backgroundColor: testimonial.bg }}
                    >
                      <svg width="32" height="32" viewBox="0 0 12 12" fill="none">
                        <path
                          d={testimonial.iconPath}
                          stroke={testimonial.color}
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p
                      className="text-lg sm:text-xl text-[#37322F] font-medium leading-relaxed animate-quote-fade"
                    >
                      "{testimonial.quote}"
                    </p>
                    <div className="animate-author-fade">
                      <div className="font-semibold text-[#37322F]">{testimonial.name}</div>
                      <div className="text-sm text-[#605A57]">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2 rounded-full transition-all duration-300 hover:scale-120 active:scale-90 ${
                    activeTestimonial === index ? "bg-[#5BB8F5] w-6" : "bg-[#E0DEDB] w-2"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes testimonial-fade {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes icon-spin {
          from {
            transform: scale(0) rotate(-180deg);
          }
          to {
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes quote-fade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes author-fade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-testimonial-fade {
          animation: testimonial-fade 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);
        }

        .animate-icon-spin {
          animation: icon-spin 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s backwards;
        }

        .animate-quote-fade {
          animation: quote-fade 0.5s ease-out 0.2s backwards;
        }

        .animate-author-fade {
          animation: author-fade 0.5s ease-out 0.3s backwards;
        }

        .hover\:scale-120:hover {
          transform: scale(1.2);
        }

        .active\:scale-90:active {
          transform: scale(0.9);
        }
      `}</style>
    </div>
  )
}
