import TapasContent from "./TapasContent";

export const metadata = {
  title:
    "Tapas à Quimper - Maison Kerogan | Afterwork, planches, ambiance conviviale",
  description:
    "Découvrez les tapas de Maison Kerogan à Quimper : planches à partager, produits locaux, afterwork, ambiance chaleureuse, spécialités maison. Réservez votre soirée tapas en Bretagne.",
  keywords: [
    "tapas Quimper",
    "afterwork Quimper",
    "planches à partager Quimper",
    "restaurant tapas Quimper",
    "soirée tapas Quimper",
    "Maison Kerogan tapas",
  ],
  openGraph: {
    title:
      "Tapas à Quimper - Maison Kerogan | Afterwork, planches, ambiance conviviale",
    description:
      "Découvrez les tapas de Maison Kerogan à Quimper : planches à partager, produits locaux, afterwork, ambiance chaleureuse, spécialités maison.",
    url: "https://maison-kerogan.fr/Tapas",
    siteName: "Maison Kerogan",
    locale: "fr_FR",
    type: "website",
  },
};

export default function Page() {
  return <TapasContent />;
}
