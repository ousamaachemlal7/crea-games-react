import React from 'react';
import {navLinks} from '../utils/constants';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { Spin as Hamburger } from 'hamburger-react'
import { SocialIcon } from 'react-social-icons';
import {useAppContext} from '../context/app_context';
import logo from '../Assets/gaming.png';


const Navbar = () => {
      
    const {openSideBar} = useAppContext();

    return (
  
        <Wrapper>
            <Hamburger  easing="ease-in"  onClick={ openSideBar} />
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
    padding:0 1.5em;
    box-shadow: 0 1px 3px rgba(15,15,15,0.13);

    .links{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: flex-start;
        align-content: stretch;
        width:100%;
    }

    .links-ul{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: flex-start;
        align-content: stretch;
        width: 50%;
        list-style-type:none;
        li{
            &:hover{
                border-top: 2px solid black;
                border-bottom: 2px solid black;
            }
        }

    }

    .social {
        width:15%;
        display: flex;
	    flex-direction: row;
        justify-content: space-evenly;
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