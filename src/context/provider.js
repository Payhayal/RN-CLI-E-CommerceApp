import React, {useState} from 'react';
import StoreContex from '.';

const Provider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isSignIn, setIsSignIn] = useState(false);
  const addCart = product => {
    setCart([...cart, product]);
  };
  const addToFavorites = product => {
    product.favorites = true;
    setFavorites([...favorites, product]);
  };
  return (
    <StoreContex.Provider
      value={{
        cart,
        addCart,
        isSignIn,
        setIsSignIn,
        favorites,
        setFavorites,
        addToFavorites,
      }}>
      {children}
    </StoreContex.Provider>
  );
};

export default Provider;
