import React from 'react'
import Item from './Item'

export default function Listado({ productos }) {

    console.log(productos);

    return (
        
        productos.map(producto =>
            <Item
                key={producto.id}
                title={producto.title}
                description={producto.description}
                price={producto.price}
                category={producto.category}
                pictureUrl={producto.pictureUrl} />
        )
    )
}
