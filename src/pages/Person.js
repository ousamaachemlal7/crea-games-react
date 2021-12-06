import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from 'styled-components';
import image1 from '../Assets/player1.png';
import image2 from '../Assets/player2.png';
import image3 from '../Assets/player3.png';
import avatar1 from '../Assets/avatar1.png';
import avatar2 from '../Assets/avatar2.png';
import avatar3 from '../Assets/avatar3.png';
import avatar4 from '../Assets/avatar4.png';
import avatar5 from '../Assets/avatar5.png';
import avatar6 from '../Assets/avatar6.png';
import avatar7 from '../Assets/avatar7.png';
import avatar8 from '../Assets/avatar8.png';
import avatar9 from '../Assets/avatar9.png';
import avatar10 from '../Assets/avatar10.png';
import avatar11 from '../Assets/avatar11.png';
import avatar12 from '../Assets/avatar12.png';

import { BsLightningFill } from "react-icons/bs";
import { FcPlus } from "react-icons/fc";
import { AiFillMinusCircle } from "react-icons/ai";
import { GiBrain,GiMuscleUp } from "react-icons/gi";
import Button from '@mui/material/Button';
import axios from 'axios';
import PlayerCreated from '../components/PlayerCreated';

export class Person extends Component{
        state = {
                    person:{image:0,name:'',speed:0,strength:0,intelligence:0,weapon:''},
                    points:15,
                    loading:false,
                    message:'',
                    data:[]
                };
            
        resete = () =>{     
            this.setState(
                      {
                        person:{image:0,speed:0,strength:0,intelligence:0,weapon:''},
                        points:15,
                        name:''
                      }
                    );
                }

        handleSelectWeapon = (e) => {
            this.setState(old => {
                const newPerson = {...old.person};
                let newWeapon = e.target.value;
                newPerson.weapon = newWeapon;
                console.log(newPerson.weapon);
            return {person:newPerson, weapon:newWeapon} 
            }); 
            
        }

        getItemPosition = (index) => {
            //console.log(index)
            this.setState(old => {
                const newPerson = {...old.person};
                let newPosition = index;
                newPerson.image = newPosition;
              //  console.log(newPosition);
             return {person:newPerson, image:newPosition} 
            });  
        }

        getPlayerName = (e) => {
            this.setState(old => {
                const newPerson = {...old.person};
                let newName = e.target.value;
                newPerson.name = newName;
            return {person:newPerson, name:newName} 
            });  
        }

        componentDidMount(){

            axios.get('https://gamingtest-196df-default-rtdb.firebaseio.com/person.json')
            .then(response => {


                 const data = Object.values(response.data);
                this.setState({data:data})
            })
            .catch(error => {


            })
        }
     
