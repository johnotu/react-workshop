import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from '../components/loader'

export default function ThingsStarships() {
  
    const [starships, setStarship] = useState([]);
    useEffect(() => {
        const getStarship = async () => {
          const response = await fetch("https://swapi.dev/api/starships");
          const responseJson = await response.json();
          setStarship(responseJson.results);
        };
    
        getStarship();
    
      }, []);

      const item = starships.length
      if (item) {
        return (
          <div>
              <div>
                  <h3>Starships</h3>
                  <p>List of Star Wars Starships</p>
              </div>
  
              <div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Cost in Credits</th>
                <th scope="col">Cargo Capacity</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {starships.map((starship, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{starship.name}</td>
                  <td>{starship.cost_in_credits}</td>
                  <td>{starship.cargo_capacity}</td>
                  <td>
                    <Link to={`/things/starship/${index + 2}`}>Details</Link>
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
