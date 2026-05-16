import { Link } from "react-router-dom"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const steps = [
  {
    icon: "Search",
    title: "Проверка товарного ассортимента",
    description:
      "Анализируем ваш каталог и определяем, какие позиции подлежат обязательной маркировке. Составляем список и приоритеты по срокам внедрения.",
  },
  {
    icon: "UserCheck",
    title: "Регистрация в «Честном знаке»",
    description:
      "Оформляем участие вашей компании в системе маркировки. Настраиваем личный кабинет и интеграцию с вашими системами учёта.",
  },
  {
    icon: "QrCode",
    title: "Получение и нанесение кодов",
    description:
      "Заказываем коды DataMatrix, помогаем организовать нанесение на склад. Можем работать с вашим фулфилментом или напрямую с товаром до отгрузки на маркетплейс.",
  },
  {
    icon: "ShoppingBag",
    title: "Настройка под требования площадок",
    description:
      "Wildberries, Ozon, Яндекс Маркет и другие маркетплейсы имеют свои требования к маркировке. Настраиваем всё в соответствии с актуальными правилами каждой платформы.",
  },
  {
    icon: "RotateCcw",
    title: "Работа с возвратами",
    description:
      "Помогаем корректно обрабатывать возвраты: повторная активация кодов, списание или перемаркировка — в зависимости от состояния товара.",
  },
  {
    icon: "HeadphonesIcon",
    title: "Постоянная поддержка",
    description:
      "На связи при появлении новых требований маркетплейсов и регулятора. Актуализируем настройки и помогаем избежать блокировок карточек.",
  },
]

const benefits = [
  { icon: "Store", title: "Все площадки", description: "WB, Ozon, Яндекс Маркет, СберМегаМаркет и другие — знаем требования каждой" },
  { icon: "ShieldCheck", title: "Без блокировок", description: "Правильная маркировка с первого раза — карточки не снимаются с продажи" },
  { icon: "RotateCcw", title: "Возвраты под контролем", description: "Автоматизируем обработку возвратов с перемаркировкой" },
  { icon: "TrendingUp", title: "Масштабируемость", description: "Работаем и с небольшими магазинами, и с крупными мультикатегорийными селлерами" },
]

const marketplaces = ["Wildberries", "Ozon", "Яндекс Маркет", "СберМегаМаркет", "Авито", "AliExpress RU"]

export default function Sellers() {
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
            Селлеры
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance">
            Маркировка для <span className="text-primary">продавцов на маркетплейсах</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-10">
            Обеспечиваем корректную маркировку под требования Wildberries, Ozon и других площадок. Без блокировок карточек, без штрафов, без лишней головной боли.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <a href="/#contact">Получить консультацию</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+74953203385">+7 (495) 320-33-85</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Marketplaces */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background border-b border-border">
        <div className="container mx-auto max-w-5xl">
          <p className="text-center text-sm text-muted-foreground mb-6 font-medium uppercase tracking-widest">Работаем с площадками</p>
          <div className="flex flex-wrap justify-center gap-4">
            {marketplaces.map((mp) => (
              <span key={mp} className="px-5 py-2 rounded-full border border-border bg-muted/50 text-sm font-semibold">
                {mp}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Что вы получаете</h2>
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
            <h2 className="text-3xl font-bold mb-4">Как мы работаем с селлерами</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Настраиваем маркировку один раз — и она работает без вашего участия
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

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Продаёте на маркетплейсах?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Разберём вашу ситуацию и настроим маркировку под конкретные площадки
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="/#contact">Оставить заявку</a>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
