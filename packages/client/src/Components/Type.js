import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TypeWriter from 'react-typewriter';
import { startTyping, finishTyping } from '../actions/typeActions'

function Type(props){
    const dispatch = useDispatch();
    const data = useSelector(state => state.type);
    const { start } = data;

    useEffect(()=>{
        const timeout = setTimeout(() => {
            dispatch(startTyping())
        }, props.delay)
        return () => clearTimeout(timeout);
    }, [dispatch]);

    return (
        <div>
            { start && 
            <TypeWriter typing={1} onTypingEnd={() => dispatch(finishTyping())}>
                {props.type}
            </TypeWriter>
            }
        </div>
    )
}

export default Type;    