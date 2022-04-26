import React, { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

export default function Clase11listado() {

    const [productos, setProductos] = useState([])

    useEffect(() => {

        const db = getFirestore();

        const productosRef = collection(db, "productos");

        getDocs(productosRef).then((res) => {

            console.log(res.docs);          

            setProductos(res.docs.map(item => ({id: item.id, ...item.data()})));
        });

    }, []);

    useEffect(() => {
      console.log('productos: ', productos);
    }, [productos])
    


    return (

        <>
            {productos.length ? <div>{JSON.stringify(productos)}</div> : 'Loading...'}
        </>
    )
}
