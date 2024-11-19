import React, {useState} from 'react';
import './Style/AgregarAlumno.css';
import { dbKinder } from '../firebase';
import { collection, addDoc } from "firebase/firestore";


export default function AgregarAlumnoKinder() {


  const [alumnoData, setFormData] = useState({
    nombres: "",
    primerApellido: "",
    segundoApellido: "",
    fechaNacimiento: "",
    genero: "",
    matricula: "",
    grado: "",
    estatus: "",
    cicloEscolar: "",

  });
  const handleChangeAlumno = (e) => {
    const { name, firstName, secondName, genero, matricula,grado,estatus,cicloEscolar, value } = e.target;
    setFormData({ ...alumnoData, 
      [name]: value,
      [firstName]: value,
      [secondName]: value,
      [genero]: value,
      [matricula]: value,
      [grado]: value,
      [estatus]: value,
      [cicloEscolar]: value,
    });
  };

  const handleOnClickAlumno= async (e) => {
    e.preventDefault();
    try {
      const docAlumnoscontancia = await addDoc(collection(dbKinder,'alumnos', alumnoData));
      console.log("Documento añadido con ID:", addDoc.id);
      alert("Datos enviados correctamente.");
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        direccion: "",
      });
    } catch (error) {
      console.error("Error al añadir el documento: ", error);
      alert("Hubo un error al enviar los datos.");
    }
  }
 
  
  return (
    <div className='contenedor'>
        <div className='contanciasKinder'>
            <div className='tituloKinder'>
                <h3>Registrar alumno </h3>
            </div>
            <div className='nombreCompletoAlumno'>
              <div className='nombreAlmuno'>
                  <div>
                    <label>Nombres</label>
                  </div>
                  <div>
                    <input 
                    type='text' 
                    value={alumnoData.nombres} 
                    onChange={handleChangeAlumno}
                    />
                  </div>
                </div>
                
                <div className='primerApellido'>
                  <div>
                      <label>Primer Apellido</label>
                  </div>
                  <div className='contenido'>
                      <input 
                      type='text'
                      value={primerApellidoAlumno}
                      onChange={primerApellidoAlumnoOnChange}
                      />
                  </div>
                </div>

                <div className='segundoApellido'>
                  <div>
                      <label>Segundo Apellido</label>
                  </div>
                  <div className='contenido'>
                      <input type='text'
                      value={segundoApellidoAlumno}
                      onChange={segundoApellidoAlumnoOnChange}
                      />
                  </div>
                </div>
            </div>
            <div className='fechaNacimientoAlumno'>
              <div className='fechaNacimiento'>
                  <div>
                      <label>Fecha Nacimiento</label>
                  </div>
                  <div className='contenido'>
                      <input type='text'
                      value={fechaNacimientoAlumno}
                      onChange={fechaNacimientoAlumnoOnChange}
                      />
                  </div>
                </div>

                <div className='generoAlumno'>
                  <div>
                      <label>Genero</label>
                  </div>
                  <div className='contenido'>
                      <input type='text'
                      value={generoAlumno}
                      onChange={generoAlumnoOnChange}
                      />
                  </div>
                </div>
                <div className='matriculaAlumno'>
                  <div>
                      <label>Matricula</label>
                  </div>
                  <div className='contenido'>
                      <input type='text'
                      value={matriculaAlumno}
                      onChange={matriculaAlumnoOnChange}
                      />
                  </div>
                </div>
                
            </div>
            <div className='datosEscolares'>
                <div className='gradoAlumno'>
                  <div>
                      <label>Grado</label>
                  </div>
                  <div className='contenido'>
                      <input type='text'
                      value={gradoAlumno}
                      onChange={gradoAlumnoOnChange}
                      />
                  </div>
                </div>
                <div className='estatusAlumno'>
                  <div>
                      <label>Estatus</label>
                  </div>
                  <div className='contenido'>
                      <input type='text'
                      value={estatusAlumno}
                      onChange={estatusAlumnoOnChange}
                      />
                  </div>
                </div>
                <div className='cicloEscolar'>
                  <div>
                      <label>ciclo Escolar</label>
                  </div>
                  <div className='contenido'>
                      <input type='text'
                      value={cicloEscolarAlumno}
                      onChange={cicloEscolarAlumnoOnChange}
                      />
                  </div>
                </div>
                </div><br/>
                  <div className="buttonAgregarAlumno">
                        <button onClick={addNewStudentOnClick}>Agregar Alumno</button>
                  </div>
        </div>
    </div>
  )
}
/*

                
               
                
               
                </div>
*/


  /*

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
    console.log(nombresAlumno);
    console.log(primerApellidoAlumno);
    console.log(segundoApellidoAlumno);
    console.log(fechaNacimientoAlumno);
    console.log(generoAlumno);
    console.log(matriculaAlumno);
    console.log(gradoAlumno);
    console.log(estatusAlumno);
    console.log(cicloEscolarAlumno);
  }
*/