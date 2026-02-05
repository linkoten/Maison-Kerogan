import BrunchContent from "./BrunchContent";

export const metadata = {
  title:
    "Brunch à Quimper - Maison Kerogan | Brunch gourmand, produits frais, ambiance conviviale",
  description:
    "Brunch Maison Kerogan à Quimper : formules brunch gourmandes, produits frais, boissons chaudes, jus maison, options végétariennes, ambiance chaleureuse. Réservez votre brunch du week-end en Bretagne !",
  keywords: [
    "brunch Quimper",
    "brunch maison kerogan",
    "brunch Bretagne",
    "brunch gourmand Quimper",
    "restaurant brunch Quimper",
    "meilleur brunch Quimper",
  ],
  openGraph: {
    title:
      "Brunch à Quimper - Maison Kerogan | Brunch gourmand, produits frais, ambiance conviviale",
    description:
      "Brunch Maison Kerogan à Quimper : formules brunch gourmandes, produits frais, boissons chaudes, jus maison, options végétariennes, ambiance chaleureuse.",
    url: "https://maison-kerogan.fr/Brunch",
    siteName: "Maison Kerogan",
    locale: "fr_FR",
    type: "website",
  },
};

export default function Page() {
  return <BrunchContent />;
}
