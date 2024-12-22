import React from 'react'
import NavbarKC from './NavBarKC';
import Container from 'react-bootstrap/Container';
import '../Componets/Style/Home.css';
import AddStudentKC from './AddStudentKC';


const HomeKC = () => {
  return (
    <div>
        <NavbarKC/>
        <AddStudentKC/>
    </div>
        
  )
}

export default HomeKC
