import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from 'styled-components';
import image1 from '../Assets/player1.png';
import image2 from '../Assets/player2.png';
import image3 from '../Assets/player3.png';
import { BsLightningFill } from "react-icons/bs";
import { FcPlus } from "react-icons/fc";
import { AiFillMinusCircle } from "react-icons/ai";
import { GiBrain,GiMuscleUp } from "react-icons/gi";
import Button from '@mui/material/Button';

export class Person extends Component{
        state = {
                    person:{image:1,speed:0,strength:0,intelligence:0,weapon:''},
                    points:15,
                    name:''
                };
        
        
        
        render() {
            const resete= () =>{

            }

            const emproveCharacter = (emprovement) => {
                const newPerson = {...this.state.person}
                let newPoints = this.state.points
                switch(emprovement){
                    case 'speedUp':
                            if(newPerson.speed <7 && newPoints > 0)
                            {
                                this.setState(old => {
                                    const newPerson = {...old.person};
                                    const newPoints = old.person.speed +1;
                                    newPerson.speed =  newPoints;
                                    const newSpeed = newPerson.speed +1;
                                    const points = old.points-1;
                                return {person:newPerson, speed:newSpeed,points:points} 
                                }); 
                            }
                            break;
                    case 'speedDown':
                            if(newPerson.speed >0  && newPoints<15)
                            {
                                {
                                    this.setState(old => {
                                        const newPerson = {...old.person};
                                        const newPoints = old.person.speed -1;
                                        const points = old.points+1;
                                        newPerson.speed =  newPoints;
                                        const newSpeed = newPerson.speed -1;
                                    return {person:newPerson, speed:newSpeed,points:points} 
                                    }); 
                                }
                            }
                            break;
                        case 'intelligenceUp':
                            if(newPerson.intelligence <7 && newPoints > 0)
                            {
                                this.setState(old => {
                                    const newPerson = {...old.person};
                                    const newPoints = old.person.intelligence +1;
                                    const points = old.points-1;
                                    newPerson.intelligence =  newPoints;
                                    const newIntelligence= newPerson.intelligence +1;
                                return {person:newPerson, intelligence:newIntelligence,points:points} 
                                }); 
                            }
                            break;
                        case 'intelligenceDown':
                            if(newPerson.intelligence > 0  && newPoints<15)
                            {
                                this.setState(old => {
                                    const newPerson = {...old.person};
                                    const newPoints = old.person.intelligence -1;
                                    const points = old.points+1;
                                    newPerson.intelligence =  newPoints;
                                    const newIntelligence= newPerson.intelligence -1;
                                return {person:newPerson, intelligence:newIntelligence,points:points} 
                                }); 
                            }
                            break; 
                        case 'strengthUp':
                            if(newPerson.strength < 7  && newPoints > 0)
                            {
                                this.setState(old => {
                                    const newPerson = {...old.person};
                                    const newPoints = old.person.strength +1;
                                    const points = old.points-1;
                                    newPerson.strength =  newPoints;
                                    const newstrength= newPerson.strength +1;
                                return {person:newPerson, strength:newstrength,points:points} 
                                }); 
                            }
                            break;
                        case 'strengthDown':
                            if(newPerson.strength > 0 && newPoints<15)
                            {
                                this.setState(old => {
                                    const newPerson = {...old.person};
                                    const newPoints = old.person.strength -1;
                                    const points = old.points+1;
                                    newPerson.strength =  newPoints;
                                    const newstrength= newPerson.strength -1;
                                return {person:newPerson, strength:newstrength,points:points} 
                                }); 
                            }
                            break;    
                }
            }
            return (
                <>
                <div className="container-person">
                        <h1>Create Your Own Player</h1>
                        <StyledDiv className="container-character">
                            <Carousel className="carousel" >
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

                            <h2>Select a weapon</h2>
                            <select>
                                
                                <option value="A">Axe</option>
                                <option value="B">Sword</option>
                                <option value="C">Fleau</option>
                                <option value="D">Arche</option>
                            </select>

                            <StyledDivPoints className="container-points">
                                <h2> Points left <p> :{this.state.points} </p></h2>
                                <div className="container-speed-points">
                                    <BsLightningFill className="lightning"/>
                                    <AiFillMinusCircle className="minus-points" onClick={()=> emproveCharacter("speedDown")}/>
                                    <p>{this.state.person.speed}</p>
                                    <FcPlus className="plus-points" onClick={()=> emproveCharacter("speedUp")} />
                                    
                                </div>
                                <div className="container-brain-points">
                                    <GiBrain className="brain"/>
                                    <AiFillMinusCircle className="minus-points" onClick={()=> emproveCharacter("intelligenceDown")}/>
                                    <p>{this.state.person.intelligence}</p>
                                    <FcPlus className="plus-points" onClick={()=> emproveCharacter("intelligenceUp")}/>
                                    
                                </div>
                                <div className="container-strenght-points">
                                    <GiMuscleUp className="strength"/>
                                    <AiFillMinusCircle className="minus-points"onClick={()=> emproveCharacter("strengthDown")} />
                                    <p>{this.state.person.strength}</p>
                                    <FcPlus className="plus-points" onClick={()=> emproveCharacter("strengthUp")}/>
                                    
                                </div>
        
                            </StyledDivPoints>
                        </StyledDiv>

                        <div className="create-reset-character">
                            <Button variant="contained" color="success">Create</Button>
                            <Button variant="outlined" color="error" onClick={()=> resete()}>Reset</Button>
                        </div>
                </div>
        
                </>
            )
        }
    }
    
    export default Person; 
    


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
    .container-speed-points, .container-strenght-points, .container-brain-points, .create-reset-character{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        align-content: center;
        p{
            font-size: 2rem;
        }
    }
    .create-reset-character button{
        width:20%;
        height:20%;
    }

`
