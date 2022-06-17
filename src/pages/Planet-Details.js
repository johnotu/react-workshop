import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadSpinner from "../components/SecondSpinner";

export default function PlanetDetails() {
    const [planet, setPlanet] = useState({});
    const [isLoading, setIsLoading] = useState(false)
    const { id } = useParams();
    useEffect(() => {
        setIsLoading(true)
        const getDetails = async () => {
            const response = await fetch(`https://swapi.dev/api/planets/${id}`)
            const responseJson = await response.json();

            setPlanet(responseJson)
            setIsLoading(false)
        }
        getDetails();
    }, [id])
    return(
        <div className="container">
            <h1>Details of every StarShip</h1>
            <h4>All StarShips details are listed below</h4>
            <hr />
            <div className="mt-4">
            {isLoading ? <LoadSpinner /> : ""}
                <h3>{planet.name}</h3>
                <div className="d-md-flex">
                    <div className="me-5">
                        <p><b>Rotation Period</b>: {planet.rotation_period}</p>
                        <p><b>Orbital Period</b>: {planet.orbital_period}</p>
                        <p><b>Diameter</b>: {planet.diameter}</p>
                        <p><b>Climate</b>: {planet.climate}</p>
                        <p><b>Gravity</b>: {planet.gravity}</p>
                        <p><b>Terrain</b>: {planet.terrain}</p>
                        <p><b>Surface Water</b>: {planet.surface_water}</p>
                    </div>
                    <div>
                        <p><b>Population</b>: {planet.population}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}