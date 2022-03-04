import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const WelcomScreen = ({ children }) => {
  const myRefDiv = useRef(null);

  // En la primer rendirizacion el myRefDiv = null
  console.log('myRefDiv.current', myRefDiv.current);

  // useEffect help to update the DOM  dynamically => execute between componetMounted and componentUpdated of before version
  useEffect(() => {
    console.log('myRefDiv.currrent (en useeffect)', myRefDiv.current);
  })

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