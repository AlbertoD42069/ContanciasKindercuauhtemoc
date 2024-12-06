import React from 'react'

const authKinderUserOnClick = async () => {
    try {
        await signInWithEmailAndPassword(authKinder, userKinder, passKinder);
      } catch (err) {
        alert('Usuario y Contraseña incorrecto favor de verificar')
      }
  }
  const authKinderUserOnClickPrueba = async (user, pass) => {
    console.log(user, pass)
    
  }

const LoginFunc = () => {
  return (
    <div className="contenButtonLogin">
        <button onClick={() => authKinderUserOnClickPrueba(userKinder, pass)}>Iniciar Sesion</button>
    </div>
  )
}

export default LoginFunc
