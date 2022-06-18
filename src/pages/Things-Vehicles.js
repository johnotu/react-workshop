
import {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import LoadingData from '../components/LoadingData';


export default function ThingsVehicles() {
    const [vehicles,setVehicles] = useState([]);

    useEffect(() => {
      const getVehicle = async() =>{ 
        const res = await fetch('https://swapi.dev/api/vehicles')
        const data = await res.json()
        console.log(data)
        setVehicles(data.results)
      }
      getVehicle()
    })

    console.log(vehicles)
    if(vehicles.length){ 
  return (
       <div className="container">
      <h3 className="display-3">Vehicles</h3>
      <p className="lead">A list of vehicles</p>
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
          
              {vehicles.map((vehicle,index) =>(
                <tr key={index}>
                <td>{index + 1}</td>
                <td>{vehicle.name}</td>
                <td>{vehicle.model}</td>
                <td>{vehicle.manufacturer}</td>
                <td> 
                  <Link to={`/things/vehicles/${index + 1}`}>Details</Link>
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
