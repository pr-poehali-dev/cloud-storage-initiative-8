import { ThemeToggle } from "@/components/ThemeToggle"
import { Logo } from "@/components/Logo"
import { MobileMenu } from "@/components/MobileMenu"
import { useState, useEffect } from "react"
import { Phone, Send, MessageCircle } from "lucide-react"
import { useNavigate, useLocation } from "react-router-dom"
import { reachGoal } from "@/lib/ym"

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
        isScrolled ? "bg-background/90 backdrop-blur-lg shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="px-2 sm:px-4">
        <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="relative flex h-16 items-center justify-between">
          <a href="/" className="hover:opacity-80 transition-opacity shrink-0">
            <Logo />
          </a>

          <div className="hidden md:flex items-center gap-5 flex-1 ml-8 lg:ml-10">
            <button onClick={() => scrollToSection("about")} className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">
              О нас
            </button>
            <button onClick={() => scrollToSection("services")} className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">
              Услуги
            </button>
            <button onClick={() => scrollToSection("categories")} className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">
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
              onClick={() => reachGoal("phone_click")}
              className="hidden lg:flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              <Phone className="h-4 w-4 text-primary" />
              +7 (495) 320-33-85
            </a>
            <a
              href="https://t.me/Matrix1C"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => reachGoal("telegram_click")}
              className="hidden lg:flex items-center justify-center h-10 w-10 rounded-full bg-foreground text-background hover:bg-primary transition-colors"
              aria-label="Telegram"
            >
              <Send className="h-4 w-4" />
            </a>
            <a
              href="https://max.ru/u/f9LHodD0cOKPnAF1mqs2hoYfpye1TEtFoGWnuo4byWDQwcvscRys-LJCTYQ"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => reachGoal("max_click")}
              className="hidden lg:flex items-center justify-center h-10 w-10 rounded-full bg-foreground text-background hover:bg-primary transition-colors"
              aria-label="MAX"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
        </div>
      </div>
    </nav>
  )
}