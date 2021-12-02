import React from 'react'

function PlayerCreated(props) {
    return (
        <div>
        <img src={props.image} alt='player created'/> 
        <h1>{props.name}</h1>
        <h1>Player Skills</h1>
        <h2> strength : {props.strength}</h2>
        <h2> speed : {props.spped}</h2>
        <h2> intelligence : {props.intelligence}</h2>
        </div>
    )
}

export default PlayerCreated

