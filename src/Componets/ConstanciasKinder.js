import React from 'react'
import './Style/ConstanciasKinder.css';


export default function ConstanciasKinder() {
  return (
    <div className='contanciasKinder'>
    <div className='tituloKinder'>
        <h3>Constancias Emitidas</h3>
    </div>
    <div className='tablaContancias'></div>
    <table>
    <thead>
        <tr>
          <th>First Name</th>
          <th colSpan={3}>opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
      </tbody>
        
    </table>
    </div>
  )
}
