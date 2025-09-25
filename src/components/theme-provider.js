import { jsx as _jsx } from "react/jsx-runtime";
// src/components/theme-provider.tsx
import { createContext, useContext, useEffect, useMemo, useState } from "react";
const ThemeCtx = createContext(undefined);
export function ThemeProvider({ children, defaultTheme = "system", storageKey = "utility-tools-theme", }) {
    const [theme, setThemeState] = useState(() => localStorage.getItem(storageKey) || defaultTheme);
    // Apply class to <html>
    useEffect(() => {
        const root = document.documentElement;
        const apply = (t) => {
            root.classList.remove("light", "dark");
            root.classList.add(t);
        };
        if (theme === "system") {
            apply(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        }
        else {
            apply(theme);
        }
    }, [theme]);
    // Keep system theme in sync when theme === "system"
    useEffect(() => {
        if (theme !== "system")
            return;
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        const handler = () => {
            const t = mq.matches ? "dark" : "light";
            document.documentElement.classList.remove("light", "dark");
            document.documentElement.classList.add(t);
        };
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, [theme]);
    const value = useMemo(() => ({
        theme,
        setTheme: (t) => {
            localStorage.setItem(storageKey, t);
            setThemeState(t);
        },
    }), [theme, storageKey]);
    return _jsx(ThemeCtx.Provider, { value: value, children: children });
}
export function useTheme() {
    const ctx = useContext(ThemeCtx);
    if (!ctx)
        throw new Error("useTheme must be used within ThemeProvider");
    return ctx;
}
