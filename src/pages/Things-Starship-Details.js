import React, {useState,useEffect } from 'react'
import {useParams } from 'react-router-dom';
import LoadingData from '../components/LoadingData';

function ThingsStarshipDetails() {
    const [starship,setStarship] = useState({});
    let { id } = useParams()
    useEffect(() => {
     const getStarShip = async () => {
        const res = await fetch(`https://swapi.dev/api/starships/${id}`)
        const data = await res.json()
        console.log(data)
        setStarship(data)
     }
     getStarShip()
    },[id])
    
   const item = starship.name
   if(item){ 
     return (
    <div className="container">
        <h3 className="display-3">Starship</h3>
        <p className="lead">Details of a Starship</p>
        <hr />
        <h5>Name: {starship.name}</h5>
        <h5>Model: {starship.model}</h5>
        <h5>Manufacturer: {starship.manufacturer}</h5>
      </div>
  )
 }else{ 
    return <LoadingData />
 }
}

export default ThingsStarshipDetails
