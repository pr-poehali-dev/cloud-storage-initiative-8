import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "QrCode",
    title: "Генерация кодов маркировки",
    description:
      "Оперативно генерируем коды DataMatrix для любых товарных групп, подлежащих маркировке: одежда, обувь, молочная продукция, вода, медикаменты и другие. Всё строго по требованиям «Честного знака».",
  },
  {
    icon: "FileText",
    title: "Оформление УПД",
    description:
      "Помогаем правильно оформить универсальные передаточные документы (УПД) с маркировкой. Проверяем корректность кодов, следим за актуальностью форматов и снижаем риск штрафов.",
  },
  {
    icon: "Headphones",
    title: "Техническая поддержка",
    description:
      "Решаем технические проблемы с «Честным знаком»: настраиваем оборудование, разбираемся с ошибками в личном кабинете, помогаем при проверках и отвечаем на вопросы в рабочее время.",
  },
  {
    icon: "Settings",
    title: "Подключение к системе",
    description:
      "Помогаем пройти регистрацию в «Честном знаке» с нуля: подготовка документов, настройка ЭДО, подключение оборудования для сканирования и печати кодов маркировки.",
  },
  {
    icon: "RefreshCw",
    title: "Вывод товаров из оборота",
    description:
      "Сопровождаем процедуру вывода маркированного товара из оборота при продаже, списании или возврате. Исключаем ошибки, которые могут привести к штрафам от Роспотребнадзора.",
  },
  {
    icon: "ShieldCheck",
    title: "Контроль соответствия",
    description:
      "Регулярно проверяем вашу систему маркировки на соответствие актуальным требованиям. Своевременно уведомляем об изменениях в законодательстве и помогаем адаптироваться.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Наши услуги
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Всё для работы с <span className="text-primary">Честным знаком</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Берём на себя полный цикл работы с маркировкой — от регистрации в системе до ежедневного сопровождения.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon name={service.icon} className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
