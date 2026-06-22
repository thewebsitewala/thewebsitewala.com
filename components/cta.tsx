import { Mail, MessageCircle } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 md:py-32 border-t border-border bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <h2
            className="text-3xl md:text-6xl font-light tracking-tight text-balance mb-6"
            data-animate
          >
            Let's build something that grows your business
          </h2>
          <p
            className="text-lg md:text-xl text-primary-foreground/70 leading-relaxed mb-10 max-w-xl"
            data-animate
            style={{ ["--reveal-delay" as string]: "120ms" }}
          >
            Tell us about your project and we'll get back to you within one
            business day.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4"
            data-animate
            style={{ ["--reveal-delay" as string]: "240ms" }}
          >
            <a
              href="https://wa.me/917666401860?text=Hi%20The%20Website%20Wala%2C%20I%27d%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-primary-foreground text-primary text-sm uppercase tracking-wider px-8 py-4 hover:bg-primary-foreground/90 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
            <a
              href="mailto:info.thewebsitewala@gmail.com?subject=Project%20Inquiry"
              className="inline-flex items-center justify-center gap-3 border border-primary-foreground/30 text-primary-foreground text-sm uppercase tracking-wider px-8 py-4 hover:bg-primary-foreground/10 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
