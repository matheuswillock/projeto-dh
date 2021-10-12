import React, {useEffect, useState} from 'react';
import api from '../services/api'
import { Link } from 'react-router-dom';

import '../assets/styles/partials/SenseiItem.css'

export default function SenseiItem() {
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

    <article className="senseis-item">

      <header>

        <img src={user?.avatar_url} alt={user?.login} />

        <div>
          <strong>{user?.name}</strong>
          <span>{user?.company}</span>
        </div>

      </header>

      <p>{user?.bio}</p>

      <footer>
        
        <Link to="/viewclasses" className="button-sensei" type="button" >
          Ver as Aulas
        </Link>

      </footer>

    </article>

  );
}