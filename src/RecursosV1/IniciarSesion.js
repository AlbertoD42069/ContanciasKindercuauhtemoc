import React, { useState } from 'react';
/*import './RecursosV1/IniciarSesion.css';*/
import './IniciarSesion.css';
import 'firebase/auth';

export default function IniciarSesion(){

    const [userKinder, setUserKinder] = useState();
    const [passKinder, setPassKinder] = useState();

    const [updateUserKinder, updateSetUserKinder] = useState();
    const [updatePassKinder, updateSetPassKinder] = useState();

    const authKinderUserOnChange = (e) => {
        setUserKinder(e.target.value);
    }
    const authKinderPassOnChange = (e) => {
        setPassKinder(e.target.value);
    }
    const authKinderUserOnClick = (e) => {
        updateSetUserKinder(userKinder)
        updateSetPassKinder(userKinder)
        console.log(userKinder,userKinder)
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
