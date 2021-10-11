import React, {useRef, useState} from 'react';
import { Link } from 'react-router-dom';

import UserImg from '../assets/images/icon.svg';
import LogoutImg from '../assets/images/logout.svg';
import KunaiImg from '../assets/images/kunai.svg';


export default function PerfilContent( props ) {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false)
  const onClick = () => setIsActive(!isActive)
  // console.log(isActive)

  return(

    <div className="menu-container">
      <button onClick={onClick } className="header-perfil-content" >
        <img src={props.src} alt={props.alt} />
      </button>

      <nav 
        ref={dropDownRef}
        className={`menu ${isActive ? "active" : "inactive"}`}
      >
        <ul className="nav-content">
          <li>
            <img src={UserImg} alt="Ver perfil"/>
            <Link to='#'>Perfil</Link>
          </li>
          <li>
            <img src={KunaiImg} alt="ver senseis"/>
            <Link to='#'>Senseis</Link>
          </li>
          <li>
            <img src={LogoutImg} alt="Sair da academia" />
            <Link to='#'>Sair</Link>
          </li>
        </ul>
      </nav>

    </div>
    

    
    
    

  );

}