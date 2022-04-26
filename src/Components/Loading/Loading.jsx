import React from 'react'
import { Spinner } from 'react-bootstrap'

export default function Loading({ loading }) {

    return (
        <>
            {loading ? <div className='mx-5 my-5'>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
                : ''}
        </>
    )
}
