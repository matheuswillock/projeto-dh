import React from "react";

import LogoHome from '../components/LogoHome';
import PerfilContent from '../components/PerfilContent';

import '../assets/styles/partials/TopHeader.css';
import '../assets/styles/medias/PageSearchMedia.css';

export default function TopHeader() {

  return (
    <div className="top-bar-container">

    <LogoHome />

    <PerfilContent />

  </div>
  );
  

}