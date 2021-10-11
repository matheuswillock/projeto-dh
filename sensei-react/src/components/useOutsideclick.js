// Objetivo do componente é gerenciar o button de aberrtura e fechamento do menu DropDown.

// importando estados e efeitos
import { useState, useEffect } from 'react';

// Exportando uma variável com a execução da function
export const useOutsideClick = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {

    const onClick = e => {
      // Verifica se o elemento atual é diferente de nulo e se ele não contem click aberto.
      if(el.current !== null && !el.current.contains(e.target)) {
        setIsActive(!isActive);
      }
    }

    if(isActive) {
      window.addEventListener('click', onClick)
    };

    return () => {
      window.removeEventListener('click', onClick)
    }


  }, [isActive, el]);

  return [isActive, setIsActive];

}

