import React, {useState} from 'react';
import blank from '../Assets/default.png';

function Portrait(props) {
  const { portrait } = props;
  const image = portrait ? portrait : blank
  return (
    <div className="Portrait">
      <img src={image}/>
    </div>
  );
}

export default Portrait;
