import React from 'react';
import HeartImg from '../assets/images/heart.svg';
import CodeImg from '../assets/images/code.svg';

import '../assets/styles/partials/FooterPage.css';


export default function FooterPage() {

  return(

    <div className="footer-page">

      <p id="made-footer" >

        Made with <img className="heart-footer" src={HeartImg} alt="Entregando coração" /> by 
        
      </p>

      <div id="link-footer" href="https://github.com/" > 

        <span>
          <strong>
            Grupo
          </strong>
          Seis
        </span>
        
        <img src={CodeImg} alt="Code Logo" />

      </div>

      <p id="reserved-footer">
        Brasil 2021 - Que a força esteja conosco.
      </p>

    </div>
    
  );

  


}