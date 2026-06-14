declare global {
  interface Window {
    ym?: (id: number, action: string, goal: string) => void
  }
}

export function reachGoal(goal: string) {
  if (typeof window !== "undefined" && typeof window.ym === "function") {
    window.ym(109826580, "reachGoal", goal)
  }
}
