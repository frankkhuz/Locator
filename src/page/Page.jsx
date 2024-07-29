import React, { useState } from 'react'
import Header from '../component/Header'
import Details from '../component/Details'
import Map from '../component/Map'

const Page = () => {
    const [details,setDetails ] = useState({})
  return (
    <div style={{ maxWidth:"100%",backgroundColor:"white", paddingLeft:"2rem",paddingRight:"2rem", display:"flex",flexDirection:"column",}}> 
    <Header  setDetails = {setDetails} />
    <div style={{maxWidth:"100%", display:'flex', alignItems:'center',  justifyContent: 'center', width: '100%', zIndex:'1'}}>
    <Details details ={details} />
    
    </div>
    <Map />
    </div>
    
  )
}

export default Page