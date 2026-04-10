"use client";

import Image from "next/image";
import { Merriweather } from "next/font/google";
import Carousel from "@/components/Carousel";
import logo from "../../../public/format moyen/rose.jpg";
import { getTapasBySlug } from "@/lib/getHygraphEvent";
import { useEffect, useState } from "react";
import { useSeason } from "@/hooks/useSeason";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

const FALLBACK_IMAGES = ["/18832.png"];
const FALLBACK_PHOTOS_GALERIES = ["/0030_Maison_Kerogan-30.jpg"];
const FALLBACK_PART2_IMAGES = ["/tapas.jpg", "/0030_Maison_Kerogan-30.jpg"];

const checkImageAccessible = (url) =>
  new Promise((resolve) => {
    const img = new window.Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });

export default function TapasContent() {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { isSummer, isWinter } = useSeason();

  useEffect(() => {
    const fetchTapas = async () => {
      try {
        // SIMPLIFIÉ - Tentative directe avec slug "tapas"
        const tapasData = await getTapasBySlug("tapas");

        if (tapasData) {
          // Vérifier accessibilité du CDN Hygraph une seule fois
          const allUrls = [
            ...(tapasData.images || []),
            ...(tapasData.photosGaleries || []),
            ...(tapasData.part2Images || []),
          ];
          const firstUrl = allUrls[0]?.url || allUrls[0];
          const hygraphAccessible = firstUrl
            ? await checkImageAccessible(firstUrl)
            : false;

          const transformData = {
            ...tapasData,
            images: hygraphAccessible
              ? tapasData.images?.map((img) => img.url) || []
              : FALLBACK_IMAGES,
            part2Images: hygraphAccessible
              ? tapasData.part2Images?.map((img) => img.url) || []
              : FALLBACK_PART2_IMAGES,
            part3Images: tapasData.part3Images?.map((img) => img.url) || [],
            photosGaleries: hygraphAccessible
              ? tapasData.photosGaleries?.map((img) => img.url) || []
              : FALLBACK_PHOTOS_GALERIES,
            menu: tapasData.menu?.map((img) => img.url) || [],
          };

          setItem(transformData);
        } else {
          setItem({
            images: FALLBACK_IMAGES,
            photosGaleries: FALLBACK_PHOTOS_GALERIES,
            part2Images: FALLBACK_PART2_IMAGES,
          });
        }
      } catch (error) {
        setItem({
          images: FALLBACK_IMAGES,
          photosGaleries: FALLBACK_PHOTOS_GALERIES,
          part2Images: FALLBACK_PART2_IMAGES,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchTapas();
  }, []);

  // État de chargement
  if (loading) {
    return (
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-screen">
          <div className="flex flex-col items-center gap-4 text-gray-600">
            <div className="w-12 h-12 border-3 border-terracotta border-t-transparent rounded-full animate-spin"></div>
            <h2 className="text-xl font-medium">Chargement de la page...</h2>
            <p className="text-sm">
              Récupération des informations depuis Hygraph
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Si pas de données
  if (!item) {
    return (
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-screen">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Contenu non disponible
            </h2>
            <p className="text-gray-600 mb-6">
              Les informations sur les tapas ne sont pas disponibles pour le
              moment.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-rose to-transparent mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  // Rendu principal des tapas
  const renderBlock = (part, paragraphe1, paragraphe2, images, index) => {
    const textContent = (
      <div className="flex flex-col w-full h-full bg-rose rounded-xl border-terracotta border-2 shadow-lg shadow-terracotta hover:shadow-xl hover:shadow-terracotta relative overflow-hidden">
        {/* Bandeau latéral avec titre verticalisé */}
        <div className="w-1/5 h-full absolute left-0 top-0 bottom-0 flex items-center justify-center border-r border-terracotta">
          <span
            className={`${merriweather.className} -rotate-90 whitespace-nowrap text-3xl text-terracotta bold tracking-widest uppercase`}
          >
            {part}
          </span>
        </div>

        {/* Contenu principal avec logo et textes */}
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

          <div className="border-l-2 border-terracotta pl-4 my-4">
            <p className="text-black text-xs md:text-sm lg:text-md mb-4 font-medium">
              {paragraphe1}
            </p>
          </div>

          {paragraphe2 && (
            <p className="text-black text-xs md:text-sm lg:text-md mb-4 italic">
              {paragraphe2}
            </p>
          )}

          <div className="flex items-center gap-2 mt-auto mb-2">
            <div className="h-[1px] w-1/3 bg-gradient-to-r from-transparent to-terracotta"></div>
            <div className="h-2 w-2 rounded-full bg-terracotta"></div>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-terracotta to-transparent"></div>
          </div>

          <div className="flex justify-end mb-2">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-terracotta"></div>
              <div className="h-2 w-8 rounded-full bg-terracotta opacity-70"></div>
              <div className="h-2 w-2 rounded-full bg-terracotta"></div>
            </div>
          </div>
        </div>
      </div>
    );

    const carouselContent = images && images.length > 0 && (
      <div className="px-6 sm:px-0 w-full col-span-2">
        <Carousel images={images} />
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
          Tapas
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-terracotta to-transparent mx-auto my-1"></div>
        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-terracotta to-transparent mx-auto"></div>
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[8rem] font-bold text-gray-50 opacity-20 z-0">
          T
        </span>
      </div>

      {/* Bloc Part 1 - Visible toute l'année */}
      {item.part1 &&
        renderBlock(
          item.part1,
          item.paragraphe1,
          item.paragraphe2,
          item.images,
          0,
        )}

      {/* Bloc Part 2 - Visible toute l'année */}
      {item.part2 &&
        renderBlock(
          item.part2,
          item.part2Paragraphe1,
          item.part2Paragraphe2,
          item.part2Images,
          1,
        )}

      {/* Bloc Part 3 - Visible toute l'année */}
      {item.part3 &&
        renderBlock(
          item.part3,
          item.part3Paragraphe1,
          item.part3Paragraphe2,
          item.part3Images,
          2,
        )}
    </div>
  );
}
