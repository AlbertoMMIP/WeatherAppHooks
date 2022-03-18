import { useRef, useEffect, useState } from 'react';
import Clouds from 'vanta/dist/vanta.clouds.min';
import * as THREE from 'three';


const useWelcomeScreen = () => {
  const myRefDiv = useRef(null);
  const [vanta, setVanta] = useState(0); // vanta init with 0
  // In the first render => myRefDiv = null
  // useEffect help to update the DOM  dynamically => execute between componetMounted and componentUpdated of before version
  // This is executable after each renderization
  // Take care with infinite loops
  // Set the dependencies in the definition
  useEffect(() => {
    if (!vanta) {
      // Here init the vanta state and the cycle life start again
      setVanta(Clouds({
        THREE,
        el: myRefDiv.current
      }));
    }
    // Start the saneamiento process
    // Al salir de la pantalla debemos detener el efecto
    // y des-asociar todos los recursos (div + efecto vanta)
    // In the before bersion was willComponentUnmounted
    return () => {
      // This function is called when the resources will be destroy
      if (vanta) {
        vanta.destroy();
      }
    }
  }, [vanta])

  return myRefDiv;
}

export default useWelcomeScreen;