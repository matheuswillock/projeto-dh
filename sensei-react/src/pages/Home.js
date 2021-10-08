import React from 'react';
import LogoHome from '../components/LogoHome';
import ButtonLogin from '../components/ButtonLogin';
import ButtonsContainer from '../components/ButtonsContainer'

import ImagePrincipal from '../assets/images/jiraya-sensei.svg';

import '../assets/styles/Main.css';
import '../assets/styles/partials/PageLanding.css';
import '../assets/styles/medias/PageLandingMedia.css';

export default function Home() {
  return(
    <div id="page-landing">
      <div id="container-home">
        <div className="header-content">

          <LogoHome />

          <ButtonLogin />

        </div>

        <div className="logo-container">
          <h2>Sensei</h2>
          <p>Encontre o seu.</p>
        </div>

        <img 
          className="image-principal" 
          src={ImagePrincipal} 
          alt="Imagem principal - Jiraya Sensei"
        />

        <ButtonsContainer />

        <div className="comments">
          Revolucione o mundo ninja.
        </div>

      </div>
    </div>

  );
}