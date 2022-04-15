import React from 'react'
import { Button, Card } from 'react-bootstrap'

export default function Item({ id, title, price, category, pictureUrl }) {

    return (
        <>            
            <Card style={{ width: '18rem' }} className="mx-3 mb-4">
                <Card.Title className='fs-3 text-center bg-dark text-white'>{title}</Card.Title>
                <Card.Body className="text-center gap-2">
                    <Card.Img variant="top" src={pictureUrl} />                    
                    <Button variant="secondary" className="my-2">Ver detalle del producto</Button>
                </Card.Body>
                <Card.Footer className="text-center">
                    <Card.Text className='fs-5'>Categoría: {category} </Card.Text>
                    <Card.Text className='fs-5'>Precio: $ {price}.- </Card.Text>
                </Card.Footer>
            </Card>
        </>
    )
}
