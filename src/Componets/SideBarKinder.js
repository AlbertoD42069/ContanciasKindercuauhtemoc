import React from 'react';
import './Style/SideBarKinder.css';
import { authKinder } from '../firebase';
import {signOut} from 'firebase/auth';
import { Link } from "react-router-dom";



export default function SideBarKinder() {
  const registrarAlumno = () => {
    alert('presionado')
  }
  const contanciasAlumnos = () => {
    alert('presionado')
  }
  const exit = async () => {
    await signOut(authKinder);
}
  return (
    <div className="sidebarKinder">
      <div className='contedorSidebar'>
        <div className='sidebar'>
          <p>Jardin de niñas y niños </p> 
          <p>CUAUHTEMOC</p>
          <hr/>
        <div className='listaSidebar'>
          <button className="btn-sideBar" > 
            <Link to="/"> Registrar Alumno </Link>
          </button>
          <button className="btn-sideBar">
            <Link to="contancias">Contancias </Link></button>
          <button className="btn-sideBar" onClick={exit}>
            Cerrar Sesion</button>
          </div>
        </div>
      </div>
  </div>
  )
}