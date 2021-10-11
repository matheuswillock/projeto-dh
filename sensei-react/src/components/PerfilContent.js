import React, {useRef, useState} from 'react';
import {useOutsideClick} from '../components/useOutsideclick'

import { Link } from 'react-router-dom';
// import PerfilImg from '../assets/images/Perfil-image/perfil.svg';

import UserImg from '../assets/images/icon.svg';


export default function PerfilContent( props ) {
  const dropDownRef = useRef(null);

  const [isActive, setIsActive] = useState(false)


  const onClick = () => setIsActive(!isActive)

  console.log(isActive)


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
            <img src={UserImg}/>
            <Link to='#'>Home</Link>
          </li>
          <li>
            <img src={UserImg}/>
            <Link to='#'> Home</Link>
          </li>
          <li>
            <img src={UserImg}/>
            <Link to='/#'>Casa</Link>
          </li>
        </ul>
      </nav>

    </div>
    

    
    
    

  );

}