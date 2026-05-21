import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export default function CaseClothing() {
  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 sm:px-6 lg:px-8 py-12 container mx-auto max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10">
          <Icon name="ArrowLeft" size={16} />
          На главную
        </Link>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
          <Icon name="Shirt" size={14} />
          Лёгкая промышленность
        </div>

        <h1 className="text-4xl font-bold mb-4">Маркировка одежды и обуви</h1>
        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
          Производитель одежды из Иваново обратился к нам за два месяца до введения обязательной маркировки. Компания выпускала около 3 000 единиц в месяц и не имела никакого опыта работы с «Честным знаком».
        </p>

        <div className="grid grid-cols-3 gap-4 mb-12">
          {[
            { value: "2 дня", label: "до полного запуска" },
            { value: "3 000", label: "кодов в месяц" },
            { value: "0 ₽", label: "штрафов" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl bg-primary/5 border border-border p-4 text-center">
              <div className="text-2xl font-extrabold text-primary mb-1">{s.value}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-8 text-base leading-relaxed text-foreground/90">
          <div>
            <h2 className="text-xl font-bold mb-3">Задача</h2>
            <p>Производитель не был зарегистрирован в «Честном знаке», не имел оборудования для нанесения кодов и не понимал, с чего начать. Сроки поджимали — введение обязательной маркировки оставалось меньше двух месяцев.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-3">Что мы сделали</h2>
            <ul className="space-y-2">
              {[
                "Зарегистрировали компанию в системе «Честный знак» и получили УКЭП",
                "Подобрали и настроили принтер этикеток под производственный поток",
                "Разработали регламент нанесения кодов на каждом этапе производства",
                "Обучили сотрудников склада и производственного цеха",
                "Настроили автоматическую генерацию и передачу УПД контрагентам",
                "Взяли на себя ежемесячную генерацию кодов DataMatrix",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-primary mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-3">Результат</h2>
            <p>Через 2 дня с момента начала работы первая партия товара уже шла с корректной маркировкой. Сейчас мы ежемесячно генерируем 3 000 кодов — клиент занимается производством, мы берём маркировку на себя.</p>
          </div>
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/20">
          <p className="font-semibold mb-1">Хотите так же?</p>
          <p className="text-sm text-muted-foreground mb-4">Оставьте заявку — разберёмся с маркировкой вместо вас.</p>
          <Button asChild>
            <Link to="/#contact">Получить консультацию</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
