import React from 'react';

import TopHeader from '../components/TopHeader';
import BannerSensei from '../components/BannerSensei';

import '../assets/styles/Main.css';

export default function ViewClasses() {

  return(

    <div id="page-classes">
      <div id="container-classes">
        <TopHeader/>

        <BannerSensei/>
        
      </div>
    </div>
      
  );

}