import Image from "next/image";
import Link from "next/link";
import { RotatingWord } from "@/components/rotating-word";

export function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-7">
            <h1
              className="text-6xl md:text-7xl lg:text-[84px] font-light leading-[1.05] tracking-tight text-balance mb-8"
              data-reveal
              style={{ ["--reveal-delay" as string]: "650ms" }}
            >
              We make brands impossible to <RotatingWord />
            </h1>
            <p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
              data-reveal
              style={{ ["--reveal-delay" as string]: "760ms" }}
            >
              We build websites, apps, and marketing campaigns that turn
              attention into measurable results blending strategy, design, and
              technology to move your business forward.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 mt-10"
              data-reveal
              style={{ ["--reveal-delay" as string]: "870ms" }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground text-sm uppercase tracking-wider px-8 py-4 hover:bg-accent transition-colors"
              >
                Start a Project
              </Link>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center border border-border text-sm uppercase tracking-wider px-8 py-4 hover:bg-muted transition-colors"
              >
                View Our Work
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div
              className="relative aspect-[4/5] bg-muted overflow-hidden"
              data-reveal
              style={{ ["--reveal-delay" as string]: "700ms" }}
            >
              <Image
                src="/hero-image-02.webp"
                alt="Digital marketing agency workspace"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
