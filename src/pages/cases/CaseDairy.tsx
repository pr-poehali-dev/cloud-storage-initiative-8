import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import { ConsultModal } from "@/components/ConsultModal"

export default function CaseDairy() {
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
          <Icon name="Milk" size={14} />
          Молочная продукция
        </div>

        <h1 className="text-4xl font-bold mb-4">Маркировка молочной продукции</h1>
        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
          Небольшое фермерское хозяйство в Тверской области производило около 500 единиц молочной продукции в месяц. Владелец занимался фермой и не хотел погружаться в бюрократию маркировки.
        </p>

        <div className="grid grid-cols-3 gap-4 mb-12">
          {[
            { value: "100%", label: "без штрафов" },
            { value: "500+", label: "единиц в месяц" },
            { value: "1 день", label: "на старт работы" },
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
            <p>Клиент хотел просто производить молоко, творог и сыр — и не думать о маркировке вообще. Нужно было взять на себя весь документооборот и генерацию кодов, оставив фермеру только его прямую работу.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-3">Что мы сделали</h2>
            <ul className="space-y-2">
              {[
                "Зарегистрировали хозяйство в «Честном знаке» как производителя",
                "Разработали простую схему: фермер сообщает объём → мы генерируем коды",
                "Настроили доставку кодов в удобном для наклейки формате",
                "Взяли на себя оформление УПД при каждой отгрузке",
                "Настроили ввод и вывод товаров из оборота",
                "Обеспечили постоянную поддержку по вопросам маркировки",
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
            <p>С первого дня работы — ни одного штрафа и ни одной блокировки. Фермер занимается тем, что умеет. Мы занимаемся маркировкой. Сотрудничество продолжается уже второй год.</p>
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