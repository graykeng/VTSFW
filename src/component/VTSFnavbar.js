import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const VTSFnavbar = () => {
  return (
    <div>
        <Navbar bg="light" expand="lg">
            <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/Gallery">Gallery</Nav.Link>
                            <Nav.Link href="/EventDetails">Event Details</Nav.Link>
                            <Nav.Link href="/Blog">Blog</Nav.Link>
                            <Nav.Link href="/Commitee">Commitee</Nav.Link>
                            <Nav.Link href="/Sponsors">Sponsors</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default VTSFnavbar