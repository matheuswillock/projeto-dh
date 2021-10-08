import React from 'react';
import LogoHomeImg from '../assets/images/logo-home.svg';
import { Link } from 'react-router-dom'

import '../assets/styles/partials/LogoHome.css';

export default function LogoHome() {
  return(
    <Link to='/' className='logo-icon'>
      <img src={ LogoHomeImg } alt="Home" />
    </Link>
  );
}