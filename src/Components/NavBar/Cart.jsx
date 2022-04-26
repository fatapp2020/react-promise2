import React, { useContext } from 'react'
import { Container, Button, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext'

export default function Cart() {

    const { totalCart } = useContext(CartContext);

    console.log('totalCart: ', totalCart);

    return (
        <>
            <Container>
                <Row>
                    <Col sm={8}>                    
                        <Button as={Link} to={`/cart`} variant="outline-danger">🛒</Button>                      
                    </Col>
                    <Col className="p-0" sm={4}>
                        <div className='text-white'>( {totalCart > 0 ? totalCart : 0} )</div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}