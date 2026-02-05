import LocationContent from "./LocationContent";

export const metadata = {
  title:
    "Privatisation restaurant à Quimper - Maison Kerogan | Événements, séminaires, groupes",
  description:
    "Privatisez Maison Kerogan à Quimper pour vos événements : anniversaires, mariages, séminaires, repas de groupe, soirées privées. Espace convivial, cuisine maison, service sur-mesure en Bretagne.",
  keywords: [
    "privatisation restaurant Quimper",
    "événement Quimper",
    "séminaire Quimper",
    "repas de groupe Quimper",
    "restaurant privatisable Quimper",
    "maison kerogan privatisation",
  ],
  openGraph: {
    title:
      "Privatisation restaurant à Quimper - Maison Kerogan | Événements, séminaires, groupes",
    description:
      "Privatisez Maison Kerogan à Quimper pour vos événements : anniversaires, mariages, séminaires, repas de groupe, soirées privées. Espace convivial, cuisine maison, service sur-mesure en Bretagne.",
    url: "https://maison-kerogan.fr/Location",
    siteName: "Maison Kerogan",
    locale: "fr_FR",
    type: "website",
  },
};

export default function Page() {
  return <LocationContent />;
}
