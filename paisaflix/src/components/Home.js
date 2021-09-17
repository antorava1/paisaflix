import '../styles/home.css';
import React from "react";
import { Navbar, Nav, Container, Form} from 'react-bootstrap';

function Home () {

    return (
        <Navbar expand="sm" variant="dark">
            <Container>
                <Navbar.Brand className="navbar-title">Paisaflix</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link className="nav-link active">Home</Nav.Link>
                    <Nav.Link className="nav-link">Contact Us</Nav.Link>
                    <Nav.Link className="nav-link">FAQ</Nav.Link>
                    <Nav.Link className="nav-link">Pricing</Nav.Link>
                    <Form className="d-flex">
                        <Navbar.Text className="navbar-text">Soy Paisanx</Navbar.Text>
                    </Form>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Home;