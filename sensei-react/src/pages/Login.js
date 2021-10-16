import React from 'react';
import { Link } from 'react-router-dom';

import FormLogin from '../components/login/FormLogin';
import LogoHome from '../components/LogoHome';

import '../assets/styles/Main.css';
import '../assets/styles/partials/PageLogin.css';
import '../assets/styles/medias/PageLoginMedia.css';

export default function Login() {

  return (
    <div id="page-login">

      <div id="container-login">

        <div className="header-login">
          <LogoHome />
        </div>

        <div className="content-login">

          <FormLogin />

          <div className="separator-sensei"></div>

          <div id="register-group-btn">
            <Link className="options-btn" to="/register" >
              Cadastre-se
            </Link>

            <Link className="options-btn" to="/ForgotPassword" >
              Esqueci a minha senha!
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}