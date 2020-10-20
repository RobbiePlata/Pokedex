import React, { useEffect, useState } from 'react';
import TypeWriter from 'react-typewriter';

function Type(props){
    const [ready, setReady] = useState(false);
    useEffect(()=>{
        const timeout = setTimeout(() => {
            setReady(true);
        }, props.delay)
        return () => clearTimeout(timeout);
    });
    return (
        <div>
            { ready && 
            <TypeWriter typing={1}>
                {props.type}
            </TypeWriter>
            }
        </div>
    )
}

export default Type;    