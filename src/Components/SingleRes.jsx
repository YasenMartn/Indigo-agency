import React from 'react'
import styled from "styled-components";

const Container = styled.div`
   margin: 20px;
   margin-bottom: 50px;
   width: 250px;
   height: 250px;
   background-color: var(--lightpurple);
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   padding: 20px;
   position: relative;
   border-radius: 15px;
   box-shadow: -5px 5px black;
   transition: all .5s ease-in-out;
   &:hover{
       transform: scale(1.1);
       background-color: var(--iris);
   }
`
const Circle = styled.div`
    width: 60px;
    height: 60px;
    position: absolute;
    border-radius: 50%;
    background-color: #242121;
    top: -30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`
const Image = styled.img`
    width: 50%;
    height: 50%;
    object-fit: contain;
`

const Title = styled.span`
    color: white;
    margin-bottom: 20px;
    text-decoration: underline;
    cursor: pointer;
    font-size: 1.3rem;
    text-align: center;
    &:hover{
        color: var(--orange);
    }

`

const Desc = styled.span`
    color: white;
    text-align: center;
    font-weight: normal;
`

const SingleRes = ({ item }) => {

    const { title, desc, image } = item

    return (
        <Container>
            <Circle>
                <Image src={image} alt="image"/>
            </Circle>
            <Title>{title}</Title>
            <Desc>{desc}</Desc>
        </Container>
    )
}

export default SingleRes