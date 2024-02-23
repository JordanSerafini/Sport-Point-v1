import React, { useContext, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import GlobalContext from "../context/globalContext";

import coordinateService from "../services/coordinateService";

interface ChangeViewProps {
  center: [number, number];
  zoom: number;
}

const ChangeView = ({ center, zoom }: ChangeViewProps) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
};

const MapView = () => {
  const { infos } = useContext(GlobalContext);
  const [adresse, setAdresse] = useState<string>("");
  const [center, setCenter] = useState<[number, number]>([45.899247, 6.129384]);
  const zoom = 13;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (adresse.trim() !== "") {
      const response = await coordinateService.getAdressCoordinate(adresse);
      if (response.latitude && response.longitude) {
        setCenter([response.latitude, response.longitude]);
      }
    }
  };

  const detailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="flex flex-col items-center gap-4 pt-4">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={adresse}
          onChange={(e) => setAdresse(e.target.value)}
          placeholder="Chercher une ville"
          className="text-center h-[10vh] align-middle border-2 border-marron rounded-3xl w-9/10"
        />
        <button type="submit" className="btn">
          Rechercher
        </button>
      </form>
      <MapContainer
        className="border-2 border-marron"
        style={{ height: "70vh", width: "100%" }}
      >
        <ChangeView center={center} zoom={zoom} />
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {infos.map((info) => (
          <Marker key={info.id} position={[info.latitude, info.longitude]}>
            <Popup>
              {info.name}
              <br />
              {info.description}
              <a href="" onClick={detailClick}>
                plus de détail
              </a>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
