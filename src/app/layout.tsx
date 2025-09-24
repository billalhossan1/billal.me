import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

export const metadata: Metadata = {
  title: "Billal Hossan | Flutter Developer & Software Engineer",
  description:
    "Portfolio of Billal Hossan, a passionate Flutter developer and future software engineer. Showcasing modern mobile and web applications built with cutting-edge technologies.",
  keywords:
    "Billal Hossan, Flutter Developer, Software Engineer, Mobile App Development, Web Development, Portfolio",
  authors: [{ name: "Billal Hossan" }],
  creator: "Billal Hossan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://billalhossan.dev",
    siteName: "Billal Hossan Portfolio",
    title: "Billal Hossan | Flutter Developer & Software Engineer",
    description:
      "Portfolio of Billal Hossan, a passionate Flutter developer and future software engineer.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Billal Hossan | Flutter Developer & Software Engineer",
    description:
      "Portfolio of Billal Hossan, a passionate Flutter developer and future software engineer.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
