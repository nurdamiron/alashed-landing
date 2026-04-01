"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ScrollReveal from "@/components/motion/scroll-reveal"

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", school: "", phone: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    try {
      const res = await fetch("https://it.alashed.kz/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: `Заявка на пилот — ${form.school} (${form.name})`,
          message: `Школа: ${form.school}\nТелефон: ${form.phone}\nEmail: ${form.email}\n\n${form.message || "—"}`,
        }),
      })
      if (res.ok) {
        setStatus("sent")
        setForm({ name: "", school: "", phone: "", email: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <div id="contact" className="w-full border-b border-[rgba(55,50,47,0.12)] scroll-mt-20">
      {/* Header */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20 border-b border-[rgba(55,50,47,0.12)] flex flex-col items-center gap-4 text-center">
        <ScrollReveal animation="scaleIn">
          <div className="px-[14px] py-[6px] bg-[#EBF7FF] overflow-hidden rounded-[90px] flex items-center gap-[8px] border border-[#5BB8F5]/30">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 3h8v6H2z" stroke="#2E9DE0" strokeWidth="1.2" strokeLinejoin="round"/>
              <path d="M2 3l4 3.5L10 3" stroke="#2E9DE0" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[#2E9DE0] text-xs font-semibold leading-3 font-sans tracking-wide uppercase">
              Контакты
            </span>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-[#49423D] text-xl sm:text-2xl md:text-[28px] font-semibold leading-tight font-sans tracking-tight">
            Оставить заявку на пилот
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-[#605A57] text-sm sm:text-base font-normal leading-7 font-sans max-w-[520px]">
            Подключим вашу школу за 48 часов. Первый месяц — бесплатно.
          </p>
        </ScrollReveal>
      </div>

      {/* Form */}
      <ScrollReveal delay={0.15} className="px-4 sm:px-8 md:px-16 lg:px-24 py-8 sm:py-12 md:py-16 flex justify-center">
        <form onSubmit={handleSubmit} className="w-full max-w-[520px] flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-semibold text-[#605A57] uppercase tracking-wider font-sans">Имя</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                placeholder="Асан Касенов"
                className="h-10 px-3 rounded-lg border border-[rgba(55,50,47,0.12)] bg-white text-sm text-[#37322F] font-sans placeholder:text-[rgba(55,50,47,0.3)] focus:outline-none focus:border-[#5BB8F5] focus:ring-1 focus:ring-[#5BB8F5]/30 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-semibold text-[#605A57] uppercase tracking-wider font-sans">Школа</label>
              <input
                type="text"
                required
                value={form.school}
                onChange={e => setForm(f => ({ ...f, school: e.target.value }))}
                placeholder="НИШ г. Астана"
                className="h-10 px-3 rounded-lg border border-[rgba(55,50,47,0.12)] bg-white text-sm text-[#37322F] font-sans placeholder:text-[rgba(55,50,47,0.3)] focus:outline-none focus:border-[#5BB8F5] focus:ring-1 focus:ring-[#5BB8F5]/30 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-semibold text-[#605A57] uppercase tracking-wider font-sans">Телефон</label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                placeholder="+7 777 123 4567"
                className="h-10 px-3 rounded-lg border border-[rgba(55,50,47,0.12)] bg-white text-sm text-[#37322F] font-sans placeholder:text-[rgba(55,50,47,0.3)] focus:outline-none focus:border-[#5BB8F5] focus:ring-1 focus:ring-[#5BB8F5]/30 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-semibold text-[#605A57] uppercase tracking-wider font-sans">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                placeholder="director@school.kz"
                className="h-10 px-3 rounded-lg border border-[rgba(55,50,47,0.12)] bg-white text-sm text-[#37322F] font-sans placeholder:text-[rgba(55,50,47,0.3)] focus:outline-none focus:border-[#5BB8F5] focus:ring-1 focus:ring-[#5BB8F5]/30 transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-semibold text-[#605A57] uppercase tracking-wider font-sans">Сообщение <span className="font-normal normal-case tracking-normal">(необязательно)</span></label>
            <textarea
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              placeholder="Расскажите о вашей школе и потребностях..."
              rows={3}
              className="px-3 py-2.5 rounded-lg border border-[rgba(55,50,47,0.12)] bg-white text-sm text-[#37322F] font-sans placeholder:text-[rgba(55,50,47,0.3)] focus:outline-none focus:border-[#5BB8F5] focus:ring-1 focus:ring-[#5BB8F5]/30 transition-colors resize-none"
            />
          </div>

          <motion.button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            whileHover={status === "idle" || status === "error" ? { scale: 1.02 } : {}}
            whileTap={status === "idle" || status === "error" ? { scale: 0.98 } : {}}
            className={`h-11 rounded-full text-white text-sm font-semibold font-sans transition-colors ${
              status === "sent"
                ? "bg-[#28C840]"
                : status === "sending"
                ? "bg-[#5BB8F5]/70 cursor-wait"
                : status === "error"
                ? "bg-red-500 hover:bg-red-600"
                : "bg-[#5BB8F5] hover:bg-[#2E9DE0]"
            }`}
          >
            {status === "sent" ? "Заявка отправлена!" :
             status === "sending" ? "Отправка..." :
             status === "error" ? "Ошибка — попробовать снова" :
             "Отправить заявку"}
          </motion.button>

          {status === "sent" && (
            <motion.p
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-sm text-[#28C840] font-sans"
            >
              Мы свяжемся с вами в течение 24 часов
            </motion.p>
          )}
        </form>
      </ScrollReveal>
    </div>
  )
}
