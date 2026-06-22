import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We're a full-service digital agency covering Web Development, Digital Marketing, SEO, Graphic Designing, and App Development—so everything your brand needs online is handled by one team.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A marketing website usually takes 3–5 weeks, while larger web apps or mobile apps run longer depending on scope. We'll share a clear timeline with milestones before we start.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Every project is scoped to your goals, so pricing varies. Once we understand what you need, we provide a transparent, fixed quote with no hidden costs. Reach out for a free estimate.",
  },
  {
    question: "Do you work with clients outside India and the UK?",
    answer:
      "Yes. With offices in London and Mumbai, we work with clients across time zones and have delivered projects for brands in multiple countries.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Absolutely. We offer maintenance, updates, and growth support after launch to keep your website, app, and campaigns performing well over time.",
  },
  {
    question: "Can you handle both design and marketing?",
    answer:
      "Yes—that's our advantage. We design and build, then drive traffic through SEO and digital marketing, so your launch is set up to convert from day one.",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="py-20 md:py-32 border-t border-border bg-background"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4" data-animate>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
              FAQ
            </p>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
              Questions, answered
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Everything you need to know before we start. Still curious?{" "}
              <a
                href="#contact"
                className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
              >
                Get in touch
              </a>
              .
            </p>
          </div>

          <div
            className="lg:col-span-8"
            data-animate
            style={{ ["--reveal-delay" as string]: "120ms" }}
          >
            <div className="border-t border-border">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group border-b border-border"
                >
                  <summary className="flex items-center justify-between gap-6 py-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <h3 className="text-lg md:text-xl font-normal tracking-tight">
                      {faq.question}
                    </h3>
                    <Plus className="w-5 h-5 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-45" />
                  </summary>
                  <p className="text-muted-foreground leading-relaxed pb-6 max-w-2xl">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
