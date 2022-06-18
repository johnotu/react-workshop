import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from '../components/loader'


export default function ThingsStarships() {
    const [vehicles, setVehicle] = useState([]);
    useEffect(() => {
        const getVehicle = async () => {
          const response = await fetch("https://swapi.dev/api/vehicles");
          const responseJson = await response.json();
          setVehicle(responseJson.results);
        };
    
        getVehicle();
    
      }, []);

    const item = vehicles.length
    if (item) {
      return (
        <div>
            <div>
                <h3>Vehicles</h3>
                <p>List of Star Wars Vehicles</p>
            </div>

            <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Model</th>
              <th scope="col">Cargo Capacity</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{vehicle.name}</td>
                <td>{vehicle.model}</td>
                <td>{vehicle.cargo_capacity}</td>
                <td>
                  <Link to={`/things/vehicle/${index + 4}`}>Details</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>


    )
    } else{
      return <Loader />
    }
}

