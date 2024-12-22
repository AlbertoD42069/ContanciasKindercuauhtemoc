import React from 'react'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';



const CertificatesKC = () => {
  return (
    <Container className='Container'>
         <div className='TituloAddStudent'>
            <h1  className='text-center'>Constancias emitidas</h1>
        </div>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre completo </th>
          <th>Curp</th>
          <th colSpan={3}>Acciones constancia</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <td>1</td>
          <td>jesus alberto diaz dominguez</td>
          <td>123asdqwe2w</td>
          <td>Imprimir</td>
          <td>Datos alumno</td>
          <td>Eliminar alumno</td>
        </tr>
      </tbody>
    </Table>
    </Container>
  )
}

export default CertificatesKC
