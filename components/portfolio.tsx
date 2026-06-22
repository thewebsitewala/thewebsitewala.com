import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "MRM Decors",
    location: "Interior Design Studio · New Delhi",
    category: "Web Development",
    description:
      "A clean, modern website for a Delhi-based interior design studio showcasing their residential projects, services, and product range with a clear path to enquire.",
    url: "https://mrmdecors.com/",
    image: "/portfolio01.webp",
  },
  {
    title: "Honest Haven",
    location: "Interiors & Design Studio",
    category: "Web Development",
    description:
      "A polished website for an interior, architecture, and 3D design firm built to tell their design story and showcase a portfolio backed by 140+ five-star reviews.",
    url: "https://honesthaven.in/",
    image: "/portfolio02.webp",
  },
  // {
  //   title: "Summit Rankings",
  //   location: "Organic Growth, 2023",
  //   category: "SEO",
  //   image: "/seo-search-ranking-growth-chart-minimalist-black.jpg",
  // },
  // {
  //   title: "Form Identity",
  //   location: "Brand System, 2024",
  //   category: "Graphic Design",
  //   image: "/minimalist-brand-identity-design-black-and-white.jpg"
  // },
  // {
  //   title: "Tempo App",
  //   location: "iOS & Android, 2023",
  //   category: "App Development",
  //   image: "/mobile-app-ui-design-minimalist-black-and-white.jpg"
  // },
  // {
  //   title: "Atlas Studio",
  //   location: "Corporate Site, 2023",
  //   category: "Web Development",
  //   image: "/modern-corporate-website-design-minimalist-monochrome.jpg"
  // }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-32 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16" data-animate>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            Selected Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Websites we've designed and built for growing brands crafted to look
            sharp and convert visitors into enquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          {projects.map((project, index) => {
            const Wrapper = project.url ? "a" : "article";
            const linkProps = project.url
              ? {
                  href: project.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};
            return (
              <Wrapper
                key={index}
                {...linkProps}
                className="group block"
                data-animate
                style={{ ["--reveal-delay" as string]: `${index * 100}ms` }}
              >
                <div className="relative aspect-[3/2] bg-muted mb-6 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-2xl font-normal tracking-tight flex items-center gap-2">
                      {project.title}
                      {project.url && (
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      )}
                    </h3>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground shrink-0">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground">
                    {project.location}
                  </p>
                  {project.description && (
                    <p className="text-muted-foreground leading-relaxed max-w-md">
                      {project.description}
                    </p>
                  )}
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
