import React from 'react';
import { Link } from 'react-router-dom';

import FormLogin from '../components/forgotPassword/FormForgotPassword';
import LogoHome from '../components/LogoHome';

import '../assets/styles/Main.css';
import '../assets/styles/partials/PageForgot.css';
import '../assets/styles/medias/PageForgot.css';

export default function Login() {

  return (
    <div id="page-forgot">

      <div id="container-forgot">

        <div className="header-forgot">
          <LogoHome />
        </div>

        <div className="content-forgot">

          <FormLogin />

          <div className="separator-sensei"></div>

          <div id="register-group-btn">
            <Link className="options-btn" to="/register" >
              Cadastre-se
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}