import React from 'react';
import css from '../App.css';

function BlinkingButton(props) {
    const {color} = props;
    return (
        <button id={color + "Button"}></button>
    );
}

export default BlinkingButton;
