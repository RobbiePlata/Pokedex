import React from 'react';
import css from '../App.css';

function Screen(props) {
  return (
      <div className="Screen">
        {props.children}
      </div>
  );
}

export default Screen;
