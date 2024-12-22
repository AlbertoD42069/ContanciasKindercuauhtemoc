import React from 'react'
import NavbarKC from './NavBarKC';
import Container from 'react-bootstrap/Container';
import '../Componets/Style/Home.css';
import AddStudentKC from './AddStudentKC';
import CertificatesKC from './CertificatesKC';


const HomeKC = () => {
  return (
    <div>
        <NavbarKC/>
        <AddStudentKC/>
        <CertificatesKC/>
    </div>
        
  )
}

export default HomeKC
