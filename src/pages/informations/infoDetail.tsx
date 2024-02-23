import { useParams } from "react-router-dom"
import axios from "axios"
import url from "../../url/url"
import { useEffect, useState } from "react";
import HomeBtn from "../../components/buttons/homeBtn";



function InfoDetail() {

    const [infos, setInfos] = useState([{
        id: 0,
        name: "",
        description: "",
        adresse: "",
        longitude: 0,
        latitude: 0,
        image: "",
        type: "",
        note: 0,
        horaires: "",
        site: "",
        open: false
    }]);

    const { id } = useParams()
    
    const getInfoByID = async (id: number) => {
        try {
          const response = await axios.get(`${url.heroku}/informations/${id}`);
          setInfos([response.data]);  
        } catch (error) {
          console.error(error);
        }
      };

      useEffect(() => {
        getInfoByID(Number(id));
      },[]);


      
  return (
    <div>
            <div key={infos[0].id}>
                <p>{infos[0].name}</p>
                <p>{infos[0].description}</p>
                <p>{infos[0].adresse}</p>
                <p>{infos[0].type}</p>
            </div>
            <HomeBtn />
     
    </div>

  )
}

export default InfoDetail
