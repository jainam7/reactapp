import React from 'react';
import './Person.css';



const person = (props) => {
    return (
        <div className="Person" >
            <p onClick={props.click}>My is a {props.name} &&   I am {props.age} Years old</p>
            <p>{props.children}</p>
            <input type="text" className="normal" onChange={props.changed}  value={props.name} />
        </div>
    
    )
};
export default person;