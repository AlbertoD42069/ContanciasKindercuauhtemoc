import React, { useEffect, useState } from 'react'
import './Style/ConstanciasKinder.css';
import { collection, getDocs, onSnapshot, snapshotEqual } from 'firebase/firestore';
import { dbKinder } from '../firebase';
import {jsPDF} from 'jspdf';


export default function ConstanciasKinder() {

    const [wantedStudent, setWantedStudent] = useState();
    const wantedStudentOnChange = (e) => {
        setWantedStudent(e.target.value);
    }
    const searchStudentOnclick = async() => {
        console.log(wantedStudent)
    }
    
    const actualizarContancia = () => {
        alert('contancia actualizada')
    }
    const eliminarContancia = () => {
      alert('contancia eliminada')
    }
    
    
    
    const verContanciaOnClick = () => {
      alert('ver contancias')
    }

    const [collecionAlumnos, setCollecionAlumnos] = useState([]);
    const collectionName = "alumnos"
    const contanciaAlumnoData = {
      nombreAlumnoAlumnoConstancia: "",
      primerAlumnoAlumnoConstancia: "",
      segundoAlumnoAlumnoConstancia: "", 
      fechaNacimientoAlumnoAlumnoConstancia: "",
      curpAlumnoAlumnoConstancia: "", 
      generoAlumnoAlumnoConstancia: "", 
      matriculaAlumnoAlumnoConstancia: "", 
      gradoAlumnoAlumnoConstancia: "", 
      cicloEscolarAlumnoAlumnoConstancia: "", 
    }

    useEffect(() => {
    const obtenerColeccion = async () => {
      try {
        const alumnosRef = collection(dbKinder, collectionName); // Referencia a la colección
        const snapshot = await getDocs(alumnosRef); // Obtiene todos los documentos
        const datos = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Documentos:", datos);
        setCollecionAlumnos(datos);
        console.log("-----",collecionAlumnos,"----");

        collecionAlumnos.map((contanciaAlumnoData) => {
            console.log("nuevo Mapa", contanciaAlumnoData.nombres);
        });
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    obtenerColeccion();
    }, []);


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
          <th colSpan={3}>opciones</th>
        </tr>
      </thead>
      <tbody>
        {collecionAlumnos.map((alumnoTabla) => (
          <tr key={alumnoTabla.id}>
            <td className='tituloTabla'>{alumnoTabla.nombres} {alumnoTabla.primerApellido} {alumnoTabla.segundoApellido}</td>
            <td><button className='btn-contancia' onClick={verContanciaOnClick}>contancia</button></td>
            <td><button className='btn-contancia' onClick={actualizarContancia}>actualizar</button></td>
            <td><button className='btn-contancia'>eliminar</button></td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </div>
  )
}
/*
 <tr>
          <td>Jesus Alberto Diaz dominguez</td>
          <td><button className='btn-contancia' onClick={verContanciaOnClick}>contancia</button></td>
          <td><button className='btn-contancia' onClick={actualizarContancia}>actualizar</button></td>
          <td><button className='btn-contancia' onClick={eliminarContancia}>eliminar</button></td>
        </tr>

    useEffect(() => {
      const fetchAlumnos = async () => {
        try {
          const getAlumnosData = collection(dbKinder, collectionName);
          const snapshotAlumnos = await getDoc(getAlumnosData);
          const alumnoData = snapshotAlumnos.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          setAlumnosTablas(alumnoData)
        } catch (error) {
          console.error("Error al obtener los alumnos:", error);
        }
      }
      fetchAlumnos();
    }, []);
*/