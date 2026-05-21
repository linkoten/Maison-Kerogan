import LocationContent from "./LocationContent";
import { getLocationEvenementielleBySlug } from "@/lib/getHygraphEvent";

export const revalidate = 3600;

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

export default async function Page() {
  const locationData = await getLocationEvenementielleBySlug(
    "locationevenementielle",
  );
  const initialData = locationData
    ? {
        ...locationData,
        images: locationData.images ?? [], // objets complets (mimeType pour vidéos)
        part2Images: locationData.part2Images?.map((img) => img.url) ?? [],
        part3Images: locationData.part3Images?.map((img) => img.url) ?? [],
      }
    : null;
  return <LocationContent initialData={initialData} />;
}
