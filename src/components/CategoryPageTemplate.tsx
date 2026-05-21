import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Icon from "@/components/ui/icon"
import { ConsultModal } from "@/components/ConsultModal"

export interface CategoryPageProps {
  icon: string
  badge: string
  title: string
  subtitle: string
  heroDesc: string
  stats: { value: string; label: string }[]
  whyLabel: string
  whyItems: string[]
  whatWeDoItems: string[]
  steps: { title: string; desc: string }[]
  utpItems: { icon: string; title: string; desc: string }[]
  faq: { q: string; a: string }[]
  ctaTitle: string
  ctaDesc: string
  categorySource?: string
}

export function CategoryPageTemplate({
  icon, badge, title, subtitle, heroDesc,
  stats, whyLabel, whyItems, whatWeDoItems,
  steps, utpItems, faq, ctaTitle, ctaDesc, categorySource,
}: CategoryPageProps) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <ConsultModal open={modalOpen} onOpenChange={setModalOpen} source={categorySource} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <Link
            to="/#categories"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
          >
            <Icon name="ArrowLeft" size={16} />
            Все категории
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            <Icon name={icon} size={14} fallback="Tag" />
            {badge}
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">{title}</h1>
          <p className="text-xl text-primary font-medium mb-4">{subtitle}</p>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-10">{heroDesc}</p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={() => setModalOpen(true)}>
              <Icon name="Send" size={16} className="mr-2" />
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+74953203385">
                <Icon name="Phone" size={16} className="mr-2" />
                +7 (495) 320-33-85
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-extrabold text-primary-foreground mb-1">{s.value}</div>
                <div className="text-sm text-primary-foreground/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why mandatory */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">{whyLabel}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyItems.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-muted/30">
                <Icon name="AlertTriangle" size={18} className="text-primary mt-0.5 shrink-0" />
                <p className="text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Что мы делаем за вас</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {whatWeDoItems.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon name="Check" size={13} className="text-primary" />
                </div>
                <p className="text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button onClick={() => setModalOpen(true)}>
              Обсудить задачу
            </Button>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10">Как мы работаем</h2>
          <div className="relative">
            <div className="hidden sm:block absolute left-5 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-8">
              {steps.map((step, i) => (
                <div key={step.title} className="flex gap-5">
                  <div className="relative flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center z-10">
                    {i + 1}
                  </div>
                  <div className="pt-1.5">
                    <p className="font-semibold mb-1">{step.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* UTP */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {utpItems.map((u) => (
              <Card key={u.title} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <Icon name={u.icon} size={20} className="text-primary" fallback="Star" />
                  </div>
                  <h3 className="font-bold mb-1">{u.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{u.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10">Частые вопросы</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faq.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">{ctaTitle}</h2>
          <p className="text-primary-foreground/80 mb-8 leading-relaxed">{ctaDesc}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => setModalOpen(true)}>
              <Icon name="Send" size={16} className="mr-2" />
              Оставить заявку
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <a href="tel:+74953203385">
                <Icon name="Phone" size={16} className="mr-2" />
                Позвонить
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}