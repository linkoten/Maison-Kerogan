import ContactContent from "./ContactContent";

export const metadata = {
  title:
    "Contact Maison Kerogan - Restaurant à Quimper | Réservation, informations, accès",
  description:
    "Contactez Maison Kerogan à Quimper : réservation de table, demande d'information, accès, horaires, privatisation, brunch, tapas, salon de thé. Réponse rapide par mail ou téléphone.",
  keywords: [
    "contact restaurant Quimper",
    "réservation Maison Kerogan",
    "informations restaurant Quimper",
    "accès Maison Kerogan",
    "horaires restaurant Quimper",
    "privatisation Quimper",
    "brunch Quimper",
    "tapas Quimper",
    "salon de thé Quimper",
  ],
  openGraph: {
    title:
      "Contact Maison Kerogan - Restaurant à Quimper | Réservation, informations, accès",
    description:
      "Contactez Maison Kerogan à Quimper : réservation de table, demande d'information, accès, horaires, privatisation, brunch, tapas, salon de thé.",
    url: "https://maison-kerogan.fr/Contact",
    siteName: "Maison Kerogan",
    locale: "fr_FR",
    type: "website",
  },
};

export default function Page() {
  return <ContactContent />;
}
