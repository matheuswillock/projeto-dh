// Objetivo do componente é gerenciar se o button está ativo ou inativo par amostragem da nav-menu.

// importando estado e efeito do react
import { useState, useEffect} from 'react';

export  const useOutsideClick = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState)

  // Verifica se o menu foi clickado ou não
  useEffect(() => {
    //  quando user clickar no menu

    const onClick = e => {
      // Verifica se o elemento não está nulo se ele contem a nav
      if(el.current !== null && !el.current.contains(e.target)) {
        setIsActive(!isActive)
        // Por Default o isActive é lançado como null ou seja passa a ser true.
      }
    }

    // Se for true ela vai ouvir o nosso click se ocorrer o click avi abrir o nosso menu.
    if(isActive) {
      window.addEventListener( "click", onClick )
    }

    return () => {
      window.removeEventListener( "click", onClick )
    }


  }, [isActive, el])


  return [isActive, setIsActive]
}
