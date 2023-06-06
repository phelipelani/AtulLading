import { useState } from 'react';

export const useMenuState = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  
  return {
    isMenuActive,
    setIsMenuActive,
  };
};

export const useCarrocelState = () => {
  const [isCarrocel, setIsCarrocel] = useState(false);
  
  return {
    isCarrocel,
    setIsCarrocel ,
  };
};
