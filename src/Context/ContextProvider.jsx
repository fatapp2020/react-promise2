import React, { createContext, useState } from 'react'

export const Context = createContext();

export default function ContextProvider({ children }) {

  const [carrito, setCarrito] = useState([{ id: 1, nombre: "zapato" }, { id: 1, nombre: "zapato" }])
  let x = 10;

  return (
    <>
      <Context.Provider value={{ x, carrito }}>
        {children}
      </Context.Provider>
    </>
  )
}
