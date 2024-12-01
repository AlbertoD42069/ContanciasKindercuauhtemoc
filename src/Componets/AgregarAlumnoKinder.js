import React, {useState} from 'react';
import './Style/AgregarAlumno.css';
import { dbKinder } from '../firebase';
import { collection, addDoc } from "firebase/firestore";


export default function AgregarAlumnoKinder() {

  const [alumnoData, setAlumnoData] = useState({
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
    const { name, valueName } = e.target;
    const { lastName, valueLastName } = e.target;
    const { middleName, valueMiddleName } = e.target;
    const { dateBirth, valueDateBirth } = e.target;
    const { gender, valueGender } = e.target;
    const { tuition, valueTuition } = e.target;
    const { grade, valueGrade } = e.target;
    const { status, valueStatus } = e.target;
    const { schoolYear, valueSchoolYear } = e.target;

    setAlumnoData({ 
      ...alumnoData, 
      [name]: valueName,
      [lastName]: valueLastName,
      [middleName]: valueMiddleName,
      [dateBirth]: valueDateBirth,
      [gender]: valueGender,
      [tuition]: valueTuition,
      [grade]: valueGrade,
      [status]: valueStatus,
      [schoolYear]: valueSchoolYear,
    });
  };
  
  const nameCollection = 'alumnos'
  const handleOnClickAlumno = async (e) => {

    e.preventDefault();
    try {
      const docAlumnoscontancia = await addDoc(collection(dbKinder, nameCollection), alumnoData);
      console.log("Documento añadido con ID:", docAlumnoscontancia.id);
      alert("Datos enviados correctamente.");
      setAlumnoData({
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
                    name='nombres'
                    value={alumnoData.nombres} 
                    onChange={handleChangeAlumno}
                    required
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
                      name='primerApellido'
                      value={alumnoData.primerApellido}
                      onChange={handleChangeAlumno}
                      required
                      />
                  </div>
                </div>

                <div className='segundoApellido'>
                  <div>
                      <label>Segundo Apellido</label>
                  </div>
                  <div className='contenido'>
                      <input type='text'
                      name='segundoApellido'
                      value={alumnoData.segundoApellido}
                      onChange={handleChangeAlumno}
                      required
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
                      name='fechaNacimiento'
                      value={alumnoData.fechaNacimiento}
                      onChange={handleChangeAlumno}
                      required
                      />
                  </div>
                </div>

                <div className='generoAlumno'>
                  <div>
                      <label>Genero</label>
                  </div>
                  <div className='contenido'>
                      <input type='text'
                      name='genero'
                      value={alumnoData.genero}
                      onChange={handleChangeAlumno}
                      />
                  </div>
                </div>
                <div className='matriculaAlumno'>
                  <div>
                      <label>Matricula</label>
                  </div>
                  <div className='contenido'>
                      <input type='text'
                      name='matricula'
                      value={alumnoData.matricula}
                      onChange={handleChangeAlumno}
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
                      name='grado'
                      value={alumnoData.grado}
                      onChange={handleChangeAlumno}
                      />
                  </div>
                </div>
                <div className='estatusAlumno'>
                  <div>
                      <label>Estatus</label>
                  </div>
                  <div className='contenido'>
                      <input type='text'
                      name='estatus'
                      value={alumnoData.estatus}
                      onChange={handleChangeAlumno}
                      />
                  </div>
                </div>
                <div className='cicloEscolar'>
                  <div>
                      <label>ciclo Escolar</label>
                  </div>
                  <div className='contenido'>
                      <input type='text'
                      name='cicloEscolar'
                      value={alumnoData.cicloEscolar}
                      onChange={handleChangeAlumno}
                      />
                  </div>
                </div>
                </div><br/>
                  <div className="buttonAgregarAlumno">
                        <button onClick={handleOnClickAlumno}>Agregar Alumno</button>
                  </div>
        </div>
    </div>
  )
}