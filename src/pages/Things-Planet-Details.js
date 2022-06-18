import React, {useState,useEffect } from 'react'
import {useParams } from 'react-router-dom';
import LoadingData from '../components/LoadingData';

function ThingsPlanetDetails() {
    const [planet,setPlanet] = useState({});
    let { id } = useParams()
    useEffect(() => {
     const getPlanet = async () => {
        const res = await fetch(`https://swapi.dev/api/planets/${id}`)
        const data = await res.json()
        console.log(data)
        setPlanet(data)
     }
      getPlanet()
    },[id])
    
   const item = planet.name
   if(item){ 
     return (
    <div className="container">
        <h3 className="display-3">Planet</h3>
        <p className="lead">Details of a Planet</p>
        <hr />
        <h5>Name: {planet.name}</h5>
        <h5>Diameter: {planet.diameter}</h5>
        <h5>Climate: {planet.climate}</h5>
        <h5>Gravity: {planet.gravity}</h5>
      </div>
  )
 }else{ 
    return <LoadingData />
 }
}

export default ThingsPlanetDetails
