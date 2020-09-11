import React, { useState, useEffect, lazy, Suspense} from 'react';
import portrait from '../Assets/portrait.jpg'
import blank from '../Assets/default.png';

function Portrait(props) {
  const image = portrait ? portrait : blank
  const [img, setImg] = useState(image);
  const [error, setError] = useState(false);
  const [flickerCount, setFlickerCount] = useState(0);
  const onError = () => {
    if (!error) {
      setImg(blank)
      setError(true)
    };
  }
  useEffect(() => {
    if (flickerCount < 20 && image == portrait){
      const interval = setInterval(() => {
        if(img == portrait){
          setImg(blank);
        }
        else if(img == blank){
          setImg(portrait);
        }
        setFlickerCount(flickerCount + 1)
      }, 25);
      return () => clearInterval(interval);
    }
  }, [img]);
  return (
    <div className="Portrait">
      <img alt={blank} onError={onError} src={img}/>
    </div>
  );
}

export default Portrait;
