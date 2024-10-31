import './App.css';
/*import { Component } from 'react';
import {addDoc, collection, getDocs, getFirestore} from 'firebase/firestore/lite';
import { app } from './firebase';*/
import React from 'react';
import SideBar from './SideBar.js';
/*import InsertAlumno from './ContenConstancia';*/
import BuscarAlumno from './BuscarAlumno.js';
import IniciarSesion from './IniciarSesion.js';
import './ObtenerFecha.js'




function App(){
  return (
  <div className="App">
    <header className="App-header">
      <div className='ContenedorPrincipal'>
        <IniciarSesion/>
      </div>
    </header>
  </div>
  );
}
export default App;
/*

<SideBar/>
class App extends Component {
  constructor(props){
    super(props);
    this.state =  {
      alumnos:[]

    }
  }
  async refrecarPAntalla(){
    var listaAlumnos=[];
    const db=getFirestore(app);
    const alumnoColum = collection(db,'alumnos');
    const alumnosSnapshot = await getDocs(alumnoColum);

    alumnosSnapshot.forEach(doc=>{
      let alumnos=doc.data();
      alumnos.id=doc.id;
      listaAlumnos.push(alumnos);
    });
    this.setState({alumnos:listaAlumnos});
    }
    componentDidMount(){
      this.refrecarPAntalla();
    }
    async addAlumno(){
      var nombreInput = document.getElementById("nombre").value;
      var primerApellidoInput = document.getElementById("primerApellido").value;
      var segundoApellido = document.getElementById("segundoApellido").value;
      var fechaNacimiento = document.getElementById("fechaNacimiento").value;
      var genero = document.getElementById("genero").value;
      var curp = document.getElementById("curp").value;
      var matricula = document.getElementById("matricula").value;
      var grado = document.getElementById("grado").value;
      var estatus = document.getElementById("estatus").value;
      var cicloEscolar = document.getElementById("cicloEscolar").value;
     
      var nombres = {nombres:nombreInput};
      var primerApellido = {primerApellido:primerApellidoInput};
      var segundoApellido = {segundoApellido :segundoApellido};
      var fechaNacimiento = {fechaNacimiento:fechaNacimiento};
      var genero = {genero:genero};
      var curp = {curp:curp};
      var matricula = {matricula:matricula};
      var grado = {grado:grado};
      var estatus = {estatus:estatus};
      var cicloEscolar = {cicloEscolar:cicloEscolar};
      
      const db = getFirestore(app);
      const alumnoColumna = collection(db,'alumnos');
      await addDoc(alumnoColumna,nombres,primerApellido);
      this.refrecarPAntalla();
    }
   
    render(){

      return(
        <div className="App">
          <div>
        <h1>Contancias Kinder</h1>
        <h2>Cuauhtemoc</h2>
        </div>
        <div> agregar alumno 
          <div> nombres <input id='nombre'/>&nbsp; </div>
          <div> primerApellido <input id='primerApellido'/>&nbsp; </div>
          <div> segundoApellido <input id='segundoApellido'/>&nbsp; </div>
          <div> fechaNacimiento <input id='fechaNacimiento'/>&nbsp; </div>
          <div> genero <input id='genero'/>&nbsp; </div>
          <div> curp <input id='curp'/>&nbsp; </div>
          <div> matricula <input id='matricula'/>&nbsp; </div>
          <div> grado <input id='grado'/>&nbsp; </div>
          <div> estatus <input id='estatus'/>&nbsp; </div>
          <div> cicloEscolar <input id='cicloEscolar'/>&nbsp; </div>
          <div> fevcha de expedicion: <p>14/10/2024</p></div>

          <div>
            <button onClick={()=>this.addAlumno()}>Agregar Alumno</button>
          </div>
        </div>    
      </div>
      );
    }
  }
export default App;
*/
 /*
       await primerApellido,segundoApellido,cicloEscolar,curp,estatus,fechaNacimiento,grado,matricula,genero);

    Eliminar alumno -- aun no funciona
    async deleteAlumno(id){
      const db = getFirestore(app);
      const alumnoReferencia = db.collection('alumnos/'+id);

      await deleteDoc(alumnoReferencia);
      this.refrecarPAntalla();
    }
    */

/*

consultar base de datos de firebase
      const {alumnos}=this.state;

 {alumnos.map(alumno=>
        <div>
            {alumno.nombres}&nbsp;
            <button onClick={()=>this.deleteAlumno(alumno.id)}>Eliminar alumno</button>
          </div> 
          )}

return (
      <div className="App">
        <h1>Contancias Kinder</h1>
        <h2>Cuauhtemoc</h2>
      </div>
    );
*/