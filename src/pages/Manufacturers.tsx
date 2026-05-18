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

const pains = [
  { icon: "AlertTriangle", text: "Не знаете, с чего начать — регуляторика кажется сложной" },
  { icon: "Clock", text: "Боитесь остановки производства из-за проблем с маркировкой" },
  { icon: "FileX", text: "Уже получили предписание или предупреждение от проверяющих" },
  { icon: "Settings", text: "1С есть, но как подключить «Честный знак» — непонятно" },
  { icon: "Users", text: "Нет специалиста, который разбирается в маркировке" },
  { icon: "TrendingDown", text: "Конкуренты уже работают легально, а вы рискуете штрафами" },
]

const stats = [
  { value: "500+", label: "производителей на сопровождении" },
  { value: "7 дней", label: "средний срок запуска маркировки" },
  { value: "0 ₽", label: "штрафов у наших клиентов" },
  { value: "99%", label: "клиентов продлевают договор" },
]

const tariffs = [
  {
    name: "Старт",
    price: "от 15 000 ₽",
    period: "единоразово",
    description: "Для небольших производств с одной товарной группой",
    features: [
      "Регистрация в «Честном знаке»",
      "Подключение одной товарной группы",
      "Настройка получения кодов",
      "Инструкция для сотрудников",
      "30 дней поддержки",
    ],
    highlighted: false,
    cta: "Выбрать Старт",
  },
  {
    name: "Бизнес",
    price: "от 35 000 ₽",
    period: "единоразово",
    description: "Для производств с несколькими группами товаров и 1С",
    features: [
      "Всё из тарифа «Старт»",
      "До 3 товарных групп",
      "Интеграция с 1С",
      "Настройка печати на линии",
      "Оформление УПД при отгрузке",
      "3 месяца поддержки",
    ],
    highlighted: true,
    cta: "Выбрать Бизнес",
  },
  {
    name: "Корпорат",
    price: "по запросу",
    period: "индивидуально",
    description: "Для крупных производств с высокими объёмами и несколькими площадками",
    features: [
      "Всё из тарифа «Бизнес»",
      "Неограниченные товарные группы",
      "Интеграция с ERP/WMS",
      "Выделенный менеджер",
      "SLA до 4 часов",
      "Годовое сопровождение",
    ],
    highlighted: false,
    cta: "Обсудить условия",
  },
]

const comparison = [
  { criterion: "Стоимость ошибки", us: "Берём ответственность на себя", self: "Штрафы от 50 000 ₽", others: "Оплачиваете их ошибки" },
  { criterion: "Срок запуска", us: "5–10 рабочих дней", self: "1–3 месяца", others: "2–4 недели" },
  { criterion: "Интеграция с 1С", us: "Включена в стоимость", self: "Нужен программист", others: "Отдельная оплата" },
  { criterion: "Поддержка", us: "Постоянная, в рабочее время", self: "Только вы сами", others: "По тикетам, долго" },
  { criterion: "Изменения в законе", us: "Обновляем автоматически", self: "Нужно следить самому", others: "По отдельному договору" },
]

export default function Manufacturers() {
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
            Производители
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance">
            Маркировка для <span className="text-primary">производителей</span> под ключ
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-10">
            Настраиваем маркировку «Честный знак» прямо на вашем производстве: от регистрации в системе до печати кодов на линии. Вы продолжаете выпускать товар — мы берём на себя всё остальное.
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
              С этими проблемами к нам приходят производители каждый день
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
            <p className="text-muted-foreground mb-4">Если хотя бы один пункт про вас — давайте разберёмся вместе</p>
            <Button onClick={scrollToContact}>Получить бесплатную консультацию</Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
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

      {/* Tariffs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Тарифы</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Выберите подходящий формат — или свяжитесь с нами для индивидуального расчёта
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
              Почему производители выбирают нас, а не самостоятельный путь
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
