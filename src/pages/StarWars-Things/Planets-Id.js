import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";

export default function PlanetsID() {
    const { id } = useParams();
    
    const [planetID, setPlanetID] = useState({});
  
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      const getPlanetID = async () => {
        setIsLoading(true);
        
        const response = await fetch(`https://swapi.dev/api/planets/${id}`);
        const responseJson = await response.json();
  
        setPlanetID(responseJson);
        setIsLoading(false)
      };
  
      getPlanetID();
    }, [id]);
  
    return (
      <div className="container">
        <h3 className="">Planets</h3>
        <p className="lead">Details of Planets</p>
        <hr />
  
        {isLoading ? <LoadingSpinner /> : useEffect}
  
        <h4>{planetID.name}</h4>
        <p>Climate: {planetID.climate}</p>
        <p>Population: {planetID.population}</p>
      </div>
    );
  }
  