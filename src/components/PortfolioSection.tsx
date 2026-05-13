import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const cases = [
  {
    icon: "Shirt",
    category: "Лёгкая промышленность",
    title: "Маркировка одежды и обуви",
    description:
      "Помогли производителю одежды из Иваново полностью перейти на маркировку: зарегистрировали в «Честном знаке», настроили оборудование, обучили сотрудников. Теперь генерируем 3 000 кодов ежемесячно.",
    tags: ["Одежда", "Обувь", "Генерация кодов", "УПД"],
  },
  {
    icon: "Droplets",
    category: "Пищевая промышленность",
    title: "Переход на маркировку воды",
    description:
      "Сопроводили оптовую компанию при введении обязательной маркировки питьевой воды. Настроили процессы, интегрировали с 1С, обеспечили бесперебойную генерацию кодов с первого дня.",
    tags: ["Вода", "1С", "Интеграция", "Оптовая торговля"],
  },
  {
    icon: "Pill",
    category: "Фармацевтика",
    title: "Маркировка медикаментов",
    description:
      "Подключили небольшую аптечную сеть к системе мониторинга движения лекарственных препаратов. Настроили сканирование при приёмке и продаже, обеспечили поддержку при проверках.",
    tags: ["Фармацевтика", "МДЛП", "Аптека", "Поддержка"],
  },
  {
    icon: "Milk",
    category: "Молочная продукция",
    title: "Маркировка молочной продукции",
    description:
      "Помогли небольшому фермерскому хозяйству разобраться с обязательной маркировкой молочки. Оформляем документы и генерируем коды — они занимаются производством.",
    tags: ["Молоко", "Фермерство", "УПД", "Сопровождение"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Наши кейсы</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Работаем с разными отраслями и товарными группами — от фермерских хозяйств до крупных оптовых компаний.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center h-40 group-hover:from-primary/20 transition-all duration-500">
                <Icon
                  name={item.icon}
                  size={80}
                  className="text-primary/40 group-hover:text-primary/60 group-hover:scale-110 transition-all duration-500"
                />
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{item.category}</p>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
