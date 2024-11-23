import React, {useState} from 'react';
import './Style/AgregarAlumno.css';
import { dbKinder } from '../firebase';
import { collection, addDoc } from "firebase/firestore";


export default function AgregarAlumnoKinder() {

  const [nombreAlumno, setNombreAlumno] = useState("");
  const [primerAlumno, setPrimerAlumno] = useState("");
  const [segundoAlumno, setSegundoAlumno] = useState("");
  const [fechaNacimientoAlumno, setFechaNacimientoAlumno] = useState("");
  const [generoAlumno, setGeneroAlumno] = useState("");
  const [matriculaAlumno, setMatriculaAlumno] = useState("");
  const [gradoAlumno, setGradoAlumno] = useState("");
  const [estatusAlumno, setEstatusAlumno] = useState("");
  const [cicloEscolarAlumno, setCicloEscolarAlumno] = useState("");
  
  const collectionName = "alumnos"
  const handleOnClickAlumno = async(e) => {
    e.preventDefault();
    if (!nombreAlumno ||
        !primerAlumno ||
        !segundoAlumno ||
        !fechaNacimientoAlumno ||
        !generoAlumno ||
        !matriculaAlumno ||
        !gradoAlumno ||
        !estatusAlumno ||
        !estatusAlumno) {
        alert("Por favor, completa todos los campos.");
        return;
    };
    try {
    //obtener referencia de coleccion
    const alumnoCollectionRef = collection(dbKinder, collectionName);    
    //añadir datos
    const docAlumnoRef = await addDoc(alumnoCollectionRef, {
        nombres: nombreAlumno,
        primerApellido: primerAlumno,
        segundoApellido: segundoAlumno,
        fechaNacimiento: fechaNacimientoAlumno,
        genero: generoAlumno,
        matricula: matriculaAlumno,
        grado: gradoAlumno,
        estatus: estatusAlumno,
        cicloEscolar: cicloEscolarAlumno,
    });
    alert("alumno agregado correctamente")
    console.log("documento -- ", docAlumnoRef.id, "---añadido a bd")
    } catch(error){
        console.error("error al añadir el documento", error)
    }
    setNombreAlumno("");
    setPrimerAlumno("");
    setSegundoAlumno("");
    setFechaNacimientoAlumno("");
    setGeneroAlumno("");
    setMatriculaAlumno("");
    setGradoAlumno("");
    setEstatusAlumno("");
    setCicloEscolarAlumno("");

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
                    value={nombreAlumno} 
                    onChange={(e) => setNombreAlumno(e.target.value)}
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
                      value={primerAlumno}
                      onChange={(e) => setPrimerAlumno(e.target.value)}
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
                      value={segundoAlumno}
                      onChange={(e) => setSegundoAlumno(e.target.value)}
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
                      value={fechaNacimientoAlumno}
                      onChange={(e) => setFechaNacimientoAlumno(e.target.value)}
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
                      value={generoAlumno}
                      onChange={(e) => setGeneroAlumno(e.target.value)}
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
                      value={matriculaAlumno}
                      onChange={(e) => setMatriculaAlumno(e.target.value)}
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
                      value={gradoAlumno}
                      onChange={(e) => setGradoAlumno(e.target.value)}
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
                      value={estatusAlumno}
                      onChange={(e) => setEstatusAlumno(e.target.value)}
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
                      value={cicloEscolarAlumno}
                      onChange={(e) => setCicloEscolarAlumno(e.target.value)}
                      />
                  </div>
                </div>
                </div>
                <button onClick={handleOnClickAlumno}>Agregar Alumno</button>                  
        </div>
    </div>
  )
}
/*
<div className="buttonAgregarAlumno">
                        <button onClick={handleOnClickAlumno}>Agregar Alumno</button>
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


*/