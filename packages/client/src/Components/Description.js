import React, { useState, useEffect } from 'react';
import TypeWriter from 'react-typewriter';
import Speech from "speak-tts";

function Description(props) {
    
    const speech = new Speech();
    
    const settings = {
        volume: .5,
        lang: "en-US",
        rate: 1,
        pitch: 1,
        voice: "Microsoft Guy Online (Natural) - English (United States)"
    };

    var { delay } = props;
    var { name, type, rating, description } = props.items;
    const [ready, setReady] = useState(false);
    if(rating == undefined) rating = "Unknown"
    if(delay == undefined){
        delay = 1000;
    }

    useEffect(() => {
        var plurality = type.includes('Uncommon') ? 'an ' : 'a ';
        const timeout = setTimeout(() => {
            setReady(true);
            speech.init(settings).then(() => {
                speech.speak({text: name + ". Is " + plurality + type + " rated at " + rating + ". " + description})
            })
        }, delay)
        return () => clearTimeout(timeout);
    }, []);


    return (
        <div>
            {ready && 
            <TypeWriter typing={1} maxDelay={50}>
                <div id="name">{name}</div>
                <div id="rating">Rating: {rating}</div>
                <div id="desc">{description}</div>
            </TypeWriter>
            }
        </div>
    );
}   

export default Description;
