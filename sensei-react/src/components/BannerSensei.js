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

        <div className="main-article-sensei">
          <h2>
            Sobre
          </h2>

          <p className="about-sensei">

          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            {/* {user?.bio}         */}
            {/* Bio do Sensei */}
          </p>
          
        </div>

        

        <footer>
          <div className="relationship-sensei">

            <a>

              <img src={FollowerImg} alt="" />

              <strong>
                {user?.followers}
              </strong>

              Followers 

            </a>

            <a>

              <img src={StarImg} alt="estrelas recebidas" />

              <strong>
                {user?.following}
              </strong>

              Stars

            </a>

          </div>

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