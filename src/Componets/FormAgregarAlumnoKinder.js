import React, {useState} from 'react';
import './Style/AgregarAlumno.css';
import { dbKinder } from '../firebase';
import { collection, addDoc } from "firebase/firestore";


export default function AgregarAlumnoKinder() {

  const [nombreAlumno, setNombreAlumno] = useState("");
  const [primerAlumno, setPrimerAlumno] = useState("");
  const [segundoAlumno, setSegundoAlumno] = useState("");
  const [fechaNacimientoAlumno, setFechaNacimientoAlumno] = useState("");
  const [curpAlumno, setCurpAlumno] = useState("");
  const [generoAlumno, setGeneroAlumno] = useState("");
  const [matriculaAlumno, setMatriculaAlumno] = useState("");
  const [gradoAlumno, setGradoAlumno] = useState("");
  const [cicloEscolarAlumno, setCicloEscolarAlumno] = useState("");
  
  const collectionName = "alumnos"
  const handleOnClickAlumno = async(e) => {
    {}
    e.preventDefault();
    const fechaACtual = Date.now()
    const fechaEmisionConstancia = new Date(fechaACtual);
    const fechaLocalEmisionConstancia = fechaEmisionConstancia.toLocaleDateString();
    if (!nombreAlumno ||
        !primerAlumno ||
        !segundoAlumno ||
        !fechaNacimientoAlumno ||
        !curpAlumno ||
        !generoAlumno ||
        !matriculaAlumno ||
        !gradoAlumno) {
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
        curpAlumno: curpAlumno,
        genero: generoAlumno,
        matricula: matriculaAlumno,
        grado: gradoAlumno,
        cicloEscolar: cicloEscolarAlumno,
        fechaEmisionConstancia: fechaLocalEmisionConstancia,
    });
        alert("alumno agregado correctamente")
        } catch(error){
            console.error("error al añadir el documento", error)
        }
        setNombreAlumno("");
        setPrimerAlumno("");
        setSegundoAlumno("");
        setFechaNacimientoAlumno("");
        setCurpAlumno("");
        setGeneroAlumno("");
        setMatriculaAlumno("");
        setGradoAlumno("");
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
                      <input type='date'
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
                <div className='curpAlumno'>
                  <div>
                      <label>Curp</label>
                  </div>
                  <div className='contenido'>
                      <input type='text'
                      name='curp'
                      value={curpAlumno}
                      onChange={(e) => setCurpAlumno(e.target.value)}
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
                      <select
                      type='text'
                      name='grado'
                      value={gradoAlumno}
                      onChange={(e) => setGradoAlumno(e.target.value)}>
                      <option>Seleciona un grado</option>
                      <option value="Primer grado">primero</option>
                      <option value="Segundo grado">Segundo</option>
                      <option value="Tercer grado">Tercero</option>
                      </select>
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
                <div className='cicloEscolar'>
                  <div>
                      <label>Ciclo Escolar</label>
                  </div>
                  <div className='contenido'>
                      <input type='text'
                      name='cicloEscolar'
                      value={cicloEscolarAlumno}
                      onChange={(e) => setCicloEscolarAlumno(e.target.value)}
                      />
                  </div>
                </div>
                </div><br/>
                <button onClick={handleOnClickAlumno}>Agregar Alumno</button>                  
        </div>
    </div>
  )
}
/*
 <div className='gradoAlumno'>
                  <div>
                      <label>Grado</label>
                  </div>
                  <div className='contenido'>
                      <input type='number'
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
*/