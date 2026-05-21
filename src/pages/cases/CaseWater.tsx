import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export default function CaseWater() {
  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 sm:px-6 lg:px-8 py-12 container mx-auto max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10">
          <Icon name="ArrowLeft" size={16} />
          На главную
        </Link>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
          <Icon name="Droplets" size={14} />
          Пищевая промышленность
        </div>

        <h1 className="text-4xl font-bold mb-4">Переход на маркировку воды</h1>
        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
          Оптовая компания по продаже питьевой воды узнала об обязательной маркировке за 3 недели до вступления требований в силу. Объём — более 15 000 бутылок в месяц, интеграция с 1С была обязательным условием.
        </p>

        <div className="grid grid-cols-3 gap-4 mb-12">
          {[
            { value: "0 ошибок", label: "при переходе" },
            { value: "15 000+", label: "единиц в месяц" },
            { value: "3 нед.", label: "от старта до запуска" },
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
            <p>Клиент уже использовал 1С для учёта и категорически не хотел перестраивать внутренние процессы. Нужно было «бесшовно» встроить маркировку в существующий поток, не останавливая отгрузки.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-3">Что мы сделали</h2>
            <ul className="space-y-2">
              {[
                "Зарегистрировали в «Честном знаке» и получили УКЭП в сжатые сроки",
                "Провели аудит текущей схемы в 1С и разработали план интеграции",
                "Настроили обмен данными между 1С и системой «Честный знак»",
                "Запустили автоматическую генерацию кодов при создании заказа",
                "Настроили автоматическую передачу УПД покупателям",
                "Провели тестовую отгрузку и сопроводили первые реальные поставки",
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
            <p>Переход прошёл без единой ошибки и без остановки отгрузок. С первого дня действия требований клиент работал в полном соответствии с законом. Интеграция с 1С работает в автоматическом режиме — вмешательство сотрудников минимально.</p>
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
