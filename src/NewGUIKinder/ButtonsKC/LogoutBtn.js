import React from 'react'
import Button from 'react-bootstrap/Button';


const LogoutBtn = () => {
    const logout = async () => {
        await signOut(authKinder);
    }
  return (
    <Button variant="danger" onClick={logout}>Salir</Button>
  )
}
export default LogoutBtn
