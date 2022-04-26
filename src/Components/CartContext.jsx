import React, { createContext, useState } from 'react'

export const CartContext = createContext();

export default function CartContextProvider({ children }) {

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {

    // findIndex() devuelve -1 si no se encuentra ninguna coincidencia
    const indexProduct = cart.findIndex((cartItem) => cartItem.id === item.id);

    if (indexProduct !== -1) {
      // si ya esta en el cart el item creo un nuevo carrito
      const newCart = [...cart];
      // Accedo a la posicion y modifico el count
      newCart[indexProduct].count = newCart[indexProduct].count + item.count;
      setCart(newCart);

    } else {
      
      setCart([...cart, item]);
    }

  }


  const removeFromCart = (id) => {
    // Elimino del carrito el elemento que sea igual a mi id
    setCart(cart.filter((item) => item.id !== id));
  }
  const clearCart = () => setCart([]);

  const totalCart = cart.reduce((total, item) => total + item.count, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalCart }}>
      {children}
    </CartContext.Provider>
  )

}


