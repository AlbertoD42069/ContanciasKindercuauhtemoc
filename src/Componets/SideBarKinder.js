import React from 'react'

export default function SideBarKinder() {
  return (
    <div className="sidebar">
    <div className='contedor'>
    <p>Jardin de niñas y niños</p>
    <p>CUAUHTEMOC</p>
    <hr/>
    </div>

    <div className='listaSidebar'></div>
    <ul>
      <li><a href="RegistrarAlumno">Registrar Alumno</a></li>
      <li><a href="Contancias">Contancias</a></li>
      <li><a href="cerrarSesion">Cerrar Sesion</a></li>
    </ul>
  </div>
  )
}
