import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TypeWriter from 'react-typewriter';
import Speech from "speak-tts";
import { startTyping, finishTyping } from '../actions/descriptionActions';

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

    var dispatch = useDispatch();
    var typeData = useSelector(state => state.type);
    var { finished } = typeData;
    var { voiceDelay } = props;
    if(voiceDelay === undefined){
        voiceDelay = 1000;
    }
    var { name, type, ladder, description } = props.items;
    var rating = ladder !== undefined ? "Rating: " + JSON.stringify(ladder.mmr) : ""
    var record = ladder !== undefined ? JSON.stringify(ladder.wins) + "-" + JSON.stringify(ladder.losses) : ""
    

    useEffect(() => {
        if(finished){
            dispatch(startTyping());
            Speak();
        }
    },[finished, dispatch])

    function Speak() {
        var plurality = type.includes('Uncommon') ? 'an ' : 'a ';
        speech.init(settings).then(() => {
            if (ladder) {
                speech.speak({text: name + ". Is " + plurality + type + " type, "+ " rated at " + rating + ". " + description})
            }
            else {
                speech.speak({text: name + ". Is " + plurality + type + " type. " + description})
            }
        })
    }

    return (
        <div>
            { finished && 
            <TypeWriter typing={1} maxDelay={80} onTypingEnd={() => dispatch(finishTyping())}>
                <div id="name">{name}</div>
                <div id="rating">{rating}</div>
                <div id="record">{record}</div>
                <div id="desc">{description}</div>
            </TypeWriter>
            }
        </div>
    );
}   

export default Description;
