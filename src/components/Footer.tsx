import { Send } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">1C Matrix</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Генерация кодов маркировки, оформление УПД и техническая поддержка по «Честному знаку».
            </p>
            <a
              href="https://t.me/Matrix1C"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm text-primary font-semibold hover:text-primary/80 transition-colors"
            >
              <Send className="h-4 w-4" />
              @Matrix1C в Telegram
            </a>
            <p className="text-sm text-muted-foreground mt-4">
              © 2025 1C Matrix. Все права защищены.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  О компании
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Кейсы
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Тарифы
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Генерация кодов маркировки</li>
              <li className="text-sm text-muted-foreground">Оформление УПД</li>
              <li className="text-sm text-muted-foreground">Техническая поддержка</li>
              <li className="text-sm text-muted-foreground">Подключение к Честному знаку</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}