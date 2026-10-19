import { Send, MessageCircle } from "lucide-react"
import { reachGoal } from "@/lib/ym"

export const TELEGRAM_URL = "https://t.me/Matrix1C"
export const MAX_URL = "https://max.ru/u/f9LHodD0cOKPnAF1mqs2hoYfpye1TEtFoGWnuo4byWDQwcvscRys-LJCTYQ"

interface MessengerLinksProps {
  place: string
  label?: string
}

export function MessengerLinks({ place, label = "Или напишите нам:" }: MessengerLinksProps) {
  const cls =
    "inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-muted px-4 py-2.5 text-sm font-bold hover:bg-primary hover:text-primary-foreground transition-colors"
  return (
    <div className="space-y-2">
      <p className="text-sm text-muted-foreground text-center">{label}</p>
      <div className="flex gap-3">
        <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" onClick={() => reachGoal(`${place}_telegram_click`)} className={cls}>
          <Send className="h-4 w-4" />
          Telegram
        </a>
        <a href={MAX_URL} target="_blank" rel="noopener noreferrer" onClick={() => reachGoal(`${place}_max_click`)} className={cls}>
          <MessageCircle className="h-4 w-4" />
          MAX
        </a>
      </div>
    </div>
  )
}
