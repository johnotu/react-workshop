import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";

export default function ThingsPlanets() {
  const [planets, setPlanets] = useState([]);
  
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getPlanets = async () => {
      setIsLoading(true);

      const response = await fetch("https://swapi.dev/api/planets");
      const responseJson = await response.json();

      setPlanets(responseJson.results);
      setIsLoading(false)

    };

    getPlanets();
  }, []);

  return (
    <div className="container">
    <h3 className="">Planets</h3>
    <p className="lead">A list of Planets</p>
    <hr />
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Climate</th>
            <th scope="col">Terrain</th>
            <th scope="col">Population</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {planets.map((planet, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{planet.name}</td>
              <td>{planet.climate}</td>
              <td>{planet.terrain}</td>
              <td>{planet.population}</td>
              <td>
                <Link to={`/things/planets/${index + 1}`}>Details</Link>
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
