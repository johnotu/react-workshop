import { useState,useEffect } from "react";
import LoadSpinner from "../components/LoadingSpinner";
import { Link } from "react-router-dom";

export default function ThingsStarShips() {
  const [starShips, setStarShips] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const getStarShips = async () => {
        const response = await fetch("https://swapi.dev/api/starships")
        const responseJson = await response.json();

        setStarShips(responseJson.results);
        setIsLoading(false)
    }
    getStarShips();
  }, [])
  return (
    <div>
      <h1>StarShips</h1>
      <h4>List of all the StarShips</h4>
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
  {starShips.map((starShip, index) => (
        <tr className="people-table">
      <th scope="row">{index + 1}</th>
      <td>{starShip.name}</td>
      <td>{starShip.model}</td>
      <td>
          <Link to={`/things/starShips/${index + 2}`}>Details</Link>
      </td>
    </tr>
    ))}
    {isLoading ? <LoadSpinner /> : ""}
  </tbody>
</table>
    </div>
  );
}
