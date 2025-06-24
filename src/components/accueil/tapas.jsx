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
  const item = tapas;

  const renderBlock = (extrait, journees, horaires, images) => {
    const textContent = (
      <div className="flex flex-col px-6 w-full border-terracotta border-2 shadow-terracotta shadow-lg hover:shadow-xl hover:shadow-terracotta bg-rose text-black rounded-xl relative overflow-hidden">
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
            className={`${merriweather.className} text-terracotta pl-6 font-bold text-lg md:text-xl lg:text-2xl uppercase relative`}
          >
            {item.title}
            <span className="block h-1 w-16 bg-terracotta mt-2"></span>
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
          <div className="border-l-2 border-terracotta pl-4 my-4">
            <p className="text-xs md:text-sm lg:text-md mb-4 font-medium">
              {item.extrait}
            </p>
          </div>

          <div className="flex-1 flex flex-col justify-end text-xs md:text-sm lg:text-md mt-4">
            {/* Séparateur décoratif */}
            <div className="flex items-center gap-2 mb-2">
              <div className="h-[1px] w-1/3 bg-gradient-to-r from-transparent to-terracotta"></div>
              <div className="h-2 w-2 rounded-full bg-terracotta"></div>
              <div className="h-[1px] flex-grow bg-gradient-to-r from-terracotta to-transparent"></div>
            </div>

            <div className="text-md font-bold ml-2">{item.journees}</div>
            <Separator className="bg-black opacity-70 my-1" />
            <div className="text-md font-bold ml-2">{item.horaires}</div>
            <Separator className="bg-black opacity-70 my-1" />

            <Button className="my-4 bg-black border border-black hover:brightness-110 hover:scale-[1.02] transition-all duration-200">
              <Link href="/Tapas" className="flex items-center gap-2">
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
