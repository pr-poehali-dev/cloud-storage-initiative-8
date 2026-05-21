import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import { ConsultModal } from "@/components/ConsultModal"

export default function CasePharma() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <ConsultModal open={modalOpen} onOpenChange={setModalOpen} />
      <div className="px-4 sm:px-6 lg:px-8 py-12 container mx-auto max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10">
          <Icon name="ArrowLeft" size={16} />
          На главную
        </Link>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
          <Icon name="Pill" size={14} />
          Фармацевтика
        </div>

        <h1 className="text-4xl font-bold mb-4">Маркировка медикаментов</h1>
        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
          Небольшая аптечная сеть из 3 точек в Подмосковье не успевала самостоятельно разобраться с системой МДЛП (мониторинг движения лекарственных препаратов) и обратилась к нам за срочной помощью.
        </p>

        <div className="grid grid-cols-3 gap-4 mb-12">
          {[
            { value: "3 точки", label: "подключено за неделю" },
            { value: "100%", label: "приёмок через МДЛП" },
            { value: "0", label: "нарушений при проверках" },
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
            <p>Фармацевты понимали суть своей работы, но не разбирались в МДЛП. Нужно было подключить все точки к системе, настроить сканирование при приёмке и продаже, а также подготовить сотрудников к проверкам Росздравнадзора.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-3">Что мы сделали</h2>
            <ul className="space-y-2">
              {[
                "Зарегистрировали организацию в МДЛП и ГИС «Честный знак»",
                "Подобрали и настроили сканеры штрихкодов для каждой точки",
                "Настроили программу учёта для автоматической передачи данных в МДЛП",
                "Разработали инструкцию для фармацевтов по приёмке и продаже",
                "Провели обучение персонала на каждой из трёх точек",
                "Обеспечили сопровождение при первой плановой проверке",
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
            <p>Все три точки были подключены за одну неделю. Проверка Росздравнадзора прошла без единого замечания. Сейчас мы на постоянной связи с аптекой и решаем нестандартные ситуации по мере их возникновения.</p>
          </div>
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/20">
          <p className="font-semibold mb-1">Хотите так же?</p>
          <p className="text-sm text-muted-foreground mb-4">Оставьте заявку — разберёмся с маркировкой вместо вас.</p>
          <Button onClick={() => setModalOpen(true)}>
            Получить консультацию
          </Button>
        </div>
      </div>
    </div>
  )
}