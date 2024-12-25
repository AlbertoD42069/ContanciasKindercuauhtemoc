import React, { useState } from 'react';
import '../Componets/Style/Login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Componets/Style/Login.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { authKinder } from '../firebase';
import Swal from 'sweetalert2';
import { TextLoginStatic } from './Resources/TextsKC';
import '../Componets/Style/Home.css';


const LoginKC = () => {
   const [userKC, setUserKC] = useState('');
    const [passKC, setPassKC] = useState('');
    
      const authKinderUserOnClick = async () => {
          console.log(userKC,passKC);
          try {
          await signInWithEmailAndPassword(authKinder, userKC, passKC);
          } catch (err) {
            Swal.fire({
              title: "Error de usuario",
              text: "Revise usuario y contraseña",
              icon: "question"
            });
          }
      }
  return (
    <div className='content'>
    <Form>
    <div className='iniciarSesionTitulo'>
      <h1>{TextLoginStatic.titulo}</h1>
    </div>
      <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Control 
        type="email" 
        placeholder={TextLoginStatic.email}
        value={userKC} 
        onChange={(e) => setUserKC(e.target.value)}
        className='inputKCs'
        />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicPassword">
        <Form.Control 
        type="password" 
        placeholder={TextLoginStatic.contraseña} 
        value={passKC} 
        onChange={(e) => setPassKC(e.target.value)}
        className='inputKCs'
        />
      </Form.Group>
      <Button variant="primary" className='btnLogin' onClick={authKinderUserOnClick}>
        {TextLoginStatic.btnTitulo}
      </Button>
    </Form>
    </div>
  )
}

export default LoginKC

