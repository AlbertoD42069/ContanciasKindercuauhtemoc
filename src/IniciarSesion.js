import React from 'react'
import './IniciarSesion.css'
import btnSesion from './Button.js'
import { useState } from 'react'
import Button from './Button.js'
import { inicioSesion } from './firebase';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
const authInicioSesion = getAuth(inicioSesion);



export default function IniciarSesion() {
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
                        <input type='text'value={usuario}/>
                    </div>
               </div>
               <div className='nombres'>
                    <div className='titulo'>
                        contraseña
                    </div>
                    <div className='contenido'>
                        <input type='password' value={contraseña}/>
                    </div>
               </div>
               <div className="contenButton">
                    <Button enviarDatos={[usuario,contraseña]}/>
               </div><br/>
               <div className='alertaUsuario'>
                Usuario Incorrecto
                </div>
            </div>
        </div>
    </div>

  )
}
/*
   const [usuario, setUser] = useState();
   const [contraseña, setContra] = useState();
   const enviarDatos = () => {

  }*/
