import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Person() {
  const { search } = useLocation();
   const id = parseInt(search.split("=")[1], 10);
  const [person, setPerson] = useState({});
  const [isLoading, setIsLoading]= useState(true)
  useEffect(() => {
    const getPerson = async () => {
      const response = await fetch(`https://swapi.dev/api/people/${id}`);
      const responseJson = await response.json();
      setPerson(responseJson);
     setIsLoading(false)
    };

    getPerson();
  }, [id]);


  return (
    <div className="container">
      <h4 className="text-center">{isLoading? "Loading...": ""}</h4>
      <h3 className="display-3">Person</h3>
      <p className="lead">Details of a Star wars person</p>
      <hr />
      <h4>{person.name}</h4>
      <p>Height: {person.height}</p>
      <p>Hair color: {person.hair_color}</p>
    </div>
  );
}
