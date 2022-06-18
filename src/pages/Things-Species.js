import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from '../components/loader'


export default function ThingsSpecies() {
    const [species, setSpecies] = useState([]);

    useEffect(() => {
        const getSpecies = async () => {
          const response = await fetch("https://swapi.dev/api/species");
          const responseJson = await response.json();
          setSpecies(responseJson.results);
        };
    
        getSpecies();
    
      }, []);

    const item = species.length
    if (item) {
        return (
            <div>
                <div>
                    <h3>Species</h3>
                    <p>List of Star Wars Species</p>
                </div>
    
                <div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Average Life Span</th>
                  <th scope="col">Language</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {species.map((specie, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{specie.name}</td>
                    <td>{specie.average_lifespan}</td>
                    <td>{specie.language}</td>
                    <td>
                      <Link to={`/things/specie/${index + 1}`}>Details</Link>
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

