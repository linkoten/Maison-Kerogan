"use client";

import { merriweather, nunito } from "@/components/font";
import Carousel from "@/components/Carousel";
import { histoireDuLieu } from "@/lib/queries";
import Image from "next/image";
import logo from "../../../public/format feuille/blanc.jpg";

const HistoiresDuLieu = () => {
  const item = histoireDuLieu;

  const renderBlock = (extrait, journees, horaires, images) => {
    const textContent = (
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
            <span className="text-ocre text-3xl">"</span>
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
    );

    const carouselContent = images && images.length > 0 && (
      <div className="px-6 sm:px-0 w-full col-span-2">
        <Carousel images={images} />
      </div>
    );

    return (
      <div className="flex px-4 mb-10 space-y-4 grid grid-cols-1 lg:grid-cols-3 lg:px-0 lg:space-y-0 pt-24 sm:pt-0 transition-all duration-1000">
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

export default HistoiresDuLieu;
