import React, {useState} from 'react'

export default function ConstanciasKinder() {
  
  const [nombresAlumno, setNombreAlumno] = useState();
  const [primerApellidoAlumno, setPrimerApellidoAlumno] = useState();
  const [segundoApellidoAlumno, setSegundoApellidoAlumno] = useState();
  const [fechaNacimientoAlumno, setFechaNacimientoAlumno] = useState();
  const [generoAlumno, setGeneroAlumno] = useState();
  const [matriculaAlumno, setMatriculaAlumno] = useState();
  const [gradoAlumno, setGradoAlumno] = useState();
  const [estatusAlumno, setEstatusAlumno] = useState();
  const [cicloEscolarAlumno, setCicloEscolarAlumno] = useState();

  const nombresAlumnoOnChange = (e) => {
    setNombreAlumno(e.target.value);
  }
  const primerApellidoAlumnoOnChange = (e) => {
    setPrimerApellidoAlumno(e.target.value);
  }
  const segundoApellidoAlumnoOnChange = (e) => {
    setSegundoApellidoAlumno(e.target.value);
  }
  const fechaNacimientoAlumnoOnChange = (e) => {
    setFechaNacimientoAlumno(e.target.value);
  }
  const generoAlumnoOnChange = (e) => {
    setGeneroAlumno(e.target.value);
  }
  const matriculaAlumnoOnChange = (e) => {
    setMatriculaAlumno(e.target.value);
  }
  const gradoAlumnoOnChange = (e) => {
    setGradoAlumno(e.target.value);
  }
  const estatusAlumnoOnChange = (e) => {
    setEstatusAlumno(e.target.value);
  }
  const cicloEscolarAlumnoOnChange = (e) => {
    setCicloEscolarAlumno(e.target.value);
  }

  const addNewStudentOnClick = async() => {

  }


  return (
    <div className='contenedorConstanciasPrincipal'>
        <div className='contenedorLogin'>
            <div className='login'>

              <div>
                <h3>Registrar alumno </h3>
              </div>

              <div>
                <div className='IniciarSesionUsuario'>
                  <div>
                    <label>Nombres</label>
                  </div>
                  <div>
                    <input type='text' />
                  </div>
                </div>
                
                <div className='IniciarSesionContraseña'>
                  <div className='contraseña'>
                      <label>Primer Apellido</label>
                  </div>
                  <div className='contenidoContrasena'>
                      <input type='text'/>
                  </div>
                </div>
                        <div className='IniciarSesionContraseña'>
                        <div className='contraseña'>
                            <label>Segundo Apellido</label>
                        </div>
                        <div className='contenidoContrasena'>
                            <input type='text'/>
                        </div>
                        </div>
                        <div className='IniciarSesionContraseña'>
                        <div className='contraseña'>
                            <label>Fecha Nacimiento</label>
                        </div>
                        <div className='contenidoContrasena'>
                            <input type='text'/>
                        </div>
                        </div>
                        <div className='IniciarSesionContraseña'>
                        <div className='contraseña'>
                            <label>Genero</label>
                        </div>
                        <div className='contenidoContrasena'>
                            <input type='text'/>
                        </div>
                        </div>
                        <div className='IniciarSesionContraseña'>
                        <div className='contraseña'>
                            <label>Matricula</label>
                        </div>
                        <div className='contenidoContrasena'>
                            <input type='text'/>
                        </div>
                        </div>
                        <div className='IniciarSesionContraseña'>
                        <div className='contraseña'>
                            <label>Grado</label>
                        </div>
                        <div className='contenidoContrasena'>
                            <input type='text'/>
                        </div>
                        </div>
                        <div className='IniciarSesionContraseña'>
                        <div className='contraseña'>
                            <label>Estatus</label>
                        </div>
                        <div className='contenidoContrasena'>
                            <input type='text'/>
                        </div>
                        </div>
                        <div className='IniciarSesionContraseña'>
                        <div className='contraseña'>
                            <label>ciclo Escolar</label>
                        </div>
                        <div className='contenidoContrasena'>
                            <input type='text'/>
                        </div>
                        </div>
                         <div className="contenButtonLogin">
                        <button>Agregar Alumno</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
