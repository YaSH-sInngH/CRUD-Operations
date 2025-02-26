import React from 'react'
import { AppBar, Toolbar, styled } from '@mui/material'
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
   background:#8AAAE5 ;
   position: static;
 `;

const Tags = styled(NavLink)`
  font-size: 1.4rem;
  margin: 0 1.5rem;
  position: relative;
  cursor: pointer;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px; /* Slightly below the text */
    width: 0;
    height: 2px; /* Thickness of the underline */
    background: white; /* Color of the underline */
    transition: width 0.4s ease; /* Smooth animation for the underline */
  }
  &:hover:after{
    width: 100%;
  }
`;

function Navbar() {
  return (
    <Header>
      <Toolbar>
        <Tags to='/' >Overview</Tags>
        <Tags to='/list' >User Lists</Tags>
        <Tags to='/add' >Create Users</Tags>
      </Toolbar>
    </Header>
  )
}

export default Navbar