import type React from "react"
import { useState, useEffect } from "react"
import { X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function OfferPopup() {
  const [visible, setVisible] = useState(false)
  const [closed, setClosed] = useState(false)
  const [formData, setFormData] = useState({ name: "", phone: "" })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem("popup_closed")) return
    const timer = setTimeout(() => setVisible(true), 30000)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setVisible(false)
    setClosed(true)
    sessionStorage.setItem("popup_closed", "1")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    try {
      await fetch("https://functions.poehali.dev/def8d0b8-782d-434e-8032-3b3d363b1f1b", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, package: "Поп-ап: бесплатный аудит" }),
      })
    } catch (err) {
      console.error("Popup form error:", err)
    }
    setSending(false)
    setSent(true)
    sessionStorage.setItem("popup_closed", "1")
  }

  if (closed || !visible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative bg-background rounded-2xl shadow-2xl max-w-md w-full p-8 animate-in fade-in zoom-in-95 duration-300">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {!sent ? (
          <>
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest">
              Бесплатно
            </div>
            <h3 className="text-2xl font-bold mb-2">
              Бесплатный аудит вашей маркировки
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Проверим, всё ли у вас в порядке с «Честным знаком», и расскажем как избежать штрафов. Без обязательств.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ваше имя"
                required
              />
              <Input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+7 900 123-45-67"
                required
              />
              <Button type="submit" size="lg" className="w-full group" disabled={sending}>
                <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                {sending ? "Отправляем..." : "Получить бесплатный аудит"}
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              Перезвоним в течение рабочего дня
            </p>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-xl font-bold mb-2">Заявка принята!</h3>
            <p className="text-muted-foreground">Перезвоним вам в ближайшее рабочее время</p>
            <Button className="mt-6" onClick={handleClose}>Закрыть</Button>
          </div>
        )}
      </div>
    </div>
  )
}
