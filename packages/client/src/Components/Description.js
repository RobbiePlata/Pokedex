import React, { useState, useEffect } from 'react';
import TypeWriter from 'react-typewriter';


function Description(props) {
    const [ready, setReady] = useState(false);
    var { name, rating, desc, delay } = props;
    if(rating == undefined) rating = "Unknown"
    if(delay == undefined){
        delay = 1000;
    }
    useEffect(()=>{
        const timeout = setTimeout(() => {
            setReady(true);
        }, delay)
        return () => clearTimeout(timeout);
    });
    return (
        <div>
            {ready && 
            <TypeWriter typing={1} maxDelay={50} >
                <div id="name">{name}</div>
                <div id="rating">{rating} rating</div>
                <div id="desc">{desc}</div>
            </TypeWriter>
            }
        </div>
    );
}   

export default Description;
