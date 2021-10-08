import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';
// import PerfilImg from '../assets/images/Perfil-image/perfil.svg';

export default function PerfilContent() {
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

    <Link to="/login" className="header-perfil-content">
      <img src={user?.avatar_url} alt={user?.login} />
      <p>
        {user?.name}
      </p>
    </Link>

  );




}