import React from 'react';
import styled from "styled-components";
import SingleRes from '../Components/SingleRes';
import { resources } from '../data'; 

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    padding-top: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
`
const Header = styled.h1`
    color: var(--gray);
    margin-bottom: 20px;
`
const ResContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`


const Resources = () => {
  return (
    <Container id="resources">
        <Header>Resources</Header>
        <ResContainer>
            {resources.map(item =>(
                <SingleRes key={item.id} item={item}/>
            ))}
        </ResContainer>
    </Container>
  )
}

export default Resources