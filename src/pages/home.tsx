import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../context/globalContext";
import axios from "axios";
import url from "../url/url";
import MapView from "../pages/mapView";
import { Link } from "react-router-dom";
import AddBtn from "../components/buttons/addBtn";



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

  const navigate = useNavigate();

  const handleAdd = () => {
    navigate("/add");
  };

  return (
    <div className=" bg-main h-screen w-screen">
      <MapView />

        <AddBtn css='fixed right-0 mt-4' text="Ajouter un lieu" onClick={handleAdd}/>
  
    </div>
  );
}

export default Home;
