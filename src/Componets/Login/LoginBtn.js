import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { authKinder } from '../../firebase';
const LoginBtn = (user, pass) => {

    const [useKinder, setUSerKinder] = useState()
    const [pasKinder, setPassKinder] = useState()
    
    const imprimirValores = async() => {
       setUSerKinder(useKinder)
       setPassKinder(pasKinder)
        console.log();
        try {
            
        } catch (error) {
            
        }
    }
  return (
    <div className="contenButtonLogin">
        <button onClick={() => imprimirValores()}>Iniciar Sesion</button>
    </div>
  )
}

export default LoginBtn
/*
<div className="contenButtonLogin">
        <button onClick={() => authKinderUserOnClickPrueba(userKinder, pass)}>Iniciar Sesion</button>
    </div>
*/