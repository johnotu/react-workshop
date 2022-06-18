import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";

export default function SpeciesID() {
    const { id } = useParams();
    
    const [specieID, setSpecieID] = useState({});
  
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      const getSpecieID = async () => {
        setIsLoading(true);
        
        const response = await fetch(`https://swapi.dev/api/species/${id}`);
        const responseJson = await response.json();
  
        setSpecieID(responseJson);
        setIsLoading(false)
      };
  
      getSpecieID();
    }, [id]);
  
    return (
      <div className="container">
        <h3 className="">Species</h3>
        <p className="lead">Details of Species</p>
        <hr />
  
        {isLoading ? <LoadingSpinner /> : useEffect}
  
        <h4>{specieID.name}</h4>
        <p>Classification: {specieID.classification}</p>
        <p>Language: {specieID.language}</p>
      </div>
    );
  }
  