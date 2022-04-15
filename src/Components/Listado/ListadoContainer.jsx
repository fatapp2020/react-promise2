import React, { useEffect, useState } from 'react';
import { traerProductos } from '../utils/products';
import Listado from './Listado';
import s from './ItemListado.module.css'

export default function ListadoContainer() {


    const [productos, setProductos] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        traerProductos()
            .then((res) => {
                setProductos(res);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false)
            })

    }, [])

    return (
        <>
            {
                loading ? (
                    <h1 className='text-center my-5'>Cargando Productos, espere por favor </h1>
                ) : (
                    <div className={s.containerI}>
           
            <Listado productos={productos} /> </div>
                )
            }

        </>
    )
}