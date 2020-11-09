import React, { useEffect, useState } from 'react';
import blank from '../Assets/default.png';

function Portrait(props) {
  const { src } = props;
  const image = src !== undefined ? src : blank;
  return (
    <div className="Portrait">  
      <img href={blank} src={image}/>
    </div>
  );
}

export default Portrait;
