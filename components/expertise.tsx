const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Fast, responsive, and scalable websites built with modern frameworks—from marketing sites to complex web applications and e-commerce platforms.",
  },
  {
    number: "02",
    title: "Digital Marketing",
    description:
      "Data-driven campaigns across social, search, and paid media that build awareness, drive engagement, and convert audiences into customers.",
  },
  {
    number: "03",
    title: "SEO",
    description:
      "Technical and content-led search optimization that improves rankings, grows organic traffic, and earns lasting visibility for your brand.",
  },
  {
    number: "04",
    title: "Graphic Designing",
    description:
      "Distinctive visual identities, branding, and creative assets that communicate your message with clarity and craft across every touchpoint.",
  },
  {
    number: "05",
    title: "App Development",
    description:
      "Native and cross-platform mobile apps engineered for performance, intuitive experience, and seamless growth from launch to scale.",
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="py-20 md:py-32 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div
            className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start"
            data-animate
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6 ">
              Expertise
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A full-service digital studio—we cover every stage of your online
              presence, each discipline approached with strategy and craft.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-12">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="pb-12 border-b border-border last:border-0"
                  data-animate
                  style={{ ["--reveal-delay" as string]: `${index * 90}ms` }}
                >
                  <div className="flex gap-8">
                    <span className="text-sm text-muted-foreground font-mono mt-1">
                      {service.number}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-2xl font-normal tracking-tight mb-4">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
