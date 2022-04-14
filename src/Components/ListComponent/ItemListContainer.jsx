import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { traerProductos } from '../utils/products';
import s from './ItemListContainer.module.css'

export default function ItemListContainer() {

    const [productos, setProductos] = useState([]);

    useEffect(() => {

        traerProductos()
            .then((res) => {
                setProductos(res);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                console.log('Se agradece');
            })

    }, [])

    return (
        <div className={s.containerI}>
            <ItemList productos={productos} />
        </div>
    )
}
