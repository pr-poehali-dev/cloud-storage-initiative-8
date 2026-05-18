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
    title: "Анализ товарных групп",
    description:
      "Определяем, подлежит ли ваш товар обязательной маркировке, и выбираем подходящую схему: до растаможки или сразу после ввоза в РФ.",
  },
  {
    icon: "UserCheck",
    title: "Регистрация импортёра",
    description:
      "Регистрируем вас в «Честном знаке» как участника оборота. Оформляем все необходимые соглашения и сертификаты доступа.",
  },
  {
    icon: "QrCode",
    title: "Получение кодов до границы",
    description:
      "Заказываем коды DataMatrix заранее — ещё до прибытия товара. Это позволяет промаркировать партию на складе временного хранения и ускорить растаможку.",
  },
  {
    icon: "Package",
    title: "Маркировка на складе",
    description:
      "Организуем нанесение кодов на складе СВХ или вашем складе после таможенного оформления. Работаем с любыми объёмами партий.",
  },
  {
    icon: "FileText",
    title: "Ввод в оборот",
    description:
      "Оформляем уведомление о вводе в оборот через «Честный знак». Данные передаются в систему автоматически — товар становится легальным для продажи в РФ.",
  },
  {
    icon: "HeadphonesIcon",
    title: "Сопровождение при проверках",
    description:
      "При запросах от контролирующих органов помогаем сформировать корректную документацию и объяснить прослеживаемость товара.",
  },
]

const benefits = [
  { icon: "Globe", title: "Любые страны-поставщики", description: "Работаем с Китаем, Европой, Турцией, СНГ и другими направлениями" },
  { icon: "Clock", title: "Маркировка до растаможки", description: "Ускоряем таможенное оформление — товар уже промаркирован при пересечении границы" },
  { icon: "ShieldCheck", title: "Полная легальность", description: "Товар корректно зарегистрирован в «Честном знаке» — нет риска блокировок и штрафов" },
  { icon: "Layers", title: "Любые объёмы", description: "От пробной партии в 100 единиц до крупных регулярных поставок" },
]

const pains = [
  { icon: "AlertTriangle", text: "Товар застрял на таможне из-за отсутствия маркировки" },
  { icon: "FileX", text: "Не знаете, нужна ли маркировка вашему конкретному товару" },
  { icon: "Clock", text: "Поставки задерживаются — теряете деньги и клиентов" },
  { icon: "Ban", text: "Получили отказ в продаже — партия без кодов DataMatrix" },
  { icon: "Search", text: "Поставщик за рубежом не может нанести маркировку сам" },
  { icon: "TrendingDown", text: "Штрафы за немаркированный товар уже назначены или грозят" },
]

const stats = [
  { value: "300+", label: "импортёров на обслуживании" },
  { value: "48 часов", label: "от запроса до получения кодов" },
  { value: "15+", label: "стран-поставщиков в работе" },
  { value: "0", label: "задержанных партий по нашей вине" },
]

const tariffs = [
  {
    name: "Разовая партия",
    price: "от 20 000 ₽",
    period: "за партию",
    description: "Для пробного ввоза или единичных поставок",
    features: [
      "Регистрация в «Честном знаке»",
      "Коды DataMatrix для партии",
      "Ввод товара в оборот",
      "Документальное оформление",
      "Консультация по дальнейшим поставкам",
    ],
    highlighted: false,
    cta: "Оформить партию",
  },
  {
    name: "Регулярные поставки",
    price: "от 8 000 ₽",
    period: "за партию",
    description: "Для импортёров с регулярными поставками от 4 раз в год",
    features: [
      "Всё из разовой партии",
      "Приоритетная обработка заявок",
      "Коды заранее — до прибытия груза",
      "Маркировка на СВХ",
      "Личный менеджер",
      "Скидка от объёма",
    ],
    highlighted: true,
    cta: "Выбрать тариф",
  },
  {
    name: "Крупный импорт",
    price: "по запросу",
    period: "индивидуально",
    description: "Для компаний с объёмом от 10 000 единиц в поставке",
    features: [
      "Всё из регулярных поставок",
      "Маркировка на складе партнёра за рубежом",
      "Интеграция с вашей WMS/ERP",
      "SLA по срокам получения кодов",
      "Выделенная команда сопровождения",
      "Отчётность в реальном времени",
    ],
    highlighted: false,
    cta: "Обсудить условия",
  },
]

const comparison = [
  { criterion: "Маркировка до границы", us: "Да, заранее", self: "Нет, только после", others: "Редко, доп. оплата" },
  { criterion: "Срок получения кодов", us: "24–48 часов", self: "5–10 рабочих дней", others: "3–7 рабочих дней" },
  { criterion: "Поддержка при проверках", us: "Включена", self: "Нет", others: "Отдельный договор" },
  { criterion: "Работа с иностранными поставщиками", us: "Любые страны", self: "Ограничено", others: "Не все направления" },
  { criterion: "Ответственность за ошибки", us: "Берём на себя", self: "Только вы", others: "Спорно" },
]

export default function Importers() {
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
            Импортёры
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance">
            Маркировка <span className="text-primary">импортных товаров</span> без задержек
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-10">
            Организуем ввод в оборот иностранной продукции: маркируем до растаможки или сразу после. Документы в порядке — товар легально на рынке РФ с первого дня.
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
              Вот с какими ситуациями к нам обращаются импортёры
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
            <p className="text-muted-foreground mb-4">Решаем эти проблемы быстро — первая консультация бесплатно</p>
            <Button onClick={scrollToContact}>Получить бесплатную консультацию</Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Наши преимущества</h2>
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
            <h2 className="text-3xl font-bold mb-4">Как мы работаем с импортёрами</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Прозрачный процесс — от анализа поставки до легального появления товара на полке
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
              Гибкие условия — от разовой поставки до постоянного партнёрства
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
              Сравните, прежде чем решить — делать самому или доверить профессионалам
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
