import { useContext, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import GlobalContext from "../context/globalContext";

interface ChangeViewProps {
  center: [number, number];
  zoom: number;
}

const ChangeView = ({ center, zoom }: ChangeViewProps) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

const MapView = () => {
  const { infos } = useContext(GlobalContext); 
  const [center, setCenter] = useState<[number, number]>([45.899247, 6.129384]);
  const zoom = 13;


  const detailClick = (e: any) => {
    e.preventDefault();
    console.log(e);
  }

  return (
    <MapContainer style={{ height: '100vh', width: '100%' }}>
      <ChangeView center={center} zoom={zoom} />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {infos.map((info) => (
        <Marker key={info.id} position={[info.latitude, info.longitude]}>
          <Popup>
            {info.name}<br />
            {info.description}
            <a href="" onClick={detailClick}>plus de détail</a>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
