import React, {useEffect, useState} from 'react';
import api from '../services/api'
import '../assets/styles/partials/SenseiItem.css'

export default function SenseiItem() {
  const [user, setUser] = useState();

  useEffect(() => {
    api
      .get("https://api.github.com/users/matheuswillock")
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
        
        <button type="button">
          Ver as Aulas
        </button>

      </footer>

    </article>

  );
}