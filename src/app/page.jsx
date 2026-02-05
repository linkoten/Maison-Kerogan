import HomeContent from "./HomeContent";

export const metadata = {
  title:
    "Maison Kerogan - Restaurant à Quimper | Brunch, Tapas, Salon de thé, Privatisation",
  description:
    "Maison Kerogan, restaurant à Quimper (Bretagne) : brunch gourmand, tapas maison, salon de thé, privatisation d'événements, produits locaux, cuisine créative, ambiance conviviale.",
  keywords: [
    "restaurant Quimper",
    "brunch Quimper",
    "tapas Quimper",
    "salon de thé Quimper",
    "privatisation restaurant Quimper",
    "événement Quimper",
    "cuisine maison",
    "produits locaux Bretagne",
    "Maison Kerogan",
    "meilleur restaurant Quimper",
  ],
  openGraph: {
    title:
      "Maison Kerogan - Restaurant à Quimper | Brunch, Tapas, Salon de thé, Privatisation",
    description:
      "Maison Kerogan, restaurant à Quimper (Bretagne) : brunch gourmand, tapas maison, salon de thé, privatisation d'événements, produits locaux, cuisine créative, ambiance conviviale.",
    url: "https://maison-kerogan.fr/",
    siteName: "Maison Kerogan",
    locale: "fr_FR",
    type: "website",
  },
};

export default function Page() {
  return <HomeContent />;
}
