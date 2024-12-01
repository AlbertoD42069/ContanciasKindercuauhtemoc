
const [userKinder, setUserKinder] = useState();
const [passKinder, setPassKinder] = useState();
const [error, setError] = useState('');


const authKinderUserOnChange = (e) => {
    setUserKinder(e.target.value);
}
const authKinderPassOnChange = (e) => {
    setPassKinder(e.target.value);
}
const authKinderUserOnClick = async () => {
    try {
        await signInWithEmailAndPassword(authKinder, userKinder, passKinder);
      } catch (err) {
        alert('Usuario y Contraseña incorrecto favor de verificar')
      }
}
