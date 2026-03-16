"use client"

import { useState } from "react"

const SERVICES = [
  { id: "edu", label: "AI для учителей", desc: "КМЖ, БЖБ, ТЖБ за 2 мин" },
  { id: "codestudio", label: "IDE для информатики", desc: "Python, Scratch, Arduino" },
  { id: "hardware", label: "STEM-оборудование", desc: "Arduino, ESP32, Raspberry Pi" },
  { id: "competitions", label: "Олимпиады и конкурсы", desc: "WRO, KazRobotics, Infomatrix" },
  { id: "it", label: "Разработка под заказ", desc: "Сайт, мобайл, CRM, чатбот" },
  { id: "other", label: "Другое", desc: "опишу в сообщении" },
]

export default function ContactFormSection() {
  const [form, setForm] = useState({ name: "", organization: "", phone: "", message: "" })
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    const services = selectedServices
      .map((id) => SERVICES.find((s) => s.id === id)?.label)
      .filter(Boolean)
      .join(", ")
    try {
      const res = await fetch("https://it.alashed.kz/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, services: services || "Не выбрано" }),
      })
      if (res.ok) {
        setStatus("sent")
        setForm({ name: "", organization: "", phone: "", message: "" })
        setSelectedServices([])
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <div id="contact" className="w-full border-b border-[rgba(55,50,47,0.12)] flex justify-center items-start">
      <div className="w-12 self-stretch relative overflow-hidden hidden md:block">
        <div className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
          {Array.from({ length: 200 }).map((_, i) => (
            <div key={i} className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]" />
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row border-l border-r border-[rgba(55,50,47,0.12)]">
        {/* Left info */}
        <div className="md:w-[45%] px-8 md:px-12 py-12 md:py-16 border-b md:border-b-0 md:border-r border-[rgba(55,50,47,0.12)] flex flex-col justify-center gap-6">
          <div className="px-[14px] py-[6px] bg-[#EBF7FF] overflow-hidden rounded-[90px] flex items-center gap-[8px] border border-[#5BB8F5]/30 self-start">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5 2.5h9a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-9A.5.5 0 0 1 1 9V3a.5.5 0 0 1 .5-.5z" stroke="#2E9DE0" strokeWidth="1" fill="none"/>
              <path d="m1.5 3 4.5 3.5L10.5 3" stroke="#2E9DE0" strokeWidth="1" strokeLinecap="round"/>
            </svg>
            <div className="text-[#2E9DE0] text-xs font-semibold leading-3 font-sans tracking-wide uppercase">
              Контакт
            </div>
          </div>

          <div className="text-[#49423D] text-2xl md:text-[28px] font-semibold leading-tight font-sans tracking-tight">
            Оставьте заявку — мы найдём решение для вас
          </div>

          <div className="text-[#605A57] text-base font-normal leading-7 font-sans">
            Расскажите о задаче — свяжемся в течение 24 часов, подберём подходящий продукт и ответим на все вопросы.
          </div>

          <div className="flex flex-col gap-4 mt-2">
            {[
              "Бесплатная консультация без обязательств",
              "Пробный доступ к платформе",
              "B2B оплата через тендеры и госзакупки",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#EBF7FF] flex items-center justify-center flex-shrink-0">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2 2 4-4" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-[rgba(55,50,47,0.80)] text-sm font-normal leading-5 font-sans">{text}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-[rgba(55,50,47,0.12)]">
            <p className="text-[#847971] text-sm font-normal font-sans">Или напишите напрямую:</p>
            <a href="mailto:dias@alashed.kz" className="text-[#2E9DE0] text-sm font-medium font-sans hover:underline">
              dias@alashed.kz
            </a>
          </div>
        </div>

        {/* Right form */}
        <div className="flex-1 px-8 md:px-12 py-12 md:py-16 flex flex-col justify-center">
          {status === "sent" ? (
            <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-[#EBF7FF] flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M6 14l5 5 11-11" stroke="#2E9DE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="text-[#49423D] text-xl font-semibold font-sans">Заявка отправлена!</div>
              <div className="text-[#605A57] text-sm font-normal font-sans leading-6">
                Мы свяжемся с вами в течение 24 часов.
              </div>
              <button
                onClick={() => setStatus("idle")}
                className="mt-2 px-6 py-2 border border-[rgba(55,50,47,0.20)] rounded-[99px] text-[#37322F] text-sm font-medium hover:bg-[rgba(55,50,47,0.04)] transition-colors"
              >
                Отправить ещё одну
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Service selection */}
              <div className="flex flex-col gap-2">
                <label className="text-[#37322F] text-sm font-medium font-sans">
                  Что вас интересует? <span className="text-[rgba(55,50,47,0.40)] font-normal">(выберите одно или несколько)</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {SERVICES.map((service) => {
                    const active = selectedServices.includes(service.id)
                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => toggleService(service.id)}
                        className={`px-3 py-[7px] rounded-[99px] border text-xs font-medium font-sans transition-all flex items-center gap-1.5 ${
                          active
                            ? "bg-[#5BB8F5] border-[#5BB8F5] text-white shadow-[0px_1px_3px_rgba(91,184,245,0.35)]"
                            : "bg-white border-[rgba(55,50,47,0.20)] text-[#37322F] hover:border-[#5BB8F5] hover:text-[#2E9DE0]"
                        }`}
                      >
                        <span>{service.label}</span>
                        <span className={`${active ? "text-white/70" : "text-[rgba(55,50,47,0.40)]"}`}>
                          {service.desc}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[#37322F] text-sm font-medium font-sans">Ваше имя</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Айгуль Бекова"
                  className="w-full px-4 py-[10px] bg-white border border-[rgba(55,50,47,0.20)] rounded-lg text-[#37322F] text-sm font-normal font-sans placeholder-[rgba(55,50,47,0.35)] focus:outline-none focus:border-[#5BB8F5] focus:ring-1 focus:ring-[#5BB8F5]/20 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[#37322F] text-sm font-medium font-sans">Организация</label>
                <input
                  type="text"
                  required
                  value={form.organization}
                  onChange={(e) => setForm({ ...form, organization: e.target.value })}
                  placeholder="Школа, компания, учреждение"
                  className="w-full px-4 py-[10px] bg-white border border-[rgba(55,50,47,0.20)] rounded-lg text-[#37322F] text-sm font-normal font-sans placeholder-[rgba(55,50,47,0.35)] focus:outline-none focus:border-[#5BB8F5] focus:ring-1 focus:ring-[#5BB8F5]/20 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[#37322F] text-sm font-medium font-sans">Телефон</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+7 (777) 000-00-00"
                  className="w-full px-4 py-[10px] bg-white border border-[rgba(55,50,47,0.20)] rounded-lg text-[#37322F] text-sm font-normal font-sans placeholder-[rgba(55,50,47,0.35)] focus:outline-none focus:border-[#5BB8F5] focus:ring-1 focus:ring-[#5BB8F5]/20 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[#37322F] text-sm font-medium font-sans">
                  Сообщение <span className="text-[rgba(55,50,47,0.40)] font-normal">(необязательно)</span>
                </label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Опишите задачу или вопрос..."
                  className="w-full px-4 py-[10px] bg-white border border-[rgba(55,50,47,0.20)] rounded-lg text-[#37322F] text-sm font-normal font-sans placeholder-[rgba(55,50,47,0.35)] focus:outline-none focus:border-[#5BB8F5] focus:ring-1 focus:ring-[#5BB8F5]/20 transition-colors resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-red-500 text-sm font-sans">Что-то пошло не так. Попробуйте позже или напишите напрямую.</p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="self-stretch mt-2 px-4 py-[10px] bg-[#5BB8F5] shadow-[0px_2px_4px_rgba(91,184,245,0.30)] overflow-hidden rounded-[99px] flex justify-center items-center gap-2 hover:bg-[#2E9DE0] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <div className="text-white text-[13px] font-semibold leading-5 font-sans">
                  {status === "sending" ? "Отправляем..." : "Отправить заявку"}
                </div>
                {status !== "sending" && (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7H11.5M11.5 7L8 3.5M11.5 7L8 10.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>

              <p className="text-center text-[rgba(55,50,47,0.45)] text-xs font-normal font-sans">
                Отправляя форму, вы соглашаетесь на обработку персональных данных
              </p>
            </form>
          )}
        </div>
      </div>

      <div className="w-12 self-stretch relative overflow-hidden hidden md:block">
        <div className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
          {Array.from({ length: 200 }).map((_, i) => (
            <div key={i} className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]" />
          ))}
        </div>
      </div>
    </div>
  )
}
