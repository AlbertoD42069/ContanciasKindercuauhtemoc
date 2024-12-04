import React from 'react'


const verContanciaOnClick = (alumnoTabla) => {

    const alingTextCenter = "center"
    const nombreConstancia = alumnoTabla.curpAlumno+"_contancia.pdf";
    const nombreConstanciaSinEspacio = nombreConstancia.replace(" ", "");

  const doc = new jsPDF();
    doc.addImage(imageSep,"PNG", 15, 10, 50, 28);
    doc.addImage(secrtEducacion,"PNG", 150, 10, 50, 28);


    doc.setFontSize(10);
    doc.text(encabezadoConstancia.secrFederalizada, 105, 15, null, null, alingTextCenter);
    doc.text(encabezadoConstancia.secrIndigena, 105, 20, null, null, alingTextCenter);
    doc.text(encabezadoConstancia.jefaturaZona, 105, 25, null, null, alingTextCenter);
    doc.text(encabezadoConstancia.zonaEscolar, 105, 30, null, null, alingTextCenter);
    doc.text(encabezadoConstancia.nombreKinder, 105, 35, null, null, alingTextCenter);
    doc.text(encabezadoConstancia.claveCentroTrabajo, 105, 40, null, null, alingTextCenter);

    doc.setFontSize(20);
    doc.text(encabezadoConstancia.logoAño, 105, 70, null, null, alingTextCenter);

    doc.setFontSize(25);
    doc.setFont("arial", "normal");
    const cuerpoConstancia = `Por medio de la presente informo a quien corresponda que el alumno(a) ${alumnoTabla.nombres + alumnoTabla.primerApellido + alumnoTabla.segundoApellido} con matricula ${alumnoTabla.matricula}, nacido el\ ${alumnoTabla.fechaNacimiento} con la curp ${alumnoTabla.curpAlumno}. 
    Esta actualmente INSCRITO en el ${alumnoTabla.grado} del jardin de niñas y niños "CUAUHTÉMOC" con C.C.T 07DCC1395S de educación preescolar del ciclo escolar ${alumnoTabla.cicloEscolar} el cual se encuentra ubicado en la esquina de la Primera Avenida Nte. Ote y Segunda Ote.Nte, Santo Domingo, 29740 Rayón, Chiapas.`;
    
    const emisionComst = `Se extiende la presente, para los fines legales que al interesado convenga con fecha de emisión el ${alumnoTabla.fechaEmisionConstancia}`;
    const textoAjustado = doc.splitTextToSize(cuerpoConstancia, 180);
    const textoAjustadoEmision = doc.splitTextToSize(emisionComst, 180);
    
    doc.setFont("helvetica", "bold");
    doc.text(encabezadoConstancia.tituloCostancia, 105, 100, null, null, alingTextCenter);
    doc.autoTable({
      body:[[textoAjustado]],
      startY:108,
      alternateRowStyles: {
        halign: 'justify', // Alineación horizontal al centro
        fillColor: null,
        fontSize: 15, // Tamaño de texto general para la tabla
        // Sin fondo alternativo para las filas
      },
      bodyStyles: {
        textColor: [0, 0, 0], // Color del texto de las celdas del cuerpo
      },
      margin: { 
        top: 20, left: 30, right: 30, bottom: 10 
      }, // Márgenes personalizados
        
    });
    doc.autoTable({
      body:[[textoAjustadoEmision]],
      startY:180,
      alternateRowStyles: {
        halign: 'justify', // Alineación horizontal al centro
        fillColor: null,
        fontSize: 15, // Tamaño de texto general para la tabla
        // Sin fondo alternativo para las filas
      },
      bodyStyles: {
        textColor: [0, 0, 0], // Color del texto de las celdas del cuerpo
      },
      margin: { 
        top: 20, left: 30, right: 30, bottom: 10 
      }, // Márgenes personalizados
        
    });
    doc.setFontSize(12);
    doc.text('ATENTAMENTE', 105, 215, null, null, "center");
    doc.text('__________________________________', 105, 230, null, null, "center");
    doc.text('Lic. Adela Albina Dominguez Diaz', 105, 235, null, null, "center");
    doc.text('Directora del jardin de niñas y niños CUAUHTÉMOC', 105, 240, null, null, "center");

    doc.save(nombreConstanciaSinEspacio);
}

const GenerarConstanciaAlumno = () => {

  return (
    <div>
      
    </div>
  )
}

export default GenerarConstanciaAlumno
