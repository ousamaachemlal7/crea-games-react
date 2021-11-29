import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from 'styled-components';
import image1 from '../Assets/avatar1.png';
import image2 from '../Assets/avatar5.png';
import image3 from '../Assets/avatar9.png';
import { BsLightningFill } from "react-icons/bs";
import { FcPlus } from "react-icons/fc";
 import { AiFillMinusCircle } from "react-icons/ai";
 import { GiBrain,GiMuscleUp } from "react-icons/gi";
 
export default function Person() {
    return (
        <>
        <div className="container-person">
                <h1>Create Your Own Player</h1>
                <StyledDiv className="container-character">
                    <Carousel className="carousel" infiniteLoop autoPlay>
                        <div className="image">
                            <img src={image1} alt='avatar 1' />
                            <p className="legend">Legend 1</p>
                        </div>
                        <div className="image">
                            <img src={image2} alt='avatar 2' />
                            <p className="legend">Legend 2</p>
                        </div> 
                        <div className="image">
                            <img src={image3} alt='avatar 3'  />
                            <p className="legend">Legend 3</p>
                        </div>
                    </Carousel>
                    
                    <StyledDivPoints className="container-points">
                        <h2> Points left <p> :15 </p></h2>
                        <div className="container-speed-points">
                            <BsLightningFill className="lightning"/>
                            <AiFillMinusCircle className="minus-points"/>
                            <FcPlus className="plus-points"/>
                            
                        </div>
                        <div className="container-brain-points">
                            <GiBrain className="brain"/>
                            <AiFillMinusCircle className="minus-points"/>
                            <FcPlus className="plus-points"/>
                            
                        </div>
                        <div className="container-strenght-points">
                            <GiMuscleUp className="strength"/>
                            <AiFillMinusCircle className="minus-points"/>
                            <FcPlus className="plus-points"/>
                            
                        </div>
                    <div className="create-reset-character">
                        <button className="btnCreate"> Create </button>
                        <button type="button" className="btnReset"> Reset </button>
                    </div>
                    </StyledDivPoints>
                </StyledDiv>
                <StyledDivWeapons>

                </StyledDivWeapons>
        </div>

        </>
    )
        
    
}

const StyledDiv = styled.div `
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	align-content: center;
    width:100%;
    height:100%;
    .carousel{
        width:50%;
    }
    .carousel .slide{
        height:40vh;
    }
    .carousel .slide img{
        max-height:100%;
        width:auto !important;
    }

    .image{
        align-items: center;
        margin:0 auto;
        height:70%;
        width:100%;
    }
`
const StyledDivPoints = styled.div`
    display: block;
    width:100%;
    height:100%;
    h2 {
        display: block;
        text-align:center;
        font-size:2.5rem;
    }
    .lightning{
        width:10%;
        height:10%;
        color:red;
    }
    .brain {
        width:10%;
        height:10%;
    }
    .plus-points{
        width:7%;
        height:7%;
    }
    .minus-points{
        width:7%;
        height:7%;
    }
    .strength{
        width:10%;
        height:10%;
    }
    .container-speed-points, .container-strenght-points, .container-brain-points{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        align-content: center;
    }


`
const StyledDivWeapons = styled.div `
    
`
