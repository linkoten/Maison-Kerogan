import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const currentMedia = images[currentIndex];
  const isVideo = currentMedia.endsWith(".mp4");

  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
      {isVideo ? (
        <video
          className="rounded-lg object-cover w-full h-full"
          autoPlay
          muted
          controls
          preload="none"
        >
          <source src={images[currentIndex]} type="video/mp4" />
          <track
            src={images[currentIndex]}
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Votre navigateur ne supporte pas la balise vidéo.
        </video>
      ) : (
        <Image
          src={currentMedia}
          alt="Carousel media"
          fill
          className="rounded-lg object-cover"
        />
      )}
      <div className="absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ChevronLeft onClick={prevSlide} size={30} />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ChevronRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
};

export default Carousel;
