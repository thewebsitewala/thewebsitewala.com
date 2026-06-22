import Link from "next/link";
import { Logo } from "@/components/logo";
import { TypingServices } from "@/components/typing-services";

const navLinks = [
  { label: "Work", href: "/#portfolio" },
  { label: "Services", href: "/#expertise" },
  { label: "Why Us", href: "/#why-us" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div
            className="flex flex-col gap-1.5"
            data-reveal
            style={{ ["--reveal-delay" as string]: "450ms" }}
          >
            <Logo />
            <TypingServices />
          </div>
          <div
            className="flex items-center gap-10"
            data-reveal
            style={{ ["--reveal-delay" as string]: "560ms" }}
          >
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm uppercase tracking-wider hover:text-muted-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="text-sm uppercase tracking-wider hover:text-muted-foreground transition-colors"
              >
                Contact
              </Link>
            </nav>
            <Link
              href="/contact"
              className="bg-primary text-primary-foreground text-sm uppercase tracking-wider px-5 py-2.5 hover:bg-accent transition-colors"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
