import React, {useState,useEffect } from 'react'
import {useParams } from 'react-router-dom';
import LoadingData from '../components/LoadingData';

function ThingsSpecieDetails() {
    const [specie,setSpecie] = useState({});
    let { id } = useParams()
    useEffect(() => {
     const getSpecie = async () => {
        const res = await fetch(`https://swapi.dev/api/species/${id}`)
        const data = await res.json()
        console.log(data)
        setSpecie(data)
     }
     getSpecie()
    },[id])
    
   const item = specie.name
   if(item){ 
     return (
    <div className="container">
        <h3 className="display-3">Specie</h3>
        <p className="lead">Details of a Specie</p>
        <hr />
        {/* {JSON.stringify(specie)} */}
        <h5>Name: {specie.name}</h5>
        <h5>Designation: {specie.designation}</h5>
        <h5>Classification: {specie.classification}</h5>
        <h5>Language: {specie.language}</h5>
      </div>
  )
 }else{ 
    return <LoadingData />
 }
}

export default ThingsSpecieDetails
