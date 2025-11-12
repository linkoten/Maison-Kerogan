import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Maximize, Play } from "lucide-react";

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

  // FONCTION : Détection basée sur l'objet ou l'URL
  const isVideo = (media) => {
    if (!media) return false;

    // Si c'est un objet Hygraph avec mimeType
    if (typeof media === "object" && media.mimeType) {
      return media.mimeType.startsWith("video/");
    }

    // Si c'est une URL simple (fallback)
    if (typeof media === "string") {
      return (
        media.includes(".mp4") ||
        media.includes(".mov") ||
        media.includes(".webm") ||
        media.includes(".avi") ||
        media.includes("video") ||
        media.toLowerCase().includes("mp4")
      );
    }

    return false;
  };

  // FONCTION : Récupérer l'URL du média
  const getMediaUrl = (media) => {
    if (typeof media === "object" && media.url) {
      return media.url;
    }
    return media; // C'est déjà une URL
  };

  // FONCTION : Récupérer le nom du fichier
  const getMediaName = (media) => {
    if (typeof media === "object" && media.fileName) {
      return media.fileName;
    }
    return `Média ${currentIndex + 1}`;
  };

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-[300px] bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Aucun média disponible</p>
      </div>
    );
  }

  const currentMedia = images[currentIndex];
  const isCurrentVideo = isVideo(currentMedia);
  const currentMediaUrl = getMediaUrl(currentMedia);

  return (
    <>
      {/* MODAL PLEIN ÉCRAN - SEULEMENT POUR LES IMAGES */}
      {fullscreen && !isCurrentVideo && (
        <div
          className="fixed inset-0 bg-gray z-50 flex justify-center items-center"
          onClick={toggleFullscreen}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-60"
            onClick={toggleFullscreen}
          >
            <X size={30} />
          </button>

          <div className="relative max-h-[90vh] max-w-[90vw]">
            <Image
              src={currentMediaUrl}
              alt={getMediaName(currentMedia)}
              width={1200}
              height={800}
              className="max-h-[90vh] w-auto h-auto rounded-lg"
              style={{ objectFit: "contain" }}
              unoptimized
            />
          </div>
        </div>
      )}

      <div className="flex flex-col gap-2 w-full">
        {/* CONTENEUR PRINCIPAL */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] bg-gray-100 rounded-lg overflow-hidden group">
          {/* AFFICHAGE DES MÉDIAS */}
          {images.map((media, index) => {
            const isVideoItem = isVideo(media);
            const mediaUrl = getMediaUrl(media);
            const mediaName = getMediaName(media);

            return (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  currentIndex === index
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-0 scale-105 z-0"
                }`}
              >
                {isVideoItem ? (
                  // AFFICHAGE VIDÉO
                  <div className="w-full h-full flex items-center justify-center bg-gray">
                    <video
                      className="rounded-lg max-h-full max-w-full object-contain"
                      controls
                      preload="metadata"
                      controlsList="nodownload"
                    >
                      <source src={mediaUrl} type="video/mp4" />
                      Votre navigateur ne supporte pas la balise vidéo.
                    </video>
                  </div>
                ) : (
                  // AFFICHAGE IMAGE - AVEC BOUTON PLEIN ÉCRAN
                  <>
                    <Image
                      src={mediaUrl}
                      alt={mediaName}
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
                      priority={index === currentIndex}
                      unoptimized
                    />

                    {/* BOUTON PLEIN ÉCRAN SEULEMENT POUR LES IMAGES */}
                    {currentIndex === index && (
                      <button
                        onClick={toggleFullscreen}
                        className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full text-gray-800 hover:bg-white hover:scale-105 transition-all duration-200 shadow-lg z-20"
                      >
                        <Maximize size={20} />
                      </button>
                    )}
                  </>
                )}
              </div>
            );
          })}

          {/* CONTRÔLES DE NAVIGATION AMÉLIORÉS */}
          {images.length > 1 && (
            <>
              <button
                className="absolute top-1/2 -translate-y-1/2 left-4 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 group-hover:opacity-100 opacity-70 z-20"
                onClick={prevSlide}
              >
                <ChevronLeft size={24} className="text-gray-800" />
              </button>
              <button
                className="absolute top-1/2 -translate-y-1/2 right-4 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 group-hover:opacity-100 opacity-70 z-20"
                onClick={nextSlide}
              >
                <ChevronRight size={24} className="text-gray-800" />
              </button>
            </>
          )}
        </div>

        {/* MINIATURES SIMPLIFIÉES */}
        {images.length > 1 && (
          <div className="hidden sm:flex gap-2 justify-center mt-2 overflow-x-auto py-2">
            {images.map((media, index) => {
              const isVideoThumb = isVideo(media);
              const mediaUrl = getMediaUrl(media);

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
                    // MINIATURE VIDÉO SIMPLIFIÉE
                    <div className="bg-gradient-to-br from-gray-600 to-gray-800 h-full w-full flex items-center justify-center text-white relative">
                      <Play size={20} fill="white" />
                    </div>
                  ) : (
                    // MINIATURE IMAGE
                    <div className="relative h-full w-full">
                      <Image
                        src={mediaUrl}
                        alt={`Miniature ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="80px"
                        unoptimized
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* COMPTEUR MOBILE SIMPLIFIÉ */}
        {images.length > 1 && (
          <div className="sm:hidden text-center text-sm text-gray-600">
            <span className="font-semibold">{currentIndex + 1}</span>
            <span className="mx-2">/</span>
            <span>{images.length}</span>
          </div>
        )}
      </div>
    </>
  );
};

export default Carousel;
