'use client';

import React from 'react';
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

const markers = [
    {
        nom: 'La Maison Kerogan',
        adresse: '3 rue Kerogan 29200 Quimper- France',
        latitude: 47.97579677324572, // Exemple de latitude
        longitude: -4.110731256896189, // Exemple de longitude
    },
    {
        nom: 'Le Café De La Plage',
        adresse: '6 Pl. des déportés 29980 Île-Tudy France',
        latitude: 47.845576755279566, // Exemple de latitude
        longitude: -4.168278930831729, // Exemple de longitude
    },
    
];

console.log(markers);

const MyMap = () => {
    // Définissez ici votre marqueur personnalisé
    

    return (
        <MapContainer
            center={[markers[0].latitude, markers[0].longitude]}
            zoom={10}
            style={{ width: '50%', height: '300px ' }}
            className=' mx-auto border border-black z-10'
        >
            <TileLayer
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
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
