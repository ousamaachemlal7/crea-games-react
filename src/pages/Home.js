import React from 'react';
import styled from 'styled-components';
import Video from '../components/video';
import logo from '../Assets/logo.mp4';

export default function Home() {
    return (
        <div className="home-container">
            <div className='logo'>
            <Video src={logo} /> 
            <h1 className='title'> blabla </h1>
            </div>
        </div>
    )
        
    
}
