import React, { useState } from 'react';
import './css/LoginKinder.css';
import './interfaz/ButtonLoginKinder.js';
import ButtonLoginKinder from './interfaz/ButtonLoginKinder.js';

import appFirebaseKinder from '../firebase.js';
import { getAuth, signInWithEmailAndPassword ,createUserWithEmailAndPassword} from 'firebase/auth';
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

    const login = async(e) => {
        e.preventDefault();
        setUserKinder(e.target.value);
        setPassKinder(e.target.value);
        setUpdateUserKinder(userKinder);
        setUpdatePassKinder(passKinder);
        console.log(userKinder);
        console.log(passKinder);

        if (isUserKinder) {
            await  alert("Error");  
        } else {
            await signInWithEmailAndPassword(auth, userKinder, passKinder)
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
               </div><br/>
            </div>
        </div>
    </div>
  )
}
/*
               <h4>{!isUserKinder ? '' : 'usuario o contraseña incorrecta, favor de revisar'} </h4>
*/