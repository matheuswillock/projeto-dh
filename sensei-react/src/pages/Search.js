import React from 'react';

// Import components
import SearchForm from '../components/search/SearchForm';
import SenseiItem from '../components/search/SenseiItem';
import TopHeader from '../components/TopHeader';
import FooterPage from '../components/FooterPage';

// Import styles
import '../assets/styles/Main.css';
import '../assets/styles/partials/PageSearch.css';

export default function Search() {
  return(
    <div id="page-search">
      <div id="container-search">

        <header className="page-header">
          
          <TopHeader />

          <div className="header-content-search">

            <strong>
              Senseis
              <br />
              Disponíveis
            </strong>

            <SearchForm />

          </div>

        </header>

        <main>
          <SenseiItem />   
        </main>
        
      </div>

      <FooterPage />
    </div>
  );
}