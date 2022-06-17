import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadSpinner from "../components/SecondSpinner";

export default function StarShipDetails() {
    const [starShip, setStarShip] = useState({});
    const [isLoading, setIsLoading] = useState(false)
    const { id } = useParams();
    useEffect(() => {
        setIsLoading(true)
        const getDetails = async () => {
            const response = await fetch(`https://swapi.dev/api/starships/${id}`)
            const responseJson = await response.json();

            setStarShip(responseJson)
            console.log(responseJson);
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
                <h3>{starShip.name}</h3>
                <div className="d-md-flex">
                    <div className="me-5">
                        <p><b>Model</b>: {starShip.model}</p>
                        <p><b>Manufacturer</b>: {starShip.manufacturer}</p>
                        <p><b>Cost In Credits</b>: {starShip.cost_in_credits}</p>
                        <p><b>Length</b>: {starShip.length}</p>
                        <p><b>Atmospheric speed</b>: {starShip.max_atmosphering_speed}</p>
                        <p><b>Crew</b>: {starShip.crew}</p>
                        <p><b>Passengers</b>: {starShip.passengers}</p>
                    </div>
                    <div>
                        <p><b>Cargo Capacity</b>: {starShip.cargo_capacity}</p>
                        <p><b>Consumables</b>: {starShip.consumables}</p>
                        <p><b>Hyperdrive Rating</b>: {starShip.hyperdrive_rating}</p>
                        <p><b>MGLT</b>: {starShip.MGLT}</p>
                        <p><b>Starship Class</b>: {starShip.starship_class}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}