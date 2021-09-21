import '../../styles/landing/navbar.css';
import React from "react";
import { Navbar, Nav, Form} from 'react-bootstrap';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';

function NavBar () {

    return (
        <>
            <Navbar expand="sm" variant="dark">
                <div>
                    <Navbar.Brand className="navbar-title">Paisaflix</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link className="nav-link home"> Home
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
                </div>
            </Navbar>
        </>
    )
}

export default NavBar;