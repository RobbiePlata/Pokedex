import React from 'react';
import pokedeximg from '../Assets/Pokedex.png'
import Screen from '../Components/Screen'
import css from '../App.css'

function Pokedex() {
  return (
    <div className={css.Pokedex}>
      <img alt="" src={pokedeximg} />
      <Screen/>
    </div>
  );
}

export default Pokedex;
