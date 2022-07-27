import React from 'react'
import {Button} from '../Button'
import { Section, Container, ColumnLeft, ColumnRight } from './MidStyles'


function MidSection({heading, paragraphOne, paragraphTwo, buttonLabel, reverse, image}) {
  return (
    <Section>
        <Container reverse={reverse}>
            <ColumnLeft>
            <h1>{heading}</h1>
            <p>{paragraphOne}</p>
            <p>{paragraphTwo}</p>
            <Button to="/sobre">{buttonLabel}</Button>
            </ColumnLeft>
            <ColumnRight >
            <img src={image} alt='home'></img>
            </ColumnRight>
            
            
        </Container>
    </Section>
  )
}

export default MidSection