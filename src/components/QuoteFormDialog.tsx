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
  const [formData, setFormData] = useState({ name: "", phone: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    try {
      const text = [
        `📋 *Новая заявка с сайта*`,
        `👤 Имя: ${formData.name}`,
        `📞 Телефон: ${formData.phone}`,
        packageName ? `📦 Тариф: ${packageName}` : "",
      ].filter(Boolean).join("\n")

      await fetch("https://functions.poehali.dev/def8d0b8-782d-434e-8032-3b3d363b1f1b", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, package: packageName || "Не выбран", text }),
      })
    } catch (err) {
      console.error("Form submit error:", err)
    }
    setSending(false)
    setSent(true)
    setTimeout(() => {
      setOpen(false)
      setSent(false)
      setFormData({ name: "", phone: "" })
    }, 2000)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} className={className}>
          {children || "Запросить расчет"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Оставить заявку</DialogTitle>
          <DialogDescription>
            Перезвоним и бесплатно проконсультируем по маркировке.
          </DialogDescription>
        </DialogHeader>

        {sent ? (
          <div className="py-10 text-center space-y-3">
            <div className="text-4xl">✅</div>
            <p className="text-lg font-semibold">Заявка отправлена!</p>
            <p className="text-muted-foreground text-sm">Мы перезвоним вам в ближайшее время.</p>
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
                placeholder="+7 900 123-45-67"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <Button type="button" variant="outline" onClick={() => setOpen(false)} className="flex-1">
                Отмена
              </Button>
              <Button type="submit" className="flex-1" disabled={sending}>
                {sending ? "Отправляем..." : "Отправить"}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
