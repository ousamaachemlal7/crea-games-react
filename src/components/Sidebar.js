import React from 'react'
import {useAppContext} from '../context/app_context';
import {FaTimes} from 'react-icons/fa';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Sidebar = () => {

    const {isOpen, closeSideBar}= useAppContext();
    return (
        <Wrapper>
            <aside className={ `sidebar ${isOpen ? 'show-sidebar' : 'hide'} `}> 
           
                
                    <FaTimes onClick={closeSideBar} color="red" />
               
                <div className='links'>
                    <ul className='links-ul'>
                        <li>
                        <StyledLink to="/" onClick={closeSideBar} >Home</StyledLink>
                        </li>
                        <li>
                        <StyledLink to="/About" onClick={closeSideBar} >About</StyledLink>
                        </li>
                        <li>
                        <StyledLink to="/Person" onClick={closeSideBar} >Edit character</StyledLink>
                        </li>
                        <li>
                        <StyledLink to="/FAQ" onClick={closeSideBar}>FAQ</StyledLink>
                        </li>
                    </ul>
                </div>
            </aside>
        </Wrapper>
    )
}

const Wrapper= styled.div `
.sidebar {
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    transition: var(--transition);
    background-color:lightgrey;
    border-radius: 0 5px 5px 0;
        svg{
        color: black;
        background-color: transparent !important;
        font-size: 24px;
        position: absolute;
        top: 0;
        left: 96%;
        cursor: pointer;
    }

}

.hide{
    display:none !important;
}

.show-sidebar{
    transition: var(--transition);
    display:block !important;
    z-index: 1000;
   
}

 
.links{
    height:100%;
    
    .links-ul{
    list-style-type:none;
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: space-around;
	align-items: center;
	align-content: center;
    list-style-type:none;
    height:100%;
    
    }
    a:hover {
    color: white;
    background-color: black;
  
    }
}



`;


const StyledLink = styled(Link)`
    color: black;
    font-weight: bold;
    text-decoration:none;
    font-size: 3rem;
    transition: var(--transition);
        
  `;

export default Sidebar;