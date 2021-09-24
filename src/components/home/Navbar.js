import '../../styles/home/navbar.css';
import React from "react";
import { Navbar, Nav, Form} from 'react-bootstrap';
import search from '../../assets/icons/search.svg';
import avatar from '../../assets/imgs/avatar.png';

function NavBar () {

    return (
        <>
            <Navbar expand="sm" variant="dark">
                <div>
                    <Navbar.Brand className="navbar-title">Paisaflix</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link className="nav-link home">
                            Home
                            <div className="home-underlined"></div>
                        </Nav.Link>
                        <Nav.Link className="nav-link contact">Contact</Nav.Link>
                        <Nav.Link className="nav-link faq">FAQ</Nav.Link>
                        <Nav.Link className="nav-link pricing">Pricing</Nav.Link>
                        <Form className="d-flex">
                            <Nav.Link className="nav-link"><img  src={search} className="search-i" alt="search"/></Nav.Link>
                            <Nav.Link className="nav-link"><img  src={avatar} className="avatar-i" alt="avatar"/></Nav.Link>
                            <Navbar.Text className="navbar-text">Soy Paisanx</Navbar.Text>
                        </Form>
                    </Nav>
                </div>
            </Navbar>
        </>
    )
}

export default NavBar;