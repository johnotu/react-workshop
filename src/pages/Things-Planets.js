
import {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import LoadingData from '../components/LoadingData';

export default function ThingsPlanets() {
    const [planets,setPlanets] = useState([]);

    useEffect(() => {
      const getPlanets = async() =>{ 
        const res = await fetch('https://swapi.dev/api/planets')
        const data = await res.json()
        console.log(data)
        setPlanets(data.results)
      }
      getPlanets()
    })

    console.log(planets)
    if(planets.length){ 
  return (
       <div className="container">
      <h3 className="display-3">Planets</h3>
      <p className="lead">A list of Planets</p>
      <hr />
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Diameter</th>
              <th scope="col">Climate</th>
              <th scope="col">Gravity</th>
            </tr>
          </thead>
          <tbody>
             
              {planets.map((planet,index) =>(
                <tr key={index}>
                <td>{index + 1}</td>
                <td>{planet.name}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td> 
                  <Link to={`/things/planets/${index + 1}`}>Details</Link>
                </td>
                </tr>
              ) )}
                
           
          </tbody>
          </table>
          </div>
    </div>
  );
              }else{ 
                 return <LoadingData />
              }
}
