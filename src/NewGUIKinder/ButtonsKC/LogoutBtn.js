import React from 'react'
import Button from 'react-bootstrap/Button';
/*import { authKinder } from '.../firebase';
import {authKC} from '../firebase;';*/
import { signOut } from 'firebase/auth'; 

const LogoutBtn = (props) => {
  
    const logout = async () => {
       /* await signOut(authKC);*/
    }
  return (
    <Button className='btnExit' variant="danger" onClick={logout}>Salir</Button>
  )
}
export default LogoutBtn
/*
    <Button className='btnExit' variant="danger" onClick={logout}>Salir</Button>

*/