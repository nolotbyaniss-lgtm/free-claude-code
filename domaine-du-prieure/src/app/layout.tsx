import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: {
    default: "Domaine du Prieuré — Gîtes de charme près de Carcassonne",
    template: "%s · Domaine du Prieuré",
  },
  description:
    "Deux gîtes d'exception dans un ancien couvent (1877) et un presbytère (1460), à 10 minutes de la Cité de Carcassonne. Piscine, jardin et démarche éco-responsable.",
  keywords: [
    "gîte Carcassonne",
    "location vacances Aude",
    "Domaine du Prieuré",
    "Le Couvent",
    "Le Presbytère",
    "gîte de charme Occitanie",
  ],
  openGraph: {
    title: "Domaine du Prieuré — Gîtes de charme près de Carcassonne",
    description:
      "Deux gîtes de caractère au cœur de l'Aude, à 10 minutes de la Cité de Carcassonne.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
