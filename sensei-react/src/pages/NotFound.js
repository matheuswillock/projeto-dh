import React from 'react';
import { Link } from 'react-router-dom'

import PakkunImg from '../assets/images/404img.svg';

import '../assets/styles/Main.css';
import '../assets/styles/partials/PageNotFound.css';
import '../assets/styles/medias/PageNotFoundMedia.css';


export default function NotFoundError() {
  return(

    <div id="page-not-found">

      <div id="container-not-found">

        <h2>404</h2>
        
        <div className="content-location">

          <img src={PakkunImg} alt="Error 404" />

          <p>
            Opa, acho que você se perdeu pequeno genin. 
            <br />
            Clique no botão abaixo que vamos rastrear o seu caminho de volta.
          </p>

        </div>

        <button className="btn-error">
          <Link to="/" className="link-error">
            Home
          </Link>
        </button>

      </div>
      
      
    </div>
  );
}