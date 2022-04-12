import React from 'react'
import { Button, Card } from 'react-bootstrap'

export default function ItemDetail({producto}) {
  return (
    <>  
        <hr />
        <h2 className='mt-4'>ItemDetail</h2>
        <Card style={{ width: '18rem' }} className="mx-3 mb-4">
                <Card.Title className='fs-3 text-center bg-dark text-white'>{producto.title}</Card.Title>
                <Card.Body className="text-center gap-2">
                    <Card.Img variant="top" src={producto.pictureUrl} />
                    <Card.Text>{producto.description}</Card.Text>
                    <Button variant="secondary">Ver detalle del producto</Button>
                </Card.Body>
                <Card.Footer className="text-center">
                    <Card.Text className='fs-5'>Precio: $ {producto.price}.- </Card.Text>
                </Card.Footer>
            </Card>
    </>
  )
}
