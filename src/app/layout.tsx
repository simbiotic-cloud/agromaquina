import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { organizationSchema, webSiteSchema } from "@/lib/schema";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AgroMàquina - Maquinaria Agrícola | Venta y Alquiler",
    template: "%s | AgroMàquina",
  },
  description:
    "Tu referente en maquinaria agrícola. Venta y alquiler de tractores, cosechadoras, aperos y más. Maquinaria nueva y de segunda mano. Blog con comparativas y reseñas.",
  metadataBase: new URL("https://agromaquina.cat"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "AgroMàquina",
    title: "AgroMàquina - Maquinaria Agrícola | Venta y Alquiler",
    description:
      "Venta y alquiler de maquinaria agrícola. Tractores, cosechadoras, aperos. Nueva y segunda mano.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AgroMàquina - Maquinaria Agrícola",
    description:
      "Venta y alquiler de maquinaria agrícola. Tractores, cosechadoras, aperos.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <JsonLd data={organizationSchema()} />
        <JsonLd data={webSiteSchema()} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
