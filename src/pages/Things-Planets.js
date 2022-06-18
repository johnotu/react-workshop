import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from '../components/loader'


export default function ThingsPlanets() {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        const getPlanets = async () => {
          const response = await fetch("https://swapi.dev/api/planets");
          const responseJson = await response.json();
          setPlanets(responseJson.results);
        };
    
        getPlanets();
    
      }, []);

    const item = planets.length
    if (item) {
        return (
            <div>
                <div>
                    <h3>Planets</h3>
                    <p>List of Star Wars Planets</p>
                </div>
    
                <div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Orbital Period</th>
                  <th scope="col">Population</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {planets.map((planet, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{planet.name}</td>
                    <td>{planet.orbital_period}</td>
                    <td>{planet.population}</td>
                    <td>
                      <Link to={`/things/planet/${index + 1}`}>Details</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
            </div>
    
    
        )
    } else {
        return <Loader />
    }
}

