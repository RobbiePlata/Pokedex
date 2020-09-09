import React, { useState, useEffect } from 'react';
import css from '../App.css';

function BlinkingButton(props) {
    const [color, setColor] = useState(props.hex)
    useEffect(() => {
        const interval = setInterval(() => {
            if(color == props.hex){
                setColor("white");
            }
            else{
                setColor(props.hex)
            }
          }, 75);
        return () => clearInterval(interval);
    }, [color]);
    return (    
        <button style={{backgroundColor: color}} id={props.id}></button>
    );
}

export default BlinkingButton;
