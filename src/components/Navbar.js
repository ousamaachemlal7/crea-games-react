import React, {useState} from 'react';
import {navLinks} from '../utils/constants';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import logo from '../Assets/logo.jpg';
import { Spin as Hamburger } from 'hamburger-react'



const Navbar = () => {

    //const [isOpen, setIsOpen] = useState(false);
   // const toggle = () => setIsOpen(!isOpen);

    return (
  
        <Wrapper>
            
            <div className='logo'>
                <img className='logo-app' src={logo} alt='logo application'/> 
            </div>
            <div className='links'>
                <ul className='links-ul'>
                    <li>
                    <StyledLink to="/">Home</StyledLink>
                    </li>
                    <li>
                    <StyledLink to="/About">About</StyledLink>
                    </li>
                    <li>
                    <StyledLink to="/Person">Person</StyledLink>
                    </li>
                    <li>
                    <StyledLink to="/FAQ">FAQ</StyledLink>
                    </li>
                </ul>
            </div>

            <div className='social'> social icons </div>
            <Hamburger  easing="ease-in"   />
        </Wrapper>
    )
}

const Wrapper= styled.header `
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    width: 100%;

    .logo{
        width:10%;
    }

    .logo-app{
        width:100%;

    }
    .links{
        width:70%;
    }

    .links-ul{
        display:flex;
        flex-direction:row;
        justify-content:space-evenly;
        align-items:center;
        width: 100%;
        list-style-type:none;
        
        }


    .social {
        width:15%;
    }

`
const StyledLink = styled(Link)`
  color: black;
  font-weight: bold;
  text-decoration:none;
  font-size: 1.6rem;
  
`;
export default Navbar;