import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";

export default function ThingsSpecies() {
  const [species, setSpecies] = useState([]);
  
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getSpecies = async () => {
      setIsLoading(true);

      const response = await fetch("https://swapi.dev/api/species");
      const responseJson = await response.json();

      setSpecies(responseJson.results);
      setIsLoading(false)

    };

    getSpecies();
  }, []);

  return (
    <div className="container">
    <h3 className="">Species</h3>
    <p className="lead">A list of Species</p>
    <hr />
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Classification</th>
            <th scope="col">Designation</th>
            <th scope="col">Language</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {species.map((warSpecie, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{warSpecie.name}</td>
              <td>{warSpecie.classification}</td>
              <td>{warSpecie.designation}</td>
              <td>{warSpecie.language}</td>
              <td>
                <Link to={`/things/species/${index + 1}`}>Details</Link>
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
