"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import logo from "../../../public/format feuille/rouge.jpg";
import Link from "next/link";
import { merriweather, nunito } from "../font";
import Carousel from "../Carousel";
import { getSalonDeTheBySlug } from "@/lib/getHygraphEvent";
import { useEffect, useState } from "react";

const ThéExtrait = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSalonDeThe = async () => {
      try {
        // Récupérer les données depuis Hygraph avec le slug
        const salonData = await getSalonDeTheBySlug("salondethe");

        if (salonData) {
          // Transformer les images Hygraph en URLs simples pour le Carousel
          const transformedImages =
            salonData.images?.map((img) => img.url) || [];

          setItem({
            ...salonData,
            images: transformedImages,
          });
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données salon de thé:",
          error
        );
        setItem(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSalonDeThe();
  }, []);

  // État de chargement
  if (loading) {
    return (
      <div className="container mx-auto">
        <div className="flex px-4 mb-10 justify-center items-center h-64">
          <div className="flex flex-col items-center gap-3 text-gray-600">
            <div className="w-8 h-8 border-2 border-terracotta border-t-transparent rounded-full animate-spin"></div>
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
            Informations du salon de thé non disponibles
          </p>
        </div>
      </div>
    );
  }

  const renderBlock = (extrait, journees, horaires, images) => {
    const textContent = (
      <div className="flex flex-col px-6 w-full border-rose border-2 shadow-rose shadow-lg hover:shadow-xl hover:shadow-rose bg-terracotta text-white rounded-xl relative overflow-hidden">
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
            className={`${merriweather.className} text-rose pl-6 font-bold text-lg md:text-xl lg:text-2xl uppercase relative`}
          >
            {item.title}
            <span className="block h-1 w-16 bg-rose mt-2"></span>
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
          <div className="border-l-2 border-rose pl-4 my-4">
            <p className="text-xs md:text-sm lg:text-md mb-4 font-medium">
              {extrait}
            </p>
          </div>

          <div className="flex-1 flex flex-col justify-end text-xs md:text-sm lg:text-md mt-4">
            {/* Séparateur décoratif */}
            <div className="flex items-center gap-2 mb-2">
              <div className="h-[1px] w-1/3 bg-gradient-to-r from-transparent to-rose"></div>
              <div className="h-2 w-2 rounded-full bg-rose"></div>
              <div className="h-[1px] flex-grow bg-gradient-to-r from-rose to-transparent"></div>
            </div>

            <div className="text-md font-bold ml-2">{journees}</div>
            <Separator className="bg-rose opacity-70 my-1" />
            <div className="text-md font-bold ml-2">{horaires}</div>
            <Separator className="bg-rose opacity-70 my-1" />

            <Button className="my-4 bg-rose border border-black hover:brightness-110 hover:scale-[1.02] transition-all duration-200">
              <Link href="/Salon_de_the" className="flex items-center gap-2">
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
      {renderBlock(item.extrait, item.journees, item.horaires, item.images)}
    </div>
  );
};

export default ThéExtrait;
