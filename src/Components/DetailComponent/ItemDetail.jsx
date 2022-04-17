import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import ItemCount from './ItemCount'

export default function ItemDetail({ title, pictureUrl, description, price, stock }) {

  const [number, setNumber] = useState(0)

  function onAdd(cuanto) {
    setNumber(cuanto);
  }

  return (
    <>
      <Card style={{ width: '18rem' }} className="my-5 mx-auto">
        <Card.Title className='fs-3 text-center bg-dark text-white'>{title}</Card.Title>
        <Card.Body className="text-center gap-2">
          <Card.Img variant="top" src={pictureUrl} />
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          <Card.Text className='fs-5'>Precio: $ {price}.- </Card.Text>
          {number === 0 ? (
            <ItemCount onAdd={onAdd} initial={1} stock={stock} />
          ) :
            (
              <Button variant="secondary">Ver detalle del producto</Button>
            )}
        </Card.Footer>
      </Card>
    </>
  )
}
