import React, { useState, createContext } from 'react';

export const BurgerMenuContext = createContext();

export const BurgerMenuContextProvider = ({ children }) => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <BurgerMenuContext.Provider value={{menuActive, setMenuActive}}>
      {children}
    </BurgerMenuContext.Provider>
  );
}