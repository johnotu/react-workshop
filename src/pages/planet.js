import { useEffect, useState } from "react";
// import { useLocation } from 'react-router-dom';
import Loader from '../components/loader';
import { useParams } from "react-router-dom";



export default function Planet() {
  // const { search } = useLocation();
  // const id = parseInt(search.split("=")[1], 10);
  let { id } = useParams()

  const [planet, setPlanet] = useState({});

  useEffect(() => {
    const getPlanet = async () => {
      const response = await fetch(`https://swapi.dev/api/planets/${id}`);
      const responseJson = await response.json();
      setPlanet(responseJson);

    };
    getPlanet();
  }, [id]);

  const item = planet.name;
      if (item) {
        return (
          <div className="container">
            <h3 className="display-3">Person</h3>
            <p className="lead">Details of a Star wars person</p>
            <hr />
            <h4>{planet.name}</h4>
            <p>Height: {planet.orbital_period}</p>
            <p>Hair color: {planet.population}</p>
          </div>
        );
      } else {
        return <Loader />
      }
}