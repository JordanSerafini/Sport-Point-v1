import { useContext, useEffect } from "react";
import GlobalContext from "../context/globalContext";
import axios from "axios";
import url from "../url/url";
import MapView from "../pages/mapView";



function Home() {

  const { infos, setInfos } = useContext(GlobalContext); 


  const getAllInfos = async () => {
    try {
      const response = await axios.get(`${url.local}/informations`);
      setInfos(response.data);  
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllInfos();
  },[]);  


  return (
    <div className="p-2 bg-main">
      <MapView />
    </div>
  );
}

export default Home;
