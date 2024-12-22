import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import '../Componets/Style/Home.css';
import { TextFormStatic } from './Resources/TextsKC';


const AddStudentKC = () => {
    
  return (
    <Container className='Container'>
        <div className='TituloAddStudent'>
            <h1  className='text-center'>{TextFormStatic.titulo}</h1>
        </div>
    <Form className='FormAddStudent'>
    <Row className="mb-4">
      <Form.Group as={Col} md="4" controlId="validationCustom01">
        <Form.Label>{TextFormStatic.nombres}</Form.Label>
        <Form.Control
          required
          type="text"
          className='InputText'
        />
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustom02">
        <Form.Label>{TextFormStatic.primerApellido}</Form.Label>
        <Form.Control
          required
          type="text"
          className='InputText'
        />
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustom02">
        <Form.Label>{TextFormStatic.segundoApellido}</Form.Label>
        <Form.Control
          required
          type="text"
          className='InputText'
        />
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} md="4" controlId="validationCustom03">
        <Form.Label>{TextFormStatic.fechaNacimiento}</Form.Label>
        <Form.Control 
        type="text" 
        required 
        className='InputText'/>
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustom05">
        <Form.Label>{TextFormStatic.matricula}</Form.Label>
        <Form.Control 
        type="text" 
        className='InputText'
        required 
        />
      </Form.Group>
    </Row>
    <Row className="CicloEscolar mb-3">
      <Form.Group as={Col} md="4" controlId="validationCustom03">
        <Form.Label>{TextFormStatic.grado}</Form.Label>
        <Form.Control 
        type="text" 
        required 
        className='InputText'
        />
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustom04">
        <Form.Label>{TextFormStatic.cicloEscolar}</Form.Label>
        <Form.Control 
        type="text"  
        required 
        className='InputText'
        />
      </Form.Group>
    </Row>

    <div class="text-center">
    <Button type="submit" className='AddBtn'size="lg">{TextFormStatic.btnTitulo}</Button>
    </div>
  </Form>
  </Container>
  )
}

export default AddStudentKC;    
