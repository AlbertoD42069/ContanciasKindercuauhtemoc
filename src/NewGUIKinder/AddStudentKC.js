import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import '../Componets/Style/Home.css';


const AddStudentKC = () => {
    
  return (
    <Container className='Container'>
        <div className='TituloAddStudent'>
            <h1  className='text-center'>Agregar alumno</h1>
        </div>
    <Form className='FormAddStudent'>
    <Row className="mb-4">
      <Form.Group as={Col} md="4" controlId="validationCustom01">
        <Form.Label>Nombres</Form.Label>
        <Form.Control
          required
          type="text"
          className='InputText'
        />
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustom02">
        <Form.Label>Primer apellido</Form.Label>
        <Form.Control
          required
          type="text"
          className='InputText'
        />
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustom02">
        <Form.Label>Segundo apellido</Form.Label>
        <Form.Control
          required
          type="text"
          className='InputText'
        />
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} md="4" controlId="validationCustom03">
        <Form.Label>Fecha nacimiento</Form.Label>
        <Form.Control 
        type="text" 
        required 
        className='InputText'/>
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustom04">
        <Form.Label>Genero</Form.Label>
        <Form.Control 
        type="text"  
        required 
        className='InputText'
        />
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustom05">
        <Form.Label>Matricula</Form.Label>
        <Form.Control 
        type="text" 
        className='InputText'
        required 
        />
      </Form.Group>
    </Row>
    <Row className="CicloEscolar mb-3">
      <Form.Group as={Col} md="4" controlId="validationCustom03">
        <Form.Label>Grado</Form.Label>
        <Form.Control 
        type="text" 
        required 
        className='InputText'
        />
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustom04">
        <Form.Label>Ciclo escolar</Form.Label>
        <Form.Control 
        type="text"  
        required 
        className='InputText'
        />
      </Form.Group>
    </Row>

    <div class="text-center">
    <Button type="submit" className='AddBtn'size="lg">Agregar Alumno</Button>
    </div>
  </Form>
  </Container>
  )
}

export default AddStudentKC;    
