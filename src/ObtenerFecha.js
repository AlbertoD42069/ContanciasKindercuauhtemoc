import { useState, useEffect } from 'react'


function Fecha (){
     const[value, setValue] = useState(false);
    useEffect(() => {
        const fechaText = document.getElementById('fecha');
        const fecha = new Date();
        const formatoFecha = fecha.toLocaleDateString();
        fechaText.innerHTML = {formatoFecha};
    });
};


