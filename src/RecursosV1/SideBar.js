import React from 'react'
/*import './SideBar.css';*/

export default function SideBar() {
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
      </ul>
    </div>
  )
}
/*

 <div>
      <h3>Jardin de niñas y niños</h3>
      <h3>CUAUHTEMOC</h3>
      </div>
<ul>
      <hr/>
        <li><a href="RegistrarAlumno">Registrar Alumno</a></li>
        <li><a href="BuscarAlumno">Buscar Alumno</a></li>
        <li><a href="ActualizarAlumno">ActualizarAlumno</a></li>
        <li><a href="Contancias">Contancias</a></li>
      </ul>
*/
