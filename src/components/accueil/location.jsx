"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import Image from "next/image";
import logo from "../../../public/format feuille/jaune.jpg";
import Link from "next/link";
import { merriweather, nunito } from "../font";
import Carousel from "../Carousel";
import { location } from "@/lib/queries";

const LocationExtrait = () => {
  const item = location; // Assuming we're using the first item from the data array

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
      <div className="flex flex-col px-6 w-full border-vert border-2  shadow-vert shadow-lg  hover:shadow-xl hover:shadow-vert bg-ocre text-white rounded-xl">
        <div className="flex w-full pt-4 mb-6 justify-between">
          <h3
            className={`${merriweather.className} text-vert pl-6 font-bold text-lg md:text-xl lg:text-2xl uppercase`}
          >
            {item.title}
          </h3>
          <Image
            className=" relative object-cover h-10 w-10 "
            alt="maison_kerogan"
            src={logo}
          />
        </div>
        <div className=" text-vert text-xs md:text-sm lg:text-md mb-4 space-y-4">
          <p>{item.titreExtrait}</p>
          <p className="text-white text-xs">{item.extrait}</p>
          <p>{item.titreExtrait2}</p>
          <p className="text-white text-xs">{item.extrait2}</p>
        </div>

        <div className="flex-1 flex flex-col justify-end text-xs md:text-sm lg:text-md">
          <div className=" text-md font-bold">{item.journees}</div>
          <Separator className="bg-vert" />
          <div className=" text-md font-bold">{item.horaires}</div>
          <Separator className="bg-vert" />
          <Button className="my-4 bg-vert  border border-black  hover:brightness-110">
            <Link href="/Location">Découvrez En Plus</Link>
          </Button>
        </div>
      </div>
    );

    const carouselContent = images && images.length > 0 && (
      <div className="px-6 sm:px-0 w-full  col-span-2 ">
        <Carousel images={item.images} />
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
      {renderBlock(
        item.extrait,
        item.extrait2,
        item.titreExtrait,
        item.titreExtrait2,
        item.journees,
        item.horaires,
        item.images
      )}
    </div>
  );
};

export default LocationExtrait;
