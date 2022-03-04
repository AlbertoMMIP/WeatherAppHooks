import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const WelcomScreen = ({ children }) => {
  const myRefDiv = useRef(null);

  // En la primer rendirizacion el myRefDiv = null
  console.log('myRefDiv.current', myRefDiv.current);
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