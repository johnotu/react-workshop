import { useEffect, useState } from "react";
// import { useLocation } from 'react-router-dom';
import Loader from '../components/loader';
import { useParams } from "react-router-dom";



export default function Specie() {
  // const { search } = useLocation();
  // const id = parseInt(search.split("=")[1], 10);
  let { id } = useParams()

  const [specie, setSpecie] = useState({});

  useEffect(() => {
    const getSpecie = async () => {
      const response = await fetch(`https://swapi.dev/api/species/${id}`);
      const responseJson = await response.json();
      setSpecie(responseJson);

    };
    getSpecie();
  }, [id]);

  const item = specie.name;
      if (item) {
        return (
          <div className="container">
            <h3 className="display-3">Person</h3>
            <p className="lead">Details of a Star wars person</p>
            <hr />
            <h4>{specie.name}</h4>
            <p>Height: {specie.average_lifespan}</p>
            <p>Hair color: {specie.language}</p>
          </div>
        );
      } else {
        return <Loader />
      }
}