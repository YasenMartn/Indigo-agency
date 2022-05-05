import React from 'react';
import styled from "styled-components";

const Btn = styled.button`
    padding: 10px 20px;
    background-color: ${props => props.bg ? props.bg : "var(--lightpurple)"  } ;
    border: none;
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    color: ${props => props.color ? props.color : "white"  } ;
    width: ${props => props.width ? props.width : "auto"};
    font-weight: ${props => props.weight};
    font-size: ${props => props.fz};
    cursor: pointer;
    transition: all .2s ease-in-out;
    &:hover{
      background-color: ${props => props.hover ? props.hover : "var(--iris)"};

    }
`

const Button = ({children, ...rest}) => {
  return (
    <Btn {...rest} >{children}</Btn>
  )
}

export default Button