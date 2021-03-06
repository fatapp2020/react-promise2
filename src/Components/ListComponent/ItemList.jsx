import React from 'react'
import Item from './Item'

export default function ItemList({ productos }) {

    return (

        productos.map(producto =>
            <Item
                key={producto.id}
                id={producto.id}
                title={producto.title}                
                price={producto.price}
                category={producto.category}
                pictureUrl={producto.pictureUrl} />
        )
    )
}
