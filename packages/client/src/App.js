import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './App.scss';
import Pokedex from './Containers/Pokedex';
import { Transition } from 'react-transition-group'
import { fetchItems, enterTransition, exitTransition } from './actions/appActions'
import { resetDescTyping, resetSpeech } from './actions/descriptionActions';
import { resetTypeTyping } from './actions/typeActions';
// Consolidate states, integrate into store.

function App() {    

  var dispatch = useDispatch()
  var app = useSelector(state => state.app);
  var desc = useSelector(state => state.description);
  var { enter, fetched, items, error } = app;
  var { finishSpeech } = desc;

  useEffect(() => {
    dispatch(fetchItems())
    setInterval(() => {
      dispatch(fetchItems());
    }, 5000);
  }, [dispatch]);

  useEffect(() => {
    if(JSON.stringify(items.data) === "{}") { 
      dispatch(resetDescTyping())
      dispatch(resetTypeTyping())
      dispatch(resetSpeech())
    }
    if(!finishSpeech && JSON.stringify(items.data) !== "{}") {
      dispatch(enterTransition());
    }
    if (finishSpeech) {
      dispatch(exitTransition());
    }
  }, [items, finishSpeech])

  if(error || !fetched) {
    return <div></div>
  }
  else if (JSON.stringify(items.data) === "{}") {
    return <div></div>
  }
  else if (JSON.stringify(items.data) !== "{}") {
    return (
      <Transition timeout={1000} in={enter} unmountOnExit={true} appear>
        {(status) => (
          <Pokedex className={`Pokedex Pokedex-${status}`} items={items.data}/>
        )}
      </Transition>
    );
  } 
}

export default App;
