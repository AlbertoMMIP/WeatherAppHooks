import React from 'react';
import { Link } from 'react-router-dom';

const WelcomPage = () => {
  return (
    <div>
      Welcom
      <div>
        <Link to='/main'>Ir a Main</Link>
      </div>
    </div>
  )
}

export default WelcomPage;