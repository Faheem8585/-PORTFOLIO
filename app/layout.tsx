import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Portfolio | Data Science & Research",
  description: "Professional portfolio showcasing research, projects, and expertise in data science, computer vision, and machine learning. PhD application ready.",
  keywords: ["data science", "machine learning", "computer vision", "research", "portfolio"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Portfolio | Data Science & Research",
    description: "Professional portfolio showcasing research and technical expertise",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
