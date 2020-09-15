import React, { useState } from 'react';
import TypeWriter from 'react-typewriter';

const typestring = "Stable Genius";

function Type(props){
    return (
        <div className="Type">
            <TypeWriter typing={1}>
                {typestring}
            </TypeWriter>
        </div>
    )
}

export default Type;