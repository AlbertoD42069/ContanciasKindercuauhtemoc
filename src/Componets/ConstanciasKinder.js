import React, { useEffect, useState } from 'react'
import './Style/ConstanciasKinder.css';
import { collection, getDocs, onSnapshot, snapshotEqual } from 'firebase/firestore';
import { dbKinder } from '../firebase';
import {jsPDF} from 'jspdf';


export default function ConstanciasKinder() {
    const encabezadoConstancia = {
      secrFederalizada : "SECRETARIA DE EDUCACIÓN FEDERALIZADA",
      secrIndigena: "SECRETARIA DE EDUCACIÓN INDÍGENA",
      jefaturaZona: "JEFATURA DE ZONA 704, IXTACOMITAN",
      zonaEscolar: "ZONA ESCOLAR 401, RAYÓN",
      nombreKinder: 'JARDÍN DE NIÑAS Y NIÑOS “CUAUHTÉMOC”',
      claveCentroTrabajo: "C. C. T. 07DCC1395S, RAYÓN",
      logoAño: ' "2025 año de algo" ',
      tituloCostancia: "CONTANCIA DE INSCRIPCION",
    };

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
    
    const [collecionAlumnos, setCollecionAlumnos] = useState([]);

    
    const verContanciaOnClick = () => {
      const doc = new jsPDF();
        doc.setFontSize(10);
        doc.text(encabezadoConstancia.secrFederalizada, 105, 15, null, null, "center");
        doc.text(encabezadoConstancia.secrIndigena, 105, 20, null, null, "center");
        doc.text(encabezadoConstancia.jefaturaZona, 105, 25, null, null, "center");
        doc.text(encabezadoConstancia.zonaEscolar, 105, 30, null, null, "center");
        doc.text(encabezadoConstancia.nombreKinder, 105, 35, null, null, "center");
        doc.text(encabezadoConstancia.claveCentroTrabajo, 105, 40, null, null, "center");

        doc.setFontSize(20);
        doc.text(encabezadoConstancia.logoAño, 105, 75, null, null, "center");

        doc.setFont("helvetica", "bold");
        doc.text(encabezadoConstancia.tituloCostancia, 105, 100, null, null, "center");
        doc.save("contancia_${constNombreAlumno}.pdf");
    }

    const collectionName = "alumnos"
    const [nobreConstancia, setNombreConstancia] = useState("");
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
collecionAlumnos.map((alumnoConst) => {
      setNombreConstancia(alumnoConst.nombres);
      console.log("---",nobreConstancia);
    })
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