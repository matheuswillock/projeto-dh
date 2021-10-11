import React, {useEffect, useState} from "react";
import api from '../services/api';
import LogoHome from '../components/LogoHome';
import PerfilContent from '../components/PerfilContent';

import '../assets/styles/partials/TopHeader.css';
import '../assets/styles/medias/PageSearchMedia.css';

export default function TopHeader() {
  const [user, setUser] = useState();
  useEffect(() => {
    api
      .get("https://api.github.com/users/matheuswillock")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div className="top-bar-container">

    <LogoHome />

    <PerfilContent 
      src={user?.avatar_url}
      alt={user?.login}
    />

  </div>
  );
  

}