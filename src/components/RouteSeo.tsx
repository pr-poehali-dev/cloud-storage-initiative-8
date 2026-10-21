import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const SITE = "https://1cmatrix.poehali.dev"
const NAME = "1C Matrix"

const pages: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Маркировка Честный знак под ключ | 1C Matrix",
    description: "Генерация кодов маркировки DataMatrix, оформление УПД, подключение к Честному знаку и техподдержка. Работаем с производителями, импортёрами и продавцами.",
  },
  "/manufacturers": {
    title: "Маркировка для производителей | Честный знак | 1C Matrix",
    description: "Маркировка товаров для производителей под ключ: регистрация в Честном знаке, генерация кодов, нанесение, УПД и сопровождение.",
  },
  "/importers": {
    title: "Маркировка для импортёров | Честный знак | 1C Matrix",
    description: "Маркировка импортных товаров: ввод в оборот, коды DataMatrix, оформление документов и поддержка при таможенном оформлении.",
  },
  "/sellers": {
    title: "Маркировка для продавцов и магазинов | Честный знак | 1C Matrix",
    description: "Помогаем продавцам и магазинам работать с маркированным товаром: приёмка, вывод из оборота, УПД и настройка оборудования.",
  },
  "/cases/clothing": {
    title: "Кейс: маркировка одежды | 1C Matrix",
    description: "Как мы запустили маркировку одежды по требованиям Честного знака: задача, решение и результат.",
  },
  "/cases/water": {
    title: "Кейс: маркировка воды | 1C Matrix",
    description: "Как мы настроили маркировку упакованной воды по требованиям Честного знака: задача, решение и результат.",
  },
  "/cases/pharma": {
    title: "Кейс: маркировка лекарств | 1C Matrix",
    description: "Как мы выстроили маркировку лекарственных препаратов по требованиям Честного знака: задача, решение и результат.",
  },
  "/cases/dairy": {
    title: "Кейс: маркировка молочной продукции | 1C Matrix",
    description: "Как мы запустили маркировку молочной продукции по требованиям Честного знака: задача, решение и результат.",
  },
  "/categories/clothing": {
    title: "Маркировка одежды и обуви в Честном знаке | 1C Matrix",
    description: "Маркировка одежды, обуви и текстиля: регистрация, коды DataMatrix, УПД и сопровождение. Поможем избежать штрафов.",
  },
  "/categories/water": {
    title: "Маркировка воды и напитков в Честном знаке | 1C Matrix",
    description: "Маркировка упакованной воды и напитков: регистрация, коды DataMatrix, нанесение и документы. Работаем под ключ.",
  },
  "/categories/pharma": {
    title: "Маркировка лекарств и медизделий в Честном знаке | 1C Matrix",
    description: "Маркировка лекарственных препаратов: подключение к системе, коды, вывод из оборота и поддержка.",
  },
  "/categories/dairy": {
    title: "Маркировка молочной продукции в Честном знаке | 1C Matrix",
    description: "Маркировка молока и молочной продукции: регистрация, коды DataMatrix, УПД и сопровождение.",
  },
  "/categories/tobacco": {
    title: "Маркировка табачной продукции в Честном знаке | 1C Matrix",
    description: "Маркировка табака и никотиносодержащей продукции: подключение, коды, учёт и документы.",
  },
  "/categories/perfume": {
    title: "Маркировка парфюмерии в Честном знаке | 1C Matrix",
    description: "Маркировка духов и туалетной воды: регистрация, генерация кодов, нанесение и сопровождение.",
  },
  "/categories/furniture": {
    title: "Маркировка мебели в Честном знаке | 1C Matrix",
    description: "Маркировка мебельной продукции: регистрация, коды DataMatrix, документы и поддержка.",
  },
  "/categories/tires": {
    title: "Маркировка шин и покрышек в Честном знаке | 1C Matrix",
    description: "Маркировка шин и автомобильных покрышек: регистрация, коды DataMatrix, УПД и сопровождение.",
  },
}

function setMeta(selector: string, attr: string, value: string, create: () => HTMLElement) {
  let el = document.head.querySelector(selector) as HTMLElement | null
  if (!el) {
    el = create()
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

const metaByName = (name: string, content: string) =>
  setMeta(`meta[name="${name}"]`, "content", content, () => {
    const m = document.createElement("meta")
    m.setAttribute("name", name)
    return m
  })

const metaByProp = (prop: string, content: string) =>
  setMeta(`meta[property="${prop}"]`, "content", content, () => {
    const m = document.createElement("meta")
    m.setAttribute("property", prop)
    return m
  })

export function RouteSeo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const clean = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname
    const page = pages[clean]
    const url = SITE + (clean === "/" ? "/" : clean)

    if (!page) {
      document.title = `Страница не найдена | ${NAME}`
      metaByName("robots", "noindex, nofollow")
      return
    }

    document.title = page.title
    metaByName("description", page.description)
    metaByName("robots", "index, follow")
    metaByProp("og:title", page.title)
    metaByProp("og:description", page.description)
    metaByProp("og:url", url)
    metaByName("twitter:title", page.title)
    metaByName("twitter:description", page.description)
    setMeta('link[rel="canonical"]', "href", url, () => {
      const l = document.createElement("link")
      l.setAttribute("rel", "canonical")
      return l
    })
  }, [pathname])

  return null
}
