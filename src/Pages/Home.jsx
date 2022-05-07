import React from 'react';
import styled from "styled-components"
import Button from '../Components/Button';
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: var(--nicewhite);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    padding: 50px 30px;
    padding-top: 70px;

`
const SmallTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`
const Image = styled.img`
    height: 100%;
    object-fit: cover;
`
const SmallTitle = styled.span`
    font-size: 1rem;
    color: var(--lightpurple);
    margin-left: 10px;
    font-weight: 550;
    text-align: center;
`
const BigTitle = styled.h1`
    font-size: 3.5rem;
    color:var(--darkgray) ;
    text-align: center;

`
const BigTitlePurple = styled.span`
    font-size: 3.5rem;
    color: var(--lightpurple);
    text-align: center;
`
const SmallParag = styled.p`
    margin-top: 20px;
    color: var(--gray);
    margin: 20px 30%;
    text-align: center;
    font-weight: 550;
    ${mobile({margin: "20px 10%"})};
`
const PictureContainer = styled.div`
    width: 500px;
    height: 300px;
    margin-top: 20px;
    border-top-left-radius: 40px;
    border-bottom-right-radius: 40px;
    margin-bottom: 20px;
    filter: drop-shadow(0 0 0.75rem black);
    overflow: hidden;
    position: relative;
    ${mobile({width: "100%", height: "270px"})};
    
`
const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Line = styled.div`
    width: 2px;
    height: 49px;
    margin: 0 20px;
    background-color: var(--iris) ;
`
const HowContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Text = styled.span`
    color: var(--iris);
    font-weight: 550;
    margin-left: 10px;
    cursor: pointer;
`

const Home = () => {
  return (
    <Container id="home" >
        <SmallTitleContainer>
            <Image src="/pictures/p2.png" style={{height: "20px"}} />
            <SmallTitle>Best Business Platform- World Record 2022</SmallTitle>
        </SmallTitleContainer>
        <BigTitle>Reach Your <BigTitlePurple>Business</BigTitlePurple></BigTitle>
        <BigTitle>Goals in Record Time</BigTitle>
        <SmallParag>
            Support small business and join the nationwide movement to encourage commercial 
            support for the millions of minority owned businesses helping world economy.
        </SmallParag>
        <PictureContainer>
            <Image src="/pictures/b.jpg" style={{width: "100%"}} />
        </PictureContainer>
        <ButtonContainer>
            <Button>Sign up for Free</Button>
            <Line/>
            <HowContainer>
                <Image src="/pictures/btn.png" style={{width: "20px", }} />
                <Text>How it works</Text>    
            </HowContainer>
        </ButtonContainer>
    </Container>
  )
}

export default Home