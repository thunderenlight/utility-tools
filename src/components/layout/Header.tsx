import { Button } from "@/components/ui/Button";
import { useTheme } from "@/components/theme-provider";
import { Wrench, Moon, Sun } from "lucide-react";

export const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center space-x-2">
          <a href="/" className="flex items-center gap-3">
            <Wrench className="h-7 w-7 text-primary" aria-hidden />
          <h1 className="text-xl font-semibold">Utility Tools</h1>
          </a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <a href="/" className="transition-colors hover:text-foreground/80">Home </a>
          <a href="/password-generator" className="transition-colors hover:text-foreground/80">Password </a>
          <a href="/color-palette" className="transition-colors hover:text-foreground/80">Colors </a>
          <a href="/unit-converter" className="transition-colors hover:text-foreground/80">Convert </a>
        </nav>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        </Button>
      </div>
    </header>
  );
};
