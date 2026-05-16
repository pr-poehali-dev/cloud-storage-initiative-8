import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Сколько стоит маркировка товара?",
    answer:
      "Стоимость зависит от объёма и типа задачи. Один код DataMatrix у оператора стоит 50–60 копеек. Наши услуги по оформлению и сопровождению — по тарифам в разделе «Тарифы». Точную цену для вашей ситуации рассчитаем на бесплатной консультации.",
  },
  {
    question: "Нужна ли электронная подпись (ЭЦП) для работы с «Честным знаком»?",
    answer:
      "Да, для регистрации в системе и подписания документов нужна квалифицированная электронная подпись (КЭП). Если у вас её нет — поможем оформить. Обычно это занимает 1–2 рабочих дня.",
  },
  {
    question: "Как долго занимает подключение к «Честному знаку»?",
    answer:
      "Регистрацию и настройку базовых процессов мы проводим за 5–10 рабочих дней. Если уже есть ЭЦП и учётная система — ещё быстрее. Срочные задачи решаем в приоритетном порядке.",
  },
  {
    question: "Какие товары подлежат обязательной маркировке?",
    answer:
      "На сегодня это: одежда, обувь, молочная продукция, вода, пиво, табак, лекарства, шины, духи, фотоаппараты, постельное бельё, кресла-коляски и ряд других категорий. Список регулярно расширяется. Уточните у нас — проверим ваш конкретный товар бесплатно.",
  },
  {
    question: "Что будет, если продавать товар без маркировки?",
    answer:
      "Штрафы для ИП — от 5 000 до 10 000 ₽, для юрлиц — от 50 000 до 300 000 ₽, плюс конфискация товара. При повторных нарушениях — уголовная ответственность. Маркетплейсы также блокируют карточки и аккаунты.",
  },
  {
    question: "Вы работаете с моей системой учёта (1С, МойСклад и др.)?",
    answer:
      "Да, интегрируемся с 1С (все основные конфигурации), МойСклад, Контур, СБИС и другими популярными системами. Если у вас нестандартное решение — обсудим на консультации.",
  },
  {
    question: "Можно ли маркировать товар уже после того, как он ввезён в Россию?",
    answer:
      "Да, маркировку можно провести на складе после ввоза. Но для импортёров часто выгоднее промаркировать до растаможки — это ускоряет таможенное оформление. Подберём оптимальную схему под вашу ситуацию.",
  },
  {
    question: "Вы берёте на себя оформление документов?",
    answer:
      "Да. Мы оформляем УПД (универсальные передаточные документы), уведомления о вводе в оборот, документы на вывод из оборота. Вам не нужно разбираться в форматах и требованиях — всё сделаем за вас.",
  },
]

export function FaqSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-14">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-balance">
            Частые <span className="text-primary">вопросы</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Отвечаем на то, что спрашивают чаще всего перед началом работы
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-border rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
