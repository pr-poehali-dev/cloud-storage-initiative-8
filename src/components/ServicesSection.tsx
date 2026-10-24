import Icon from "@/components/ui/icon"
import { useState } from "react"
import { ConsultModal } from "@/components/ConsultModal"
import { reachGoal } from "@/lib/ym"

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
  const [open, setOpen] = useState(false)
  const [source, setSource] = useState("")

  const handleOpen = (title: string) => {
    setSource(`Услуга: ${title}`)
    setOpen(true)
    reachGoal("service_card_click")
  }

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/40">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Наши услуги
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
              Всё для работы с <span className="text-primary">Честным знаком</span>
            </h2>
            <p className="text-muted-foreground text-pretty leading-relaxed text-lg">
              Берём на себя полный цикл работы с маркировкой — от регистрации в системе до ежедневного сопровождения.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                role="button"
                tabIndex={0}
                onClick={() => handleOpen(service.title)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    handleOpen(service.title)
                  }
                }}
                className="cursor-pointer group relative rounded-2xl border bg-background p-6 transition-all duration-300 hover:border-primary hover:shadow-lg"
              >
                <span className="absolute top-4 right-5 text-4xl font-extrabold text-primary/10 group-hover:text-primary/20 transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="mb-4 inline-flex p-3 rounded-xl bg-primary text-primary-foreground">
                  <Icon name={service.icon} className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ConsultModal open={open} onOpenChange={setOpen} source={source} />
    </section>
  )
}