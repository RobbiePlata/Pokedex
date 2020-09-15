import React, { useState, useEffect, lazy, Suspense} from 'react';
import portrait from '../Assets/portrait.jpg'
import blank from '../Assets/default.png';

function Portrait(props) {
  const image = portrait ? portrait : blank
  const [img, setImg] = useState(image);
  const [error, setError] = useState(false);
  const onError = () => {
    if (!error) {
      setImg(blank)
      setError(true)
    };
  }
  return (
    <div className="Portrait">
      <img alt={blank} onError={onError} src={img}/>
    </div>
  );
}

export default Portrait;
