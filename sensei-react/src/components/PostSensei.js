import React, { useEffect, useState } from 'react';
import api from '../services/api'

import '../assets/styles/partials/PostSensei.css';

export default function PostSensei( props ) {

  const [user, setUser] = useState();

  const [name, setName] = useState(props.name);


  useEffect(() => {
    api
      .get(`https://api.github.com/users/${name}`)
      .then((response) => {
        console.log(response.data);
        console.log(response.data.repos_url);
        setUser(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return(

    <div className="post">

      <div className="header-post">

        <img src={user?.avatar_url} alt={user?.login} />

        <div className="sensei-post">
          <strong> {user?.name}</strong>
          
            {/* Description */}
        </div>
      </div>

      <div className="separator-sensei-post"></div>

      <div className="main-post">

        <h2 className="title-post">
          What is Lorem Ipsum?
        </h2>

        <p>
          <span></span>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>

        <div id="player" >

          <iframe         
           src="https://www.youtube.com/embed/Jau0Rn_ADxo" 
           title="YouTube video player" 
           frameborder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" 
          />

          
        </div>

      </div>

      <div className="footer-post">
        
      </div>      


      

    </div>




  );
}