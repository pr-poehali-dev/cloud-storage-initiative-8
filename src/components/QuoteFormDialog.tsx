import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface QuoteFormDialogProps {
  packageName?: string
  variant?: "default" | "outline"
  className?: string
  children?: React.ReactNode
}

export function QuoteFormDialog({ packageName, variant = "default", className, children }: QuoteFormDialogProps) {
  const [open, setOpen] = useState(false)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    package: packageName || "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    try {
      const text = [
        `📋 *Новая заявка с сайта 1C Matrix*`,
        `👤 Имя: ${formData.name}`,
        `📞 Телефон: ${formData.phone}`,
        `📧 Email: ${formData.email}`,
        formData.company ? `🏢 Компания: ${formData.company}` : "",
        `📦 Тариф: ${formData.package}`,
        formData.message ? `💬 Сообщение: ${formData.message}` : "",
      ].filter(Boolean).join("\n")

      await fetch("https://functions.poehali.dev/def8d0b8-782d-434e-8032-3b3d363b1f1b", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, text }),
      })
    } catch (err) {
      console.error("Form submit error:", err)
    }
    setSending(false)
    setSent(true)
    setTimeout(() => {
      setOpen(false)
      setSent(false)
      setFormData({ name: "", email: "", phone: "", company: "", package: packageName || "", message: "" })
    }, 2000)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} className={className}>
          {children || "Запросить расчет"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Оставить заявку</DialogTitle>
          <DialogDescription>
            Заполните форму — мы свяжемся с вами в ближайшее время для бесплатной консультации.
          </DialogDescription>
        </DialogHeader>

        {sent ? (
          <div className="py-10 text-center space-y-3">
            <div className="text-4xl">✅</div>
            <p className="text-lg font-semibold">Заявка отправлена!</p>
            <p className="text-muted-foreground text-sm">Мы свяжемся с вами в ближайшее время.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="name">Имя *</Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ваше имя"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Телефон *</Label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+7 (495) 320-33-85"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="info@kassa-business.ru"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Компания</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Название компании"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="package">Тариф</Label>
              <Select
                value={formData.package}
                onValueChange={(value) => setFormData({ ...formData, package: value })}
              >
                <SelectTrigger id="package">
                  <SelectValue placeholder="Выберите тариф" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Старт">Старт — от 3 900 ₽/мес</SelectItem>
                  <SelectItem value="Бизнес">Бизнес — от 8 900 ₽/мес</SelectItem>
                  <SelectItem value="Корпоративный">Корпоративный — по согласованию</SelectItem>
                  <SelectItem value="Не определился">Ещё не определился</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Комментарий</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Ваша товарная группа, вопрос или пожелание..."
                rows={3}
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="button" variant="outline" onClick={() => setOpen(false)} className="flex-1">
                Отмена
              </Button>
              <Button type="submit" className="flex-1" disabled={sending}>
                {sending ? "Отправляем..." : "Отправить заявку"}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}