import React from 'react';
import PropTypes from 'prop-types';
import useWelcomeScreen from '../../hooks/useWelcomeScreen';

const WelcomScreen = ({ children }) => {
  const myRefDiv = useWelcomeScreen();

  return (
    <div className='full' ref={myRefDiv}>
      {children}
    </div>
  )
}

WelcomScreen.propTypes = {
  children: PropTypes.node,
}

export default WelcomScreen;