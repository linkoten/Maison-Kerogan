"use client";

import Image from "next/image";
import Carousel from "@/components/Carousel";
import logo from "../../../public/format moyen/jaune.jpg";
import { Merriweather } from "next/font/google";
import { getLocationEvenementielleBySlug } from "@/lib/getHygraphEvent";
import { useEffect, useState } from "react";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

const Location = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const locationData = await getLocationEvenementielleBySlug(
          "locationevenementielle"
        );

        if (locationData) {
          // CORRECTION : Passer les objets complets au lieu des URLs seulement
          const transformData = {
            ...locationData,
            // Garder les objets complets avec mimeType pour la détection
            images: locationData.images || [], // Objets complets avec mimeType
            part2Images: locationData.part2Images?.map((img) => img.url) || [], // URLs simples pour images
            part3Images: locationData.part3Images?.map((img) => img.url) || [], // URLs simples pour images
          };

          setItem(transformData);
        } else {
        }
      } catch (error) {
        console.error(
          "💥 Erreur lors de la récupération de la location:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchLocation();
  }, []);

  // États de chargement inchangés...
  if (loading) {
    return (
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-screen">
          <div className="flex flex-col items-center gap-4 text-gray-600">
            <div className="w-12 h-12 border-3 border-ocre border-t-transparent rounded-full animate-spin"></div>
            <h2 className="text-xl font-medium">Chargement de la page...</h2>
            <p className="text-sm">
              Récupération des informations depuis Hygraph
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-screen">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Contenu non disponible
            </h2>
            <p className="text-gray-600 mb-6">
              Les informations sur la location événementielle ne sont pas
              disponibles pour le moment.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-ocre to-transparent mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  const renderBlock = (part, paragraphe1, paragraphe2, mediaUrls, index) => {
    const textContent = (
      <div className="flex flex-col w-full h-full bg-ocre rounded-xl border-vert2 border-2 shadow-lg shadow-vert hover:shadow-xl hover:shadow-vert2 relative overflow-hidden">
        <div className="w-1/5 h-full absolute left-0 top-0 bottom-0 flex items-center justify-center border-r border-vert2">
          <span
            className={`${merriweather.className} -rotate-90 whitespace-nowrap text-3xl text-vert2 bold tracking-widest uppercase`}
          >
            {part}
          </span>
        </div>

        <div className="flex flex-col w-full h-full pl-[22%] pr-6 py-4">
          <div className="absolute top-0 right-0 w-32 h-32 opacity-10 rotate-45 -translate-y-10 translate-x-10">
            <Image
              src={logo}
              alt="Décoration"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>

          <div className="flex justify-center mb-4">
            <Image
              className="z-20 object-contain h-auto w-28 md:w-32 lg:w-36"
              alt="maison_kerogan"
              src={logo}
              width={200}
              height={200}
            />
          </div>

          <div className="border-l-2 border-vert2 pl-4 my-4">
            <p className="text-white text-xs md:text-sm lg:text-md mb-4 font-medium">
              {paragraphe1}
            </p>
          </div>

          {paragraphe2 && (
            <p className="text-white text-xs md:text-sm lg:text-md mb-4 italic">
              {paragraphe2}
            </p>
          )}

          <div className="flex items-center gap-2 mt-auto mb-2">
            <div className="h-[1px] w-1/3 bg-gradient-to-r from-transparent to-vert2"></div>
            <div className="h-2 w-2 rounded-full bg-vert2"></div>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-vert2 to-transparent"></div>
          </div>

          <div className="flex justify-end mb-2">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-vert2"></div>
              <div className="h-2 w-8 rounded-full bg-vert2 opacity-70"></div>
              <div className="h-2 w-2 rounded-full bg-vert2"></div>
            </div>
          </div>
        </div>
      </div>
    );

    // CAROUSEL GÈRE AUTOMATIQUEMENT LES VIDÉOS (.mp4)
    const carouselContent = mediaUrls && mediaUrls.length > 0 && (
      <div className="px-6 sm:px-0 w-full col-span-2">
        <Carousel images={mediaUrls} />
      </div>
    );

    const isEven = index % 2 === 1;

    return (
      <div className="flex px-4 mb-10 space-y-4 grid grid-cols-1 lg:grid-cols-3 lg:px-0 lg:space-y-0 pt-6 lg:pt-12 transition-all duration-1000">
        {isEven ? (
          <>
            {textContent}
            {carouselContent}
          </>
        ) : (
          <>
            {carouselContent}
            {textContent}
          </>
        )}
      </div>
    );
  };

  return (
    <div className="container mx-auto">
      <div className="relative pt-24 md:pt-0">
        <h1
          className={`${merriweather.className} text-4xl font-bold text-center text-vert relative z-10 mb-2`}
        >
          {item.title}
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-ocre to-transparent mx-auto my-1"></div>
        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-ocre to-transparent mx-auto"></div>
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[8rem] font-bold text-gray-50 opacity-20 z-0">
          {item.title.charAt(0)}
        </span>
      </div>

      {/* Part 1 - VIDÉO (dans images avec mimeType: video/mp4) */}
      {item.part1 &&
        renderBlock(
          item.part1,
          item.paragraphe1,
          item.paragraphe2,
          item.images, // Contient votre vidéo !
          0
        )}

      {/* Part 2 - IMAGES */}
      {item.part2 &&
        renderBlock(
          item.part2,
          item.part2Paragraphe1,
          item.part2Paragraphe2,
          item.part2Images,
          1
        )}

      {/* Part 3 - IMAGES */}
      {item.part3 &&
        renderBlock(
          item.part3,
          item.part3Paragraphe1,
          item.part3Paragraphe2,
          item.part3Images,
          2
        )}
    </div>
  );
};

export default Location;
