import {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import LoadingData from '../components/LoadingData';

export default function ThingsStarships() {
    const [starShips,setStarShips] = useState([]);

    useEffect(() => {
      const getStarShips = async() =>{ 
        const res = await fetch('https://swapi.dev/api/starships')
        const data = await res.json()
        console.log(data)
        setStarShips(data.results)
      }
      getStarShips()
    })

    console.log(starShips)
    if(starShips.length){
  return (
       <div className="container">
      <h3 className="display-3">Starships</h3>
      <p className="lead">A list of Starships</p>
      <hr />
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Model</th>
              <th scope="col">Manufacturer</th>
              {/* <th scope="col"></th> */}
            </tr>
          </thead>
          <tbody>
          
              {starShips.map((starship,index) =>(
                <tr key={index}>
                <td>{index + 1}</td>
                <td>{starship.name}</td>
                <td>{starship.model}</td>
                <td>{starship.manufacturer}</td>
                <td> 
                  <Link to={`/things/starships/${index + 2}`}>Details</Link>
                </td>
                </tr>
              ) )}
                
           
          </tbody>
          </table>
          </div>
    </div>
  )
              }else{ 
                 return <LoadingData />
              }
}
