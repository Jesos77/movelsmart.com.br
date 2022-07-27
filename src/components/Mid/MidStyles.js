import styled from "styled-components"

export const Section = styled.section`
width: 100%;
height: 100%;
padding: 10rem 0rem;
background-color: #000d1a;
`

export const Container = styled.div`
padding: 5px 0px;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 600px;
background-color: #fff;

@media screen and (max-width: 960px){
    grid-template-columns: 1fr;
}


`

export const ColumnLeft = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
line-height: 1.4;
margin-left: 20rem;
padding: 0rem 2rem;


h1{
    margin-bottom: 2rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
}

p{
    margin-bottom: 2rem;
    text-align: justify;
    text-justify: inter-word;
    @media screen and (max-width: 960px){
        margin-left: 2rem;  
    }
}




@media screen and (max-width: 960px){
    align-items: center;
    margin-left: 0rem;   
}

`

export const ColumnRight = styled.div`
display: flex;
justify-content: end;
align-items: center;

@media screen and (max-width: 960px){
    justify-content: center;
}

img{
    width: 40%;
    height: 80%;
    margin-right: 0px;
    position: absolute;
    object-fit: cover;

    @media screen and (max-width: 960px){
        position: static;
        width: 80%;
        height: 100%;
    }
    
}
`