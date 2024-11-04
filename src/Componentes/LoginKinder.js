import React, { useState } from 'react';
import './css/LoginKinder.css';
import './interfaz/ButtonLoginKinder.js';
import ButtonLoginKinder from './interfaz/ButtonLoginKinder.js';

import appFirebaseKinder from '../firebase.js';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth(appFirebaseKinder)

export default function LoginKinder() {

    const [isUserKinder, setIsUserKinder] = useState(false)


    const [userKinder, setUserKinder] = useState();
    const [updateUserKinder, setUpdateUserKinder] = useState();
    
    const [passKinder, setPassKinder] = useState();
    const [updatePassKinder, setUpdatePassKinder] = useState();


    const loginOnChangeUser = (event) => {
        setUserKinder(event.target.value);
    }
    const loginOnChangePass = (event) => {
        setPassKinder(event.target.value);
    }

    const login = () => {
        setUpdateUserKinder(userKinder);
        setUpdatePassKinder(passKinder);
        const menssage = 'usuario o contraseña incorrecta'
        
        /*cambiar por los valores de firebase*/
       if (isUserKinder) {
            alert(menssage)
       } else {
            signInWithEmailAndPassword(auth,userKinder,passKinder)
       }
    }
    

  return (
    <div className='contenedorPtincipalLogin'>
        <div className='contenedorLogin'>
            <div className='login'>
                <div className='tituloLogin'>
                    <h3>Jardin de niñas y niños</h3>
                    <h4>CUAUHTEMOC</h4>
                </div><br/>
                <div className='contentForm'>
                    <div className='titulo'>
                        usuario
                    </div>
                    <div className='contenido'>
                        <input type='text' value={userKinder} onChange={loginOnChangeUser}/>
                    </div>
               </div>
               <div className='contentForm'>
                    <div className='titulo'>
                        contraseña
                    </div>
                    <div className='contenido'>
                        <input  type='password' value={passKinder} onChange={loginOnChangePass}/>
                    </div>
               </div><br/>
               <div className="contenButton" >
               <button onClick={login}>Iniciar Sesion</button>
               </div>
            </div>
        </div>
    </div>
  )
}
