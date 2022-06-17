import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LoadSpinner from "../components/SecondSpinner"

export default function Person() {
  const { search } = useLocation();

  const [searchParams, setSearchParams] = useState({});
  const id = parseInt(search.split("=")[1], 10)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const getPerson = async () => {
      const response = await fetch(`https://swapi.dev/api/people/${id}`);
      const responseJson = await response.json();

      setSearchParams(responseJson);
      setIsLoading(false)
    };

    getPerson();
  }, [id]);

  return (
    <div className="container">
      <h3 className="display-3">Person</h3>
      <p className="lead">Details of a Star wars person</p>
      <hr />
      {isLoading ? <LoadSpinner /> : ""}
      <h4>{searchParams.name}</h4>
      <p>Height: {searchParams.height}</p>
      <p>Hair color: {searchParams.hair_color}</p>
    </div>
  );
}
