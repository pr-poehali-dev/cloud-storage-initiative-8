import { Link } from "react-router-dom"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"
import { ContactSection } from "@/components/ContactSection"

const steps = [
  {
    icon: "ClipboardList",
    title: "Анализ производства",
    description:
      "Изучаем ваш продукт, объёмы выпуска и текущую инфраструктуру. Определяем оптимальный способ нанесения кодов — на линии, офлайн или через типографию.",
  },
  {
    icon: "UserCheck",
    title: "Регистрация в «Честном знаке»",
    description:
      "Регистрируем компанию и товарные группы в системе мониторинга. Полностью берём на себя оформление — вам не нужно разбираться в бюрократии.",
  },
  {
    icon: "QrCode",
    title: "Генерация кодов маркировки",
    description:
      "Заказываем коды DataMatrix у оператора, настраиваем передачу в вашу ERP или 1С. Каждый код уникален и привязан к конкретной единице товара.",
  },
  {
    icon: "Printer",
    title: "Нанесение и печать",
    description:
      "Помогаем настроить печать прямо на производственной линии или организуем нанесение через партнёрские типографии. Этикетки, стикеры, прямая печать.",
  },
  {
    icon: "FileText",
    title: "Оформление УПД",
    description:
      "При отгрузке товара формируем универсальный передаточный документ с кодами маркировки. Данные автоматически уходят в «Честный знак».",
  },
  {
    icon: "HeadphonesIcon",
    title: "Поддержка и сопровождение",
    description:
      "После запуска остаёмся на связи. Решаем технические вопросы, обновляем настройки при изменении требований, консультируем сотрудников.",
  },
]

const benefits = [
  { icon: "ShieldCheck", title: "Работа под ключ", description: "От регистрации до первой отгрузки — всё сделаем за вас" },
  { icon: "Zap", title: "Быстрый запуск", description: "Запускаем маркировку за 5–10 рабочих дней" },
  { icon: "Link", title: "Интеграция с 1С", description: "Подключаем к любой конфигурации 1С без переписывания кода" },
  { icon: "BadgeCheck", title: "Соответствие закону", description: "Всегда актуальные требования регулятора — без штрафов" },
]

export default function Manufacturers() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <Icon name="ArrowLeft" size={16} />
            На главную
          </Link>
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Производители
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance">
            Маркировка для <span className="text-primary">производителей</span> под ключ
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-10">
            Настраиваем маркировку «Честный знак» прямо на вашем производстве: от регистрации в системе до печати кодов на линии. Вы продолжаете выпускать товар — мы берём на себя всё остальное.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+74953203385">+7 (495) 320-33-85</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <Card key={b.title} className="border-none shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary">
                    <Icon name={b.icon} size={24} />
                  </div>
                  <h3 className="font-bold mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Как это работает</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Понятный процесс без лишней бюрократии — вы всегда знаете, на каком этапе находитесь
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, i) => (
              <Card key={step.title} className="border-none shadow-lg">
                <CardContent className="p-6 flex gap-5">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name={step.icon} size={18} className="text-primary" />
                      <h3 className="font-bold">{step.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />

      <Footer />
    </main>
  )
}