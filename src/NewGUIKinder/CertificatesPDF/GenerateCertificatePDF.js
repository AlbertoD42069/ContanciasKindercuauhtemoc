import {jsPDF} from 'jspdf';
import { TextosStaticosCostancia } from '../Resources/TextsKC';
import 'jspdf-autotable';
import secrtEducacion from '../../Componets/images/secrtEducacion.png';
import imageSep from '../../Componets/images/SEP_Logo.png';
import React, { UseState } from 'react';


export const printStudentCertificate = (datosAlumno) => {
    const [collecionAlumnos, setCollecionAlumnos] = UseState([]);
    const collectionName = "alumnos"

    const doc = new jsPDF();
    doc.addImage(imageSep,"PNG", 15, 10, 50, 28);
    doc.addImage(secrtEducacion,"PNG", 150, 10, 50, 28);

    doc.setFontSize(10);
    doc.text(TextosStaticosCostancia.secrFederalizada, 105, 15, null, null, "center");
    doc.text(TextosStaticosCostancia.secrIndigena, 105, 20, null, null, "center");
    doc.text(TextosStaticosCostancia.jefaturaZona, 105, 25, null, null, "center");
    doc.text(TextosStaticosCostancia.zonaEscolar, 105, 30, null, null, "center");
    doc.text(TextosStaticosCostancia.nombreKinder, 105, 35, null, null, "center");
    doc.text(TextosStaticosCostancia.claveCentroTrabajo, 105, 40, null, null, "center");
    
    doc.setFontSize(20);
    doc.text(TextosStaticosCostancia.logoAño, 105, 75, null, null, "center");
    doc.setFont("helvetica", "bold");
    doc.text(TextosStaticosCostancia.tituloCostancia, 105, 100, null, null, "center");
    doc.save("contancia_${constNombreAlumno}.pdf");

}