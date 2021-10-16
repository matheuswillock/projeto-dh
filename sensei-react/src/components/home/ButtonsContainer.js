import React from 'react';
import { Link } from 'react-router-dom';

export default function ButtonContainer() {

  return(
    <div className="buttons-container">
      <Link to='/Search' className='study'>
        Estudar
      </Link>

      <Link to='/register'  className='give-classes'>
        Ensinar
      </Link>
    </div>
    
  );
}