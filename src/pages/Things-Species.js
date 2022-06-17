import { useState,useEffect } from "react"
import LoadSpinner from "../components/LoadingSpinner";
import { Link } from "react-router-dom"

export default function ThingsSpecies() {
    const [species, setSpecies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true)
        const getSpecies = async () => {
            const response = await fetch("https://swapi.dev/api/species");
            const responseJson = await response.json();
    
            setSpecies(responseJson.results)
            console.log(responseJson);
            setIsLoading(false)
        }
        getSpecies();
    }, [])
    return(
        <div>
            <h1>Species</h1>
            <h3>List of all the Species</h3>
            <hr />
            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Classification</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {species.map((specie, index) => (
        <tr className="people-table">
        <th scope="row">{index + 1}</th>
        <td>{specie.name}</td>
        <td>{specie.classification}</td>
        <td>
            <Link to={`/things/species/${index + 1}`}>Details</Link>
        </td>
        </tr>
    ))}
    {isLoading ? <LoadSpinner /> : ""}
  </tbody>
</table>
        </div>
    )
}