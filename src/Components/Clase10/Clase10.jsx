import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';

export default function Clase10() {

    const [value, setValue] = useState('');

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        setTimeout(() => {
            
            setValue('Hola');
            setLoading(false);

        }, 3000);

    }, []);



    return (
        <>  
            {/* {loading && <> Loading... </>} */}
            <Loading loading={loading} />
            <h1 className='mx-3 my-3'> {value} </h1>

            {/* <input value={value} onInput={(evt) => setValue(evt.target.value)}/> */}
        </>
    )
}
