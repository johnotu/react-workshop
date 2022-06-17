import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom"
import LoadingSpinner from "../components/LoadingSpinner";

export default function Person() {
  // const { id } = useParams();
  
  const { search } = useLocation();
  const id  = parseInt(search.split("=") [1], 10);
  const [isPerson, setIsPerson] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getPerson = async () => {
      setIsLoading(true);
      
      const response = await fetch(`https://swapi.dev/api/people/${id}`);
      const responseJson = await response.json();

      setIsPerson(responseJson);
      setIsLoading(false)
    };

    getPerson();
  }, [id]);

  return (
    <div className="container">
      <h3 className="display-3">Person</h3>
      <p className="lead">Details of a Star wars person</p>
      <hr />

      {isLoading ? <LoadingSpinner /> : useEffect}

      <h4>{isPerson.name}</h4>
      <p>Height: {isPerson.height}</p>
      <p>Hair color: {isPerson.hair_color}</p>
    </div>
  );
}
