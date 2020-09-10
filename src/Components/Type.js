import React, { useState } from 'react';
import TypeWriter from 'react-typewriter';

const typestring = "Macro";

function Type(props){
    return (
        <div className="Type">
            <TypeWriter typing={1}>
                Type: {typestring}
            </TypeWriter>
        </div>
    )
}

export default Type;