import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadSpinner from "../components/SecondSpinner";

export default function VehicleDetails() {
    const [vehicle, setVehicle] = useState({});
    const [isLoading, setIsLoading] = useState(false)
    const { id } = useParams();
    useEffect(() => {
        setIsLoading(true)
        const getDetails = async () => {
            const response = await fetch(`https://swapi.dev/api/vehicles/${id}`)
            const responseJson = await response.json();

            setVehicle(responseJson)
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
                <h3>{vehicle.name}</h3>
                <div className="d-md-flex">
                    <div className="me-5">
                        <p><b>Model</b>: {vehicle.model}</p>
                        <p><b>Manufacturer</b>: {vehicle.manufacturer}</p>
                        <p><b>Cost In Credits</b>: {vehicle.cost_in_credits}</p>
                        <p><b>Length</b>: {vehicle.length}</p>
                        <p><b>Atmospheric speed</b>: {vehicle.max_atmosphering_speed}</p>
                        <p><b>Crew</b>: {vehicle.crew}</p>
                        <p><b>Passengers</b>: {vehicle.passengers}</p>
                    </div>
                    <div>
                        <p><b>Cargo Capacity</b>: {vehicle.cargo_capacity}</p>
                        <p><b>Consumables</b>: {vehicle.consumables}</p>
                        <p><b>Vehicle Class</b>: {vehicle.vehicle_class}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}