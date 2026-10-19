import { Send, MessageCircle } from "lucide-react"
import { reachGoal } from "@/lib/ym"

const MAX_URL = "https://max.ru/u/f9LHodD0cOKPnAF1mqs2hoYfpye1TEtFoGWnuo4byWDQwcvscRys-LJCTYQ"

export function TelegramWidget() {
  const cls =
    "flex items-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
  const label =
    "text-sm font-semibold max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap"
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <a
        href={MAX_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => reachGoal("max_widget_click")}
        className={cls}
        aria-label="Написать в MAX"
      >
        <MessageCircle className="h-5 w-5 shrink-0" />
        <span className={label}>Написать в MAX</span>
      </a>
      <a
        href="https://t.me/Matrix1C"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => reachGoal("telegram_widget_click")}
        className={cls}
        aria-label="Написать в Telegram"
      >
        <Send className="h-5 w-5 shrink-0" />
        <span className={label}>Написать в Telegram</span>
      </a>
    </div>
  )
}
