
import {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import LoadingData from '../components/LoadingData';

export default function ThingsSpecies() {
    const [species,setSpecies] = useState([]);

    useEffect(() => {
      const getSpecies = async() =>{ 
        const res = await fetch('https://swapi.dev/api/species')
        const data = await res.json()
        console.log(data)
        setSpecies(data.results)
      }
     getSpecies()
    })

    console.log(species)
    if(species.length){ 
  return (
       <div className="container">
      <h3 className="display-3">Species</h3>
      <p className="lead">A list of Species</p>
      <hr />
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Designation</th>
              <th scope="col">Classification</th>
              <th scope="col">Language</th>
            </tr>
          </thead>
          <tbody>
             
              {species.map((specie,index) =>(
                <tr key={index}>
                <td>{index + 1}</td>
                <td>{specie.name}</td>
                <td>{specie.designation}</td>
                <td>{specie.classification}</td>
                <td>{specie.language}</td>
                <td> 
                  <Link to={`/things/species/${index + 1}`}>Details</Link>
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
