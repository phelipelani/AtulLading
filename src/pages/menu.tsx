import { useState } from 'react';

export const useMenuState = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  
  return {
    isMenuActive,
    setIsMenuActive,
  };
};