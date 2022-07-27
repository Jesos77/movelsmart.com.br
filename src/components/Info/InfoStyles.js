import styled from "styled-components"
import { motion } from 'framer-motion';

export const Section = styled.section`
width: 100%;
height: 100%;
padding: 4rem 0rem;

`


export const Container = styled.div`
padding: 5px calc((100vw - 1300px) / 2);
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 800px;

@media screen and (max-width: 960px){  
    grid-template-columns: 1fr;
}


`



export const ColumnLeft = styled(motion.div)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
line-height: 1.4;
padding: 1rem 2rem;
text-align: justify;
  text-justify: inter-word;

h1{
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
}

    p{
    margin-bottom: 2rem;
    }
`



export const ColumnRight = styled(motion.div)`
padding: 1rem 2rem;
display: flex;
justify-content: center;
align-items: center;



img{
    width: 100%;
    height: 100%;

    @media screen and (max-width: 960px){
        width: 90%;
        height: 90%;
    }
}
`