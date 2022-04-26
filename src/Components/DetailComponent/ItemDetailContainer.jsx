import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { traerProductos } from '../utils/products'
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer() {

    const { id } = useParams();

    const [producto, setProducto] = useState({})

    const [loading, setLoading] = useState(true)

    useEffect(() => {

        traerProductos()
            .then((res) => {
                setProducto(res.filter(producto => producto.id === id))
            })
            .catch((error) => console.log(error))
            .finally(() => {
                setLoading(false)
            })

    }, [id]);

    return (
        <>
            {
                loading ? (
                    <h1 className='text-center font-bold my-5'>Cargando Productos, espere por favor </h1>
                ) : (
                    producto.map((item) => {
                        return <ItemDetail
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            pictureUrl={item.pictureUrl}
                            description={item.description}
                            price={item.price}
                            stock={item.stock}
                            category={item.category}
                        />
                    })
                )
            }
        </>
    )
}