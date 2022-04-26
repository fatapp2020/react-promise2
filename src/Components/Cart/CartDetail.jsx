import React, { useContext } from 'react'
import { Button, Card } from 'react-bootstrap';
import { CartContext } from '../CartContext'
import moduleCss from './CartDetail.module.css'

export default function CartDetail() {

    const { cart, removeFromCart, clearCart } = useContext(CartContext)
    const total = cart.reduce((total, item) => total + item.count * item.price, 0);    

    console.log(cart);

    return (
        <>
            <h1>Tus productos</h1>
            <div className={moduleCss.containerI}>
                {cart.length > 0 ?
                    cart.map((item) => (

                        <Card style={{ width: '18rem' }} className="mx-3 mb-4" key={item.id}>
                            <Card.Title className='fs-3 text-center bg-dark text-white'>{item.title}</Card.Title>
                            <Card.Body className="text-center gap-2">
                                <Card.Img variant="top" src={item.pictureUrl} />
                            </Card.Body>
                            <Card.Footer className="text-center">
                                <Card.Text className='fs-5'>Categoría: {item.category} </Card.Text>
                                <Card.Text className='fs-5'>Cantidad: {item.count} </Card.Text>
                                <Card.Text className='fs-5'>Precio: $ {item.price * item.count}</Card.Text>
                                <Button variant="primary" onClick={() => removeFromCart(item.id)}>Borrar</Button>
                            </Card.Footer>
                        </Card>
                    )) : <p> No hay productos en tu carrito... </p>
                }


            </div>
            <div>
                <h3>SubTotal</h3>
                <p>$ {total}.-</p>
                <Button variant="danger" onClick={clearCart}>Borrar Carrito</Button>
            </div>

        </>
    )
}
