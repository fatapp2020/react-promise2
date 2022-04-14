import React from 'react'

export default function PruebaOnClick() {


    function handleOnClick(evt) {

        evt.stopPropagation();
        alert('handleOnClick')

        //   console.log(evt);
    }


    return (
        <div className='my-4'>

            <h2>PruebaOnClick: </h2>
            <div onClick={handleOnClick}>Prueba Click 1
                <div onClick={handleOnClick}>Prueba Click 2</div>
            </div>
        </div>
    )
}
