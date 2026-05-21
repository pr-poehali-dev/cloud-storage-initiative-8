import { useState } from "react"
import { Menu, Phone, Send, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Link } from "react-router-dom"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  const menuItems = [
    { href: "#about", label: "О нас" },
    { href: "#services", label: "Услуги" },
    { href: "#portfolio", label: "Кейсы" },
    { href: "#pricing", label: "Тарифы" },
    { href: "#contact", label: "Контакты" },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Меню</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] sm:w-[350px]">
        <SheetHeader>
          <SheetTitle>Меню навигации</SheetTitle>
          <SheetDescription>Переход к разделам сайта</SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-1 mt-8">
          <Link
            to="/#categories"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 text-base font-semibold text-primary hover:bg-primary/10 transition-all py-3 px-4 rounded-lg border-b border-border/50"
          >
            <Tag className="h-4 w-4 shrink-0" />
            Товарные категории
          </Link>
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium hover:text-primary hover:bg-primary/5 transition-all py-3 px-4 rounded-lg border-b border-border/50 last:border-b-0"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mt-8 pt-6 border-t border-border flex flex-col gap-3">
          <a
            href="tel:+74953203385"
            className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary font-semibold hover:bg-primary/20 transition-colors"
          >
            <Phone className="h-5 w-5 shrink-0" />
            +7 (495) 320-33-85
          </a>
          <a
            href="https://t.me/Matrix1C"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary font-semibold hover:bg-primary/20 transition-colors"
          >
            <Send className="h-5 w-5 shrink-0" />
            Telegram @Matrix1C
          </a>
        </div>
      </SheetContent>
    </Sheet>
  )
}