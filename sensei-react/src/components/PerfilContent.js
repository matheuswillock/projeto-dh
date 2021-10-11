import React from 'react';

import { Link } from 'react-router-dom';
// import PerfilImg from '../assets/images/Perfil-image/perfil.svg';

export default function PerfilContent( props ) {

  return(


    <Link 
        to='#' 
        type="button" 
        className="header-perfil-content"
      >
      <img src={props.src} alt={props.alt} />
    </Link>

    
    
    

  );

}