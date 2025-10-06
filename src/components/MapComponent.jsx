"use client";

import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

// Données des marqueurs
const markers = [
  {
    id: 1,
    nom: "La Maison Kerogan",
    adresse: "8 Chemin Bernard Lannaud",
    ville: "29000 Quimper",
    latitude: 47.9721229,
    longitude: -4.0963524,
    description: "Restaurant principal - Brunch, Tapas et événements",
  },
  {
    id: 2,
    nom: "Le Café De La Plage",
    adresse: "6 Place des déportés",
    ville: "29980 Île-Tudy",
    latitude: 47.845576755279566,
    longitude: -4.168278930831729,
    description: "Salon de thé en bord de mer",
  },
];

export const MapComponent = ({ className = "", height = "250px" }) => {
  // État pour gérer le montage côté client
  const [isMounted, setIsMounted] = useState(false);
  const [mapInstance, setMapInstance] = useState(null);

  // Références pour le nettoyage
  const mapRef = useRef(null);
  const containerRef = useRef(null);

  // ID unique pour éviter les conflits
  const mapId = useRef(
    `leaflet-map-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  );

  // Montage côté client uniquement
  useEffect(() => {
    setIsMounted(true);

    // Nettoyage au démontage
    return () => {
      if (mapInstance) {
        try {
          mapInstance.remove();
        } catch (error) {
          console.warn("Erreur lors du nettoyage de la carte:", error);
        }
      }

      // Nettoyage du DOM
      if (containerRef.current) {
        const leafletContainer =
          containerRef.current.querySelector(".leaflet-container");
        if (leafletContainer) {
          leafletContainer._leaflet_id = null;
        }
      }
    };
  }, [mapInstance]);

  // Callback quand la carte est créée
  const handleMapCreated = (map) => {
    if (mapInstance) {
      return; // ← AJOUTE CETTE LIGNE
    }
    setMapInstance(map);
    mapRef.current = map;

    // Configuration supplémentaire de la carte
    map.invalidateSize();

    // Ajuster la vue pour inclure tous les marqueurs
    if (markers.length > 1) {
      const group = new L.featureGroup(
        markers.map((marker) => L.marker([marker.latitude, marker.longitude]))
      );
      map.fitBounds(group.getBounds().pad(0.1));
    }
  };

  // Ne pas rendre côté serveur
  if (!isMounted) {
    return (
      <div
        className={`w-full border border-black bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center rounded-xl ${className}`}
        style={{ height }}
      >
        <div className="flex flex-col items-center gap-3 text-gray-600">
          <div className="w-8 h-8 border-2 border-vert border-t-transparent rounded-full animate-spin"></div>
          <span className="text-sm font-medium">Chargement de la carte...</span>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`w-full border border-black rounded-xl overflow-hidden shadow-lg ${className}`}
      style={{ height }}
      id={mapId.current}
    >
      <MapContainer
        ref={mapRef}
        center={[markers[0].latitude, markers[0].longitude]}
        zoom={10}
        style={{ width: "100%", height: "100%" }}
        className="z-10"
        scrollWheelZoom={false}
        zoomControl={true}
        attributionControl={true}
        key={mapId.current}
        whenCreated={handleMapCreated}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          maxZoom={19}
          tileSize={256}
        />

        {markers.map((marker) => (
          <Marker
            key={`${mapId.current}-marker-${marker.id}`}
            position={[marker.latitude, marker.longitude]}
          >
            <Popup maxWidth={300} className="custom-popup">
              <div className="p-3">
                {/* Header avec nom */}
                <div className="mb-3 pb-2 border-b border-vert/20">
                  <h3 className="text-lg font-bold text-vert mb-1">
                    {marker.nom}
                  </h3>
                  <p className="text-sm text-gray-600 italic">
                    {marker.description}
                  </p>
                </div>

                {/* Adresse */}
                <div className="mb-4 space-y-1">
                  <div className="flex items-start">
                    <svg
                      className="w-4 h-4 text-vert mr-2 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        {marker.adresse}
                      </p>
                      <p className="text-sm text-gray-600">{marker.ville}</p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${marker.latitude},${marker.longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-vert text-white text-sm rounded-lg hover:bg-vert/80 transition-colors font-medium"
                  >
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.499-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.559.499.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.497-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.148.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Google Maps
                  </a>
                  <a
                    href={`tel:+33297000000`} // Remplacez par vos vrais numéros
                    className="px-3 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors"
                    title="Téléphoner"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </a>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
