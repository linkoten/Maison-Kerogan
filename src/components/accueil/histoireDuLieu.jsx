"use client";

import { useState, useEffect } from "react";
import { merriweather, nunito } from "@/components/font";
import Carousel from "@/components/Carousel";
import { getHistoireDuLieuBySlug } from "@/lib/getHygraphEvent";
import Image from "next/image";
import logo from "../../../public/format feuille/blanc.jpg";

const HistoiresDuLieu = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistoireDuLieu = async () => {
      try {
        console.log("🔍 Récupération Histoire du Lieu...");

        const histoireData = await getHistoireDuLieuBySlug("histoireDuLieu");

        if (histoireData) {
          // Transformer les images pour le Carousel
          const transformedImages =
            histoireData.images?.map((img) => img.url) || [];

          setItem({
            ...histoireData,
            images: transformedImages,
          });

          console.log("✅ Histoire du lieu récupérée avec succès:", {
            title: histoireData.title,
            slug: histoireData.slug,
            imagesCount: transformedImages.length,
          });
        } else {
          console.log(
            "❌ Aucune histoire trouvée pour le slug: histoireDuLieu"
          );
        }
      } catch (error) {
        console.error("💥 Erreur fetchHistoireDuLieu:", error);
        setItem(null);
      } finally {
        setLoading(false);
      }
    };

    fetchHistoireDuLieu();
  }, []);

  // État de chargement
  if (loading) {
    return (
      <div className="container mx-auto">
        <div className="flex px-4 mb-10 space-y-4 grid grid-cols-1 lg:grid-cols-3 lg:px-0 lg:space-y-0">
          {/* Skeleton pour le texte */}
          <div className="flex flex-col px-6 w-full border-gray-200 border-2 shadow-lg bg-gray-50 text-vert rounded-xl relative overflow-hidden animate-pulse">
            <div className="flex w-full pt-4 mb-3 justify-between items-center">
              <div>
                <div className="h-6 w-32 bg-gray-300 rounded mb-2"></div>
                <div className="h-1 w-16 bg-gray-300 rounded"></div>
              </div>
              <div className="h-12 w-12 bg-gray-300 rounded"></div>
            </div>

            <div className="flex flex-col w-full h-full px-2 relative">
              <div className="border-l-2 border-gray-300 pl-4 my-4">
                <div className="space-y-2 mb-6">
                  <div className="h-3 bg-gray-300 rounded w-full"></div>
                  <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-300 rounded w-5/6"></div>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                <div className="h-3 bg-gray-300 rounded w-1/2"></div>
              </div>
            </div>
          </div>

          {/* Skeleton pour le carousel */}
          <div className="px-6 sm:px-0 w-full col-span-2">
            <div className="h-64 bg-gray-200 rounded-xl animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  // État sans données
  if (!item) {
    return (
      <div className="container mx-auto">
        <div className="flex px-4 mb-10 justify-center items-center">
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-gray-400">📖</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-600 mb-2">
              Histoire en préparation
            </h3>
            <p className="text-sm text-gray-500">
              Notre histoire sera bientôt disponible
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <div className="flex px-4 mb-10 space-y-4 grid grid-cols-1 lg:grid-cols-3 lg:px-0 lg:space-y-0 transition-all duration-1000">
        {/* Contenu texte */}
        <div className="flex flex-col px-6 w-full border-ocre border-2 shadow-vert shadow-lg hover:shadow-xl hover:shadow-vert bg-white text-vert rounded-xl relative overflow-hidden">
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
              className={`${merriweather.className} text-ocre pl-6 font-bold text-lg md:text-xl lg:text-2xl uppercase relative`}
            >
              {item.title}
              <span className="block h-1 w-16 bg-ocre mt-2"></span>
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
            <div className="border-l-2 border-ocre pl-4 my-4">
              <p className="text-xs md:text-sm lg:text-md mb-6 font-medium">
                {item.paragraphe1}
              </p>
            </div>

            {item.paragraphe2 && (
              <p className="text-xs md:text-sm lg:text-md mb-4 italic">
                {item.paragraphe2}
              </p>
            )}

            {/* Éléments décoratifs */}
            <div className="flex items-center gap-4 mt-auto mb-4">
              <span className="text-ocre text-3xl">&quot;</span>
              <div className="h-[1px] flex-grow bg-gradient-to-r from-ocre to-transparent"></div>
            </div>

            <div className="flex justify-end mb-2">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-ocre"></div>
                <div className="h-2 w-8 rounded-full bg-ocre opacity-70"></div>
                <div className="h-2 w-2 rounded-full bg-ocre"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel */}
        {item.images && item.images.length > 0 && (
          <div className="px-6 sm:px-0 w-full col-span-2">
            <Carousel images={item.images} />
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoiresDuLieu;
