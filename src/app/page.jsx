import HomeContent from "./HomeContent";
import {
  getBrunchBySlug,
  getTapasBySlug,
  getSalonDeTheBySlug,
  getLocationEvenementielleBySlug,
  getHistoireDuLieuBySlug,
  getFeaturedEvent,
} from "@/lib/getHygraphEvent";

export const revalidate = 3600;

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

export default async function Page() {
  // Fetch toutes les données en parallèle (une seule fois/heure pour tous les utilisateurs)
  const [brunchData, tapasData, salonData, locationData, histoireData, eventData] =
    await Promise.all([
      getBrunchBySlug("brunch"),
      getTapasBySlug("tapas"),
      getSalonDeTheBySlug("salondethe"),
      getLocationEvenementielleBySlug("locationevenementielle"),
      getHistoireDuLieuBySlug("histoireDuLieu"),
      getFeaturedEvent(),
    ]);

  const homeData = {
    brunch: brunchData
      ? { ...brunchData, images: brunchData.images?.map((img) => img.url) ?? [] }
      : null,
    tapas: tapasData
      ? { ...tapasData, images: tapasData.images?.map((img) => img.url) ?? [] }
      : null,
    salon: salonData
      ? { ...salonData, images: salonData.images?.map((img) => img.url) ?? [] }
      : null,
    location: locationData
      ? { ...locationData, images: locationData.images ?? [] }
      : null,
    histoire: histoireData
      ? {
          ...histoireData,
          images: histoireData.images?.map((img) => img.url) ?? [],
        }
      : null,
    event: eventData,
  };

  return <HomeContent homeData={homeData} />;
}
