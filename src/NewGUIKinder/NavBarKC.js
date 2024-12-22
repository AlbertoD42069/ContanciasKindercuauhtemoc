import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";



export default function NavbarKC() {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>{'Jardin de niñas y niños Cuauhtemoc'}</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href='/'>{'Registrar Alumno'}</Nav.Link>
            <Nav.Link href='menu'>{'Constancias'}</Nav.Link>
            <Nav.Link href='datosTransferencia'>{'Cerrar Sesion'}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </> 
  )
}