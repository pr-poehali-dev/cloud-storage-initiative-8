import type React from "react"
import { useState } from "react"
import { reachGoal } from "@/lib/ym"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Icon from "@/components/ui/icon"

interface ConsultModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  source?: string
}

export function ConsultModal({ open, onOpenChange, source }: ConsultModalProps) {
  const [formData, setFormData] = useState({ name: "", phone: "" })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

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
        body: JSON.stringify({ ...formData, package: source || "Консультация" }),
      })
    } catch (err) {
      console.error("ConsultModal error:", err)
    }
    setSending(false)
    setSent(true)
    setFormData({ name: "", phone: "" })
    reachGoal("consult_modal_submit")
  }

  const handleClose = (open: boolean) => {
    if (!open) setSent(false)
    onOpenChange(open)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Получить консультацию</DialogTitle>
          <DialogDescription>
            Оставьте имя и телефон — перезвоним и ответим на все вопросы бесплатно.
          </DialogDescription>
        </DialogHeader>

        {sent ? (
          <div className="py-6 text-center space-y-3">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-2">
              <Icon name="CheckCircle2" size={32} />
            </div>
            <p className="font-semibold text-lg">Заявка отправлена!</p>
            <p className="text-muted-foreground text-sm">Мы свяжемся с вами в ближайшее время.</p>
            <Button variant="outline" className="mt-2" onClick={() => handleClose(false)}>
              Закрыть
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div className="space-y-2">
              <label htmlFor="modal-name" className="text-sm font-medium">
                Имя *
              </label>
              <Input
                id="modal-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ваше имя"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="modal-phone" className="text-sm font-medium">
                Телефон *
              </label>
              <Input
                id="modal-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+7 900 123-45-67"
                required
              />
            </div>
            <Button type="submit" size="lg" className="w-full" disabled={sending}>
              <Icon name="Send" size={16} className="mr-2" />
              {sending ? "Отправляем..." : "Отправить заявку"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}