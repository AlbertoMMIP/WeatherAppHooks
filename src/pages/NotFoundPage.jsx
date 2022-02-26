import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      Not found
      <div>
        <Link to='/main'>Ir a Main</Link>
      </div>
    </div>
  )
}

export default NotFound