const reasons = [
  {
    number: "01",
    title: "Full-Service Under One Roof",
    description: "Web, apps, design, SEO, and marketing handled by one aligned team—no juggling multiple vendors."
  },
  {
    number: "02",
    title: "Results-Driven Approach",
    description: "Every decision is measured against real business outcomes: traffic, leads, conversions, and growth."
  },
  {
    number: "03",
    title: "Transparent Communication",
    description: "Clear timelines, honest updates, and direct access to the people actually doing the work."
  },
  {
    number: "04",
    title: "On-Time Delivery",
    description: "Structured processes and disciplined project management keep your launch on schedule and on budget."
  },
  {
    number: "05",
    title: "Global Presence",
    description: "Offices in London and Mumbai let us serve clients across time zones with local understanding."
  },
  {
    number: "06",
    title: "Dedicated Support",
    description: "We don't disappear after launch—ongoing support keeps your product and campaigns performing."
  }
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 md:py-32 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16 max-w-2xl" data-animate>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground text-lg">
            We combine strategy, design, and engineering to deliver work that doesn't just look good—it performs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="pt-8 border-t border-border"
              data-animate
              style={{ ["--reveal-delay" as string]: `${(index % 3) * 100}ms` }}
            >
              <span className="text-sm text-muted-foreground font-mono">
                {reason.number}
              </span>
              <h3 className="text-xl font-normal tracking-tight mt-4 mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
