"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import logo from "../../../public/format feuille/rose.jpg";
import Link from "next/link";
import { merriweather, nunito } from "../font";
import Carousel from "../Carousel";
import { tapas } from "@/lib/queries";

const TapasExtrait = () => {
  const item = tapas; // Assuming we're using the first item from the data array

  const renderBlock = (extrait, journees, horaires, images) => {
    const textContent = (
      <div className="flex flex-col px-6 w-full border-terracotta border-2  shadow-terracotta shadow-lg  hover:shadow-xl hover:shadow-terracotta bg-rose text-black rounded-xl">
        <div className="flex w-full pt-4 mb-6 justify-between">
          <h3
            className={`${merriweather.className} text-terracotta pl-6 font-bold text-lg md:text-xl lg:text-2xl uppercase`}
          >
            {item.title}
          </h3>
          <Image
            className=" relative object-cover h-10 w-10 "
            alt="maison_kerogan"
            src={logo}
          />
        </div>
        <p className=" text-xs md:text-sm lg:text-md mb-4">{item.extrait}</p>
        <div className="flex-1 flex flex-col justify-end text-xs md:text-sm lg:text-md">
          <div className=" text-md font-bold">{item.journees}</div>
          <Separator className="bg-black" />
          <div className=" text-md font-bold">{item.horaires}</div>
          <Separator className="bg-black" />
          <Button className="my-4 bg-black  border border-black  hover:brightness-110">
            <Link href="/Tapas">Découvrez En Plus</Link>
          </Button>
        </div>
      </div>
    );

    const carouselContent = images && images.length > 0 && (
      <div className="px-6 sm:px-0 w-full  col-span-2">
        <Carousel images={images} />
      </div>
    );

    return (
      <div className="flex px-4 mb-10 space-y-4 grid grid-cols-1 lg:grid-cols-3 lg:px-0 lg:space-y-0 pt-24 sm:pt-0 transition-all duration-1000">
        {carouselContent}
        {textContent}
      </div>
    );
  };

  return (
    <div className="container mx-auto">
      {renderBlock(item.extrait, item.journees, item.horaires, item.images)}
    </div>
  );
};

export default TapasExtrait;
