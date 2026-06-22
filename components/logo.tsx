import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      aria-label="The Website Wala — home"
      className="group inline-flex items-baseline gap-[2px] leading-none"
    >
      {/* <span className="text-base md:text-lg tracking-tight text-muted-foreground transition-colors group-hover:text-foreground">
        the
      </span> */}
      <span
        className="text-xl md:text-2xl italic tracking-tight"
        style={{ fontFamily: "var(--font-display), Georgia, serif" }}
      >
        The Website Wala
      </span>
      {/* Blinking caret — a web-dev wink and the logo's continuous motion */}
      {/* <span
        aria-hidden="true"
        className="ml-[3px] inline-block h-[1.05em] w-[3px] translate-y-[2px] bg-foreground"
        style={{ animation: "caret-blink 1.1s steps(1) infinite" }}
      /> */}
    </Link>
  );
}
