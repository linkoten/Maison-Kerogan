import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Maximize } from "lucide-react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

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

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const toggleFullscreen = () => {
    setFullscreen(!fullscreen);
  };

  const currentMedia = images[currentIndex];
  const isVideo = currentMedia?.endsWith(".mp4");

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-[300px] bg-gray-100 rounded-lg flex items-center justify-center">
        Aucune image disponible
      </div>
    );
  }

  return (
    <>
      {fullscreen && (
        <div
          className="fixed inset-0 bg-black z-50 flex justify-center items-center"
          onClick={toggleFullscreen}
        >
          <button
            className="absolute top-4 right-4 text-white"
            onClick={toggleFullscreen}
          >
            <X size={30} />
          </button>
          {isVideo ? (
            <video className="max-h-screen max-w-full" autoPlay muted controls>
              <source src={currentMedia} type="video/mp4" />
            </video>
          ) : (
            <div className="relative max-h-[90vh] max-w-[90vw]">
              <Image
                src={currentMedia}
                alt={`Image ${currentIndex + 1}`}
                width={1200}
                height={800}
                className="max-h-[90vh] w-auto h-auto"
                style={{ objectFit: "contain" }}
                unoptimized
              />
            </div>
          )}
        </div>
      )}

      <div className="flex flex-col gap-2 w-full">
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] bg-gray-100 rounded-lg overflow-hidden">
          {/* Modification ici pour ajouter les transitions */}
          {images.map((image, index) => {
            const isVideoItem = image.endsWith(".mp4");
            return isVideoItem ? (
              currentIndex === index && (
                <div
                  key={index}
                  className="w-full h-full flex items-center justify-center"
                >
                  <video
                    className="rounded-lg max-h-full max-w-full"
                    autoPlay
                    muted
                    controls
                    preload="none"
                  >
                    <source src={image} type="video/mp4" />
                    <track
                      src={image}
                      kind="subtitles"
                      srcLang="fr"
                      label="Français"
                    />
                    Votre navigateur ne supporte pas la balise vidéo.
                  </video>
                </div>
              )
            ) : (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  currentIndex === index
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-0 scale-105 z-0"
                }`}
              >
                <Image
                  src={image}
                  alt={`Image ${index + 1}`}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
                  priority={index === currentIndex}
                />
              </div>
            );
          })}

          {/* Bouton plein écran */}
          {!isVideo && (
            <button
              onClick={toggleFullscreen}
              className="absolute bottom-3 right-3 bg-black/30 p-2 rounded-full text-white hover:bg-black/50 transition-all z-20"
            >
              <Maximize size={20} />
            </button>
          )}

          {/* Contrôles de navigation */}
          {images.length > 1 && (
            <>
              <button
                className="absolute top-1/2 -translate-y-1/2 left-3 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/40 transition-all z-20"
                onClick={prevSlide}
              >
                <ChevronLeft size={30} />
              </button>
              <button
                className="absolute top-1/2 -translate-y-1/2 right-3 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/40 transition-all z-20"
                onClick={nextSlide}
              >
                <ChevronRight size={30} />
              </button>
            </>
          )}
        </div>

        {/* Thumbnails avec transition améliorée */}
        {images.length > 1 && (
          <div className="hidden sm:flex gap-2 justify-center mt-2 overflow-x-auto py-2">
            {images.map((image, index) => {
              const isVideoThumb = image.endsWith(".mp4");
              return (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative h-16 w-24 rounded-md overflow-hidden transition-all duration-300 ${
                    currentIndex === index
                      ? "ring-2 ring-ocre scale-105 brightness-110"
                      : "opacity-70 hover:opacity-90 hover:scale-[1.02]"
                  }`}
                >
                  {isVideoThumb ? (
                    <div className="bg-black h-full w-full flex items-center justify-center text-white">
                      <span className="text-xs">Vidéo</span>
                    </div>
                  ) : (
                    <Image
                      src={image}
                      alt={`Miniature ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Image counter for mobile */}
        {images.length > 1 && (
          <div className="sm:hidden text-center text-sm text-gray-600">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </>
  );
};

export default Carousel;
