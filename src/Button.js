import React from "react";

function Button(usuario, contraseña){

    const inicioSesion = () => {
        console.log("iniciar sesion");
    };
    
    return (
        <button onClick={inicioSesion}>IniciarSesion</button>
    );
}
export default Button;