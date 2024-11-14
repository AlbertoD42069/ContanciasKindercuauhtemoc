import React from 'react'
import { appKinder } from '../firebase';
import { getAuth, onAuthStateChanged, signOut} from 'firebase/auth';
import { authKinder } from '../firebase';
import SideBar from './SideBarKinder.js';
import ConstanciasKinder from './ConstanciasKinder.js';
import './Style/Home.css';

export default function HomeKinder() {  
    const exit = async () => {
        await signOut(authKinder);
    }
  return (
    <div className='contenedorPrincipalHome'>
        <SideBar/>
        <ConstanciasKinder/>
    </div>
  )
}
/*
<p>bienvenido</p>
      <button onClick={exit}>Cerrar Sesion</button>
*/
