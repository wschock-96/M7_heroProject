import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavbarComp() {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm border-bottom">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-danger fw-bold fs-4">Marvel DB</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="text-dark">Home</Nav.Link>
            <Nav.Link as={Link} to="/characters" className="text-dark">Characters</Nav.Link>
            <Nav.Link as={Link} to="/create" className="text-dark">Create</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
