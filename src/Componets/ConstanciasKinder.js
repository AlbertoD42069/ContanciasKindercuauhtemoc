import React, { useState } from 'react'
import './Style/ConstanciasKinder.css';


export default function ConstanciasKinder() {

    const [wantedStudent, setWantedStudent] = useState();
    const wantedStudentOnChange = (e) => {
        setWantedStudent(e.target.value);
    }
    const searchStudentOnclick = async() => {
        console.log(wantedStudent)
    }
    const verContanciaOnClick = () => {
        alert('ver contancias')
    }
    const actualizarContancia = () => {
        alert('contancia actualizada')
    }

  return (
    <div className='contanciasKinder'>
    <div className='tituloKinder'>
        <h3>Constancias Emitidas</h3>
    </div>
    <div className='buscarAlumno'>
        <input type='text' value={wantedStudent} onChange={wantedStudentOnChange}/>
        <button onClick={searchStudentOnclick}> buscar alumno </button>
    </div>
    <div className='tablaContancias'>
    <table>
    <thead>
        <tr>
          <th>Nombre alumno</th>
          <th colSpan={3}>Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Jesus Alberto Diaz dominguez</td>
          <td><button className='btn-contancia' onClick={verContanciaOnClick}>contancia</button></td>
          <td><button className='btn-contancia' onClick={actualizarContancia}>actualizar</button></td>
          <td><button className='btn-contancia'>eliminar</button></td>
        </tr>
      </tbody>
    </table>
    </div>
    </div>
  )
}
