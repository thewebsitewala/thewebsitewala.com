import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  Facebook,
  MessageCircle,
} from "lucide-react";

const services = [
  { label: "Web Development", href: "/#expertise" },
  { label: "Digital Marketing", href: "/#expertise" },
  { label: "SEO", href: "/#expertise" },
  { label: "Graphic Designing", href: "/#expertise" },
  { label: "App Development", href: "/#expertise" },
];

const explore = [
  { label: "Work", href: "/#portfolio" },
  { label: "Services", href: "/#expertise" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "LinkedIn", href: "#", Icon: Linkedin },
  { label: "Facebook", href: "#", Icon: Facebook },
  {
    label: "WhatsApp",
    href: "https://wa.me/917666401860",
    Icon: MessageCircle,
  },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[oklch(0.12_0_0)] text-white"
    >
      <div className="container mx-auto px-6 lg:px-12 pt-20 md:pt-28">
        {/* Lead: invitation + primary email */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 pb-16 md:pb-20 border-b border-white/10">
          <div className="lg:col-span-6" data-animate>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-6">
              Let's work together
            </p>
            <a
              href="mailto:info.thewebsitewala@gmail.com"
              className="group inline-flex items-start gap-3 text-xl md:text-4xl font-light tracking-tight leading-tight hover:text-white/70 transition-colors"
            >
              info.thewebsitewala@gmail.com
              <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 mt-1 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <p className="text-white/50 leading-relaxed mt-8 max-w-md">
              From websites and apps to marketing that performs—tell us what
              you're building and we'll help it grow.
            </p>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-10">
            <nav data-animate style={{ ["--reveal-delay" as string]: "80ms" }}>
              <h3 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-6">
                Services
              </h3>
              <ul className="space-y-3">
                {services.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-white/80 hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav data-animate style={{ ["--reveal-delay" as string]: "160ms" }}>
              <h3 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-6">
                Explore
              </h3>
              <ul className="space-y-3">
                {explore.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-white/80 hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav data-animate style={{ ["--reveal-delay" as string]: "240ms" }}>
              <h3 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-6">
                Connect
              </h3>
              <ul className="space-y-3">
                {socials.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2.5 text-sm text-white/80 hover:text-white transition-colors"
                    >
                      <Icon className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Offices */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          <div data-animate>
            <h3 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-5">
              London
            </h3>
            <address className="not-italic text-sm leading-relaxed text-white/80">
              4a Seven Ways Parade
              <br />
              Woodford Avenue
              <br />
              IG2 6XH, United Kingdom
            </address>
            <a
              href="tel:+447349584838"
              className="inline-block text-sm mt-4 text-white/80 hover:text-white transition-colors"
            >
              07349 584838
            </a>
          </div>

          <div data-animate style={{ ["--reveal-delay" as string]: "100ms" }}>
            <h3 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-5">
              Mumbai
            </h3>
            <address className="not-italic text-sm leading-relaxed text-white/80">
              Building No. 3A, Ss Amrutwar Marg
              <br />
              Maya Nagar, Siddharth Nagar, Worli
              <br />
              Mumbai, Maharashtra 400018
            </address>
            <a
              href="tel:+917666401860"
              className="inline-block text-sm mt-4 text-white/80 hover:text-white transition-colors"
            >
              +91 76664 01860
            </a>
          </div>

          <div
            className="lg:col-span-2 lg:flex lg:items-end lg:justify-end"
            data-animate
            style={{ ["--reveal-delay" as string]: "200ms" }}
          >
            <a
              href="#"
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors"
            >
              Back to top
              <ArrowUpRight className="w-4 h-4 -rotate-90 transition-transform duration-300 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-12">
          <p className="text-xs text-white/40">
            © 2025 The Website Wala. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs uppercase tracking-wider text-white/40 hover:text-white transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-xs uppercase tracking-wider text-white/40 hover:text-white transition-colors"
            >
              Legal
            </a>
          </div>
        </div>
      </div>

      {/* Signature wordmark — fades into the floor */}
      <div className="relative select-none overflow-hidden" aria-hidden="true">
        <h2 className="whitespace-nowrap text-center font-medium leading-[0.8] text-[9.5vw] tracking-[-0.04em] translate-y-[0.1em] bg-gradient-to-b from-white/90 via-white/30 to-transparent bg-clip-text text-transparent">
          THE WEBSITE WALA
        </h2>
      </div>
    </footer>
  );
}
