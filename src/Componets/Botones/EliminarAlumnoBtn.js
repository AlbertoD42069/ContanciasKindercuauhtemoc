import React from 'react'
import {deleteDoc, doc} from 'firebase/firestore';
import { dbKinder } from '../../firebase';



const eliminarAlumno = async (id) => {
    const collectionName = "alumnos"
    console.log("alumno eliminado" + id)
    if (id != '') {
        await deleteDoc(doc(dbKinder, collectionName, id));
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
