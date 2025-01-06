import {jsPDF} from 'jspdf';
import { TextosStaticosCostancia } from '../Resources/TextsKC';
import 'jspdf-autotable';
import secrtEducacion from '../../Componets/images/secrtEducacion.png';
import imageSep from '../../Componets/images/SEP_Logo.png';
import React, { UseState } from 'react';

export const printStudentCertificate = (datosAlumno) => {

  const doc = new jsPDF();

    const alingTextCenter = "center"
    doc.addImage(imageSep,"PNG", 15, 10, 50, 28);
    doc.addImage(secrtEducacion,"PNG", 150, 10, 50, 28);

    doc.setFontSize(10);
    doc.text(TextosStaticosCostancia.secrFederalizada, 105, 15, null, null, alingTextCenter);
    doc.text(TextosStaticosCostancia.secrIndigena, 105, 20, null, null, alingTextCenter);
    doc.text(TextosStaticosCostancia.jefaturaZona, 105, 25, null, null, alingTextCenter);
    doc.text(TextosStaticosCostancia.zonaEscolar, 105, 30, null, null, alingTextCenter);
    doc.text(TextosStaticosCostancia.nombreKinder, 105, 35, null, null, alingTextCenter);
    doc.text(TextosStaticosCostancia.claveCentroTrabajo, 105, 40, null, null, alingTextCenter);

    doc.setFontSize(20);
    doc.text(TextosStaticosCostancia.logoAño, 105, 70, null, null, alingTextCenter);

    const nombreConstancia = datosAlumno.nombres + datosAlumno.primerApellido;
    const nombreConstanciaSinEspacio = nombreConstancia.replace(" ", "");

    const margin = { top: 125, right: 20, bottom: 100, left: 25 };
    const marginFooter = { top: 180, right: 20, bottom: 100, left: 25 };

    const cuerpo = `Por medio de la presente informo a quien correspondas que el alumno(a) ${datosAlumno.nombres} ${datosAlumno.primerApellido} ${datosAlumno.segundoApellido} con matricula ${datosAlumno.matricula}, nacido el ${datosAlumno.fechaNacimiento} con la curp ${datosAlumno.curp}. Esta actualmente INSCRITO en el ${datosAlumno.grado} del jardin de niñas y niños "CUAUHTÉMOC" con C.C.T 07DCC1395S de educación preescolar del ciclo escolar ${datosAlumno.cicloEscolar} el cual se encuentra ubicado en la esquina de la Primera Avenida Nte. Ote y Segunda Ote.Nte, Santo Domingo, 29740 Rayón, Chiapas.`
    const emisionComst = `Se extiende la presente, para los fines legales que al interesado convenga con fecha de emisión el ${datosAlumno.fechaExpedicion}`;
    
    const textoAjustado = doc.splitTextToSize(cuerpo, 225);
    const textoAjustadoEmision = doc.splitTextToSize(emisionComst, 225);
    
    doc.setFont("helvetica", "bold");
    doc.text(TextosStaticosCostancia.tituloCostancia, 105, 100, null, null, alingTextCenter);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(13);
    doc.text(textoAjustado, margin.left, margin.top, { align: "justify", maxWidth: 160});
    doc.text(textoAjustadoEmision, marginFooter.left, marginFooter.top, { align: "justify", maxWidth: 160});
    
    doc.setFontSize(13);
    doc.text('ATENTAMENTE', 105, 210, null, null, "center");
    doc.text('__________________________________', 105, 230, null, null, "center");
    doc.text('Lic. Adela Albina Dominguez Diaz', 105, 235, null, null, "center");
    doc.text('Directora del jardin de niñas y niños CUAUHTÉMOC', 105, 240, null, null, "center");

    doc.save(`Const_${nombreConstanciaSinEspacio}.pdf`);
}
