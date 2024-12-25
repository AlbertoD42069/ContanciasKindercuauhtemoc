import React from 'react'
import Button from 'react-bootstrap/Button';
import { TextLoginStatic } from '../Resources/TextsKC';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { authKinder } from '../../firebase';
import Swal from 'sweetalert2';

const LoginKCBtn = (props) => {

    const login = async () =>{
        try{
            await signInWithEmailAndPassword(authKinder, props.user, props.pass)
        }catch (error) {
            Swal.fire({
                title: "Error de usuario",
                text: "Revise usuario y contraseña",
                icon: "question"
              });
        }
    }
  return (
    <div>
        <Button 
        variant="primary" 
        className='btnLogin'
        onClick={login}>
        {TextLoginStatic.btnTitulo}
      </Button>
    </div>
  )
}

export default LoginKCBtn