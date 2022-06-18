import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";

export default function StarshipsID() {
    const { id } = useParams();
    
    const [starshipID, setStarshipID] = useState({});
  
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      const getStarshipID = async () => {
        setIsLoading(true);
        
        const response = await fetch(`https://swapi.dev/api/starships/${id}`);
        const responseJson = await response.json();
  
        setStarshipID(responseJson);
        setIsLoading(false)
      };
  
      getStarshipID();
    }, [id]);
  
    return (
      <div className="container">
        <h3 className="">Starships</h3>
        <p className="lead">Details of Starships</p>
        <hr />
  
        {isLoading ? <LoadingSpinner /> : useEffect}
  
        <h4>{starshipID.name}</h4>
        <p>Manufacturer: {starshipID.manufacturer}</p>
        <p>Model: {starshipID.model}</p>
      </div>
    );
  }
  