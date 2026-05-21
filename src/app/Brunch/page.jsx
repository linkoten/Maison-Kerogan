import BrunchContent from "./BrunchContent";
import { getBrunchBySlug } from "@/lib/getHygraphEvent";

export const revalidate = 3600; // Revalider les données toutes les heures

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

export default async function Page() {
  const brunchData = await getBrunchBySlug("brunch");
  const initialData = brunchData
    ? {
        ...brunchData,
        images: brunchData.images?.map((img) => img.url) ?? [],
        part2Images: brunchData.part2Images?.map((img) => img.url) ?? [],
        part3Images: brunchData.part3Images?.map((img) => img.url) ?? [],
        part4Images: brunchData.part4Images?.map((img) => img.url) ?? [],
      }
    : null;
  return <BrunchContent initialData={initialData} />;
}
