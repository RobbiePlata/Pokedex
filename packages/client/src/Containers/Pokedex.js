import React from 'react';
import pokedeximg from '../Assets/Pokedex.png'
import Screen from './Screen'
import Description from '../Components/Description'
import Portrait from './Portrait'
import BlinkingButton from '../Components/BlinkingButton'
import TypeScreen from '../Containers/TypeScreen'
import Type from '../Components/Type'
import portrait from '../Assets/portrait.jpg'

function Pokedex(props) {
  const { className } = props;
  return (
    <div className={className}>
      <img alt="" src={pokedeximg}/>
      <div className="Portrait">  
        <Portrait src={portrait}/>
      </div>
      <div className="TypeScreen">
        <TypeScreen>
          <div className="Type">
            <Type type={"Rare Honorable Macro"} delay={1000}/>
          </div>
        </TypeScreen>
      </div>
      <div className="BlinkingButtons">
        <BlinkingButton id="blueButton" hex={"#00E8FF"}/>
        <BlinkingButton id="redButton" hex={"#FF2D00"}/>
        <BlinkingButton id="yellowButton" hex={"#FBFF00"}/>
        <BlinkingButton id="greenButton" hex={"#45FF27"}/>
      </div>
      <div className="Screen">
        <Screen>
          <div className="Description">
            <Description name={"JuggernautJason"} rating={"5900"} desc={"Description"}/>
          </div>
        </Screen>
      </div>
    </div>
  );
}

export default Pokedex;
