import { ThemeToggle } from "@/components/ThemeToggle"
import { Logo } from "@/components/Logo"
import { MobileMenu } from "@/components/MobileMenu"
import { useState, useEffect } from "react"
import { Phone, Send, Tag } from "lucide-react"
import { useNavigate, useLocation } from "react-router-dom"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/")
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
      }, 100)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <a href="/" className="hover:opacity-80 transition-opacity shrink-0">
            <Logo />
          </a>

          <div className="hidden md:flex items-center gap-5 absolute left-1/2 -translate-x-1/2">
            <button onClick={() => scrollToSection("about")} className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">
              О нас
            </button>
            <button onClick={() => scrollToSection("services")} className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">
              Услуги
            </button>
            <button
              onClick={() => scrollToSection("categories")}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary border border-primary/30 rounded-full px-3 py-1 hover:bg-primary/10 transition-colors whitespace-nowrap"
            >
              <Tag className="h-3.5 w-3.5 shrink-0" />
              Категории
            </button>
            <button onClick={() => scrollToSection("portfolio")} className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">
              Кейсы
            </button>
            <button onClick={() => scrollToSection("pricing")} className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">
              Тарифы
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">
              Контакты
            </button>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+74953203385"
              className="hidden lg:flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors whitespace-nowrap"
            >
              <Phone className="h-4 w-4" />
              +7 (495) 320-33-85
            </a>
            <a
              href="https://t.me/Matrix1C"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              <Send className="h-4 w-4" />
              Telegram
            </a>
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  )
}