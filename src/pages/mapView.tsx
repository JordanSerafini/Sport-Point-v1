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


  const detailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(e);
  }

  return (
    <div className='flex flex-col items-center gap-4'>
      <input type="text" placeholder='Chercher une ville' className='align-middle border-2 border-marron rounded-3xl p-2 w-9/10' />
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
    </div>
  );
};

export default MapView;
