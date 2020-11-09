import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TypeWriter from 'react-typewriter';
import Speech from "speak-tts";
import { startTyping, finishTyping } from '../actions/descriptionActions';
import { startSpeech, finishSpeech } from '../actions/descriptionActions';

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
    }, [finished])

    function Speak() {
        var plurality = type.includes('Uncommon') ? 'an ' : 'a ';
        var phrase = ladder ? (name + ". Is " + plurality + type + " type, "+ " rated at " + rating + ". " + description) : (name + ". Is " + plurality + type + " type. " + description);
        speech.init(settings).then(() => {
            speech.speak({ 
                text: phrase, 
                listeners: {
                    onstart: () => { dispatch(startSpeech()) },
                    onend: () => { dispatch(finishSpeech()) }
                }
            });
        });
    }

    return (
        <div className="Description">
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
