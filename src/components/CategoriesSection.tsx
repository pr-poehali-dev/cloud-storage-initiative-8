import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"

const categories = [
  {
    icon: "Shirt",
    title: "Одежда и обувь",
    description: "Маркировка для лёгкой промышленности и fashion-ретейла",
    href: "/categories/clothing",
    color: "from-violet-500/10 to-purple-500/5",
  },
  {
    icon: "Droplets",
    title: "Питьевая вода",
    description: "Маркировка воды в бутылках и кулерных ёмкостях",
    href: "/categories/water",
    color: "from-blue-500/10 to-cyan-500/5",
  },
  {
    icon: "Pill",
    title: "Лекарства",
    description: "Подключение к МДЛП и маркировка медикаментов",
    href: "/categories/pharma",
    color: "from-green-500/10 to-emerald-500/5",
  },
  {
    icon: "Milk",
    title: "Молочная продукция",
    description: "Маркировка молока, сыра, творога и кисломолочки",
    href: "/categories/dairy",
    color: "from-yellow-500/10 to-amber-500/5",
  },
  {
    icon: "Cigarette",
    title: "Табак",
    description: "Маркировка сигарет и иных табачных изделий",
    href: "/categories/tobacco",
    color: "from-orange-500/10 to-red-500/5",
  },
  {
    icon: "Perfume",
    title: "Парфюмерия",
    description: "Маркировка духов, туалетной воды и косметики",
    href: "/categories/perfume",
    color: "from-pink-500/10 to-rose-500/5",
  },
  {
    icon: "Sofa",
    title: "Мебель",
    description: "Маркировка мебели для дома и корпоративных закупок",
    href: "/categories/furniture",
    color: "from-amber-500/10 to-yellow-500/5",
  },
  {
    icon: "Tire",
    title: "Шины и покрышки",
    description: "Маркировка шин для оптовых и розничных продаж",
    href: "/categories/tires",
    color: "from-slate-500/10 to-gray-500/5",
  },
]

export function CategoriesSection() {
  return (
    <section id="categories" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Товарные категории
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Категории, которые <span className="text-primary">мы маркируем</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Работаем с большинством товарных групп, подлежащих обязательной маркировке в России.
            Выберите вашу категорию и узнайте условия.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              to={cat.href}
              className="group block rounded-2xl border border-border bg-background hover:border-primary/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div className={`h-24 bg-gradient-to-br ${cat.color} flex items-center px-5`}>
                <Icon
                  name={cat.icon}
                  size={40}
                  className="text-primary/60 group-hover:text-primary group-hover:scale-110 transition-all duration-300"
                  fallback="Tag"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-base leading-tight">{cat.title}</h3>
                  <Icon
                    name="ArrowRight"
                    size={16}
                    className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 shrink-0"
                  />
                </div>
                <p className="text-sm text-muted-foreground leading-snug">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
