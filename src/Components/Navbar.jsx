import React from 'react';
import styled from "styled-components"
import { mobile } from '../responsive';
import Button from './Button';
import { Link } from 'react-scroll/modules';

const Nav = styled.nav`
    width: 100%;
    height: 70px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: sticky;
    top: 0;
    z-index: 2222;
`
const Left = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: flex-start;
    padding-left: 20px;
`
const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
`
const Image = styled.img`
    height: 90%;
    object-fit: contain;
    cursor: pointer;
`
const Mid = styled.div`
    height: 100%;
    flex: 4;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({display: "none"})};

`
const Right = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 20px;
`
const Navbar = () => {
  return (
    <Nav>
        <Left>
            <LogoContainer>
                <Image src='/pictures/p.png' />
            </LogoContainer>
        </Left>
        <Mid>   
            <Link className='link' to="home" smooth={true} duration={500}>Home</Link>
            <Link className='link' to="services" smooth={true} duration={500}>Services</Link>
            <Link className='link' to="resources" smooth={true} duration={500}>Resources</Link>
            <Link className='link' to="blog" smooth={true} duration={500}>Blog</Link>
            <Link className='link' to="contactUs" smooth={true} duration={500}>Contact us</Link>
        </Mid>
        <Right>
            <Button>Sign up</Button>
        </Right>
    </Nav>
  )
}

export default Navbar