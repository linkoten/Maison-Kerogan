"use client";

import React from "react";
import LocationExtrait from "@/components/accueil/location";
import TapasExtrait from "@/components/accueil/tapas";
import ThéExtrait from "@/components/accueil/thé";
import Image from "next/image";
import logo from "../../public/logo-principal.jpg";
import Link from "next/link";
import HistoireDuLieu from "@/components/accueil/histoireDuLieu";
import { Merriweather } from "next/font/google";
import Event from "@/components/event/Event";
import { useSeason } from "@/hooks/useSeason";
import A_propos from "../components/Apropos";
import BrunchExtrait from "../components/accueil/brunch";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export default function Home() {
  const { season, isWinter, isSummer } = useSeason();

  return (
    <div className="overflow-x-hidden">
      {/* Contenu principal de la page */}
      <div className="relative h-screen w-full">
        {/* Logo en arrière-plan qui prend tout l'écran */}
        <div className="absolute inset-0">
          <Image
            src={logo}
            alt="Maison Kerogan"
            priority
            fill
            className="object-contain md:object-cover"
            sizes="100vw"
            style={{
              objectPosition: "center",
            }}
          />
        </div>

        {/* Container pour les boutons de navigation AVEC LOGIQUE SAISONNIÈRE */}
        <div className="absolute inset-x-0 bottom-1/4 md:bottom-[30%] lg:bottom-[26%] z-10 w-full flex items-center justify-center">
          <nav className="flex items-center justify-center space-x-1 sm:space-x-2 md:space-x-3 lg:space-x-6 px-4">
            <Link
              href="/Brunch"
              className="text-[8px] sm:text-[12px] md:text-[14px] lg:text-xl uppercase font-medium tracking-wide text-center transition-all duration-300 hover:scale-110 hover:text-vert"
            >
              Brunch
            </Link>

            <span className="text-ocre text-lg lg:text-xl">·</span>

            {/* Tea Time - Visible seulement en été */}
            {isSummer && (
              <>
                <Link
                  href="/Salon_de_the"
                  className="text-[8px] sm:text-[12px] md:text-[14px] lg:text-xl uppercase font-medium tracking-wide text-center transition-all duration-300 hover:scale-110 hover:text-terracotta"
                >
                  Tea Time
                </Link>
                <span className="text-ocre text-lg lg:text-xl">·</span>
              </>
            )}

            {/* Tapas - Disponible toute l'année */}
            <Link
              href="/Tapas"
              className="text-[8px] sm:text-[12px] md:text-[14px] lg:text-xl uppercase font-medium tracking-wide text-center transition-all duration-300 hover:scale-110 hover:text-terracotta"
            >
              Tapas
            </Link>
            <span className="text-ocre text-lg lg:text-xl">·</span>

            <Link
              href="/Location"
              className="text-[8px] sm:text-[12px] md:text-[14px] lg:text-xl uppercase font-medium tracking-wide text-center transition-all duration-300 hover:scale-110 hover:text-ocre"
            >
              Événement
            </Link>
          </nav>
        </div>
      </div>

      <div className="text-vert font-bold space-y-4 bg-slate-200 px-4 md:px-16">
        <div className="relative py-8 my-6">
          <h1
            className={`${merriweather.className} text-center text-vert text-lg md:text-5xl font-bold tracking-wide relative z-10`}
          >
            LA MAISON KEROGAN
          </h1>
          <div className="flex items-center justify-center gap-3 mt-3">
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-vert"></div>
            <div className="h-2 w-2 rounded-full bg-ocre rotate-45"></div>
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-vert"></div>
          </div>
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[5rem] md:text-[8rem] font-bold text-slate-100 opacity-20 z-0 tracking-[0.2em]">
            MK
          </span>
        </div>

        {/* COMPOSANTS AVEC LOGIQUE SAISONNIÈRE */}
        <Event />
        <HistoireDuLieu />
        <BrunchExtrait />

        {/* ThéExtrait - Visible seulement en été */}
        {isSummer && (
          <div className="transition-all duration-500 ease-in-out">
            <ThéExtrait />
          </div>
        )}

        {/* TapasExtrait - Disponible toute l'année */}
        <div className="transition-all duration-500 ease-in-out">
          <TapasExtrait />
        </div>

        <LocationExtrait />

        {/* Message informatif en mode hiver - VERSION EMBELLIE */}
        {isWinter && (
          <div className="relative overflow-hidden my-12 mx-4 lg:mx-8">
            {/* Carte principale avec dégradé d'hiver */}
            <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-2xl shadow-xl border border-blue-200/50 p-8 md:p-12">
              {/* Flocons décoratifs en arrière-plan */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-4 left-4 text-blue-100/40 text-2xl animate-pulse">
                  ❄️
                </div>
                <div className="absolute top-8 right-6 text-blue-100/30 text-lg animate-pulse delay-300">
                  ❄️
                </div>
                <div className="absolute bottom-6 left-8 text-blue-100/40 text-xl animate-pulse delay-700">
                  ❄️
                </div>
                <div className="absolute bottom-4 right-4 text-blue-100/30 text-sm animate-pulse delay-500">
                  ❄️
                </div>
              </div>

              {/* Contenu principal */}
              <div className="relative z-10 text-center max-w-4xl mx-auto">
                {/* Icône et titre */}
                <div className="flex flex-col items-center mb-8">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-4xl">❄️</span>
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-br from-blue-200/20 to-blue-300/20 rounded-full animate-ping"></div>
                  </div>

                  <h3
                    className={`${merriweather.className} text-3xl md:text-4xl font-bold text-vert mb-2`}
                  >
                    Mode Hiver
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-vert rounded-full"></div>
                </div>

                {/* Description principale */}
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-inner mb-8">
                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
                    Notre service{" "}
                    <span className="font-semibold text-vert">Tea Time</span>{" "}
                    reprend au printemps.
                  </p>
                  <p className="text-gray-600 text-base md:text-lg">
                    En attendant, découvrez nos délicieux{" "}
                    <Link
                      href="/Brunch"
                      className="text-vert hover:text-ocre transition-colors font-medium underline decoration-vert/30 hover:decoration-ocre"
                    >
                      brunchs
                    </Link>
                    , nos{" "}
                    <Link
                      href="/Tapas"
                      className="text-vert hover:text-ocre transition-colors font-medium underline decoration-vert/30 hover:decoration-ocre"
                    >
                      Tapas
                    </Link>{" "}
                    et notre service de{" "}
                    <Link
                      href="/Location"
                      className="text-vert hover:text-ocre transition-colors font-medium underline decoration-vert/30 hover:decoration-ocre"
                    >
                      privatisation
                    </Link>
                    .
                  </p>
                </div>

                {/* Section retour printemps */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-6 bg-gradient-to-r from-green-50 to-yellow-50 rounded-xl border border-green-200/50">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-200 to-yellow-200 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🌸</span>
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-green-800 text-lg">
                        Retour au printemps
                      </p>
                      <p className="text-green-600 text-sm">
                        Services complets dès mai
                      </p>
                    </div>
                  </div>

                  {/* Compte à rebours décoratif */}
                  <div className="hidden sm:block w-px h-12 bg-green-300"></div>
                  <div className="text-center">
                    <p className="text-xs text-green-600 uppercase tracking-wide mb-1">
                      Rendez-vous en
                    </p>
                    <p className="text-2xl font-bold text-green-800">2026</p>
                  </div>
                </div>

                {/* Boutons d'action */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
                  <Link
                    href="/Brunch"
                    className="px-6 py-3 bg-vert text-white rounded-xl hover:bg-vert2 transition-all duration-300 hover:scale-105 shadow-lg font-medium"
                  >
                    Découvrir nos Brunchs
                  </Link>
                  <Link
                    href="/Location"
                    className="px-6 py-3 bg-ocre text-white rounded-xl hover:bg-ocre2 transition-all duration-300 hover:scale-105 shadow-lg font-medium"
                  >
                    Privatisation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        <A_propos />
      </div>
    </div>
  );
}
