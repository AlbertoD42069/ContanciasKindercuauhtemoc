import React from 'react';
import './Style/SideBarKinder.css';

export default function SideBarKinder() {
  const registrarAlumno = () => {
    alert('presionado')
  }
  const contanciasAlumnos = () => {
    alert('presionado')
  }
  const cerrarSesion = () => {
    alert('presionado')
  }
  return (
    <div className="sidebarKinder">
      <div className='contedorSidebar'>
        <div className='sidebar'>
          <p>Jardin de niñas y niños </p> 
          <p>CUAUHTEMOC</p>
          <hr/>
        <div className='listaSidebar'>
          <button className="btn-sideBar" 
            onClick={registrarAlumno}> 
            Registrar Alumno 
          </button>
          <button className="btn-sideBar">
            Contancias</button>
          <button className="btn-sideBar">
            Cerrar Sesion</button>
          </div>
        </div>
      </div>
  </div>
  )
}
/* 
 <ul>
            <li><a href="RegistrarAlumno">Registrar Alumno</a></li>
            <li><a href="Contancias">Contancias</a></li>
            <li><a href="cerrarSesion">Cerrar Sesion</a></li>
          </ul>*/
