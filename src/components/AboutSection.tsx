import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Sparkles } from "lucide-react"

const values = [
  { title: "Экспертиза", description: "Глубокое знание требований «Честного знака» и актуального законодательства" },
  { title: "Скорость", description: "Генерируем коды и оформляем документы в кратчайшие сроки" },
  { title: "Прозрачность", description: "Фиксированные тарифы, никаких скрытых платежей и сюрпризов" },
  { title: "Надёжность", description: "Берём ответственность за корректность всех данных и документов" },
  { title: "Поддержка", description: "На связи в рабочее время — отвечаем на вопросы и решаем проблемы быстро" },
  { title: "Обновление", description: "Следим за изменениями в системе маркировки и своевременно вас уведомляем" },
]

const stats = [
  { number: "200+", label: "Клиентов" },
  { number: "1 млн+", label: "Кодов сгенерировано" },
  { number: "50+", label: "Товарных групп" },
  { number: "3+", label: "Года опыта" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            <Sparkles className="h-4 w-4" />
            О компании 1C Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Маркировка, которая{" "}
            <span className="text-primary relative">
              работает
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M0 4C50 2 150 6 200 4" stroke="currentColor" strokeWidth="2" className="text-primary" />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Мы специализируемся на работе с системой «Честный знак» и помогаем предпринимателям выполнять требования законодательства без лишних затрат времени и нервов.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {values.map((value, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <img
            src="https://cdn.poehali.dev/projects/a5fdd0d1-9566-4dd5-91f1-212c6efddd90/files/eed0139c-e875-4d0e-8579-ec472aa9a469.jpg"
            alt="Маркированная одежда с кодами DataMatrix"
            loading="lazy"
            className="w-full h-72 md:h-96 object-cover rounded-3xl shadow-lg"
          />
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-balance">
              Берём маркировку на себя — вы занимаетесь <span className="text-primary">бизнесом</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Подключаем к «Честному знаку», выпускаем коды DataMatrix, оформляем документы и сопровождаем каждую отгрузку. Без штрафов и простоев.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group cursor-default">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
