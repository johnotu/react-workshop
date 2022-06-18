import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";

export default function ThingsStarships() {
  const [starships, setStarships] = useState([]);
  
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getStarships = async () => {
      setIsLoading(true);

      const response = await fetch("https://swapi.dev/api/starships");
      const responseJson = await response.json();

      setStarships(responseJson.results);
      setIsLoading(false)

    };

    getStarships();
  }, []);

  return (
    <div className="container">
    <h3 className="">Starships</h3>
    <p className="lead">A list of Starships</p>
    <hr />
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Model</th>
            <th scope="col">Manufacturer</th>
            <th scope="col">Passengers</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {starships.map((ship, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{ship.name}</td>
              <td>{ship.model}</td>
              <td>{ship.manufacturer}</td>
              <td>{ship.passengers}</td>
              <td>
                <Link to={`/things/starships/${index + 1}`}>Details</Link>
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
