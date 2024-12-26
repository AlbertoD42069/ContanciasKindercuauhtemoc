
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