import React from 'react'

const verDatosAlumnoFunc = (alumnoTabla) => {
    console.log(alumnoTabla)
  }

const VerDatosAlumno = (alumnoTabla) => {
  return (
    <button className='btn-contancia' 
        onClick={() => verDatosAlumnoFunc(alumnoTabla)}>
        Datos de alumno
    </button>
  )
}

export default VerDatosAlumno
