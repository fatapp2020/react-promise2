import React, { useEffect, useState } from 'react';
import { traerProductos } from '../utils/products';
import Listado from './Listado';

export default function ListadoContainer() {


    const [productos, setProductos] = useState([]);

    useEffect(() => {

        traerProductos()
            .then((res) => {
                setProductos(res);
            })

    }, [])

    return (
        <>
            <h2>Listado Container</h2>
           
            <Listado productos={productos} />
        </>
    )
}
