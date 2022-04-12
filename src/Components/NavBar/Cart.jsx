import React from 'react'
import { Container, Button, Row, Col } from "react-bootstrap";



export default function Cart() {
    return (
        <>
            <Container>
                <Row>
                    <Col sm={8}>
                        <Button className='' variant="outline-danger">🛒</Button>{' '}                        
                    </Col>
                    <Col sm={4}>
                        <div className='carritoNro'> (4)</div>
                        </Col>
                </Row>
            </Container>
        </>
    )
}