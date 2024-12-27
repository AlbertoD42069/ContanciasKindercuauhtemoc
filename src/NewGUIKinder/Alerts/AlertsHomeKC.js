
import Swal from 'sweetalert2';

export const campoFaltante = () => {
  Swal.fire({
    title: "Campos Faltantes",
    text: "Hay campos no rellenados, favor de revisar y llenarlos",
    icon: "question"
  });
}
export const studentAddedSuccessfully = (name, lastName, secondLastNname) => {
  const nameStudent = name + ' ' + lastName + ' ' +  secondLastNname
  Swal.fire({
    title: "¡Exito!",
    html: `Alumno con matricula: ${nameStudent} agregado`,
    icon: "success"
  });    
}
export const errorAddStudent = () => {
  Swal.fire({
    icon: "error",
    title: "Error",
    text: "Alumno no agregado",
  });
}
export const dataStudent = (datosAlumno) => {
  Swal.fire({
    icon: "info",
    title: "Datos Alumno",
    html: `
    <div>
      <h4>Nombre completo: ${datosAlumno.nombres + ' ' + datosAlumno.primerApellido + ' '+ datosAlumno.segundoApellido}</h4>
      <h4>Fecha de nacimiento: ${datosAlumno.fechaNacimiento}</h4>
      <h4>Curp: ${datosAlumno.curp}</h4>
      <h4>Matricula: ${datosAlumno.matricula}</h4>
      <h4>Grado: ${datosAlumno.grado}</h4>
      <h4>Ciclo escolar: ${datosAlumno.cicloEscolar}</h4>
    </di>
    `,
  });
}
export const deleteStudent =(id) => {
  Swal.fire({
    title: "Alumno Eliminado",
    text: `${id}`,
    icon: "error"
  });
}
