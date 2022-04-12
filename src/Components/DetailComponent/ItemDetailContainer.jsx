import React, { useEffect, useState } from 'react'
import { traerProducto } from '../utils/products'
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer() {

    const [producto, setProducto] = useState({})

    useEffect(() => {
      
        traerProducto()
            .then((res)=> {
                setProducto(res);
            })
      
    }, [])
    
    // console.log(producto);
    return (
    <>        
        <ItemDetail producto = {producto}/>        
    </>
  )
}
