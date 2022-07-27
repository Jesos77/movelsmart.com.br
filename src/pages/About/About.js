import React from 'react'
import Faixa from './Faixa/Faixa';
import InfoSection from "../../components/Info/InfoSection";
import Letreiro from './Letreiro/Letreiro';
import { InfoData3 } from "../../data/InfoData";
import Grid from '../../components/Grid/Grid';


function About() {
  return (
    <>
    <Letreiro/>
    <InfoSection {...InfoData3}/>
    <Grid/>
    <Faixa/>
    </>
  )
}

export default About