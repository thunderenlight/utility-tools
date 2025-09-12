// src/components/theme-provider.tsx
import { createContext, useContext, useEffect, useMemo, useState } from "react"

type Theme = "dark" | "light" | "system"
type ThemeProviderProps = { children: React.ReactNode; defaultTheme?: Theme; storageKey?: string }
type ThemeContext = { theme: Theme; setTheme: (t: Theme) => void }

const ThemeCtx = createContext<ThemeContext | undefined>(undefined)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "utility-tools-theme",
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => (localStorage.getItem(storageKey) as Theme) || defaultTheme)

  // Apply class to <html>
  useEffect(() => {
    const root = document.documentElement
    const apply = (t: "light" | "dark") => {
      root.classList.remove("light", "dark")
      root.classList.add(t)
    }
    if (theme === "system") {
      apply(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    } else {
      apply(theme)
    }
  }, [theme])

  // Keep system theme in sync when theme === "system"
  useEffect(() => {
    if (theme !== "system") return
    const mq = window.matchMedia("(prefers-color-scheme: dark)")
    const handler = () => {
      const t = mq.matches ? "dark" : "light"
      document.documentElement.classList.remove("light", "dark")
      document.documentElement.classList.add(t)
    }
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [theme])

  const value = useMemo<ThemeContext>(() => ({
    theme,
    setTheme: (t: Theme) => {
      localStorage.setItem(storageKey, t)
      setThemeState(t)
    },
  }), [theme, storageKey])

  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeCtx)
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider")
  return ctx
}
