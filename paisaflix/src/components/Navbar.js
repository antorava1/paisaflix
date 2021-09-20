import '../styles/navbar.css';
import React from "react";
import Hero from './Hero';
import { Navbar, Nav, Container, Form, Image} from 'react-bootstrap';

function NavBar () {

    return (
        <>
            <Navbar expand="sm" variant="dark">
                <Container>
                    <Navbar.Brand className="navbar-title">Paisaflix</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link className="nav-link home">Home</Nav.Link>
                        <Nav.Link className="nav-link">Contact Us</Nav.Link>
                        <Nav.Link className="nav-link">FAQ</Nav.Link>
                        <Nav.Link className="nav-link">Pricing</Nav.Link>
                        <Form className="d-flex">
                            {/* <Image classNamw="search" src="..src/assets/navbar/search.svg"/> */}
                            <Navbar.Text className="navbar-text">Soy Paisanx</Navbar.Text>
                        </Form>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;