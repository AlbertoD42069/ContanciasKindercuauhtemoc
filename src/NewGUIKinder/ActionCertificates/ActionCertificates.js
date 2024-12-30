import { dataStudent } from "../Alerts/AlertsHomeKC";
import { deleteStudent } from "../Alerts/AlertsHomeKC";
import {deleteDoc, doc} from 'firebase/firestore';
import { dbKinder } from '../../firebase';
import { printStudentCertificate } from "../CertificatesPDF/GenerateCertificatePDF";



export const printCertificate = (datosAlumno) => {
    printStudentCertificate(datosAlumno);
}
export const viewStudentData = (datosAlumno) => {
    dataStudent(datosAlumno);
}
export const deleteStudentData = async(id) => {
    const collectionName = "alumnos"
    if (id != '') {
        await deleteDoc(doc(dbKinder, collectionName, id))
        deleteStudent(id)
    }
}