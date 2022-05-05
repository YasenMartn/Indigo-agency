import React from 'react'
import styled from "styled-components";
import Button from "./Button"

const Title = styled.span`
    font-size: 1.2rem;
    transition: all .5s ease-in-out;
    margin-bottom: 20px;
`
const Desc = styled.span`
    text-align: center;
    transition: all .5s ease-in-out;
    margin-bottom: 20px;
`

const Container = styled.div`
    width: 300px;
    min-height: 400px;
    margin: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px;
    cursor: pointer;
    transition: all .5s ease-in-out;
    &:hover{
        background-color: var(--lightpurple);
        ${Title}{
            color: white;
        }
        ${Desc}{
            color: white;
        }
        ${Button}{
            color: red;
        }
       
    }
`
const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 200px;
    margin-bottom: 20px;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`


const Post = ({ post }) => {

    const {image, title, desc} = post

    return (
        <Container>
            <ImageContainer>
                <Image src={image} alt="image"/>
            </ImageContainer>
            <Title>{title}</Title>
            <Desc>{desc}</Desc>
            <Button>Read More</Button>
        </Container>
    )
}

export default Post