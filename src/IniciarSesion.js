import React from 'react'
import './IniciarSesion.css'
import './ObtenerFecha.js'

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
                        <input/>
                    </div>
               </div>
               <div className='nombres'>
                    <div className='titulo'>
                        contraseña
                    </div>
                    <div className='contenido'>
                        <input/>
                    </div>
               </div>
               <h4 id='fecha'></h4>
               <div className="contenButton">
                
                <button onClick={() => console.log('Alumno agregado')}>Iniciar Sesion</button>
               </div><br/>
               <div className='alertaUsuario'>
                Usuario Incorrecto
                </div>
            </div>
        </div>
    </div>

  )
}
