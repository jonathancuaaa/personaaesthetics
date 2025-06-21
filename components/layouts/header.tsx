"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Logo from "@/components/logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/trainings", label: "Trainings" },
  { href: "/trainers", label: "Trainers" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="hidden md:flex items-center gap-6">
          {navLinks.slice(0, 1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
           <Link
              href="/trainings"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/trainings" ? "text-primary" : "text-muted-foreground"
              )}
            >
              Trainings
            </Link>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
           <Link
              href="/trainers"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/trainers" ? "text-primary" : "text-muted-foreground"
              )}
            >
              Trainers
            </Link>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="grid gap-4 py-6">
                <Link href="/" className="flex items-center justify-center gap-2 mb-4 px-4">
                  <Logo className="w-48 h-14" />
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "flex items-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent",
                      pathname === link.href
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
