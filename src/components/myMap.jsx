"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const markers = [
  {
    nom: "La Maison Kerogan",
    adresse: "8 Che Bernard Lannaud 29000 Quimper",
    latitude: 47.9721229, // Exemple de latitude
    longitude: -4.0963524, // Exemple de longitude
  },
  {
    nom: "Le Café De La Plage",
    adresse: "6 Pl. des déportés 29980 Île-Tudy",
    latitude: 47.845576755279566, // Exemple de latitude
    longitude: -4.168278930831729, // Exemple de longitude
  },
];

const MyMap = () => {
  // Définissez ici votre marqueur personnalisé

  return (
    <MapContainer
      center={[markers[0].latitude, markers[0].longitude]}
      zoom={9}
      style={{ width: "50%", height: "200px " }}
      className=" mx-auto border border-black z-10 lg:w-1/2"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker, index) => (
        <Marker
          key={index}
          position={[marker.latitude, marker.longitude]}
          draggable={true}
          animate={true}
        >
          <Popup>
            {marker.nom} <br />
            {marker.adresse} <br />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MyMap;
