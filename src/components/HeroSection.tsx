import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import Icon from "@/components/ui/icon"
import { reachGoal } from "@/lib/ym"

export function HeroSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 pt-2 pb-8">
      <div className="container mx-auto max-w-7xl relative overflow-hidden rounded-[2rem] bg-card shadow-sm px-6 sm:px-12 py-12 lg:py-16">
        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-primary/15 blur-3xl pointer-events-none" />
        <div className="relative grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-bold">
                <Icon name="BadgeCheck" size={16} />
                Оператор маркировки «Честный знак»
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-foreground text-xs sm:text-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Отвечаем в течение часа
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl uppercase leading-[1.05] mb-6 text-balance">
              Маркировка <span className="text-primary">без стресса</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Генерируем коды маркировки, оформляем УПД и берём на себя всю работу с «Честным знаком» — вы занимаетесь бизнесом.
            </p>

            <a
              href="tel:+74953203385"
              onClick={() => reachGoal("phone_click")}
              className="inline-flex items-center gap-3 mb-8 text-2xl sm:text-3xl font-extrabold hover:text-primary transition-colors"
            >
              <span className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground">
                <Phone className="h-5 w-5" />
              </span>
              +7 (495) 320-33-85
            </a>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="rounded-full px-8 font-bold group shadow-lg shadow-primary/30" asChild>
                <a href="#contact" onClick={() => reachGoal("hero_cta_consultation")}>
                  Получить консультацию
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 font-bold bg-background" asChild>
                <a href="#pricing" onClick={() => reachGoal("hero_cta_pricing")}>Смотреть тарифы</a>
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-primary">200+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">клиентов</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-primary">1 млн+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">кодов выпущено</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-primary">100%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">товарных групп</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-[2rem] bg-muted overflow-hidden aspect-square max-w-md mx-auto lg:max-w-none">
              <img
                src="https://cdn.poehali.dev/projects/a5fdd0d1-9566-4dd5-91f1-212c6efddd90/files/17d96be8-f95c-442f-af80-69ead6c9d273.jpg"
                alt="Маркировка товаров"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-2 sm:-left-4 flex items-center gap-3 rounded-2xl bg-card px-4 py-3 shadow-xl animate-float">
              <span className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/15 text-primary">
                <Icon name="ShieldCheck" size={20} />
              </span>
              <div>
                <div className="text-sm font-extrabold leading-tight">Без штрафов</div>
                <div className="text-xs text-muted-foreground">проверим вашу маркировку</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
