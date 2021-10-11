import React, { useEffect, useState } from 'react';

import api from '../services/api'

import StarImg  from '../assets/images/star.svg';
import FollowerImg from '../assets/images/followers.svg'
import GithubImg from '../assets/images/github.svg';

import '../assets/styles/partials/BannerSensei.css'

export default function BannerSensei() {
  const [user, setUser] = useState();

  useEffect(() => {
    api
      .get("https://api.github.com/users/filipedeschamps")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return(
    
    <div className="apresentation-sensei">

      <article classeName="data-perfil">

        <header>

          <img src={user?.avatar_url} alt={user?.login} />

          <div className="apresentation-sensei-bio">
            <strong> {user?.name}</strong>
            <span> {user?.bio}</span> 
              {/* Description */}
          </div>

        </header>

        <h2>
          Sobre
        </h2>

        <p className="about-sensei">
          {user?.bio}        
          {/* Bio do Sensei */}
        </p>

        <a className="github-sensei" href={user?.html_url}>
          <img src={GithubImg} alt="Github do sensei "  />
          Github do sensei
        </a>

        <footer>

          <a>

            <img src={FollowerImg} alt="" />

            <strong>
              {user?.followers}
            </strong>

            Followers 

          </a>

          <p>
            .
          </p>
            
          <a>
            
            <img src={StarImg} alt="estrelas recebidas" />

            <strong>
              {user?.following}
            </strong>

          </a>

          <button>
            <a>
              Tornar-se Aluno
            </a>
          </button>

        </footer>

      </article>

    </div>
  );



}