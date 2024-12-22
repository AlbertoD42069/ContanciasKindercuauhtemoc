import React from 'react'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { TextCertificatesKC } from './Resources/TextsKC';



const CertificatesKC = () => {
  return (
    <Container className='Container'>
         <div className='TituloAddStudent'>
            <h1  className='text-center'>{TextCertificatesKC.titulo}</h1>
        </div>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>{TextCertificatesKC.numConst}</th>
          <th>{TextCertificatesKC.nombreCompleto}</th>
          <th>{TextCertificatesKC.curp}</th>
          <th colSpan={3}>{TextCertificatesKC.accionesConstancia}</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <td>1</td>
          <td>jesus alberto diaz dominguez</td>
          <td>123asdqwe2w</td>
          <td>{TextCertificatesKC.imprimir}</td>
          <td>{TextCertificatesKC.verDatosAlumno}</td>
          <td>{TextCertificatesKC.eliminar}</td>
        </tr>
      </tbody>
    </Table>
    </Container>
  )
}

export default CertificatesKC
