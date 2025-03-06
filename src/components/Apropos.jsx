import Map from "@/components/dynamic";
import Link from "next/link";
import React from "react";
import { MapPin, Phone } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const locations = [
  {
    name: "Maison Kerogan",
    address: "8 Che Bernard Lannaud",
    city: "29000 QUIMPER",
    phone: "02 98 11 56 58",
    facebook: "https://www.facebook.com/profile.php?id=61556132226074",
    instagram: "https://www.instagram.com/maison_kerogan/?hl=en",
  },
  {
    name: "Café de la Plage",
    address: "6 Pl. des déportés",
    city: "29980 Île-Tudy France",
    phone: "02 98 56 42 06",
    facebook: "https://www.facebook.com/iletudycafe",
    instagram: "https://www.instagram.com/cafedelaplage.iletudy/?hl=en",
  },
];

const A_propos = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-vert">
        Nos établissements
      </h1>

      {/* Texte explicatif */}
      <div className="max-w-3xl mx-auto mb-10 text-center">
        <p className="text-gray-700 leading-relaxed">
          Retrouvez-nous dans nos deux établissements en Bretagne. La Maison
          Kerogan à Quimper et Le Café de la Plage à l&apos;Île-Tudy sont liés
          par une même passion pour la gastronomie locale et l&apos;accueil
          chaleureux. Venez nous rendre visite et découvrir notre univers !
        </p>
      </div>

      {/* Cartes des établissements en flex */}
      <div className="flex flex-col md:flex-row justify-center gap-8 mb-12 max-w-5xl mx-auto">
        {locations.map((location, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-lg border border-vert/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex-1 min-w-0"
          >
            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-bold text-vert border-b border-vert/20 pb-2">
                {location.name}
              </h2>

              <div className="space-y-2">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-vert mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-800">{location.address}</p>
                    <p className="text-gray-800">{location.city}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-vert mr-2 flex-shrink-0" />
                  <p className="text-gray-800">{location.phone}</p>
                </div>
              </div>

              <div className="pt-4 flex justify-center space-x-6">
                <Link
                  href={location.facebook}
                  target="_blank"
                  className="group flex flex-col items-center"
                >
                  <div className="bg-gray-100 p-3 rounded-full group-hover:bg-blue-100 transition-colors duration-300">
                    <FaFacebook className="h-6 w-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
                  </div>
                  <span className="text-xs mt-1 text-gray-500">Facebook</span>
                </Link>

                <Link
                  href={location.instagram}
                  target="_blank"
                  className="group flex flex-col items-center"
                >
                  <div className="bg-gray-100 p-3 rounded-full group-hover:bg-pink-100 transition-colors duration-300">
                    <FaInstagram className="h-6 w-6 text-gray-600 group-hover:text-pink-600 transition-colors duration-300" />
                  </div>
                  <span className="text-xs mt-1 text-gray-500">Instagram</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carte en dessous des établissements */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-vert mb-4 text-center">
          Nous localiser
        </h2>
        <Map />
      </div>
    </div>
  );
};

export default A_propos;
