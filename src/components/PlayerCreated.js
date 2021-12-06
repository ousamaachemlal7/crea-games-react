import React from 'react'
import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function PlayerCreated(props) {
    
        
    
    return (

        <div>
            <Card style={{width:'200px'}}>
                <Card.Img variant="top" src={props.image} alt='player created' />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                    <h1>{props.name}</h1>
                    <h2> strength : {props.strength}</h2>
                    <h2> speed : {props.speed}</h2>
                    <h2> intelligence : {props.intelligence}</h2>
                    <h2> Weapon: {props.weapon}</h2>
                    </Card.Text>
                   
                </Card.Body>
            </Card>

        </div>

        
    )
}

export default PlayerCreated

