import { useEffect, useState } from "react";
// import { useLocation } from 'react-router-dom';
import Loader from '../components/loader';
import { useParams } from "react-router-dom";



export default function Starship() {
  let { id } = useParams()

  // const { search } = useLocation();
  // const id = parseInt(search.split("=")[1], 10);

  const [starship, setStarship] = useState({});

  useEffect(() => {
    const getStarship = async () => {
      const response = await fetch(`https://swapi.dev/api/starships/${id}`);
      const responseJson = await response.json();
      setStarship(responseJson);

    };
    getStarship();
  }, [id]);

  const item = starship.name;
      if (item) {
        return (
          <div className="container">
            <h3 className="display-3">Person</h3>
            <p className="lead">Details of a Star wars person</p>
            <hr />
            <h4>{starship.name}</h4>
            <p>Height: {starship.cost_in_credits}</p>
            <p>Hair color: {starship.cargo_capacity}</p>
          </div>
        );
      } else {
        return <Loader />
      }
}