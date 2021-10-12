import React, { useEffect, useState } from 'react';

import api from '../services/api'

import StarImg  from '../assets/images/star.svg';
import FollowerImg from '../assets/images/followers.svg'
import GpsImg from '../assets/images/localizacao.svg';
import YoutubeImg from '../assets/images/youtube.svg';
import BlogImg from '../assets/images/blog.svg';
import InstaImg from '../assets/images/instagram.svg';

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
            Sobre mim
          </h2>

          <p className="about-sensei">

            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            {/* {user?.bio}         */}
            {/* Bio do Sensei */}
          </p>

          <div className="information-sensei">
            <ul>
              
              <li>
                <a href="https://www.youtube.com/FilipeDeschamps" className="information-sensei-flex" >
                  <img src={YoutubeImg} alt="" srcset="" />
                  <span>Filipe Deschamps</span>
                </a>
              </li>

              <li>
                <a href={user?.blog} className="information-sensei-flex">
                  <img src={BlogImg} alt="" />
                  <span>Blog do Sensei</span>
                </a>
              </li>

              <li className="information-sensei-flex">
                
                <img src={GpsImg} alt="" srcset="" />
                <span>{user?.location}</span>
                
              </li>
              
            </ul>
            
            
          </div>
          
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