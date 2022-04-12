import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Cart from "./Cart";

export default function NavBar() {

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#lorem">lorem</Nav.Link>
                        <Nav.Link href="#lorem1">lorem</Nav.Link>
                        <Cart/>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )

};