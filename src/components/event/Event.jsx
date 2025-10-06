"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Calendar,
  Clock,
  MapPin,
  ExternalLink,
  Phone,
  Mail,
} from "lucide-react";
import { getFeaturedEvent } from "@/lib/getHygraphEvent";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

const Event = () => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setError(null);
        const eventData = await getFeaturedEvent();
        setEvent(eventData);
      } catch (error) {
        console.error("Erreur lors du chargement de l'événement:", error);
        setError("Impossible de charger l'événement");
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        {/* Skeleton loading amélioré */}
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse">
            {/* Header skeleton */}
            <div className="text-center mb-8">
              <div className="h-8 bg-gray-200 rounded-lg w-64 mx-auto mb-4"></div>
              <div className="h-1 bg-gray-200 rounded w-24 mx-auto"></div>
            </div>

            {/* Card skeleton */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 h-80 bg-gray-200"></div>
                <div className="md:w-1/2 p-8 space-y-6">
                  <div className="h-8 bg-gray-200 rounded-lg w-3/4"></div>
                  <div className="space-y-3">
                    <div className="h-5 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-5 bg-gray-200 rounded w-1/3"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                  </div>
                  <div className="h-12 bg-gray-200 rounded-xl w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto bg-red-50 border border-red-200 rounded-2xl p-8 text-center shadow-lg">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">⚠️</span>
          </div>
          <h3 className="text-lg font-semibold text-red-800 mb-2">Oups !</h3>
          <p className="text-red-600 text-sm">{error}</p>
        </div>
      </div>
    );
  }

  if (!event) {
    return null;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatDateShort = (dateString) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleDateString("fr-FR", { month: "short" }),
    };
  };

  const handleReservation = () => {
    if (!event.reservationLink) {
      console.warn("Aucun lien de réservation défini");
      return;
    }

    if (event.reservationLink.startsWith("tel:")) {
      window.location.href = event.reservationLink;
    } else if (event.reservationLink.startsWith("mailto:")) {
      window.location.href = event.reservationLink;
    } else if (event.reservationLink.startsWith("http")) {
      window.open(event.reservationLink, "_blank");
    } else {
      window.location.href = event.reservationLink;
    }
  };

  const getReservationConfig = () => {
    if (!event.reservationLink)
      return { icon: ExternalLink, text: "Réserver", color: "bg-vert" };

    if (event.reservationLink.startsWith("tel:"))
      return { icon: Phone, text: "Appeler", color: "bg-green-600" };
    if (event.reservationLink.startsWith("mailto:"))
      return { icon: Mail, text: "Email", color: "bg-blue-600" };
    if (event.reservationLink.startsWith("http"))
      return {
        icon: ExternalLink,
        text: "Réserver en ligne",
        color: "bg-vert",
      };

    return { icon: ExternalLink, text: "Réserver", color: "bg-vert" };
  };

  const reservationConfig = getReservationConfig();
  const ReservationIcon = reservationConfig.icon;
  const dateShort = formatDateShort(event.date);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header avec style amélioré */}
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <h2
              className={`${merriweather.className} text-3xl md:text-4xl font-bold text-vert relative z-10 mb-4`}
            >
              Prochain Événement
            </h2>
            <div className="absolute -inset-2 bg-gradient-to-r from-vert/20 to-ocre/20 rounded-lg blur-xl opacity-30"></div>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-vert via-ocre to-vert mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-md mx-auto">
            Découvrez notre prochain événement et réservez votre place
          </p>
        </div>

        {/* Carte événement redesignée */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1">
            <div className="md:flex">
              {/* Image avec overlay date */}
              {event.coverImage && (
                <div className="md:w-1/2 relative group">
                  <div className="h-80 md:h-full relative overflow-hidden">
                    <Image
                      src={event.coverImage.url}
                      alt={
                        event.coverImage.fileName ||
                        event.title ||
                        "Image événement"
                      }
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  </div>

                  {/* Badge date flottant */}
                  <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-vert">
                        {dateShort.day}
                      </div>
                      <div className="text-sm font-medium text-gray-600 uppercase">
                        {dateShort.month}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Contenu */}
              <div
                className={`${
                  event.coverImage ? "md:w-1/2" : "w-full"
                } p-8 md:p-10 flex flex-col justify-between`}
              >
                <div className="space-y-6">
                  {/* Titre avec badge */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-vert/10 text-vert border border-vert/20">
                        Événement
                      </span>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <h3
                      className={`${merriweather.className} text-2xl md:text-3xl font-bold text-gray-900 leading-tight`}
                    >
                      {event.title}
                    </h3>
                  </div>

                  {/* Informations avec icônes améliorées */}
                  <div className="space-y-4">
                    {/* Date complète */}
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <div className="w-10 h-10 bg-vert/10 rounded-lg flex items-center justify-center">
                        <Calendar size={20} className="text-vert" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Date</div>
                        <div className="font-semibold text-gray-900 capitalize">
                          {formatDate(event.date)}
                        </div>
                      </div>
                    </div>

                    {/* Horaires */}
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <div className="w-10 h-10 bg-ocre/10 rounded-lg flex items-center justify-center">
                        <Clock size={20} className="text-ocre" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Horaires</div>
                        <div className="font-semibold text-gray-900">
                          {event.startTime}
                          {event.endTime && ` - ${event.endTime}`}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description avec style amélioré */}
                  {event.description && (
                    <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Description
                      </h4>
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {event.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* Bouton de réservation amélioré */}
                {event.reservationLink && (
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <button
                      onClick={handleReservation}
                      className={`w-full ${reservationConfig.color} text-white py-4 px-8 rounded-2xl hover:opacity-90 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center gap-3 group`}
                    >
                      <ReservationIcon
                        size={24}
                        className="group-hover:rotate-12 transition-transform"
                      />
                      {reservationConfig.text}
                      <div className="w-2 h-2 bg-white/30 rounded-full group-hover:animate-pulse"></div>
                    </button>

                    {/* Info supplémentaire */}
                    <p className="text-center text-sm text-gray-500 mt-3">
                      Places limitées • Réservation recommandée
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Section décorative */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-gray-400">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
            <MapPin size={16} />
            <span className="text-sm">Maison Kerogan, Quimper</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;
