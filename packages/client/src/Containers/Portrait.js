import React, { useState, useEffect, lazy, Suspense} from 'react';
import blank from '../Assets/default.png';

function Portrait(props) {
  const image = props.src ? props.src : blank
  const [src, setSrc] = useState(image);
  const [error, setError] = useState(false);
  const onError = () => {
    if (!error) {
      setSrc(blank)
      setError(true)
    };
  }
  return (
      <img alt={blank} onError={onError} src={src}/>
  );
}

export default Portrait;
