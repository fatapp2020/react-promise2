import React from 'react'
import Item from './Item'

export default function Listado({ productos }) {

    console.log(productos);

    return (
        // <>
        //     {JSON.stringify(productos)}
        // </>

        productos.map(producto =>
            <Item
                key={producto.id}
                title={producto.title}
                description={producto.description}
                price={producto.price}
                pictureUrl={producto.pictureUrl} />
        )
    )
}
