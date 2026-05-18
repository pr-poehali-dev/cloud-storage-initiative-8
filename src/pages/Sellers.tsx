import { Link } from "react-router-dom"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"
import { ContactSection } from "@/components/ContactSection"

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

const pains = [
  { icon: "Ban", text: "Карточки товаров заблокированы или сняты с продажи на маркетплейсе" },
  { icon: "AlertTriangle", text: "Получили штраф или предупреждение за продажу без маркировки" },
  { icon: "RotateCcw", text: "Возвраты превращаются в хаос — непонятно, что делать с кодами" },
  { icon: "Clock", text: "Тратите часы на маркировку вручную — это отвлекает от продаж" },
  { icon: "FileX", text: "Не понимаете, какие товары в вашем ассортименте подлежат маркировке" },
  { icon: "TrendingDown", text: "Конкуренты продают легально, а вы теряете время и деньги" },
]

const stats = [
  { value: "1 200+", label: "селлеров на обслуживании" },
  { value: "6 площадок", label: "с которыми работаем" },
  { value: "3 дня", label: "до первой корректной отгрузки" },
  { value: "0", label: "блокировок карточек по нашей вине" },
]

const tariffs = [
  {
    name: "Старт",
    price: "от 10 000 ₽",
    period: "единоразово",
    description: "Для начинающих селлеров с одной категорией товаров",
    features: [
      "Регистрация в «Честном знаке»",
      "Одна товарная группа",
      "Коды DataMatrix для первой партии",
      "Настройка под одну площадку",
      "Инструкция по работе с возвратами",
    ],
    highlighted: false,
    cta: "Выбрать Старт",
  },
  {
    name: "Продавец",
    price: "от 25 000 ₽",
    period: "единоразово",
    description: "Для активных селлеров с несколькими категориями и площадками",
    features: [
      "Всё из тарифа «Старт»",
      "До 3 товарных групп",
      "Настройка под 3 площадки",
      "Автоматизация работы с возвратами",
      "Интеграция с системой учёта",
      "3 месяца поддержки",
    ],
    highlighted: true,
    cta: "Выбрать Продавец",
  },
  {
    name: "Мультикатегорийный",
    price: "по запросу",
    period: "индивидуально",
    description: "Для крупных селлеров с широким ассортиментом на нескольких площадках",
    features: [
      "Всё из тарифа «Продавец»",
      "Неограниченные категории",
      "Все маркетплейсы",
      "Выделенный менеджер",
      "SLA поддержки до 4 часов",
      "Годовое сопровождение",
    ],
    highlighted: false,
    cta: "Обсудить условия",
  },
]

const comparison = [
  { criterion: "Настройка под маркетплейс", us: "Под каждую площадку", self: "Самому разбираться", others: "Обычно одна площадка" },
  { criterion: "Работа с возвратами", us: "Включена в сервис", self: "Нет понимания как", others: "Отдельная оплата" },
  { criterion: "Блокировки карточек", us: "0 по нашей вине", self: "Высокий риск", others: "Бывают" },
  { criterion: "Скорость запуска", us: "3 рабочих дня", self: "2–4 недели", others: "1–2 недели" },
  { criterion: "Обновления при новых требованиях", us: "Автоматически", self: "Нужно следить", others: "По отдельному договору" },
]

export default function Sellers() {
  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })

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
            <Button size="lg" onClick={scrollToContact}>
              Получить консультацию
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

      {/* Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-1">{s.value}</div>
                <div className="text-sm text-primary-foreground/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pains */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Узнаёте себя?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              С этими проблемами к нам приходят селлеры каждый день
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pains.map((p) => (
              <div key={p.text} className="flex items-start gap-3 p-4 rounded-xl bg-muted/40 border border-border">
                <div className="flex-shrink-0 mt-0.5 text-destructive">
                  <Icon name={p.icon} size={20} />
                </div>
                <p className="text-sm leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">Если хотя бы один пункт про вас — поможем разобраться бесплатно</p>
            <Button onClick={scrollToContact}>Получить бесплатную консультацию</Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
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

      {/* Tariffs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Тарифы</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Выберите подходящий формат в зависимости от масштаба вашего бизнеса
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tariffs.map((t) => (
              <Card
                key={t.name}
                className={`border-2 shadow-lg relative flex flex-col ${t.highlighted ? "border-primary shadow-xl scale-105" : "border-border"}`}
              >
                {t.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                    Популярный
                  </div>
                )}
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-1">{t.name}</h3>
                    <div className="text-2xl font-bold text-primary mb-1">{t.price}</div>
                    <div className="text-xs text-muted-foreground mb-3">{t.period}</div>
                    <p className="text-sm text-muted-foreground">{t.description}</p>
                  </div>
                  <ul className="space-y-2 mb-6 flex-1">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={t.highlighted ? "default" : "outline"}
                    onClick={scrollToContact}
                  >
                    {t.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Мы vs альтернативы</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Почему тысячи селлеров доверяют нам, а не разбираются самостоятельно
            </p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-4 font-semibold">Критерий</th>
                  <th className="p-4 font-semibold text-primary text-center">Мы</th>
                  <th className="p-4 font-semibold text-center text-muted-foreground">Самостоятельно</th>
                  <th className="p-4 font-semibold text-center text-muted-foreground">Другие операторы</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.criterion} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                    <td className="p-4 font-medium">{row.criterion}</td>
                    <td className="p-4 text-center">
                      <span className="inline-flex items-center gap-1 text-primary font-medium">
                        <Icon name="CheckCircle" size={15} />
                        {row.us}
                      </span>
                    </td>
                    <td className="p-4 text-center text-muted-foreground">{row.self}</td>
                    <td className="p-4 text-center text-muted-foreground">{row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <ContactSection />

      <Footer />
    </main>
  )
}
