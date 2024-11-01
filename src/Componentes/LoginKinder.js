import React, { useState } from 'react';
import './css/LoginKinder.css';
import './interfaz/ButtonLoginKinder.js';
import ButtonLoginKinder from './interfaz/ButtonLoginKinder.js';



export default function LoginKinder() {

    const [userKinder, setUserKinder] = useState();
    const [passKinder, setPassword] = useState();


  return (
    <div className='contenedorPtincipalLogin'>
        <div className='contenedorLogin'>
            <div className='buscarAlumno'>
                <div className='buscarTitulo'>
                    <h3>Jardin de niñas y niños</h3>
                    <h4>CUAUHTEMOC</h4>
                </div>
                <div className='nombres'>
                    <div className='titulo'>
                        usuario
                    </div>
                    <div className='contenido'>
                        <input value={userKinder} type='text'/>
                    </div>
               </div>
               <div className='nombres'>
                    <div className='titulo'>
                        contraseña
                    </div>
                    <div className='contenido'>
                        <input value={passKinder} type='password'/>
                    </div>
               </div><br/>
               <div className="contenButton">
                    <ButtonLoginKinder />
               </div>
            </div>
        </div>
    </div>
  )
}
