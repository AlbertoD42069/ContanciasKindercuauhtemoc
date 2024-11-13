import React from 'react'
import { appKinder } from '../firebase';
import { getAuth, onAuthStateChanged, signOut} from 'firebase/auth';
import { authKinder } from '../firebase';

export default function HomeKinder() {  
    const exit = async () => {
        await signOut(authKinder);
    }
  return (
    <div>
      <p>bienvenido</p>
      <button onClick={exit}>Cerrar Sesion</button>
    </div>
  )
}
