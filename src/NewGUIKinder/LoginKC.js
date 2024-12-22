import React, { useState } from 'react';
import '../Componets/Style/Login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Componets/Style/Login.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { authKinder } from '../firebase';
import Swal from 'sweetalert2';
import { TextLoginStatic } from './Resources/TextsKC';


const LoginKC = () => {
   const [userKC, setUserKC] = useState('');
    const [passKC, setPassKC] = useState('');

    const authKinderUserOnChange = (e) => {
          setUserKC(e.target.value);
      }
      const authKinderPassOnChange = (e) => {
          setPassKC(e.target.value);
      }
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
    <div className='contenedorPtincipalLogin'>
    <div className='contenedorLogin'>
    <div className='IniciarSesionTitulo'>
      <h3>{TextLoginStatic.titulo}</h3>
    </div><br/>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder={TextLoginStatic.email} value={userKC} onChange={authKinderUserOnChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder={TextLoginStatic.contraseña} value={passKC} onChange={authKinderPassOnChange}/>
      </Form.Group><br/>
      <Button variant="primary" onClick={authKinderUserOnClick}>
        {TextLoginStatic.btnTitulo}
      </Button>
    </Form>
    </div>
</div>

  )
}

export default LoginKC

