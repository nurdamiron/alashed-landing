"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ScrollReveal from "@/components/motion/scroll-reveal"
import { ArrowRight02Icon, Mail01Icon, SmartPhone01Icon } from "hugeicons-react"

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
          subject: `Заявка — ${form.school} (${form.name})`,
          message: `Компания: ${form.school}\nТелефон: ${form.phone}\nEmail: ${form.email}\n\n${form.message || "—"}`,
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
      <div className="max-w-[1060px] mx-auto grid grid-cols-1 lg:grid-cols-2">
        {/* Left — info side */}
        <div className="p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center gap-6 lg:border-r border-[rgba(55,50,47,0.12)]">
          <ScrollReveal>
            <p className="text-[#605A57] text-[13px] font-medium font-sans tracking-[0.08em] uppercase">
              Контакты
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-[#1a1715] text-[28px] sm:text-[34px] md:text-[40px] font-normal font-serif leading-[1.1] tracking-[-0.02em]">
              Давайте
              <br />
              обсудим
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-[#605A57] text-[15px] leading-[1.65] font-sans max-w-[360px]">
              Расскажите о вашей задаче — мы подберём подходящее решение из нашей экосистемы или предложим разработку под ключ.
            </p>
          </ScrollReveal>

          {/* Direct contacts */}
          <ScrollReveal delay={0.3}>
            <div className="flex flex-col gap-3 pt-4 border-t border-[rgba(55,50,47,0.08)]">
              <a
                href="mailto:dias@alashed.kz"
                className="flex items-center gap-3 text-[#37322F] hover:text-[#2E9DE0] transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#F0EFEE] group-hover:bg-[#EBF7FF] flex items-center justify-center transition-colors">
                  <Mail01Icon size={14} color="currentColor" strokeWidth={1.5} />
                </div>
                <span className="text-[14px] font-medium font-sans">dias@alashed.kz</span>
              </a>
              <a
                href="tel:+77023132061"
                className="flex items-center gap-3 text-[#37322F] hover:text-[#2E9DE0] transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#F0EFEE] group-hover:bg-[#EBF7FF] flex items-center justify-center transition-colors">
                  <SmartPhone01Icon size={14} color="currentColor" strokeWidth={1.5} />
                </div>
                <span className="text-[14px] font-medium font-sans">+7 702 313 20 61</span>
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Right — form side */}
        <ScrollReveal delay={0.15} className="p-6 sm:p-8 md:p-12 lg:p-16 bg-white flex items-center">
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                required
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                placeholder="Имя"
                className="h-11 px-4 rounded-xl border border-[rgba(55,50,47,0.12)] bg-[#FAFAF9] text-sm text-[#37322F] font-sans placeholder:text-[rgba(55,50,47,0.35)] focus:outline-none focus:border-[#37322F] focus:bg-white transition-all"
              />
              <input
                type="text"
                required
                value={form.school}
                onChange={e => setForm(f => ({ ...f, school: e.target.value }))}
                placeholder="Компания / Школа"
                className="h-11 px-4 rounded-xl border border-[rgba(55,50,47,0.12)] bg-[#FAFAF9] text-sm text-[#37322F] font-sans placeholder:text-[rgba(55,50,47,0.35)] focus:outline-none focus:border-[#37322F] focus:bg-white transition-all"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="tel"
                required
                value={form.phone}
                onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                placeholder="Телефон"
                className="h-11 px-4 rounded-xl border border-[rgba(55,50,47,0.12)] bg-[#FAFAF9] text-sm text-[#37322F] font-sans placeholder:text-[rgba(55,50,47,0.35)] focus:outline-none focus:border-[#37322F] focus:bg-white transition-all"
              />
              <input
                type="email"
                required
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                placeholder="Email"
                className="h-11 px-4 rounded-xl border border-[rgba(55,50,47,0.12)] bg-[#FAFAF9] text-sm text-[#37322F] font-sans placeholder:text-[rgba(55,50,47,0.35)] focus:outline-none focus:border-[#37322F] focus:bg-white transition-all"
              />
            </div>
            <textarea
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              placeholder="Расскажите о задаче..."
              rows={4}
              className="px-4 py-3 rounded-xl border border-[rgba(55,50,47,0.12)] bg-[#FAFAF9] text-sm text-[#37322F] font-sans placeholder:text-[rgba(55,50,47,0.35)] focus:outline-none focus:border-[#37322F] focus:bg-white transition-all resize-none"
            />

            <motion.button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              whileHover={status === "idle" || status === "error" ? { scale: 1.01 } : {}}
              whileTap={status === "idle" || status === "error" ? { scale: 0.99 } : {}}
              className={`h-12 rounded-xl text-white text-[14px] font-semibold font-sans flex items-center justify-center gap-2 transition-all duration-200 ${
                status === "sent"
                  ? "bg-[#059669]"
                  : status === "sending"
                  ? "bg-[#37322F]/60 cursor-wait"
                  : status === "error"
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-[#1a1715] hover:bg-[#0a0a0a]"
              }`}
            >
              {status === "sent" ? (
                "Отправлено"
              ) : status === "sending" ? (
                "Отправка..."
              ) : status === "error" ? (
                "Ошибка — попробовать снова"
              ) : (
                <>
                  Отправить
                  <ArrowRight02Icon size={14} color="white" strokeWidth={2} />
                </>
              )}
            </motion.button>

            {status === "sent" && (
              <motion.p
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-sm text-[#059669] font-sans"
              >
                Мы свяжемся с вами в ближайшее время
              </motion.p>
            )}
          </form>
        </ScrollReveal>
      </div>
    </div>
  )
}
