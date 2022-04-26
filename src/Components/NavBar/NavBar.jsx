import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cart from "./Cart";

export default function NavBar() {

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand><Link to="/">Inicio</Link></Navbar.Brand>
                    <Nav className="me-auto">
                        <NavDropdown title="Categorías" id="nav-dropdown">
                            <NavDropdown.Item as={Link} to="/category/camisas">Camisas</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/pantalones">Pantalones</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/remeras">Remeras</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Items" id="nav-dropdown">
                            <NavDropdown.Item as={Link} to="/item/1">1</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/item/2">2</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/item/3">3</NavDropdown.Item>
                        </NavDropdown>
                        {/* <Nav.Link as={Link} to="/test">Test</Nav.Link> */}
                        <Cart />
                    </Nav>
                </Container>
            </Navbar>
        </>
    )

};