import { useContext, useEffect } from "react";
import GlobalContext from "../context/globalContext";
import axios from "axios";
import url from "../url/url";



function Home() {
    const { infos, setInfos } = useContext(GlobalContext); 

  const getAllInfos = async () => {
    try {
      const response = await axios.get(`${url.local}/informations`);
      console.log(response.data);
      setInfos(response.data);  
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllInfos();
  },[]);  

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {infos.map((info) => (
          <li key={info.id}>{info.name}</li>
          
        ))}
      </ul>
    </div>
  );
}

export default Home;
