"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ScrollReveal from "@/components/motion/scroll-reveal"
import { ArrowRight02Icon, Mail01Icon, SmartPhone01Icon, CheckmarkCircle02Icon } from "hugeicons-react"

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", school: "", phone: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [focused, setFocused] = useState<string | null>(null)

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

  const inputClass = (field: string) =>
    `w-full h-12 px-4 rounded-xl border text-[14px] text-[#1a1715] font-sans placeholder:text-[#847971] focus:outline-none transition-all duration-200 ${
      focused === field
        ? "border-[#1a1715] bg-white shadow-[0_0_0_3px_rgba(26,23,21,0.06)]"
        : "border-[rgba(55,50,47,0.12)] bg-[#FAFAF9] hover:border-[rgba(55,50,47,0.25)]"
    }`

  return (
    <div id="contact" className="w-full scroll-mt-20">
      {/* Full-width dark header */}
      <div className="w-full bg-[#1a1715] py-16 sm:py-20 md:py-24 px-4">
        <div className="max-w-[600px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-white text-[30px] sm:text-[38px] md:text-[46px] font-normal font-serif leading-[1.1] tracking-[-0.02em] mb-4">
              Давайте обсудим
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-white/50 text-[15px] sm:text-base leading-[1.65] font-sans">
              Расскажите о вашей задаче — мы подберём решение или предложим разработку под ключ
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Form card — overlapping the dark section */}
      <div className="w-full bg-[#F7F5F3] border-b border-[rgba(55,50,47,0.12)]">
        <div className="max-w-[580px] mx-auto px-4 -mt-8 pb-16 sm:pb-20">
          <ScrollReveal delay={0.15}>
            <AnimatePresence mode="wait">
              {status === "sent" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-2xl shadow-[0_2px_24px_rgba(0,0,0,0.08),0_0_0_1px_rgba(55,50,47,0.06)] p-10 sm:p-12 flex flex-col items-center gap-4 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                    className="w-14 h-14 rounded-full bg-[#059669]/10 flex items-center justify-center"
                  >
                    <CheckmarkCircle02Icon size={28} color="#059669" strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="text-[#1a1715] text-[20px] font-semibold font-sans">
                    Заявка отправлена
                  </h3>
                  <p className="text-[#605A57] text-[15px] font-sans leading-relaxed max-w-[340px]">
                    Мы свяжемся с вами в ближайшее время, чтобы обсудить детали
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-2 text-[#2E9DE0] text-[14px] font-semibold font-sans hover:underline"
                  >
                    Отправить ещё
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl shadow-[0_2px_24px_rgba(0,0,0,0.08),0_0_0_1px_rgba(55,50,47,0.06)] p-6 sm:p-8 flex flex-col gap-5"
                >
                  {/* Name + Company row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-semibold text-[#847971] uppercase tracking-[0.08em] font-sans mb-1.5 block">
                        Имя
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused(null)}
                        placeholder="Асан Касенов"
                        className={inputClass("name")}
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-[#847971] uppercase tracking-[0.08em] font-sans mb-1.5 block">
                        Компания / Школа
                      </label>
                      <input
                        type="text"
                        required
                        value={form.school}
                        onChange={e => setForm(f => ({ ...f, school: e.target.value }))}
                        onFocus={() => setFocused("school")}
                        onBlur={() => setFocused(null)}
                        placeholder="Название организации"
                        className={inputClass("school")}
                      />
                    </div>
                  </div>

                  {/* Phone + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-semibold text-[#847971] uppercase tracking-[0.08em] font-sans mb-1.5 block">
                        Телефон
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                        onFocus={() => setFocused("phone")}
                        onBlur={() => setFocused(null)}
                        placeholder="+7 777 123 4567"
                        className={inputClass("phone")}
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-[#847971] uppercase tracking-[0.08em] font-sans mb-1.5 block">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                        placeholder="email@company.kz"
                        className={inputClass("email")}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-[11px] font-semibold text-[#847971] uppercase tracking-[0.08em] font-sans mb-1.5 block">
                      Сообщение <span className="font-normal normal-case tracking-normal">(необязательно)</span>
                    </label>
                    <textarea
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      placeholder="Расскажите о задаче или проекте..."
                      rows={4}
                      className={`w-full px-4 py-3 rounded-xl border text-[14px] text-[#1a1715] font-sans placeholder:text-[#847971] focus:outline-none transition-all duration-200 resize-none ${
                        focused === "message"
                          ? "border-[#1a1715] bg-white shadow-[0_0_0_3px_rgba(26,23,21,0.06)]"
                          : "border-[rgba(55,50,47,0.12)] bg-[#FAFAF9] hover:border-[rgba(55,50,47,0.25)]"
                      }`}
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={status === "sending"}
                    whileHover={status !== "sending" ? { scale: 1.01 } : {}}
                    whileTap={status !== "sending" ? { scale: 0.99 } : {}}
                    className={`h-[52px] rounded-xl text-white text-[15px] font-semibold font-sans flex items-center justify-center gap-2.5 transition-all duration-200 ${
                      status === "sending"
                        ? "bg-[#37322F]/60 cursor-wait"
                        : status === "error"
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-[#1a1715] hover:bg-[#0a0a0a] shadow-[0_1px_2px_rgba(0,0,0,0.2)]"
                    }`}
                  >
                    {status === "sending" ? (
                      <span className="flex items-center gap-2">
                        <motion.span
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        />
                        Отправка...
                      </span>
                    ) : status === "error" ? (
                      "Ошибка — попробовать снова"
                    ) : (
                      <>
                        Отправить заявку
                        <ArrowRight02Icon size={16} color="white" strokeWidth={2} />
                      </>
                    )}
                  </motion.button>

                  {/* Direct contacts below form */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 pt-3 border-t border-[rgba(55,50,47,0.06)]">
                    <span className="text-[11px] font-semibold text-[#847971] uppercase tracking-[0.08em] font-sans">Или напрямую:</span>
                    <div className="flex items-center gap-4">
                      <a href="mailto:dias@alashed.kz" className="flex items-center gap-1.5 text-[#37322F] hover:text-[#2E9DE0] transition-colors">
                        <Mail01Icon size={13} color="currentColor" strokeWidth={1.5} />
                        <span className="text-[13px] font-medium font-sans">dias@alashed.kz</span>
                      </a>
                      <a href="tel:+77023132061" className="flex items-center gap-1.5 text-[#37322F] hover:text-[#2E9DE0] transition-colors">
                        <SmartPhone01Icon size={13} color="currentColor" strokeWidth={1.5} />
                        <span className="text-[13px] font-medium font-sans">+7 702 313 20 61</span>
                      </a>
                    </div>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
