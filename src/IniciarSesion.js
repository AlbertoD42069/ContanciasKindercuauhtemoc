import React from 'react'
import './IniciarSesion.css'
import btnSesion from './Button.js'
import { useState, useEffect } from 'react'
import Button from './Button.js'



export default function IniciarSesion() {
   const [usuario, setUser] = useState('');
   const [contraseña, setContra] = useState('');
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
                        <input value={usuario}/>
                    </div>
               </div>
               <div className='nombres'>
                    <div className='titulo'>
                        contraseña
                    </div>
                    <div className='contenido'>
                        <input value={contraseña}/>
                    </div>
               </div>
               <div className="contenButton">
                    <Button />
               </div><br/>
               <div className='alertaUsuario'>
                Usuario Incorrecto
                </div>
            </div>
        </div>
    </div>

  )
}
