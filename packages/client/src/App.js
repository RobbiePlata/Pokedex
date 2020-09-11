import React from 'react';
import { Provider } from 'react-redux'
import './App.css';
import Pokedex from './Containers/Pokedex';
import store from './store'
// Consolidate states, integrate into store.

function App() {
  return (
    <Provider store={store}>
      <Pokedex/>
    </Provider>
  );
}

export default App;
