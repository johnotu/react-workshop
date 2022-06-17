import { useState,useEffect } from "react"
import LoadSpinner from "../components/LoadingSpinner";
import { Link } from "react-router-dom"

export default function ThingsVehicles() {
  const [vehicles, setVehicles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true)
    const getVehicles = async () => {
      const response = await fetch("https://swapi.dev/api/vehicles");
      const responseJson = await response.json();

      setVehicles(responseJson.results)
      console.log(responseJson);
      setIsLoading(false)
    }
    getVehicles();
  }, [])
  return (
    <div>
      <h1>Vehicles</h1>
      <h3>List of all the vehicles</h3>
      <hr />
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Model</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {vehicles.map((vehicle, index) => (
      <tr className="people-table">
      <th scope="row">{index + 1}</th>
      <td>{vehicle.name}</td>
      <td>{vehicle.model}</td>
      <td>
        <Link to={`/things/vehicles/${index + 4}`}>Details</Link>
      </td>
    </tr>
    ))}
    {isLoading ? <LoadSpinner /> : ""}
  </tbody>
</table>
    </div>
  );
}
