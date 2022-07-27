import React from 'react'
import InfoSection from "../../components/Info/InfoSection";
import { InfoData4 } from "../../data/InfoData";
import './Confirmado.css'

function Confirmado() {
  return (
    <div className='conf-container'>

        
    <InfoSection {...InfoData4} />
     </div>
  )
}

export default Confirmado