import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { Fragment } from "react"
import Icon from "@/components/ui/icon"

const steps = [
  {
    icon: "PhoneCall",
    title: "Консультация",
    description:
      "Обсуждаем вашу товарную группу, объём продукции и текущую ситуацию. Подбираем оптимальный тариф и объясняем, что именно нужно сделать для соответствия требованиям «Честного знака».",
    number: "01",
  },
  {
    icon: "Settings",
    title: "Подключение и настройка",
    description:
      "Помогаем зарегистрироваться в системе, настраиваем оборудование и интеграции. Генерируем первые коды маркировки и проверяем весь процесс от печати до ввода в оборот.",
    number: "02",
  },
  {
    icon: "Rocket",
    title: "Работа и поддержка",
    description:
      "Вы работаете — мы на связи. Генерируем коды по запросу, помогаем оформлять УПД, отвечаем на вопросы и следим за изменениями в требованиях, чтобы вы были всегда в порядке.",
    number: "03",
  },
]

export function ProcessSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Как мы работаем
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            От <span className="text-primary">заявки</span> до <span className="text-primary">результата</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Три простых шага — и маркировка перестаёт быть головной болью.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <Fragment key={index}>
              <Card
                className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-background"
              >
                <div className="absolute top-0 right-0 text-[120px] font-bold bg-gradient-to-br from-primary/10 to-primary/5 bg-clip-text text-transparent leading-none p-4">
                  {step.number}
                </div>
                <CardHeader>
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 w-fit group-hover:scale-110 group-hover:rotate-6">
                    <Icon name={step.icon} className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div
                  className="hidden md:flex items-center justify-center absolute top-1/2 -translate-y-1/2"
                  style={{ left: `${(index + 1) * 33.33 - 4}%` }}
                >
                  <ArrowRight className="h-8 w-8 text-primary animate-pulse" />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
