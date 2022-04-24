import React from 'react';
import styled from "styled-components";

const Btn = styled.button`
    padding: 10px 20px;
    background-color: var(--lightpurple);
    border: none;
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    color: white;
    cursor: pointer;
    transition: all .2s ease-in-out;
    &:hover{
      background-color: var(--iris);

    }
`

const Button = ({children}) => {
  return (
    <Btn>{children}</Btn>
  )
}

export default Button