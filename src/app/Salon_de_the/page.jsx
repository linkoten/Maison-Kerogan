import TheContent from "./TheContent";

export const metadata = {
  title:
    "Salon de thé à Quimper - Maison Kerogan | Thés, pâtisseries maison, pause gourmande",
  description:
    "Salon de thé Maison Kerogan à Quimper : sélection de thés, pâtisseries maison, boissons chaudes, ambiance cosy, pause gourmande, goûter, produits locaux. Idéal pour un moment détente en Bretagne.",
  keywords: [
    "salon de thé Quimper",
    "thé Quimper",
    "pâtisseries maison Quimper",
    "pause gourmande Quimper",
    "goûter Quimper",
    "maison kerogan salon de thé",
  ],
  openGraph: {
    title:
      "Salon de thé à Quimper - Maison Kerogan | Thés, pâtisseries maison, pause gourmande",
    description:
      "Salon de thé Maison Kerogan à Quimper : sélection de thés, pâtisseries maison, boissons chaudes, ambiance cosy, pause gourmande, goûter, produits locaux.",
    url: "https://maison-kerogan.fr/Salon_de_the",
    siteName: "Maison Kerogan",
    locale: "fr_FR",
    type: "website",
  },
};

export default function Page() {
  return <TheContent />;
}
