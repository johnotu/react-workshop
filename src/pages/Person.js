import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom"
import Loader from '../components/loader';


export default function Person() {
  const { id } = useParams();

  const [person, setPerson] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const searchId = searchParams.get('id')
  console.log(searchId);
  // console.log(searchParams);


  useEffect(() => {
    const getPerson = async () => {
      const response = await fetch(`https://swapi.dev/api/people/${id}`);
      const responseJson = await response.json();
      
      // const urlParams = new URLSearchParams.get(id)
      // console.log(urlParams);

      setPerson(responseJson);
    };

    getPerson();
  }, [id]);

    const item = person.name;
    if (item) {
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
    } else {
      return <Loader />
    }
 
}
