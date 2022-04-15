import React, { useContext } from 'react'
import { Context } from '../../Context/ContextProvider'

export default function Test() {
    
    let { x, carrito } = useContext(Context);
    
    return (
        <>  
            <h1 className='mt-5 text-center'>Esta es la variable de Contexto: {x}</h1>
            
            <h2 className='mt-5 text-center'>Carrito: {carrito.length}</h2>
        </>
    )
}
