import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";

export default function VehiclesID(){
    const { id } = useParams();

    const [vehicleID, setVehicleID] = useState({});

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getVehicleID = async () => {
            setIsLoading(true);
        
            const response = await fetch(`https://swapi.dev/api/vehicles/${id}`);
            const responseJson = await response.json();

            setVehicleID(responseJson);
            setIsLoading(false)
        };

        getVehicleID();
    }, [id]);

    return (
        <div className="container">
          <h3 className="">Vehicles</h3>
          <p className="lead">Details of Vehicles</p>
          <hr />
    
          {isLoading ? <LoadingSpinner /> : useEffect}
    
          <h4>{vehicleID.name}</h4>
          <p>Manufacturer: {vehicleID.manufacturer}</p>
          <p>Model: {vehicleID.model}</p>
        </div>
      );
}