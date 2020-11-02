import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './App.scss';
import Pokedex from './Containers/Pokedex';
import { Transition } from 'react-transition-group'
import { enter, fetchItems, isEmpty } from './actions/appActions'
// Consolidate states, integrate into store.

function App() {    

  var dispatch = useDispatch()
  var data = useSelector(state => state.app)
  var { fetching, fetched, items, entered, error } = data;

  useEffect(() => {
    dispatch(fetchItems())
    setInterval(() => {
      dispatch(fetchItems());
    }, 5000);
  }, [dispatch]);

  if(error || !fetched) {
    return <div></div>
  }
  else if (fetched && JSON.stringify(items.data) === "{}") {
    return <div></div>
  }
  else if (fetched && JSON.stringify(items.data) !== "{}") {
    return (
      <Transition timeout={1000} in={true} unmountOnExit={true} appear>
        {(status) => (
          <Pokedex className={`Pokedex Pokedex-${status}`} items={items.data}/>
        )}
      </Transition>
    );
  }
}

export default App;
