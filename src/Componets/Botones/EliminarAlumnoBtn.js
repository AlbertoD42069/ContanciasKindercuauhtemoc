import React from 'react'
import {deleteDoc, doc} from 'firebase/firestore';
import { dbKinder } from '../../firebase';
import Swal from 'sweetalert2';

const eliminarAlumno = async (id) => {
    const collectionName = "alumnos"
    console.log("alumno eliminado" + id)
    if (id != '') {
        await deleteDoc(doc(dbKinder, collectionName, id));
        Swal.fire({
            title: 'Exito',
            text: 'Alumno eliminado con exito',
            icon: 'success',

        });
      } else {
        console.log('error en eliminacion')
      }
}

const EliminarAlumnoBtn = (props) => {
  return (
    <button className='btn-contancia'
    onClick={()=>eliminarAlumno(props.idAlumno)}>
      Eliminar
      </button>
  )
}

export default EliminarAlumnoBtn
