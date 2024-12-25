import React, { useState } from 'react';
import '../Componets/Style/Login.css';
import Form from 'react-bootstrap/Form';
import '../Componets/Style/Login.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { authKinder } from '../firebase';
import Swal from 'sweetalert2';
import { TextLoginStatic } from './Resources/TextsKC';
import '../Componets/Style/Home.css';
import LoginKCBtn from './ButtonsKC/LoginKCBtn';


const LoginKC = () => {
   const [userKC, setUserKC] = useState('');
    const [passKC, setPassKC] = useState('');
  return (
    <div className='content'>
    <Form>
    <div className='iniciarSesionTitulo'>
      <h1>{TextLoginStatic.titulo}</h1>
    </div><br/>
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
        /><br/>
      </Form.Group>
        <LoginKCBtn user={userKC} pass={passKC}/>
    </Form>
    </div>
  )
}

export default LoginKC

