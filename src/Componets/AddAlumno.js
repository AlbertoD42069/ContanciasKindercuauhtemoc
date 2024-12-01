
const [alumnoData, setAlumnoData] = useState({
    nombres: "",
    primerApellido: "",
    segundoApellido: "",
    fechaNacimiento: "",
    genero: "",
    matricula: "",
    grado: "",
    estatus: "",
    cicloEscolar: "",
  });

  const handleChangeAlumno = (e) => {
    const { name, valueName } = e.target;
    const { lastName, valueLastName } = e.target;
    const { middleName, valueMiddleName } = e.target;
    const { dateBirth, valueDateBirth } = e.target;
    const { gender, valueGender } = e.target;
    const { tuition, valueTuition } = e.target;
    const { grade, valueGrade } = e.target;
    const { status, valueStatus } = e.target;
    const { schoolYear, valueSchoolYear } = e.target;

    setAlumnoData({ 
      ...alumnoData, 
      [name]: valueName,
      [lastName]: valueLastName,
      [middleName]: valueMiddleName,
      [dateBirth]: valueDateBirth,
      [gender]: valueGender,
      [tuition]: valueTuition,
      [grade]: valueGrade,
      [status]: valueStatus,
      [schoolYear]: valueSchoolYear,
    });
  };
  
  const nameCollection = 'alumnos'
  const handleOnClickAlumno = async (e) => {

    e.preventDefault();
    try {
      const docAlumnoscontancia = await addDoc(collection(dbKinder, nameCollection), alumnoData);
      console.log("Documento añadido con ID:", docAlumnoscontancia.id);
      alert("Datos enviados correctamente.");
      setAlumnoData({
        nombres: "",
        primerApellido: "",
        segundoApellido: "",
        fechaNacimiento: "",
        genero: "",
        matricula: "",
        grado: "",
        estatus: "",
        cicloEscolar: "",
      });
    } catch (error) {
      console.error("Error al añadir el documento: ", error);
      alert("Hubo un error al enviar los datos.");
    }
  }