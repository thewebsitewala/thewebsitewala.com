import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Portfolio } from "@/components/portfolio";
import { Expertise } from "@/components/expertise";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Team } from "@/components/team";
import { CTA } from "@/components/cta";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Portfolio />
      <Expertise />
      <WhyChooseUs />
      {/* <Team /> */}
      <CTA />
      <FAQ />
      <Footer />
    </main>
  );
}
