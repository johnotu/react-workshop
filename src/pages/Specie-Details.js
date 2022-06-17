import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadSpinner from "../components/SecondSpinner";

export default function SpecieDetails() {
    const [specie, setSpecie] = useState({});
    const [isLoading, setIsLoading] = useState(false)
    const { id } = useParams();
    useEffect(() => {
        setIsLoading(true)
        const getDetails = async () => {
            const response = await fetch(`https://swapi.dev/api/species/${id}`)
            const responseJson = await response.json();

            setSpecie(responseJson)
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
                <h3>{specie.name}</h3>
                <div className="d-md-flex">
                    <div className="me-5">
                        <p><b>Classification</b>: {specie.classification}</p>
                        <p><b>Designation</b>: {specie.designation}</p>
                        <p><b>Average Height</b>: {specie.average_height}</p>
                        <p><b>Skin Colors</b>: {specie.skin_colors}</p>
                        <p><b>Hair Colors</b>: {specie.hair_colors}</p>
                        <p><b>Eye Colors</b>: {specie.eye_colors}</p>
                        <p><b>Average Lifespan</b>: {specie.average_lifespan}</p>
                    </div>
                    <div>
                        <p><b>Home World</b>: <a href={specie.homeworld}>{specie.homeworld ? "Click here" : "null"}</a></p>
                        <p><b>Language</b>: {specie.language}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}