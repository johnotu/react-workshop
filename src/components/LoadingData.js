import React from 'react'
import img from '../hourglass.gif'

function LoadingData() {
    const style = { 
        width:'80px',
        height:'80px'

    }
  return (
    <div className="text-center  mt-5">
      <img src={img} alt="loading" style={style}/>
      <p className="mt-2">fetching data...</p>
    </div>
  )
}

export default LoadingData
