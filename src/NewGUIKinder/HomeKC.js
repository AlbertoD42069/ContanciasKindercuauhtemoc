import React from 'react'
import NavbarKC from './NavBarKC';
import '../Componets/Style/Home.css';
import AddStudentKC from './AddStudentKC';
import CertificatesKC from './CertificatesKC';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const HomeKC = () => {
  return (
    <div>
        <NavbarKC/>
        <Routes>
          <Route path='/'element={<AddStudentKC/>}/>
          <Route path='certificate' element={<CertificatesKC/>}/>
        </Routes>
    </div>     
  )
}

export default HomeKC
