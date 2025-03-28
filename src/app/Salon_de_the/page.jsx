"use client";

import Image from "next/image";
import logo from "../../../public/format moyen/rouge.jpg";
import { merriweather, nunito } from "@/components/font";
import Carousel from "@/components/Carousel";
import { thé } from "@/lib/queries";

const Thé = () => {
  const item = thé; // Assuming we're using the first item from the data array

  const renderBlock = (part, paragraphe1, paragraphe2, images, index) => {
    const textContent = (
      <div className="flex w-full h-full bg-terracotta rounded-xl border-terracotta2 border-2 shadow-lg shadow-terracotta hover:shadow-xl hover:shadow-terracotta2">
        <div className="w-1/5 h-full flex items-center justify-center border-r border-terracotta2">
          <span
            className={`${merriweather.className} -rotate-90 whitespace-nowrap text-3xl text-terracotta2 bold tracking-widest uppercase`}
          >
            {part}
          </span>
        </div>
        <div className="flex flex-col w-full h-full px-2">
          <Image
            className="z-20 object-cover mx-auto h-1/2 w-1/2 lg:h-auto lg:w-fit transform"
            alt="maison_kerogan"
            src={logo}
            width={200}
            height={200}
          />
          <p className="text-white text-xs md:text-sm lg:text-md mb-4 pt-8">
            {paragraphe1}
          </p>
          <p className="text-white text-xs md:text-sm lg:text-md mb-4">
            {paragraphe2}
          </p>
        </div>
      </div>
    );

    const carouselContent = images && images.length > 0 && (
      <div className="px-6 sm:px-0 w-full  col-span-2">
        <Carousel images={images} />
      </div>
    );

    const isEven = index % 2 === 1;

    return (
      <div
        className={`flex px-4 mb-10 space-y-4 grid grid-cols-1 lg:grid-cols-3 lg:px-0 lg:space-y-0 pt-24 sm:pt-0 transition-all duration-1000
           
          `}
      >
        {" "}
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
      <h1 className="text-4xl font-bold text-center my-8">{item.title}</h1>
      {renderBlock(
        item.part1,
        item.paragraphe1,
        item.paragraphe2,
        item.images,
        0
      )}
      {renderBlock(
        item.part2,
        item.part2Paragraphe1,
        item.part2Paragraphe2,
        item.part2Images,
        1
      )}
    </div>
  );
};

export default Thé;
