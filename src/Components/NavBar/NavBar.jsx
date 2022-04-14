import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cart from "./Cart";

export default function NavBar() {

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand><Link to="/">Navbar</Link></Navbar.Brand>
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