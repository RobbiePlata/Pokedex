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
        voice: "Microsoft Guy Online (Natural) - English (United States)",
        splitSentences: false
    };

    var { delay } = props;
    var { name, type, ladder, description } = props.items;
    var rating = ladder !== undefined ? "Rating: " + JSON.stringify(ladder.mmr) : ""
    var record = ladder !== undefined ? JSON.stringify(ladder.wins) + "-" + JSON.stringify(ladder.losses) : ""
    if(delay === undefined){
        delay = 1000;
    }

    useEffect(() => {
        var plurality = type.includes('Uncommon') ? 'an ' : 'a ';
        const timeout = setTimeout(() => {
            speech.init(settings).then(() => {
                if (ladder) {
                    speech.speak({text: name + ". Is " + plurality + type + " type, "+ " rated at " + rating + ". " + description})
                }
                else {
                    speech.speak({text: name + ". Is " + plurality + type + " type. " + description})
                }
            })
        }, delay)
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div>
            <TypeWriter typing={1} maxDelay={50}>
                <div id="name">{name}</div>
                <div id="rating">{rating}</div>
                <div id="record">{record}</div>
                <div id="desc">{description}</div>
            </TypeWriter>
        </div>
    );
}   

export default Description;
