const fechaText = document.getElementById('fecha');
const fecha = new Date();
const formatoFecha = fecha.toLocaleDateString();
fechaText.innerHTML = {formatoFecha};
