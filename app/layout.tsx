import type { Metadata } from "next";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-sans/700.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Muhammad Faheem Arshad | Computer Vision and Machine Learning",
  description:
    "Computer vision and machine learning engineer in Berlin. Scientific and medical image analysis, from electrode surfaces at Fraunhofer IFAM to EEG at BTU Cottbus-Senftenberg.",
  keywords: [
    "computer vision",
    "machine learning",
    "data science",
    "image segmentation",
    "medical imaging",
    "Berlin",
    "Muhammad Faheem Arshad",
  ],
  authors: [{ name: "Muhammad Faheem Arshad" }],
  openGraph: {
    title: "Muhammad Faheem Arshad | Computer Vision and Machine Learning",
    description:
      "Computer vision and machine learning engineer in Berlin. Scientific and medical image analysis.",
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
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
