import React, { useState } from 'react';
import './IniciarSesion.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { authKinder } from '../firebase';


export default function IniciarSesion(){

    const [userKinder, setUserKinder] = useState();
    const [passKinder, setPassKinder] = useState();
    const [error, setError] = useState('');


    const authKinderUserOnChange = (e) => {
        setUserKinder(e.target.value);
    }
    const authKinderPassOnChange = (e) => {
        setPassKinder(e.target.value);
    }
    const authKinderUserOnClick = async () => {
        try {
            await signInWithEmailAndPassword(authKinder, userKinder, passKinder);
            alert('Inicio de sesión exitoso');
            setError(''); // Limpia cualquier error previo
          } catch (err) {
            setError(err.message);
          }

        /*console.log(userKinder,userKinder)*/

    }

  return (
    <div className='contenedorPtincipalLogin'>
        <div className='contenedorLogin'>
            <div className='login'>
                <div className='IniciarSesionTitulo'>
                    <h3>INICIAR SESION</h3>
                </div>
                <div className='IniciarSesionForm'>
                    <div className='IniciarSesionUsuario'>
                         <div className='usuario'>
                             <label>Usuario</label>
                         </div>
                         <div className='contenidoUsuario'>
                             <input type='text' value={userKinder} onChange={authKinderUserOnChange}/>
                         </div>
                        </div>
                        <div className='IniciarSesionContraseña'>
                        <div className='contraseña'>
                            <label>Contraseña</label>
                        </div>
                        <div className='contenidoContrasena'>
                            <input type='password' value={passKinder} onChange={authKinderPassOnChange}/>
                        </div>
                        </div>
                         <div className="contenButtonLogin">
                        <button onClick={authKinderUserOnClick}>Iniciar Sesion</button>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
  )
}
