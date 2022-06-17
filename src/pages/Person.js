import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Person() {
  const { id } = useParams();

  const [person, setPerson] = useState({});

  useEffect(() => {
    const getPerson = async () => {
      const response = await fetch(`https://swapi.dev/api/people/${id}`);
      const responseJson = await response.json();

      setPerson(responseJson);
    };

    getPerson();
  }, [id]);

  return (
    <div className="container">
      <h3 className="display-3">Person</h3>
      <p className="lead">Details of a Star wars person</p>
      <hr />
      <h4>{person.name}</h4>
      <p>Height: {person.height}</p>
      <p>Hair color: {person.hair_color}</p>
    </div>
  );
}
