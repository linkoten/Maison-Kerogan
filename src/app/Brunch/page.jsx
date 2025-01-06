"use client";
import Image from "next/image";
import { Merriweather } from "next/font/google";
import useData from "@/hooks/useData";
import Carousel from "@/components/Carousel";
import logo from "../../../public/format moyen/vert.jpg";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

const BrunchPage = () => {
  const { data, loading, error } = useData("brunches", [
    "part1",
    "paragraphe1",
    "paragraphe2",
    "extrait",
    "id",
    "slug",
    "title",
    "images { altText, id, url, width, size, height }",
    "journees",
    "horaires",
    "part2",
    "part2Paragraphe1",
    "part2Paragraphe2",
    "part2Images { altText, id, url, width, size, height }",
    "part3",
    "part3Paragraphe1",
    "part3Paragraphe2",
    "part3Images { altText, id, url, width, size, height }",
  ]);

  if (loading) return <div></div>;
  if (error) return <div>Une erreur est survenue : {error.message}</div>;

  const item = data[0]; // Assuming we're using the first item from the data array

  const renderBlock = (part, paragraphe1, paragraphe2, images, index) => {
    const textContent = (
      <div className="flex w-full h-full bg-vert rounded-xl border-ocre2 border-2 shadow-lg shadow-ocre hover:shadow-xl hover:shadow-ocre">
        <div className="w-1/5 h-full flex items-center justify-center border-r border-vert2">
          <span
            className={`${merriweather.className} -rotate-90 whitespace-nowrap text-3xl text-vert2 bold tracking-widest uppercase`}
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
      <div className="px-6 sm:px-0 w-full col-span-2">
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
      {renderBlock(
        item.part3,
        item.part3Paragraphe1,
        item.part3Paragraphe2,
        item.part3Images,
        2
      )}
    </div>
  );
};

export default BrunchPage;
