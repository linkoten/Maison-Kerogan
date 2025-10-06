import { z } from "zod";

export const contactSchema = z.object({
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  prenom: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  telephone: z.string().min(10, "Numéro de téléphone invalide"),
  entreprise: z.string().optional(),
  typeDemande: z.enum(
    ["mariage", "anniversaire", "evenement_entreprise", "autre"],
    {
      required_error: "Veuillez sélectionner un type d'événement",
    }
  ),
  nombrePersonnes: z.coerce
    .number()
    .min(1, "Le nombre de personnes doit être supérieur à 0"),
  dateReservation: z.string().min(1, "Veuillez sélectionner une date"),
  informationsSupplementaires: z.string().optional(),
});
