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
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Наши услуги
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
            Всё для работы с <span className="text-primary">Честным знаком</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
            Берём на себя полный цикл работы с маркировкой — от регистрации в системе до ежедневного сопровождения.
          </p>
        </div>
        <div className="divide-y border-y">
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
              className="cursor-pointer group flex items-start gap-4 sm:gap-8 py-6 px-2 sm:px-4 transition-colors hover:bg-primary/5"
            >
              <span className="hidden sm:block w-12 shrink-0 text-3xl font-extrabold text-primary/30 group-hover:text-primary transition-colors">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="shrink-0 p-3 rounded-full border-2 border-primary/30 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                <Icon name={service.icon} className="h-6 w-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
              <Icon
                name="ArrowRight"
                className="hidden sm:block h-6 w-6 mt-3 shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
      <ConsultModal open={open} onOpenChange={setOpen} source={source} />
    </section>
  )
}