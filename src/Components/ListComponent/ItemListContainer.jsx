import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { traerProductos } from '../utils/products';
import s from './ItemListContainer.module.css'
import { useParams } from 'react-router-dom';

export default function ItemListContainer() {

    const [productos, setProductos] = useState([]);

    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();    

    useEffect(() => {

        traerProductos()
            .then((res) => {
                categoryId ? (
                    setProductos(res.filter(productos => productos.category === categoryId))                    
                ): (
                    setProductos(res)
                );
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            })

    }, [categoryId])

    return (
        <>
            {
                loading ? (
                    <h1 className='text-center font-bold fs-1 my-5'>Cargando Productos, espere por favor... </h1>
                ) : (
                    <div className={s.containerI}>
                        <ItemList productos={productos} />
                    </div>
                )
            }

        </>
    )
}
