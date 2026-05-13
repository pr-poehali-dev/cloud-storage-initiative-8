import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const clientTypes = [
  {
    icon: "Factory",
    title: "Производители",
    description:
      "Помогаем наладить маркировку прямо на производстве: от регистрации в «Честном знаке» до печати кодов на линии. Всё работает без сбоев — вы просто выпускаете товар.",
    badge: "Производство",
  },
  {
    icon: "Ship",
    title: "Импортёры",
    description:
      "Организуем ввод в оборот иностранной продукции: маркируем до растаможки или сразу после. Документы в порядке, товар легально на рынке РФ.",
    badge: "Импорт",
  },
  {
    icon: "ShoppingCart",
    title: "Селлеры",
    description:
      "Работаем с продавцами на Wildberries, Ozon и других маркетплейсах. Обеспечиваем корректную маркировку под требования площадок — без блокировок и штрафов.",
    badge: "Маркетплейсы",
  },
]

export function ClientTypesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Кому мы помогаем
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-balance">
            Работаем с{" "}
            <span className="text-primary">производителями</span>,{" "}
            <span className="text-primary">импортёрами</span> и{" "}
            <span className="text-primary">селлерами</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Опыт в каждом сегменте — решаем задачу под ваш тип бизнеса.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clientTypes.map((client) => (
            <Card
              key={client.title}
              className="group border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background"
            >
              <CardContent className="p-8">
                <div className="mb-5 inline-flex p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                  <Icon name={client.icon} className="h-7 w-7" />
                </div>

                <div className="mb-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {client.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {client.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{client.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
