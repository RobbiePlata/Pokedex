import React, { useState, useEffect } from 'react';
import pokedeximg from '../Assets/Pokedex.png'
import Screen from './Screen'
import Description from '../Components/Description'
import Portrait from './Portrait'
import BlinkingButton from '../Components/BlinkingButton'
import TypeScreen from '../Containers/TypeScreen'
import Type from '../Components/Type'

function Pokedex(props) { 

  const { className, items } = props;
  return (
    <div className={className}>
      <img alt="" src={pokedeximg}/>  
      <Portrait src={props.items.image}/>
      <TypeScreen>
          <Type type={items.type} delay={2500}/>
      </TypeScreen>
      <div className="BlinkingButtons">
        <BlinkingButton id="blueButton" hex={"#00E8FF"}/>
        <BlinkingButton id="redButton" hex={"#FF2D00"}/>
        <BlinkingButton id="yellowButton" hex={"#FBFF00"}/>
        <BlinkingButton id="greenButton" hex={"#45FF27"}/>
      </div>
      <Screen>
          <Description voiceDelay={1000} items={items}/>
      </Screen>
    </div>
  );
}

export default Pokedex;
