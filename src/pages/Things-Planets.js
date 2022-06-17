import { useState,useEffect } from "react"
import LoadSpinner from "../components/LoadingSpinner";
import { Link } from "react-router-dom"

export default function ThingsPlanets() {
    const [planets, setPlanets] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true)
        const getPlanets = async () => {
            const response = await fetch("https://swapi.dev/api/planets");
            const responseJson = await response.json();
    
            setPlanets(responseJson.results)
            console.log(responseJson);
            setIsLoading(false)
        }
        getPlanets();
    }, [])
    return(
        <div>
            <h1>Planets</h1>
            <h3>List of all the Planets</h3>
            <hr />
            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Rotation Period</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {planets.map((planet, index) => (
        <tr className="people-table">
            <th scope="row">{index + 1}</th>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>
                <Link to={`/things/planets/${index + 1}`}>Details</Link>
            </td>
    </tr>
    ))}
    {isLoading ? <LoadSpinner /> : ""}
  </tbody>
</table>
        </div>
    )
}