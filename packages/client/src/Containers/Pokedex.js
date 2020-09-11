import React, { useState } from 'react';
import pokedeximg from '../Assets/Pokedex.png'
import Screen from './Screen'
import Description from '../Components/Description'
import Portrait from './Portrait'
import BlinkingButton from '../Components/BlinkingButton'
import TypeScreen from '../Components/TypeScreen'
import Type from '../Components/Type'
import css from '../App.css'

function Pokedex() {
  return (
    <div className="Pokedex">
      <img alt="" src={pokedeximg} />
      <div className="BlinkingButtons">
        <BlinkingButton id="blueButton" hex={"#00E8FF"}/>
        <BlinkingButton id="redButton" hex={"#FF2D00"}/>
        <BlinkingButton id="yellowButton" hex={"#FBFF00"}/>
        <BlinkingButton id="greenButton" hex={"#45FF27"}/>
      </div>
      <Portrait/>
      <TypeScreen>
        <Type/>
      </TypeScreen>
      <Screen>
        <Description/>
      </Screen>
    </div>
  );
}

export default Pokedex;
