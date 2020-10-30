import React, { useEffect, useState } from 'react';
import blank from '../Assets/default.png';

function Portrait(props) {
  const { src } = props;
  const image = src !== undefined ? src : blank;
  return (
      <img href={blank} src={image}/>
  );
}

export default Portrait;
