import React, { useState } from 'react';
import { Provider } from 'react-redux'
import './App.scss';
import Pokedex from './Containers/Pokedex';
import store from './store'
import { Transition } from 'react-transition-group'
// Consolidate states, integrate into store.

function App() {
  return (
    <Provider store={store}>
      <Transition timeout={1000} in={true} appear>
        {(status) => (
          <Pokedex className={`Pokedex Pokedex-${status}`}/>
        )}
      </Transition>
    </Provider>
  );
}

export default App;
