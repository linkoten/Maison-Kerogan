"use client";

import Image from "next/image";
import { Merriweather } from "next/font/google";
import { useEffect, useState } from "react";
import { Download, Maximize, X, Clock, Utensils, ChefHat } from "lucide-react";
import { getAllMenus } from "@/lib/getHygraphEvent";
import ReservationButton from "@/components/ui/ReservationButton";
import Link from "next/link";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

const Menu = () => {
  const [menuData, setMenuData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const allMenus = await getAllMenus();
        if (allMenus && allMenus.length > 0) {
          setMenuData(allMenus[0]);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération du menu:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  const openFullscreen = (image) => {
    setFullscreenImage(image);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  // États de chargement - Version embellie
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <div className="relative">
          {/* Cercles décoratifs en arrière-plan */}
          <div className="absolute -inset-20 opacity-20">
            <div className="absolute top-0 left-0 w-20 h-20 bg-ocre rounded-full animate-pulse"></div>
            <div className="absolute top-10 right-0 w-12 h-12 bg-vert rounded-full animate-pulse delay-300"></div>
            <div className="absolute bottom-0 left-10 w-16 h-16 bg-ocre/50 rounded-full animate-pulse delay-500"></div>
          </div>

          <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 p-8 text-center">
            <div className="flex flex-col items-center gap-6">
              {/* Logo de chargement animé */}
              <div className="relative">
                <div className="w-16 h-16 border-4 border-ocre/20 border-t-ocre rounded-full animate-spin"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-ocre to-vert rounded-full opacity-20 animate-pulse"></div>
              </div>

              <div>
                <h2
                  className={`${merriweather.className} text-2xl font-bold text-vert mb-2`}
                >
                  Préparation de nos menus
                </h2>
                <p className="text-gray-600">
                  Récupération des délicieuses informations...
                </p>
              </div>

              {/* Barre de progression décorative */}
              <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-ocre to-vert animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // État sans données - Version embellie
  if (!menuData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <div className="text-center max-w-lg mx-auto px-6">
          <div className="relative mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Clock size={40} className="text-gray-400" />
            </div>
            <div className="absolute -inset-2 bg-gradient-to-br from-gray-200/20 to-gray-300/20 rounded-full animate-ping"></div>
          </div>

          <h2
            className={`${merriweather.className} text-3xl font-bold text-gray-800 mb-4`}
          >
            Menus en préparation
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Nos chefs travaillent actuellement sur de nouveaux menus. Revenez
            bientôt pour découvrir nos créations culinaires !
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-ocre to-vert rounded-full mx-auto"></div>
        </div>
      </div>
    );
  }

  // Composant MenuCard embelli
  const MenuCard = ({
    title,
    description,
    image,
    icon: Icon,
    accentColor,
    gradientFrom,
    gradientTo,
  }) => (
    <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100/50 hover:-translate-y-2">
      {/* Effet de brillance au hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 group-hover:translate-x-full"></div>

      {/* En-tête avec dégradé */}
      <div className={`${accentColor} p-8 text-white relative overflow-hidden`}>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-white/25 rounded-2xl backdrop-blur-sm">
              <Icon size={28} />
            </div>
            <h2
              className={`${merriweather.className} text-2xl md:text-3xl font-bold`}
            >
              {title}
            </h2>
          </div>

          {description && (
            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <p className="text-white/95 leading-relaxed text-sm md:text-base">
                {description}
              </p>
            </div>
          )}

          {/* Bouton de réservation */}
          <div className="mt-6">
            <ReservationButton variant={title === "Menu du Midi" ? "midi" : "compact"}>
              <span>Réserver</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </ReservationButton>
          </div>
        </div>
      </div>

      {/* Image du menu */}
      {image && (
        <div className="p-8">
          <div className="relative group/image">
            <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 shadow-inner">
              <Image
                src={image.url}
                alt={`Menu ${title}`}
                fill
                className="object-contain transition-all duration-500 group-hover/image:scale-110"
                unoptimized
              />

              {/* Overlay avec boutons */}
              <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover/image:opacity-100">
                <div className="flex gap-4">
                  {/* Bouton Plein écran */}
                  <button
                    onClick={() => openFullscreen(image)}
                    className="bg-white/95 backdrop-blur-sm p-4 rounded-2xl text-gray-800 hover:bg-white hover:scale-110 transition-all duration-300 shadow-2xl border border-white/50"
                    title="Voir en plein écran"
                  >
                    <Maximize size={24} />
                  </button>

                  {/* Bouton Télécharger */}
                  <button
                    onClick={() => window.open(image.url, "_blank")}
                    className="bg-white/95 backdrop-blur-sm p-4 rounded-2xl text-gray-800 hover:bg-white hover:scale-110 transition-all duration-300 shadow-2xl border border-white/50"
                    title="Télécharger"
                  >
                    <Download size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Message si pas d'image */}
      {!image && (
        <div className="p-8">
          <div className="text-center py-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border-2 border-dashed border-gray-300">
            <Icon size={64} className="mx-auto mb-4 text-gray-300" />
            <h3 className="text-lg font-semibold text-gray-600 mb-2">
              Menu en préparation
            </h3>
            <p className="text-sm text-gray-500">
              Notre chef travaille sur ce délicieux menu
            </p>
            <div className="flex justify-center gap-1 mt-4">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* MODAL PLEIN ÉCRAN - Version améliorée */}
      {fullscreenImage && (
        <div className="fixed inset-0 bg-black/98 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          {/* Bouton fermer stylisé */}
          <button
            onClick={closeFullscreen}
            className="absolute top-8 right-8 text-white/70 hover:text-white p-3 hover:bg-white/10 rounded-2xl transition-all duration-300 z-60 backdrop-blur-sm border border-white/20"
          >
            <X size={32} />
          </button>

          <div className="relative max-w-7xl max-h-full flex items-center justify-center">
            <Image
              src={fullscreenImage.url}
              alt="Menu en plein écran"
              width={1200}
              height={1600}
              className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-2xl shadow-2xl"
              unoptimized
            />

            {/* Bouton télécharger en plein écran */}
            <button
              onClick={() => window.open(fullscreenImage.url, "_blank")}
              className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm p-4 rounded-2xl text-gray-800 hover:bg-white hover:scale-110 transition-all duration-300 shadow-2xl border border-white/50"
              title="Télécharger"
            >
              <Download size={28} />
            </button>
          </div>
        </div>
      )}

      {/* CONTENU PRINCIPAL - Version embellie */}
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
        {/* Motifs décoratifs d'arrière-plan */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-ocre/5 rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-vert/5 rounded-full"></div>
          <div className="absolute bottom-40 left-20 w-20 h-20 bg-ocre/10 rounded-full"></div>
        </div>

        <div className="relative container mx-auto px-4 py-16">
          {/* En-tête avec design amélioré */}
          <div className="text-center mb-20">
            <div className="relative inline-block">
              <h1
                className={`${merriweather.className} text-4xl md:text-6xl font-bold text-vert mb-6 relative z-10`}
              >
                {menuData.title || "Nos Menus"}
              </h1>

              {/* Effet de texte décoratif */}
              <div className="absolute inset-0 text-4xl md:text-6xl font-bold text-ocre/10 transform translate-x-1 translate-y-1 -z-10">
                {menuData.title || "Nos Menus"}
              </div>
            </div>

            {/* Ligne gradient simplifiée */}
            <div className="w-32 h-1 bg-gradient-to-r from-ocre to-vert rounded-full mx-auto mb-6"></div>

            {/* NOUVEAU: Utilisation de menuDescription avec fallback */}
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {menuData.menuDescription ||
                "Découvrez nos créations culinaires soigneusement élaborées par notre chef"}
            </p>
          </div>

          {/* Grille des menus */}
          <div className="max-w-7xl mx-auto">
            {/* Si on a les deux menus */}
            {menuData.menuDuMidi && menuData.menuDuSoir ? (
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
                <MenuCard
                  title="Menu du Midi"
                  description={menuData.menuDuMidi}
                  image={menuData.menuDuMidiImage}
                  icon={Utensils}
                  accentColor="bg-ocre"
                />
                <MenuCard
                  title="Menu du Soir"
                  description={menuData.menuDuSoir}
                  image={menuData.menuDuSoirImage}
                  icon={ChefHat}
                  accentColor="bg-vert"
                />
              </div>
            ) : (
              /* Si on a qu'un seul menu - centré */
              <div className="max-w-3xl mx-auto">
                {menuData.menuDuMidi && (
                  <MenuCard
                    title="Menu du Midi"
                    description={menuData.menuDuMidi}
                    image={menuData.menuDuMidiImage}
                    icon={Utensils}
                    accentColor="bg-gradient-to-br from-ocre via-orange-500 to-orange-600"
                  />
                )}
                {menuData.menuDuSoir && (
                  <MenuCard
                    title="Menu du Soir"
                    description={menuData.menuDuSoir}
                    image={menuData.menuDuSoirImage}
                    icon={ChefHat}
                    accentColor="bg-gradient-to-br from-vert via-green-600 to-green-700"
                  />
                )}
              </div>
            )}

            {/* Message si aucun menu */}
            {!menuData.menuDuMidi && !menuData.menuDuSoir && (
              <div className="text-center py-24">
                <div className="relative mb-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto shadow-xl">
                    <Clock size={64} className="text-gray-400" />
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-br from-gray-200/20 to-gray-300/20 rounded-full animate-ping"></div>
                </div>

                <h3
                  className={`${merriweather.className} text-3xl font-bold text-gray-700 mb-4`}
                >
                  Menus en préparation
                </h3>
                <p className="text-gray-500 text-xl mb-8 max-w-md mx-auto">
                  Nos menus seront bientôt disponibles. Restez connectés pour
                  découvrir nos nouvelles créations !
                </p>

                <div className="w-24 h-1 bg-gradient-to-r from-ocre to-vert rounded-full mx-auto"></div>
              </div>
            )}
          </div>

          {/* Footer info embelli */}
          <div className="text-center mt-24">
            <div className="w-20 h-0.5 bg-gradient-to-r from-ocre to-vert rounded-full mx-auto mb-6"></div>
            <p className="text-gray-500 text-lg">
              Pour plus d&apos;informations ou réservations,{" "}
              <Link
                href="/Contact"
                className="text-vert font-medium hover:text-ocre transition-colors underline decoration-vert/30 hover:decoration-ocre"
              >
                contactez-nous
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
