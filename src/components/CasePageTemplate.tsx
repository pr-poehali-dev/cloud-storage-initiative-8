import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"
import { ConsultModal } from "@/components/ConsultModal"

export interface CasePageProps {
  icon: string
  badge: string
  category: string
  title: string
  lead: string
  clientDesc: string
  stats: { value: string; label: string }[]
  challenge: string
  challengePoints: string[]
  solution: string
  solutionPoints: string[]
  result: string
  resultPoints: string[]
  testimonial?: { text: string; author: string; role: string }
  relatedLinks?: { label: string; href: string }[]
  caseSource: string
}

export function CasePageTemplate({
  icon, badge, category, title, lead, clientDesc,
  stats, challenge, challengePoints, solution, solutionPoints,
  result, resultPoints, testimonial, relatedLinks, caseSource,
}: CasePageProps) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <ConsultModal open={modalOpen} onOpenChange={setModalOpen} source={caseSource} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <Link
            to="/#portfolio"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
          >
            <Icon name="ArrowLeft" size={16} />
            Все кейсы
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              <Icon name={icon} size={14} fallback="Tag" />
              {badge}
            </div>
            <span className="text-sm text-muted-foreground">{category}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-balance leading-tight">{title}</h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">{lead}</p>

          <Button size="lg" onClick={() => setModalOpen(true)}>
            <Icon name="Send" size={16} className="mr-2" />
            Хочу так же — получить консультацию
          </Button>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-primary-foreground mb-1">{s.value}</div>
                <div className="text-sm text-primary-foreground/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-4">О клиенте</h2>
          <p className="text-base leading-relaxed text-foreground/90">{clientDesc}</p>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
              <Icon name="AlertTriangle" size={16} className="text-destructive" />
            </div>
            <h2 className="text-2xl font-bold">Задача и проблемы</h2>
          </div>
          <p className="text-base leading-relaxed text-foreground/90 mb-6">{challenge}</p>
          <ul className="space-y-3">
            {challengePoints.map((p) => (
              <li key={p} className="flex items-start gap-3 p-3 rounded-xl border border-destructive/20 bg-destructive/5">
                <Icon name="X" size={16} className="text-destructive mt-0.5 shrink-0" />
                <span className="text-sm leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Solution */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon name="Wrench" size={16} className="text-primary" />
            </div>
            <h2 className="text-2xl font-bold">Что мы сделали</h2>
          </div>
          <p className="text-base leading-relaxed text-foreground/90 mb-6">{solution}</p>
          <div className="space-y-3">
            {solutionPoints.map((p, i) => (
              <div key={p} className="flex items-start gap-4 p-4 rounded-xl border border-border bg-muted/20">
                <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </div>
                <span className="text-sm leading-relaxed pt-0.5">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Result */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
              <Icon name="TrendingUp" size={16} className="text-green-500" />
            </div>
            <h2 className="text-2xl font-bold">Результат</h2>
          </div>
          <p className="text-base leading-relaxed text-foreground/90 mb-6">{result}</p>
          <ul className="space-y-2">
            {resultPoints.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon name="Check" size={13} className="text-green-500" />
                </div>
                <span className="text-sm leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonial */}
      {testimonial && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <Card className="border-none shadow-xl bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-8">
                <Icon name="Quote" size={32} className="text-primary/30 mb-4" />
                <p className="text-lg font-medium leading-relaxed italic mb-6">«{testimonial.text}»</p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
            Хотите такой же результат?
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Оставьте заявку — разберёмся с маркировкой вместо вас. Первая консультация бесплатно.
          </p>
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

      {/* Related */}
      {relatedLinks && relatedLinks.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-xl font-bold mb-6">Другие кейсы</h2>
            <div className="flex flex-wrap gap-3">
              {relatedLinks.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors text-sm font-medium"
                >
                  {l.label}
                  <Icon name="ArrowRight" size={14} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
