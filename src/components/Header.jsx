import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
        <NavLink to ="/">
            <img src="/Images/Logo2.jpeg" alt="Logo"></img>
        </NavLink>
        <Nav />
    </MainHeader>
  )
};

const MainHeader = styled.header`
padding: 0 4.8rem;
height: 8rem;
background-color: ${({theme})=> theme.colors.bg};
display: flex;
justify-content: space-between;
align-items: center;
position: relative;

logo{
    height:2rem;
}
`
export default Header