import '../../styles/home/navbar.css';
import React from "react";
import { Navbar, Nav, Container, Form} from 'react-bootstrap';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';

function NavBar () {

    return (
        <>
            <Navbar expand="sm" variant="dark">
                <Container>
                    <Navbar.Brand className="navbar-title">Paisaflix</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link className="nav-link home">
                            Home
                            <div className="home-underlined"></div>
                        </Nav.Link>
                        <Nav.Link className="nav-link contact">Contact Us</Nav.Link>
                        <Nav.Link className="nav-link faq">FAQ</Nav.Link>
                        <Nav.Link className="nav-link pricing">Pricing</Nav.Link>
                        <Form className="d-flex">
                            {/* <Image classNamw="search" src="..src/assets/navbar/search.svg"/> */}
                            <FontAwesomeIcon icon={faSearch} className="search"/>
                            <FontAwesomeIcon icon={faUserCircle} className="avatar"/>
                            <Navbar.Text className="navbar-text">Soy Paisanx</Navbar.Text>
                        </Form>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;