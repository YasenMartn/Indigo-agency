import React, {useState} from 'react';
import styled from "styled-components"
import { mobile } from '../responsive';
import Button from './Button';
import { Link } from 'react-scroll/modules';
import ScrollToTop from "react-scroll-to-top";


const Nav = styled.nav`
    width: 100%;
    height: 70px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
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
    align-items: center;
    justify-content: center;
    height: 50px;
    display: none;
    ${mobile({display: "flex"})};

`
const Image = styled.img`
    height: 90%;
    object-fit: contain;
    cursor: pointer;
    transition: all 1s ease-in-out;
    transform: ${props => props.spin === true ? "rotate(360deg)" : "rotate(-360deg)" };
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

const MobileMenu = styled.div`
    width: 90%;
    height: calc(100vh - 70px);
    position: absolute;
    z-index: 22;
    top: 70px;
    left: 0;
    display: none;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: var(--lightpurple);
    transition: all .5s ease-in-out;
    transform: ${props => props.toggle === false ? "translate(-100%)" :  "translate(0%)" } ;
    ${mobile({display: "flex"})};

`

const Navbar = () => {

    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu)
    }

  return (
    <Nav>
        <ScrollToTop smooth color="#6f00ff" />
        <Left>
            <LogoContainer onClick={toggleMenu} >
                <Image src='/pictures/p.png' spin={menu ? true : false}  />
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

        <MobileMenu toggle={ menu ? true : false} >
            <Link onClick={ () => setMenu(false)} className='mobileLink' to="home" smooth={true} duration={500}>Home</Link>
            <Link onClick={ () => setMenu(false)} className='mobileLink' to="services" smooth={true} duration={500}>Services</Link>
            <Link onClick={ () => setMenu(false)} className='mobileLink' to="resources" smooth={true} duration={500}>Resources</Link>
            <Link onClick={ () => setMenu(false)} className='mobileLink' to="blog" smooth={true} duration={500}>Blog</Link>
            <Link onClick={ () => setMenu(false)} className='mobileLink' to="contactUs" smooth={true} duration={500}>Contact us</Link>
        </MobileMenu>
    </Nav>
  )
}

export default Navbar