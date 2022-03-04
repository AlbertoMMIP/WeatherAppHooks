import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Clouds from 'vanta/dist/vanta.clouds.min';
import * as THREE from 'three';

const WelcomScreen = ({ children }) => {
  const myRefDiv = useRef(null);
  const [vanta, setVanta] = useState(0); // vanta init with 0
  // In the first render => myRefDiv = null
  console.log('myRefDiv.current', myRefDiv.current);

  // useEffect help to update the DOM  dynamically => execute between componetMounted and componentUpdated of before version
  // This is executable after each renderization
  // Take care with infinite loops
  // Set the dependencies in the definition
  useEffect(() => {
    console.log('myRefDiv.currrent (en useeffect)', myRefDiv.current);
    if (!vanta) {
      // Here init the vanta state and the cycle life start again
      setVanta(Clouds({
        THREE,
        el: myRefDiv.current
      }));
      
      console.log('Se establece un nuevo valor a vanta');
    }
  }, [vanta])

  return (
    <div ref={myRefDiv}>
      WelcomScreen
    </div>
  )
}

WelcomScreen.propTypes = {
  children: PropTypes.node,
}

export default WelcomScreen;