        handleCreate = () => {
            let images = '';
            console.log(this.state.person.image)
            console.log(this.state.person.speed)
            console.log(this.state.person.weapon)
            if(this.state.person.image === 0 )
            {
                console.log(this.state.person.weapon)
                switch(this.state.person.weapon){
                    
                    case 'Axe':
                        images = avatar7;
                        break;
                    case 'Fleau':
                        images= avatar5;
                        break;
                    case 'Arche':
                        images= avatar8;
                        break;
                    case 'Sword':
                        images=avatar6;
                        break;
                    default:
                        images = image1;
                }
            }

            else if(this.state.person.image === 1)
            {
                switch(this.state.person.weapon){
                    case 'Axe':
                        images = avatar3;
                        break;
                    case 'Fleau':
                        images= avatar4;
                        break;
                    case 'Arche':
                        images= avatar1;
                        break;
                    case 'Sword':
                        images= avatar2;
                        break;
                    default:
                        images = image2;
                }
            }
            else {
                switch(this.state.person.weapon){
                    case 'Axe':
                        images = avatar10;
                        break;
                    case 'Fleau':
                        images= avatar11;
                        break;
                    case 'Arche':
                        images= avatar9;
                        break;
                    case 'Sword':
                        images= avatar12;
                        break;
                    default:
                        images = image2;
                }
                images = image3;
            }
            
           const player = {

               person:{

                       image:images,
                       speed:this.state.person.speed,
                       strength:this.state.person.strength,
                       intelligence:this.state.person.intelligence,
                       weapon:this.state.person.weapon
               },

               name:this.state.person.name
           }


          

             this.setState({loading:true})
           axios.post('https://gamingtest-196df-default-rtdb.firebaseio.com/person.json',player)
           .then(response => {
                this.setState({loading:false})
                this.setState({message:"character created"})

              
           })
           .catch(error => {


           })
        }

    
    
        
        render() {
            

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
                        <div className="character-style">
                        <Carousel className="carousel"showArrows={true} useKeyboardArrows showIndicators onChange={ (index) => this.getItemPosition(index) }>
                                <div className="image">
                                        <img src={image1} alt='avatar 1' />
                                        <p className="legend">
                                         <input className="name-input" type="text" value={this.state.person.name} placeholder='insert player name' onChange={this.getPlayerName}/> 
                                        </p>
                                </div>
                                <div className="image">
                                    <img src={image2} alt='avatar 2' />
                                    <p className="legend">
                                    <input className="name-input" type="text" value={this.state.person.name} placeholder='insert player name' onChange={this.getPlayerName}/> 
                                    </p>
                                </div> 
                                <div className="image">
                                    <img src={image3} alt='avatar 3'  />
                                    <p className="legend">
                                    <input className="name-input" type="text" value={this.state.person.name} placeholder='insert player name' onChange={this.getPlayerName}/> 
                                    </p>
                                </div>
                            </Carousel>
                        </div>

                            <div className="weapons">
                                <h2>Select a weapon</h2>
                                <select onChange =  {this.handleSelectWeapon}>
                                    
                                    <option value="Axe">Axe</option>
                                    <option value="Sword">Sword</option>
                                    <option value="Fleau">Fleau</option>
                                    <option value="Arche">Arche</option>
                                </select>
                            </div>

                            <div>
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
                            </div>

                        </StyledDiv>


                        {
                            this.state.loading && <div> <h1> data is loading </h1> </div>
                        }

                        {
                            this.state.message && <div> <h1> {this.state.message} </h1></div>

                        }

                        <div className="create-reset-character">
                            <Button variant="contained" color="success" className="button" onClick={this.handleCreate}>Create</Button>
                            <Button variant="outlined" color="error" className="button" onClick={this.resete}>Reset</Button>
                        </div>
                </div>
                        {
                            this.state.data.map(player=>{
                                console.log(player)
                                return(
                                    <PlayerCreated image={player.person.image} name={player.name} strength={player.person.strength} speed={player.person.speed} intelligence={player.person.intelligence} weapon={player.person.weapon}/>
                                )

                            })
                            
                        }
                    
                </>
            )
        }
    }
    
    export default Person; 
    


const StyledDiv = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    align-items: center;
    grid-column-gap: 20px;
    grid-row-gap: 0px;
    width:100%;
    height:100%;

    .character-style{
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .carousel{
        width:100%;
        height:50%;
        padding: 0px 10px 0px 10px;

    }
    .carousel .slide{
        height:40vh;
    }
    .control-arrow{
        background-color:black;
    }
    .name-input{
        width:60%;
        height:100%;
        border-radius: 20px;
    }

    .control-dots{
        
        width:100%;
    }
    .carousel .slide img{
        max-height:100%;
        width:35% !important;
    }

    .image{
        align-items: center;
        height:100%;
        width:100%;
        background-color: rgba(46, 125, 50,0.8);
    }
    .weapons{
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width:100%;
        gap:20px;
        h2{
            font-size:2rem;
            
        }
    }
    .legend{
        background:white !important;
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

`
