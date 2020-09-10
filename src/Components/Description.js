import React, { useState, useEffect } from 'react';
import TypeWriter from 'react-typewriter';


function Description() {
    const [show, setShow] = useState(false);
    useEffect(()=>{
        const timeout = setTimeout(() => {
            setShow(true);
        }, 1500)
        return () => clearTimeout(timeout);
    });
    return (
        <div className="Description">
            {show && 
            <TypeWriter  typing={1} maxDelay={50} >
                Jason is a Terran player hailing from Ontario, Canada. He is currently in school, studying Network and Information Technology at the University of Ontario. He has been playing StarCraft 2 since the start of Wings Of Liberty in 2010. He has been part of Cosmic Cloud Militia since July of 2015. Apart from small cups and show matches, Jason has not had any notable results until 2015.
            </TypeWriter>
            }      
        </div>
    );
}

export default Description;
