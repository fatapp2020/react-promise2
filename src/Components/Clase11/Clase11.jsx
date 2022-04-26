import React, { useEffect, useState } from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

export default function Clase11() {

    const [producto, setProducto] = useState({})

    useEffect(() => {

        const db = getFirestore();

        const remerasRef = doc(db, "productos", '6nkMPzUbYFlEALw9d1vz');

        getDoc(remerasRef).then((res) => {

            console.log(res.data());
            console.log(res.id);

            // Pongo el id dentro de un nuevo objeto.
            const objetoJunto = { id: res.id, ...res.data() }
            console.log(objetoJunto);

            setProducto(objetoJunto);
        });

    }, [])


    return (

        <>
            {producto.id ? (
                <div>{producto.id + ' ' + producto.title}
                    <br />
                    <img src={producto.pictureUrl} alt=""/>
                </div>
            ) : 'Loading...'}

        </>
    )
}
