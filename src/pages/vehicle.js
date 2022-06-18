import { useEffect, useState } from "react";
// import { useLocation } from 'react-router-dom';
import Loader from '../components/loader';
import { useParams } from "react-router-dom";


export default function Vehicle() {
  // const { search } = useLocation();
  // const id = parseInt(search.split("=")[1], 10);
  let { id } = useParams()

  const [vehicle, setVehicle] = useState({});

  useEffect(() => {
    const getVehicle = async () => {
      const response = await fetch(`https://swapi.dev/api/vehicles/${id}`);
      const responseJson = await response.json();
      setVehicle(responseJson);

    };
    getVehicle();
  }, [id]);

  const item = vehicle.name;
      if (item) {
        return (
          <div className="container">
            <h3 className="display-3">Person</h3>
            <p className="lead">Details of a Star wars person</p>
            <hr />
            <h4>{vehicle.name}</h4>
            <p>Height: {vehicle.model}</p>
            <p>Hair color: {vehicle.cargo_capacity}</p>
          </div>
        );
      } else {
        return <Loader />
      }
}