import React from 'react';
import pokedeximg from '../Assets/Pokedex.png'
import Screen from '../Components/Screen'
import Portrait from '../Components/Portrait'
import BlinkingButton from '../Components/BlinkingButton'
import portrait from '../Assets/portrait.jpg'
import css from '../App.css'

function Pokedex() {
  return (
    <div className="Pokedex">
      <img alt="" src={pokedeximg} />
      <div className="BlinkingButtons">
        <BlinkingButton color={"blue"}/>
        <BlinkingButton color={"red"}/>
        <BlinkingButton color={"yellow"}/>
        <BlinkingButton color={"green"}/>
      </div>
      <Portrait portrait={portrait}/>
      <Screen/>
    </div>
  );
}

export default Pokedex;
