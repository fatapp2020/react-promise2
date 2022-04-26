import React, { useContext, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { CartContext } from '../CartContext'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'

export default function ItemDetail({ title, id, pictureUrl, description, price, category, stock }) {

  const [number, setNumber] = useState(0)

  const { addToCart } = useContext( CartContext )   

  function onAdd(count) {
    setNumber(count);
    addToCart({ title, id, pictureUrl, description, price, stock, category, count });    
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
              <Button as={Link} to={`/cart`}  variant="secondary">Ir al carrito</Button>
            )}
        </Card.Footer>
      </Card>
    </>
  )
}
