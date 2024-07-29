import React from 'react'

const Details = ({ details }) => {
  return (
    <div style={{padding:"1rem", display:"flex",justifyContent:"center",width:"60%", alignItems:"center", border: '1px solid red', backgroundColor:"white",position:"relative",zIndex:"1", top: '-7rem', height:"7rem", borderRadius:"10px"}}>
        <div style={{width:"25%", borderRight:"4px solid black", height:"6rem"}}>
            <p style={{fontSize:"10px"}}>IP ADDRESS</p>
            <p style={{fontSize:"20px"}}>{details.ip} </p>
        </div>
        <div style={{width:"25%", borderRight:"4px solid black", height:"6rem"}}>
        <p style={{fontSize:"10px"}}>LOCATION</p>
        <p style={{fontSize:"20px"}}> {details.location?.city} {details.location?.region} {details.location?.country}  </p>
        </div>
        <div style={{width:"25%", borderRight:"4px solid black" , height:"6rem"}}>
        <p style={{fontSize:"10px"}}>TIME ZONE</p>
        <p style={{fontSize:"20px"}}> {details.location?.timezone} </p>
        </div>
        <div style={{width:"25%", }}>
        <p style={{fontSize:"10px"}}>ISP</p>
        <p style={{fontSize:"20px"}}> {details.isp} </p>
        </div>
    </div>
  )
}

export default Details