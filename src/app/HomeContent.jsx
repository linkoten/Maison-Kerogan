"use client";

import LocationExtrait from "@/components/accueil/location";
import TapasExtrait from "@/components/accueil/tapas";
import ThéExtrait from "@/components/accueil/thé";
import Image from "next/image";
import logo from "../../public/logo-principal.jpg";
import Link from "next/link";
import HistoireDuLieu from "@/components/accueil/histoireDuLieu";
import { Merriweather } from "next/font/google";
import Event from "@/components/event/Event";
import A_propos from "../components/Apropos";
import BrunchExtrait from "../components/accueil/brunch";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export default function HomeContent() {
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

        {/* Container pour les boutons de navigation */}
        <div className="absolute inset-x-0 bottom-1/4 md:bottom-[30%] lg:bottom-[26%] z-10 w-full flex items-center justify-center">
          <nav className="flex items-center justify-center space-x-1 sm:space-x-2 md:space-x-3 lg:space-x-6 px-4">
            <Link
              href="/Brunch"
              className="text-[8px] sm:text-[12px] md:text-[14px] lg:text-xl uppercase font-medium tracking-wide text-center transition-all duration-300 hover:scale-110 hover:text-vert"
            >
              Brunch
            </Link>

            <span className="text-ocre text-lg lg:text-xl">·</span>

            {/* Tea Time - Visible toute l'année */}
            <Link
              href="/Salon_de_the"
              className="text-[8px] sm:text-[12px] md:text-[14px] lg:text-xl uppercase font-medium tracking-wide text-center transition-all duration-300 hover:scale-110 hover:text-terracotta"
            >
              Tea Time
            </Link>
            <span className="text-ocre text-lg lg:text-xl">·</span>

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
              Privatisation
            </Link>
          </nav>
        </div>
      </div>

      {/* Section principale de la page d'accueil */}
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

        {/* ThéExtrait - Visible toute l'année */}
        <div className="transition-all duration-500 ease-in-out">
          <ThéExtrait />
        </div>

        {/* TapasExtrait - Disponible toute l'année */}
        <div className="transition-all duration-500 ease-in-out">
          <TapasExtrait />
        </div>

        <LocationExtrait />

        <A_propos />
      </div>
    </div>
  );
}
