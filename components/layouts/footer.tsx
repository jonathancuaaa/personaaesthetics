import Link from "next/link";
import Logo from "@/components/logo";

export function Footer() {
  return (
    <footer className="w-full bg-secondary">
      <div className="container mx-auto py-6 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Persona Aesthetic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
