import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Componets/Style/SideBarKinder.css';
import Button from 'react-bootstrap/Button';



const exit = async () => {
  console.log('has salido');
  
}
export default function NavbarKC() {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>{'Jardin de niñas y niños Cuauhtemoc'}</Navbar.Brand>
          <Nav className="navItem justify-content-end">
            <Nav.Link href='/'>{'Registrar Alumno'}</Nav.Link>
            <Nav.Link href='certificate'>{'Constancias'}</Nav.Link>
            <Nav.Link><Button variant="danger" onClick={exit}>Salir</Button></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </> 
  )
}