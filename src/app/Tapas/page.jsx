import TapasContent from "./TapasContent";
import { getTapasBySlug } from "@/lib/getHygraphEvent";

export const revalidate = 3600;

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

export default async function Page() {
  const tapasData = await getTapasBySlug("tapas");
  const initialData = tapasData
    ? {
        ...tapasData,
        images: tapasData.images?.map((img) => img.url) ?? [],
        part2Images: tapasData.part2Images?.map((img) => img.url) ?? [],
        part3Images: tapasData.part3Images?.map((img) => img.url) ?? [],
        photosGaleries: tapasData.photosGaleries?.map((img) => img.url) ?? [],
        menu: tapasData.menu?.map((img) => img.url) ?? [],
      }
    : null;
  return <TapasContent initialData={initialData} />;
}
