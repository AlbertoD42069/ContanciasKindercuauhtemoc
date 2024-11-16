import React from 'react'
import './Style/ConstanciasKinder.css';


export default function ConstanciasKinder() {

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
        <input/>
        <button> buscar alumno </button>
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
