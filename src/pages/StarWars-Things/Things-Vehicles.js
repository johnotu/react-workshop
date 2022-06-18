import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";

export default function ThingsVehicles() {
  const [vehicles, setVehicles] = useState([]);

  const [ isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getVehicles = async () => {
      setIsLoading(true);

      const response = await fetch("https://swapi.dev/api/vehicles");
      const responseJson = await response.json();

      setVehicles(responseJson.results);
      setIsLoading(false)
    };

    getVehicles();
  }, []);

  return (
    <div className="container">
    <h3 className="">Vehicles</h3>
    <p className="lead">A list of Starwars Vehicles</p>
    <hr />
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Model</th>
            <th scope="col">Vehicle Class</th>
            <th scope="col">Duration</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((warVehicle, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{warVehicle.name}</td>
              <td>{warVehicle.model}</td>
              <td>{warVehicle.vehicle_class}</td>
              <td>{warVehicle.consumables}</td>
              <td>
                <Link to={`/things/vehicles/${index + 1}`}>Details</Link>
              </td>
            </tr>
          ))}
          
          {isLoading ? <LoadingSpinner /> : useEffect}

        </tbody>
      </table>
    </div>
  </div>
  );

}
