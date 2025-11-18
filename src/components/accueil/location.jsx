"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import logo from "../../../public/format feuille/jaune.jpg";
import Link from "next/link";
import { merriweather, nunito } from "../font";
import Carousel from "../Carousel";
import { getLocationEvenementielleBySlug } from "@/lib/getHygraphEvent";
import { useEffect, useState } from "react";

const LocationExtrait = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        // Récupérer les données depuis Hygraph avec le slug
        const locationData = await getLocationEvenementielleBySlug(
          "locationevenementielle"
        );

        if (locationData) {
          // NOUVEAU : Garder les objets complets avec mimeType pour le Carousel
          const transformedData = {
            ...locationData,
            // Garder les objets complets (incluant vidéos avec mimeType)
            images: locationData.images || [], // Objets complets avec mimeType
          };

          setItem(transformedData);
        } else {
          console.warn(
            "⚠️ [LocationExtrait] Aucune donnée de location événementielle trouvée pour le slug donné."
          );
        }
      } catch (error) {
        console.error(
          "💥 [LocationExtrait] Erreur lors de la récupération:",
          error
        );
        setItem(null);
      } finally {
        setLoading(false);
      }
    };

    fetchLocation();
  }, []);

  // État de chargement
  if (loading) {
    return (
      <div className="container mx-auto">
        <div className="flex px-4 mb-10 justify-center items-center h-64">
          <div className="flex flex-col items-center gap-3 text-gray-600">
            <div className="w-8 h-8 border-2 border-vert border-t-transparent rounded-full animate-spin"></div>
            <span className="text-sm font-medium">
              Chargement des informations...
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Si pas de données
  if (!item) {
    return (
      <div className="container mx-auto">
        <div className="flex px-4 mb-10 justify-center items-center h-64">
          <p className="text-gray-500">
            Informations de location non disponibles
          </p>
        </div>
      </div>
    );
  }

  const renderBlock = (
    extrait,
    extrait2,
    titreExtrait,
    titreExtrait2,
    journees,
    horaires,
    images
  ) => {
    const textContent = (
      <div className="flex flex-col px-6 w-full border-vert border-2 shadow-vert shadow-lg hover:shadow-xl hover:shadow-vert bg-ocre text-white rounded-xl relative overflow-hidden">
        {/* Fond décoratif subtil */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10 rotate-45 -translate-y-10 translate-x-10">
          <Image
            src={logo}
            alt="Décoration"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>

        <div className="flex w-full pt-4 mb-3 justify-between items-center">
          <h3
            className={`${merriweather.className} text-vert pl-6 font-bold text-lg md:text-xl lg:text-2xl uppercase relative`}
          >
            {item.title}
            <span className="block h-1 w-16 bg-vert mt-2"></span>
          </h3>
          <Image
            className="object-cover h-12 w-12 transform rotate-6"
            alt="maison_kerogan"
            src={logo}
            width={100}
            height={100}
          />
        </div>

        <div className="flex flex-col w-full h-full px-2 relative">
          <div className="space-y-3">
            {/* Utilisation des données dynamiques */}
            <div className="border-l-2 border-vert pl-4 my-3">
              <p className="text-vert font-medium text-xs md:text-sm mb-1">
                {item.part1 || "Notre espace"}
              </p>
              <p className="text-white text-xs md:text-sm">{item.extrait}</p>
            </div>

            {item.paragraphe1 && (
              <div className="border-l-2 border-vert pl-4 my-3">
                <p className="text-vert font-medium text-xs md:text-sm mb-1">
                  {item.part2 || "Services"}
                </p>
                <p className="text-white text-xs md:text-sm">
                  {item.paragraphe1}
                </p>
              </div>
            )}
          </div>

          <div className="flex-1 flex flex-col justify-end text-xs md:text-sm lg:text-md mt-4">
            {/* Séparateur décoratif */}
            <div className="flex items-center gap-2 mb-2">
              <div className="h-[1px] w-1/3 bg-gradient-to-r from-transparent to-vert"></div>
              <div className="h-2 w-2 rounded-full bg-vert"></div>
              <div className="h-[1px] flex-grow bg-gradient-to-r from-vert to-transparent"></div>
            </div>

            <div className="text-md font-bold ml-2">{item.journees}</div>
            <Separator className="bg-vert opacity-70 my-1" />
            <div className="text-md font-bold ml-2">{item.horaires}</div>
            <Separator className="bg-vert opacity-70 my-1" />

            <Button className="my-4 bg-vert border border-black hover:brightness-110 hover:scale-[1.02] transition-all duration-200">
              <Link href="/Location" className="flex items-center gap-2">
                <span>Découvrez En Plus</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );

    // CAROUSEL AVEC SUPPORT VIDÉO (objets complets)
    const carouselContent = images && images.length > 0 && (
      <div className="px-6 sm:px-0 w-full col-span-2">
        <Carousel images={images} />
      </div>
    );

    return (
      <div className="flex px-4 mb-10 space-y-4 grid grid-cols-1 lg:grid-cols-3 lg:px-0 lg:space-y-0 pt-0 sm:pt-12 transition-all duration-1000">
        {textContent}
        {carouselContent}
      </div>
    );
  };

  return (
    <div className="container mx-auto">
      {renderBlock(
        item.extrait,
        item.paragraphe1,
        item.part1,
        item.part2,
        item.journees,
        item.horaires,
        item.images // Maintenant contient les objets complets avec mimeType
      )}
    </div>
  );
};

export default LocationExtrait;
