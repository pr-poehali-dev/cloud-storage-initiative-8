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

export default function Importers() {
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
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

      <ContactSection />

      <Footer />
    </main>
  )
}