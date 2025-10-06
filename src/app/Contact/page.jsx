"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/lib/validatedSchemas";
import { Merriweather } from "next/font/google";
import A_propos from "@/components/Apropos";
import emailjs from "@emailjs/browser";
import {
  User,
  Mail,
  Phone,
  Building,
  Calendar,
  Clock,
  Users,
  MessageSquare,
  Send,
  CheckCircle,
  XCircle,
  Heart,
  Cake,
  Briefcase,
  MoreHorizontal,
} from "lucide-react";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

const typeDemandeOptions = [
  { value: "mariage", label: "Mariage", icon: Heart, color: "text-pink-500" },
  {
    value: "anniversaire",
    label: "Anniversaire",
    icon: Cake,
    color: "text-yellow-500",
  },
  {
    value: "evenement_entreprise",
    label: "Événement d'entreprise",
    icon: Briefcase,
    color: "text-blue-500",
  },
  {
    value: "autre",
    label: "Autre",
    icon: MoreHorizontal,
    color: "text-gray-500",
  },
];

const plageHoraireOptions = [
  { value: "Matin (9h-12h)", label: "Matin", time: "9h-12h", icon: "🌅" },
  { value: "Midi (12h-14h)", label: "Midi", time: "12h-14h", icon: "☀️" },
  {
    value: "Après-midi (14h-18h)",
    label: "Après-midi",
    time: "14h-18h",
    icon: "🌤️",
  },
  { value: "Soir (18h-22h)", label: "Soir", time: "18h-22h", icon: "🌅" },
  {
    value: "Journée complète",
    label: "Journée complète",
    time: "9h-22h",
    icon: "🌞",
  },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const watchedType = watch("typeDemande");
  const selectedType = typeDemandeOptions.find(
    (option) => option.value === watchedType
  );

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Ajouter le label du type de demande pour l'affichage
      const typeDemandeDisplay =
        typeDemandeOptions.find((option) => option.value === data.typeDemande)
          ?.label || data.typeDemande;

      // Template pour le restaurant
      const templateParamsRestaurant = {
        to_email: "contact@maison-kerogan.com",
        from_name: `${data.prenom} ${data.nom}`,
        from_email: data.email,
        subject: `Nouvelle demande de réservation - ${typeDemandeDisplay}`,
        nom: data.nom,
        prenom: data.prenom,
        email: data.email,
        telephone: data.telephone,
        entreprise: data.entreprise || "Non renseignée",
        type_evenement: typeDemandeDisplay,
        nombre_personnes: data.nombrePersonnes,
        date_reservation: data.dateReservation,
        plage_horaire: data.plageHoraire,
        informations_supplementaires:
          data.informationsSupplementaires || "Aucune",
      };

      // Template pour le client
      const templateParamsClient = {
        to_email: data.email,
        client_nom: data.nom,
        client_prenom: data.prenom,
        type_evenement: typeDemandeDisplay,
        nombre_personnes: data.nombrePersonnes,
        date_reservation: data.dateReservation,
        plage_horaire: data.plageHoraire,
        informations_supplementaires:
          data.informationsSupplementaires || "Aucune",
      };

      // Envoi email au restaurant
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_RESTAURANT,
        templateParamsRestaurant,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      // Envoi email de confirmation au client
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CLIENT,
        templateParamsClient,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-100">
      {/* En-tête de page avec design amélioré */}
      <div className="relative pt-32 pb-16 overflow-hidden">
        {/* Éléments décoratifs de fond */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-vert/20 to-ocre/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-ocre/20 to-vert/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center">
          <div className="inline-block">
            <h1
              className={`${merriweather.className} text-4xl md:text-5xl font-bold text-vert mb-6`}
            >
              Contact
            </h1>
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-vert to-ocre rounded-full"></div>
              <div className="w-3 h-3 bg-ocre rounded-full animate-pulse"></div>
              <div className="w-16 h-1 bg-gradient-to-r from-ocre to-vert rounded-full"></div>
            </div>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto px-4">
            Réservez votre événement en quelques clics et laissez-nous créer des
            moments inoubliables
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16 max-w-5xl">
        {/* Carte principale du formulaire */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
          {/* Header de la carte */}
          <div className="bg-gradient-to-r from-vert to-vert/90 p-8 text-white">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <Calendar className="w-8 h-8" />
              </div>
              <div>
                <h2
                  className={`${merriweather.className} text-2xl md:text-3xl text-vert`}
                >
                  Formulaire de contact
                </h2>
                <p className=" mt-1 text-vert">
                  Remplissez les informations ci-dessous pour votre demande
                </p>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-8 md:p-10 space-y-8"
          >
            {/* Section 1: Informations personnelles */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                <div className="w-8 h-8 bg-vert/10 rounded-lg flex items-center justify-center">
                  <User className="w-5 h-5 text-vert" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Vos informations
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nom */}
                <div className="group">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
                    <User className="w-4 h-4" />
                    Nom *
                  </label>
                  <div className="relative">
                    <input
                      {...register("nom")}
                      type="text"
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-vert/20 focus:border-vert transition-all duration-200 bg-gray-50 hover:bg-white ${
                        errors.nom
                          ? "border-red-300 bg-red-50"
                          : "border-gray-200"
                      }`}
                      placeholder="Votre nom de famille"
                    />
                    {errors.nom && (
                      <div className="flex items-center gap-2 text-red-500 text-sm mt-2">
                        <XCircle className="w-4 h-4" />
                        {errors.nom.message}
                      </div>
                    )}
                  </div>
                </div>

                {/* Prénom */}
                <div className="group">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
                    <User className="w-4 h-4" />
                    Prénom *
                  </label>
                  <div className="relative">
                    <input
                      {...register("prenom")}
                      type="text"
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-vert/20 focus:border-vert transition-all duration-200 bg-gray-50 hover:bg-white ${
                        errors.prenom
                          ? "border-red-300 bg-red-50"
                          : "border-gray-200"
                      }`}
                      placeholder="Votre prénom"
                    />
                    {errors.prenom && (
                      <div className="flex items-center gap-2 text-red-500 text-sm mt-2">
                        <XCircle className="w-4 h-4" />
                        {errors.prenom.message}
                      </div>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="group">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
                    <Mail className="w-4 h-4" />
                    Email *
                  </label>
                  <div className="relative">
                    <input
                      {...register("email")}
                      type="email"
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-vert/20 focus:border-vert transition-all duration-200 bg-gray-50 hover:bg-white ${
                        errors.email
                          ? "border-red-300 bg-red-50"
                          : "border-gray-200"
                      }`}
                      placeholder="votre@email.com"
                    />
                    {errors.email && (
                      <div className="flex items-center gap-2 text-red-500 text-sm mt-2">
                        <XCircle className="w-4 h-4" />
                        {errors.email.message}
                      </div>
                    )}
                  </div>
                </div>

                {/* Téléphone */}
                <div className="group">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
                    <Phone className="w-4 h-4" />
                    Téléphone *
                  </label>
                  <div className="relative">
                    <input
                      {...register("telephone")}
                      type="tel"
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-vert/20 focus:border-vert transition-all duration-200 bg-gray-50 hover:bg-white ${
                        errors.telephone
                          ? "border-red-300 bg-red-50"
                          : "border-gray-200"
                      }`}
                      placeholder="06 12 34 56 78"
                    />
                    {errors.telephone && (
                      <div className="flex items-center gap-2 text-red-500 text-sm mt-2">
                        <XCircle className="w-4 h-4" />
                        {errors.telephone.message}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Entreprise */}
              <div className="group">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
                  <Building className="w-4 h-4" />
                  Entreprise (optionnel)
                </label>
                <input
                  {...register("entreprise")}
                  type="text"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-vert/20 focus:border-vert transition-all duration-200 bg-gray-50 hover:bg-white"
                  placeholder="Nom de votre entreprise"
                />
              </div>
            </div>

            {/* Section 2: Détails de l'événement */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                <div className="w-8 h-8 bg-ocre/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-ocre" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Détails de votre événement
                </h3>
              </div>

              {/* Type d'événement avec icônes */}
              <div className="group">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
                  {selectedType && (
                    <selectedType.icon
                      className={`w-4 h-4 ${selectedType.color}`}
                    />
                  )}
                  Type d&apos;événement *
                </label>
                <select
                  {...register("typeDemande")}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-vert/20 focus:border-vert transition-all duration-200 bg-gray-50 hover:bg-white ${
                    errors.typeDemande
                      ? "border-red-300 bg-red-50"
                      : "border-gray-200"
                  }`}
                >
                  <option value="">
                    Sélectionnez le type de votre événement
                  </option>
                  {typeDemandeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.typeDemande && (
                  <div className="flex items-center gap-2 text-red-500 text-sm mt-2">
                    <XCircle className="w-4 h-4" />
                    {errors.typeDemande.message}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nombre de personnes */}
                <div className="group">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
                    <Users className="w-4 h-4" />
                    Nombre de personnes *
                  </label>
                  <input
                    {...register("nombrePersonnes")}
                    type="number"
                    min="1"
                    max="200"
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-vert/20 focus:border-vert transition-all duration-200 bg-gray-50 hover:bg-white ${
                      errors.nombrePersonnes
                        ? "border-red-300 bg-red-50"
                        : "border-gray-200"
                    }`}
                    placeholder="Ex: 25 invités"
                  />
                  {errors.nombrePersonnes && (
                    <div className="flex items-center gap-2 text-red-500 text-sm mt-2">
                      <XCircle className="w-4 h-4" />
                      {errors.nombrePersonnes.message}
                    </div>
                  )}
                </div>

                {/* Date */}
                <div className="group">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
                    <Calendar className="w-4 h-4" />
                    Date souhaitée *
                  </label>
                  <input
                    {...register("dateReservation")}
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-vert/20 focus:border-vert transition-all duration-200 bg-gray-50 hover:bg-white ${
                      errors.dateReservation
                        ? "border-red-300 bg-red-50"
                        : "border-gray-200"
                    }`}
                  />
                  {errors.dateReservation && (
                    <div className="flex items-center gap-2 text-red-500 text-sm mt-2">
                      <XCircle className="w-4 h-4" />
                      {errors.dateReservation.message}
                    </div>
                  )}
                </div>
              </div>

              {/* Plage horaire avec design amélioré */}
              <div className="group">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
                  <Clock className="w-4 h-4" />
                  Plage horaire *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {plageHoraireOptions.map((option) => {
                    const isSelected = watch("plageHoraire") === option.value;

                    return (
                      <label
                        key={option.value}
                        className="relative cursor-pointer group/radio"
                      >
                        <input
                          {...register("plageHoraire")}
                          type="radio"
                          value={option.value}
                          className="sr-only"
                        />
                        <div
                          className={`
            border-2 rounded-xl p-4 transition-all duration-200 
            ${
              isSelected
                ? "border-vert bg-vert/10 shadow-md ring-2 ring-vert/20"
                : "border-gray-200 hover:border-vert hover:bg-vert/5"
            }
            group-hover/radio:shadow-sm
          `}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{option.icon}</span>
                            <div>
                              <div
                                className={`font-medium transition-colors ${
                                  isSelected ? "text-vert" : "text-gray-900"
                                }`}
                              >
                                {option.label}
                              </div>
                              <div
                                className={`text-sm transition-colors ${
                                  isSelected ? "text-vert/70" : "text-gray-500"
                                }`}
                              >
                                {option.time}
                              </div>
                            </div>
                          </div>

                          {/* Indicateur visuel de sélection */}
                          {isSelected && (
                            <div className="absolute top-2 right-2 w-6 h-6 bg-vert rounded-full flex items-center justify-center">
                              <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                          )}
                        </div>
                      </label>
                    );
                  })}
                </div>
                {errors.plageHoraire && (
                  <div className="flex items-center gap-2 text-red-500 text-sm mt-2">
                    <XCircle className="w-4 h-4" />
                    {errors.plageHoraire.message}
                  </div>
                )}
              </div>
            </div>

            {/* Section 3: Informations supplémentaires */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Informations complémentaires
                </h3>
              </div>

              <div className="group">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
                  <MessageSquare className="w-4 h-4" />
                  Décrivez-nous votre projet
                </label>
                <textarea
                  {...register("informationsSupplementaires")}
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-vert/20 focus:border-vert transition-all duration-200 bg-gray-50 hover:bg-white resize-none"
                  placeholder="Parlez-nous de vos besoins spécifiques, préférences alimentaires, style de décoration souhaité, budget approximatif..."
                />
                <div className="text-xs text-gray-500 mt-2">
                  Plus vous nous donnez de détails, mieux nous pourrons
                  personnaliser votre événement
                </div>
              </div>
            </div>

            {/* Messages de statut avec animations */}
            {submitStatus === "success" && (
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 animate-in slide-in-from-top duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800">
                      Demande envoyée avec succès !
                    </h4>
                    <p className="text-green-700 text-sm mt-1">
                      Nous vous recontacterons dans les plus brefs.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-2xl p-6 animate-in slide-in-from-top duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <XCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800">
                      Erreur lors de l&apos;envoi
                    </h4>
                    <p className="text-red-700 text-sm mt-1">
                      Une erreur s&apos;est produite. Veuillez réessayer ou nous
                      contacter directement.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Bouton d'envoi avec design amélioré */}
            <div className="pt-6 border-t border-gray-200">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-vert text-white py-4 px-8 rounded-xl font-semibold text-lg border border-black shadow-lg shadow-vert hover:shadow-xl hover:shadow-vert hover:brightness-110 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-3 group"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Envoyer ma demande de contact
                  </>
                )}
              </button>

              <div className="text-center mt-4">
                <p className="text-sm text-gray-500">
                  En envoyant ce formulaire, vous acceptez d&apos;être contacté
                  par nos équipes
                </p>
              </div>
            </div>
          </form>
        </div>

        {/* Section À propos */}
        <div className="mt-16">
          <A_propos />
        </div>
      </div>
    </div>
  );
}
