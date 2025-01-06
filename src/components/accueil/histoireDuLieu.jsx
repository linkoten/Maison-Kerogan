"use client";

import { merriweather, nunito } from "@/components/font";
import useData from "@/hooks/useData";
import Carousel from "@/components/Carousel";
import Image from "next/image";

const HistoiresDuLieu = () => {
  const { data, loading, error } = useData("histoiresDuLieu", [
    "paragraphe1",
    "paragraphe2",
    "id",
    "title",
    "images { altText, id, url, width, size, height }",
  ]);

  if (loading) return <div></div>;
  if (error) return <div>Une erreur s'est produite : {error.message}</div>;

  const item = data[0]; // Assuming we're using the first item from the data array

  const renderBlock = (extrait, journees, horaires, images) => {
    const textContent = (
      <div className="flex flex-col px-6 w-full border-ocre border-2  shadow-vert shadow-lg  hover:shadow-xl hover:shadow-vert bg-white text-vert rounded-xl">
        <div className="flex w-full pt-4 mb-6 justify-between">
          <h3
            className={`${merriweather.className} text-ocre pl-6 font-bold text-lg md:text-xl lg:text-2xl uppercase`}
          >
            {item.title}
          </h3>
        </div>
        <div className="flex flex-col w-full h-full px-2">
          <p className=" text-xs md:text-sm lg:text-md mb-4 pt-8">
            {item.paragraphe1}
          </p>
          <p className="text-xs md:text-sm lg:text-md mb-4">
            {item.paragraphe2}
          </p>
        </div>
      </div>
    );

    const carouselContent = images && images.length > 0 && (
      <div className="px-6 sm:px-0 w-full col-span-2 ">
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
