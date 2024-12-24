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

    const collectionName = "alumnos"

      const [name, setName] = useState("");
      const [lastName, setLastName] = useState("");
      const [secondLastNname, setSecondLastName] = useState("");
      const [dateOfBirth, setDateOfBirth] = useState("");
      const [studentCurp, setStudentCurp] = useState("");
      const [studentEnrollerd, setStudentEnrollerd] = useState("");
      const [studentGrade, setStudentGrade] = useState("");
      const [schoolYearStudent, setSchoolYearStudent] = useState("");
    
    const issueDate = () => {
        const dateNow = Date.now();
        const issueDateCost = new Date(dateNow);
        const issueDateLocalConst = issueDateCost.toLocaleDateString();
        return issueDateLocalConst
    }
    const clearInput = () => {
      setName("");
      setLastName("");
      setSecondLastName("");
      setDateOfBirth("");
      setStudentCurp("");
      setStudentEnrollerd("");
      setStudentGrade("");
      setSchoolYearStudent("");
      console.log('Formulario Limpiado')
    }
    const addStudentKC = async(e) => {
      const dateCost = issueDate();
      console.log(dateCost)
      console.log(name, lastName,secondLastNname,dateOfBirth,studentCurp,studentEnrollerd,studentGrade,schoolYearStudent)
      clearInput();

    }
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
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustom02">
        <Form.Label>{TextFormStatic.primerApellido}</Form.Label>
        <Form.Control
          required
          type="text"
          className='InputText'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}

        />
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustom02">
        <Form.Label>{TextFormStatic.segundoApellido}</Form.Label>
        <Form.Control
          required
          type="text"
          className='InputText'
          value={secondLastNname}
          onChange={(e) => setSecondLastName(e.target.value)}
        />
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} md="4" controlId="validationCustom03">
        <Form.Label>{TextFormStatic.fechaNacimiento}</Form.Label>
        <Form.Control 
        type="date" 
        required 
        className='InputText'
        value={dateOfBirth}
        onChange={(e)=> setDateOfBirth(e.target.value)} 
        />
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustom05">
        <Form.Label>{TextFormStatic.curp}</Form.Label>
        <Form.Control 
        type="text" 
        className='InputText'
        required 
        value={studentCurp}
        onChange={(e)=> setStudentCurp(e.target.value)}
        />
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustom05">
        <Form.Label>{TextFormStatic.matricula}</Form.Label>
        <Form.Control 
        type="text" 
        className='InputText'
        required 
        value={studentEnrollerd}
        onChange={(e)=> setStudentEnrollerd(e.target.value)}
        />
      </Form.Group>
    </Row>
    <Row className="CicloEscolar mb-3">
      <Form.Group as={Col} md="4" controlId="validationCustom03">
        <Form.Label>{TextFormStatic.grado}</Form.Label>
        <Form.Select
        type="text" 
        required 
        className='InputTextGrade'
        value={studentGrade}
        onChange={(e)=>setStudentGrade(e.target.value)}>
        <option value="Primero">Primero</option>
        <option value="Segundo">Segundo</option>
        <option value="Tercero">Tercero</option>
        </Form.Select>
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustom04">
        <Form.Label>{TextFormStatic.cicloEscolar}</Form.Label>
        <Form.Control 
        type="text"  
        required 
        className='InputText'
        value={schoolYearStudent}
        onChange={(e)=>setSchoolYearStudent(e.target.value)}
        />
      </Form.Group>
    </Row>

   
  </Form>
  </Container>
  )
}

export default AddStudentKC;    
/*
 <div class="text-center">
    <Button onClick={addStudentKC} className='AddBtn'size="lg">{TextFormStatic.btnTitulo}</Button>
    </div>
*/