import React from 'react';
import './Style/SideBarKinder.css';

export default function SideBarKinder() {
  return (
    <div className="sidebarKinder">
      <div className='contedorSidebar'>
        <div className='sidebar'>
          <p>Jardin de niñas y niños</p>
          <p>CUAUHTEMOC</p>
          <hr/>
        

        <div className='listaSidebar'>
          <ul>
            <li><a href="RegistrarAlumno">Registrar Alumno</a></li>
            <li><a href="Contancias">Contancias</a></li>
            <li><a href="cerrarSesion">Cerrar Sesion</a></li>
          </ul>
          </div>
        </div>
      </div>
  </div>
  )
}
