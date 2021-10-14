import React from 'react';

import TopHeader from '../components/TopHeader';
import BannerSensei from '../components/seeClasses/BannerSensei';
import PostSensei from '../components/seeClasses/PostSensei';
import FooterPage from '../components/FooterPage'

import '../assets/styles/Main.css';

export default function SeeClasses() {

  return(

    <div id="page-classes">
      <div id="container-classes">
        
        <div className="header-sensei-show">
          <TopHeader/>
        </div>

        <main>
          <div className="main-toper">
            <div className="main-article-sensei">
              <BannerSensei/>
            </div>
          </div>

          <div className="main-posters">
            <div className="posts-article">
              <PostSensei 
                name="filipedeschamps"
              />
            </div>
          </div>
                    
        </main>
        
      </div>

      <FooterPage />
    </div>
      
  );

}