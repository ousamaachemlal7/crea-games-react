import React from 'react';
import {navLinks} from '../utils/constants';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { Spin as Hamburger } from 'hamburger-react'
import { SocialIcon } from 'react-social-icons';
import {useAppContext} from '../context/app_context';



const Navbar = () => {
      
    const {openSideBar} = useAppContext();

    return (
  
        <Wrapper>
            
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

            <div className='social'> 
                <SocialIcon url="https://twitter.com/jaketrent" />
                <SocialIcon url="https://linkedin.com/jaketrent" />
                <SocialIcon url="https://facebook.com/jaketrent" />
            </div>
            <Hamburger  easing="ease-in"  onClick={ openSideBar} />
        </Wrapper>
        
    )
}

const Wrapper= styled.header `
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    width: 100%;
    background-color: lightgrey;
    z-index:-1;
     
    .links{
        width:40%;
    }

    .links-ul{
        display: flex;
	    flex-direction: row;
        justify-content: space-around;
	    align-items: center;
	  
        width: 100%;
        list-style-type:none;
        
        }

    .social {
        width:15%;
        display: flex;
	    flex-direction: row;
        justify-content: space-around;
	    align-items: center;
    }

`
const StyledLink = styled(Link)`
  color: black;
  font-weight: bold;
  text-decoration:none;
  font-size: 1.6rem;
  
`;
export default Navbar;