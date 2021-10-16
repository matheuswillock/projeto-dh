import React from 'react';
import { Link } from 'react-router-dom';

import loginImg from '../../assets/images/login.svg';

export default function ButtonLogin() {  
  return(

    <Link to="/login" className="login-btn">
      <p>Login</p> 
      <img src={loginImg} alt="Fazer login" />
    </Link>

  );
} 