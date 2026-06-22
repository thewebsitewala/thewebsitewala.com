import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Preloader } from "@/components/preloader";
import { ScrollReveal } from "@/components/scroll-reveal";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "The Website Wala — Digital Marketing Agency",
  description:
    "A full-service digital agency offering Web Development, Digital Marketing, SEO, Graphic Designing, and App Development.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${instrumentSerif.variable} antialiased`}
      >
        <Preloader />
        <ScrollReveal />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
