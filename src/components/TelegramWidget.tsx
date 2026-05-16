import { Send } from "lucide-react"

export function TelegramWidget() {
  return (
    <a
      href="https://t.me/Matrix1C"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
      aria-label="Написать в Telegram"
    >
      <Send className="h-5 w-5 shrink-0" />
      <span className="text-sm font-semibold max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap">
        Написать в Telegram
      </span>
    </a>
  )
}
