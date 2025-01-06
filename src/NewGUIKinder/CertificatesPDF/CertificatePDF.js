import {jsPDF} from 'jspdf';

export const printStdCertificate = (datosAlumno) => {

    const cuerpo = `Por medio de la presente informo a quien correspondas que el alumno(a) ${datosAlumno.nombres}`

    const doc = new jsPDF();
    const margin = { top: 30, right: 30, bottom: 30, left: 30 };
    doc.text(cuerpo, margin.left, margin.top, { align: "left", maxWidth: 500 });

    doc.save('constancia.pdf')
}