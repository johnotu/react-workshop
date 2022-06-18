import React, {useState,useEffect } from 'react'
import {useParams } from 'react-router-dom';
import LoadingData from '../components/LoadingData';

function ThingsVehicle() {
    const [vehicle,setVehicle] = useState({});
    let { id } = useParams()
    useEffect(() => {
     const getVehicle = async () => {
        const res = await fetch(`https://swapi.dev/api/vehicles/${id}`)
        const data = await res.json()
        console.log(data)
        setVehicle(data)
     }
      getVehicle()
    },[id])
    
   const item = vehicle.name
   if(item){ 
     return (
    <div className="container">
        <h3 className="display-3">Vehicle</h3>
        <p className="lead">Details of a vehicle</p>
        <hr />
        <h5>Name: {vehicle.name}</h5>
        <h5>Model: {vehicle.model}</h5>
        <h5>Manufacturer: {vehicle.manufacturer}</h5>
      </div>
  )
 }else{ 
    return <LoadingData />
 }
}


export default ThingsVehicle
