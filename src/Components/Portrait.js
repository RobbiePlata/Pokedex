import React from 'react';
import css from '../App.css';

function Portrait(props) {
  const { portrait } = props;
  return (
      <div className="Portrait">
        <img src={portrait}/>
      </div>
  );
}

export default Portrait;
