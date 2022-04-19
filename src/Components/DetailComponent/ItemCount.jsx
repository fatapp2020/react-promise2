import React, { useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';

export default function ItemCount({ initial, stock, onAdd }) {

    const [counter, setCounter] = useState(initial);

    const Incremento = () => {
        if (counter < stock) {
            setCounter(counter + 1)

        }
    };
    const Decremento = () => {
        if (counter > initial) {
            setCounter(counter - 1)

        }
    }
    const Reset = () => {
        setCounter(1);
    }

    return (
        <>
            <Container>
                <Row>
                    <Col><div className="d-grid gap-2"> <Button onClick={() => Decremento()} variant="danger" size="sm">-</Button></div></Col>
                    <Col><div className="text-center fs-1 fw-bold">{counter}</div></Col>
                    <Col><div className="d-grid gap-2"> <Button onClick={() => Incremento()} variant="danger" size="sm">+</Button></div></Col>
                </Row>
                <Row>                    
                    <Col><div className="d-grid gap-2"> <Button size="sm" onClick={() => onAdd(counter)} variant="success">Agregar al Carrito</Button></div></Col>
                </Row>
            </Container>
        </>
    )
}
