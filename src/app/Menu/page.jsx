import MenuContent from "./MenuContent";

export const metadata = {
  title:
    "Menu Maison Kerogan - Restaurant à Quimper | Carte, plats, boissons, spécialités maison",
  description:
    "Découvrez le menu de Maison Kerogan à Quimper : plats maison, produits locaux, spécialités bretonnes, carte des boissons, formules brunch, tapas, salon de thé. Cuisine créative et ambiance conviviale.",
  keywords: [
    "menu restaurant Quimper",
    "carte Maison Kerogan",
    "plats maison Quimper",
    "spécialités bretonnes",
    "boissons Quimper",
    "brunch Quimper",
    "tapas Quimper",
    "salon de thé Quimper",
  ],
  openGraph: {
    title:
      "Menu Maison Kerogan - Restaurant à Quimper | Carte, plats, boissons, spécialités maison",
    description:
      "Découvrez le menu de Maison Kerogan à Quimper : plats maison, produits locaux, spécialités bretonnes, carte des boissons, formules brunch, tapas, salon de thé.",
    url: "https://maison-kerogan.fr/Menu",
    siteName: "Maison Kerogan",
    locale: "fr_FR",
    type: "website",
  },
};

export default function Page() {
  return <MenuContent />;
}
