import { Email, Facebook, Instagram, Twitter, WhatsApp, YouTube } from '@mui/icons-material';
import React, { useState } from 'react';
import styled from "styled-components";
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100%;
    min-height: 50vh;
    background-color: var(--lightpurple);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${mobile({ flexDirection: "column" })};
`
const Top = styled.div`
    width: 100%;
    min-height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 70px;
    border-bottom: 1px solid white;
    ${mobile({flexDirection: "column", padding: "20px 0" })};


`
const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Image = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 20px;
`
const LogoName = styled.span`
    font-size: 1.2rem;
`
const Socials = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({ marginTop: "20px" })};


`


const Middle = styled.div`
    width: 100%;
    min-height: 30vh;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 0 70px;
    ${mobile({flexDirection: "column", padding: "0 20px" })};

`
const Section = styled.div`
    min-height: 30vh;
    flex: 1;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 0;
    ${mobile({width: "100%", alignItems: "center" })};
    &:last-child{
        min-height: auto;
        ${mobile({width: "100%", alignItems: "center" })};

    }
`
const Header = styled.span`
    text-decoration: underline;
    font-size: 1.2rem;
`
const SubHeader = styled.span`
    &:hover{
        text-decoration: underline;
        cursor: pointer;
    }
`
const Form = styled.form`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    ${mobile({alignItems: "center" })};

`

const Input = styled.input`
    border: 1px solid white;
    background: transparent;
    color: white;
    padding: 10px ;
    margin: 10px 0;
    outline: none;
    border-radius: 5px;
    width: 100%;
`
const Button = styled.button`
    border: 1px solid white;
    background: white;
    color: var(--iris);
    font-weight: 700;
    padding: 10px ;
    width: 100%;
    cursor: pointer;
    border-radius: 5px;
    &:hover{
        background-color: var(--iris);
        color: white;
    }
`

const Bottom = styled.div`
    width: 100%;
    min-height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--iris);
    padding: 0 70px;
    ${mobile({flexDirection: "column", padding: "20px" })};

`
const BTContainer = styled.div`
    ${mobile({ marginTop: "20px" })};


`
const BotText = styled.span`
    ${mobile({textAlign: "center" })};

`
const BotLink = styled.span`
    cursor: pointer;
    ${mobile({textAlign: "center" })};
    &:hover{
        text-decoration: underline;
    }
`

const Footer = () => {

    const [email, setEmail] = useState("")

    const handleForm = (e) => {
        e.preventDefault();
    }

    return (
        <Container>

            <Top>
                <LogoContainer>
                    <Image src="/pictures/p.png" />
                    <LogoName>Indigo Agency</LogoName>
                </LogoContainer>
                <Socials>
                    <Facebook className='icon' />
                    <Twitter className='icon' />
                    <WhatsApp className='icon' />
                    <Instagram className='icon' />
                    <YouTube className='icon' />
                    <Email style={{ marginRight: "0" }} className='icon' />
                </Socials>

            </Top>

            <Middle>
                <Section>
                    <Header>Company</Header>
                    <SubHeader>Home</SubHeader>
                    <SubHeader>Contact us</SubHeader>
                    <SubHeader>About us</SubHeader>
                    <SubHeader>Get started</SubHeader>
                </Section>

                <Section>
                    <Header>Services</Header>
                    <SubHeader>Home</SubHeader>
                    <SubHeader>Contact us</SubHeader>
                    <SubHeader>About us</SubHeader>
                    <SubHeader>Get started</SubHeader>
                </Section>

                <Section>
                    <Header>Account</Header>
                    <SubHeader>Home</SubHeader>
                    <SubHeader>Contact us</SubHeader>
                    <SubHeader>About us</SubHeader>
                    <SubHeader>Get started</SubHeader>
                </Section>
                    
                <Section>
                    <Header>Course</Header>
                    <SubHeader>Home</SubHeader>
                    <SubHeader>Contact us</SubHeader>
                    <SubHeader>About us</SubHeader>
                    <SubHeader>Get started</SubHeader>
                </Section>

                <Section  >

                    <Form onSubmit={handleForm} >
                        <Header>Subscribe</Header>
                        <Input className='newsLetter' placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
                        <Button>Subscribe</Button>
                    </Form>

                </Section>

            </Middle>

            <Bottom>
                <BotText>
                    Copyright © 2022 Indigo Agency. All rights reserved.
                </BotText>
                <BTContainer>
                    <BotLink>Privacy Policy </BotLink>
                    <BotLink style={{ marginLeft: "20px" }} >Term & condition</BotLink>
                </BTContainer>


            </Bottom>



        </Container>
    )
}

export default Footer