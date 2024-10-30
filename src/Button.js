import React from "react";

function Button(){

    const inicioSesion = () => {
        console.log("iniciar sesion");
    };
    
    return (
        <button onClick={inicioSesion}>IniciarSesion</button>
    );
}
export default Button;