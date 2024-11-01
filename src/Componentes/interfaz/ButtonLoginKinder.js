import React from 'react';

export default function ButtonLoginKinder() {
    const loginKinder = () => {
        console.log('Iniciar Sesion'); 
    }
  return (
    <button onClick={loginKinder}>Iniciar Sesion</button>
  )
}
