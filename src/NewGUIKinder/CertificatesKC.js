import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { TextCertificatesKC } from './Resources/TextsKC';
import { collection, getDocs, onSnapshot, orderBy, query, snapshotEqual } from 'firebase/firestore';
import { dbKinder } from '../firebase';




const CertificatesKC = () => {

  const [collecionAlumnos, setCollecionAlumnos] = useState([]);
  const collectionName = "alumnos"

  useEffect(() => {
  const obtenerColeccion = async () => {
    try {
      const alumnosRef = collection(dbKinder, collectionName);
      const q = query(alumnosRef, orderBy('horaExpedicion'))
      /*const snapshot = await getDocs(alumnosRef);*/
      const snapshot = await getDocs(q);

      const datos = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Documentos:", datos);
      setCollecionAlumnos(datos)
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };
  obtenerColeccion();
}, []);

  return (
    <Container className='Container'><br/>
         <div className='TituloAddStudent'>
            <h1  className='text-center'>{TextCertificatesKC.titulo}</h1>
        </div><br/>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>{TextCertificatesKC.nombreCompleto}</th>
          <th>{TextCertificatesKC.curp}</th>
          <th colSpan={3}>{TextCertificatesKC.accionesConstancia}</th>
        </tr>
      </thead>
      <tbody>
        {collecionAlumnos.slice().reverse().map((datosAlumno)=>(
          <tr key={datosAlumno.id}>
            <td>{datosAlumno.nombres} {datosAlumno.primerApellido} {datosAlumno.segundoApellido}</td>
            <td>{datosAlumno.curp}</td>
            <td>{TextCertificatesKC.imprimir}</td>
            <td>{TextCertificatesKC.verDatosAlumno}</td>
            <td>{TextCertificatesKC.eliminar}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </Container>
  )
}

export default CertificatesKC
