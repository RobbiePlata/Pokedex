import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux'
import './App.scss';
import Pokedex from './Containers/Pokedex';
import store from './store'
import { Transition } from 'react-transition-group'
// Consolidate states, integrate into store.

function App() {    
  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState("{}");
  const [empty, setEmpty] = useState(true);
  const [entered, setEntered] = useState(true);
  
  function fetchURL() {
    fetch("http://localhost:3001/")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          setEmpty(JSON.stringify(result) === "{}");
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        } 
      )
  }
  
  useEffect(() => {
    fetchURL();
    setInterval(() => {
      fetchURL();
    }, 10000);
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded || empty) {
    return <div></div>;
  } else if (isLoaded && !empty) {
    return (
      <Provider store={store}>
        <Transition timeout={1000} in={entered} unmountOnExit={true} appear>
          {(status) => (
            <Pokedex className={`Pokedex Pokedex-${status}`} items={items}/>
          )}
        </Transition>
      </Provider>
    );
  }
  
}

export default App;
