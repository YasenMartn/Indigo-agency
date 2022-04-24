import React from 'react';
import styled from "styled-components";
import {services} from "../data"

const Container = styled.div`
    width: 100%;
    min-height: calc(100vh - 70px);
    background-color: var(--nicewhite);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Header = styled.h1`
    color: var(--gray);
    margin-bottom: 50px;
`
const ServicesContainer = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 4rem;
    padding: 20px;
    width: 100%;
    min-height: auto;
`
const ServiceBox = styled.div`
  background-color: var(--lightpurple);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  min-height: auto;
  width: 320px;
  padding: 20px;
`
const ServiceTitle = styled.span`
  color: white;
  margin-bottom: 10px;
  font-weight: lighter;  
  font-size: 1.2rem;

`
const ServiceDesc = styled.span`
  font-size: 1rem;
  color: #e2cfeb;
  font-weight: lighter;
`


const Services = () => {
  return (
    <Container id="services" >
      <Header>Our Services</Header>
      <ServicesContainer>
        {services.map(service => (
          <ServiceBox key={service.id}>
             <ServiceTitle>{service.name}</ServiceTitle> 
             <ServiceDesc>{service.desc}</ServiceDesc>
          </ServiceBox>
        ))}
      </ServicesContainer>
    </Container>
  )
}




export default Services