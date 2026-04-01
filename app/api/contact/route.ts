import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import dns from "dns"

dns.setDefaultResultOrder("ipv4first")

async function sendViaSmtp(name: string, school: string, phone: string, email: string, message: string) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
    connectionTimeout: 8000,
    greetingTimeout: 8000,
    socketTimeout: 8000,
  })

  const recipients = process.env.CONTACT_EMAILS || "nurdamiron@gmail.com"

  const htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #5BB8F5, #2E9DE0); padding: 24px 32px; border-radius: 12px 12px 0 0;">
        <h1 style="color: white; font-size: 20px; margin: 0;">Новая заявка на пилот</h1>
        <p style="color: rgba(255,255,255,0.8); font-size: 14px; margin: 4px 0 0;">alashed.kz</p>
      </div>
      <div style="background: #fff; padding: 24px 32px; border: 1px solid #eee; border-top: none; border-radius: 0 0 12px 12px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #605A57; font-size: 13px; width: 100px; vertical-align: top;">Имя</td>
            <td style="padding: 8px 0; color: #37322F; font-size: 14px; font-weight: 600;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #605A57; font-size: 13px; vertical-align: top;">Школа</td>
            <td style="padding: 8px 0; color: #37322F; font-size: 14px; font-weight: 600;">${school}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #605A57; font-size: 13px; vertical-align: top;">Телефон</td>
            <td style="padding: 8px 0; color: #37322F; font-size: 14px;"><a href="tel:${phone}" style="color: #2E9DE0; text-decoration: none;">${phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #605A57; font-size: 13px; vertical-align: top;">Email</td>
            <td style="padding: 8px 0; color: #37322F; font-size: 14px;"><a href="mailto:${email}" style="color: #2E9DE0; text-decoration: none;">${email}</a></td>
          </tr>
          ${message ? `
          <tr>
            <td style="padding: 12px 0 8px; color: #605A57; font-size: 13px; vertical-align: top;">Сообщение</td>
            <td style="padding: 12px 0 8px; color: #37322F; font-size: 14px; line-height: 1.5;">${message.replace(/\n/g, "<br>")}</td>
          </tr>
          ` : ""}
        </table>
        <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #eee; color: #999; font-size: 12px;">
          Отправлено с формы на alashed.kz
        </div>
      </div>
    </div>
  `

  await transporter.sendMail({
    from: `"Alashed" <${process.env.GMAIL_USER}>`,
    to: recipients,
    subject: `Заявка на пилот — ${school} (${name})`,
    html: htmlBody,
    replyTo: email,
  })
}

async function sendViaFallback(name: string, school: string, phone: string, email: string, message: string) {
  const res = await fetch("https://it.alashed.kz/api/contact/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      email,
      phone,
      subject: `Заявка на пилот — ${school} (${name})`,
      message: `Школа: ${school}\nТелефон: ${phone}\nEmail: ${email}\n\n${message || "—"}`,
    }),
  })
  if (!res.ok) throw new Error(`Fallback API error: ${res.status}`)
}

export async function POST(request: Request) {
  try {
    const { name, school, phone, email, message } = await request.json()

    if (!name || !school || !phone || !email) {
      return NextResponse.json({ error: "Все поля обязательны" }, { status: 400 })
    }

    try {
      await sendViaSmtp(name, school, phone, email, message)
    } catch (smtpError) {
      console.warn("SMTP failed, using fallback:", (smtpError as Error).message)
      await sendViaFallback(name, school, phone, email, message)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Ошибка отправки" }, { status: 500 })
  }
}
