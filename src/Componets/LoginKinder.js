import React, { useState } from 'react';
import './Style/Login.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { authKinder } from '../firebase';
import LoginBtn from './LoginBtn';


export default function LoginKinder(){
  return (
    <LoginBtn/> 
  )
}