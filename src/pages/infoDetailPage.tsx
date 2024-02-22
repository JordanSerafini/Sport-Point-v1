import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function DescriptionPage({ id }) {
  const [information, setinformation] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/informations/${id}`
        );
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        const data = await response.json();
        setinformation(data.result);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <h1>Page description</h1>
      {information.name && <h2>{information.name}</h2>}
      {information.description && <p> Détails: {information.description}</p>}
      {information.adresse && <p>Adresse: {information.adresse}</p>}
      {information.type && <p>Type: {information.type}</p>}
      {information.horaires && <p>horaires: {information.horaires}h</p>}
      {information.image && <p>{information.image}</p>}
      {information.site && <p>{information.site}</p>}
      {information.note && <p>Note: {information.note}/10</p>}

    </div>
  );
}

export default DescriptionPage;