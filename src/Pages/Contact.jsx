import React from 'react';
import styled from "styled-components";
import Button from '../Components/Button';

const Container = styled.div`
    width: 100%;
    min-height: calc(100vh - 70px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
`
const Header = styled.h1`
    color: var(--gray);
    margin-bottom: 20px;
`
const Form = styled.form`
    width: 400px;
    background-color: var(--lightpurple);
    border-top-left-radius: 50px;
    border-bottom-right-radius: 50px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding: 40px;
    border: 1px solid var(--lightpurple);
`
const Label = styled.label`
    color: white;
    font-size: 1rem;

`
const Input = styled.input`
    padding: 10px;
    margin-bottom: 20px;
    width: 100%;
    font-size: 1rem;
    outline: none ;
`
const TextArea = styled.textarea`
    padding: 10px;
    margin-bottom: 30px;
    width: 100%;
    resize: none;
    font-size: 1rem;
    outline: none ;


`


const Contact = () => {
  return (
    <Container id="contactUs">
        <Header>Contact Us</Header>
        <Form>
            <Label>First Name</Label>
            <Input type="text" placeholder='First Name' />
            <Label>Last Name</Label>
            <Input type="text" placeholder='Last Name' />
            <Label>Email</Label>
            <Input type="email" placeholder='Email' />
            <Label>Message</Label>
            <TextArea placeholder='your message' />
            <Button width="100%" bg="white" color="var(--lightpurple)" weight={"800"} fz={"1.2rem"} >Submit</Button>

        </Form>
    </Container>
  )
}

export default Contact
