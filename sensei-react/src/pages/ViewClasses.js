import React from 'react';

import TopHeader from '../components/TopHeader';
import BannerSensei from '../components/BannerSensei';

import '../assets/styles/Main.css';


export default function ViewClasses() {

  return(

    <div id="page-classes">
      <div id="container-classes">
        <div className="header-sensei-show">
          <TopHeader/>
        </div>

        <div className="main-article-sensei">
          <BannerSensei/>
        </div>

        
      </div>
    </div>
      
  );

}