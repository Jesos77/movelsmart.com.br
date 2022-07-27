import React from 'react'
import Hero from "../../components/Hero";
import InfoSection from "../../components/Info/InfoSection";
import MidSection from "../../components/Mid/MidSection";
import { InfoData, InfoData2 } from "../../data/InfoData";
import {MidData} from "../../data/MidData"
import { SliderData } from "../../data/SliderData";

function Home() {
  return (
    <>
    <Hero slides={SliderData}/>
    <InfoSection {...InfoData}/>
    <MidSection  {...MidData}/>
    <InfoSection {...InfoData2}/>
    </>
  )
}

export default Home