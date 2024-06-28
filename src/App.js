import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import DatosPersonales from "./componentes/DatosPersonales";
import DatosEmprendimiento from "./componentes/DatosEmprendimiento";
import Loader from "./componentes/Loader";
import HomePage from "./componentes/HomePage";
import DetailPage from "./componentes/DetailPage";
import AOS from 'aos';
import 'aos/dist/aos.css';
import CollaboratorPage from "./componentes/CollaboratorPage";
import DataLoader from "./componentes/DataLoader";

function App() {
  useEffect(() => {
    AOS.init({});
  }, []);

  const [coordenadaXmain, setCoordenadaXmain] = useState(0);
  const [coordenadaYmain, setCoordenadaYmain] = useState(0);
  const [coordenadaXmainPersona, setCoordenadaXmainPersona] = useState(0);
  const [coordenadaYmainPersona, setCoordenadaYmainPersona] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadingData, setLoadingData] = useState(false);
  const [paso, setPaso] = useState(1);
  const [checked, setChecked] = useState(false);
  const [userData, setUserData] = useState({
    nombre: '',
    apellido: '',
    telefonoPersona: '',
    mailPersona: '',
    direccionPersona: ''
  });

  const [datosEmprendimiento, setDatosEmprendimiento] = useState({
    nombreEmprendimiento: '',
    descripcion: '',
    telefonoEmprendimiento: '',
    rubro: '',
    formasDePago: [],
    mailEmprendimiento: '',
    logo: '',
    instagram: '',
    facebook: '',
    twitter: '',
    tiktok: '',
    direccionEmprendimiento: '',
  });

  useEffect(() => {
    handleLoading();
  }, []);

  const handleLoading = () => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleLoadingData = () => {
    setTimeout(() => {
      setLoadingData(false);
    }, 2000);
  };

  const handleSiguiente = () => {
    if(validateUserData(userData)){
      setPaso(paso + 1);
    }
    else{
      alert("Por favor, complete todos los campos requeridos.");
    }
  };

  const handleVolver = () => {
    setPaso(paso - 1);
  };

  const handleFinishForm = () => {
    if(checked) {
      setCoordenadaXmain(coordenadaXmainPersona)
      setCoordenadaYmain(coordenadaYmainPersona)
      datosEmprendimiento.direccionEmprendimiento = userData.direccionPersona
      if (validateDataChecked(datosEmprendimiento)) {
        setLoadingData(true);
        handleLoadingData();
        setPaso(-1);
      }
      else {
        alert("Por favor, complete todos los campos requeridos.");
      }
    }
    else if (validateData(datosEmprendimiento)) {
      setLoadingData(true);
      handleLoadingData();
      setPaso(-1);
    } else {
      alert("Por favor, complete todos los campos requeridos.");
    }
  };
  
  function validateData(data) {
    const requiredFields = [
      'nombreEmprendimiento',
      'descripcion',
      'telefonoEmprendimiento',
      'rubro',
      'formasDePago',
      'mailEmprendimiento',
      'logo',
      'instagram',
      'facebook',
      'direccionEmprendimiento',
      'twitter',
    ];
  
    for (let field of requiredFields) {
      if (!data[field] || (Array.isArray(data[field]) && data[field].length === 0)) {
        return false;
      }
    }

    if(coordenadaXmain === 0 && coordenadaYmain === 0) {
      return false;
    }

    return true;
  }

  function validateDataChecked(data) {
    const requiredFields = [
      'nombreEmprendimiento',
      'descripcion',
      'telefonoEmprendimiento',
      'rubro',
      'formasDePago',
      'mailEmprendimiento',
      'logo',
      'instagram',
      'facebook',
      'twitter',
    ];
  
    for (let field of requiredFields) {
      if (!data[field] || (Array.isArray(data[field]) && data[field].length === 0)) {
        return false;
      }
    }

    if(coordenadaXmain === 0 && coordenadaYmain === 0) {
      return false;
    }

    return true;
  }

  function validateUserData(data){
    const requiredFields = [
      'nombre',
      'apellido',
      'telefonoPersona',
      'mailPersona',
      'direccionPersona'
    ];
  
    for (let field of requiredFields) {
      if (!data[field] || (Array.isArray(data[field]) && data[field].length === 0)) {
        return false;
      }
    }

    if(coordenadaXmainPersona === 0 && coordenadaYmainPersona === 0) {
      return false;
    }
    return true;
  }
  const handleUserDataChange = (name, value) => {
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleDatosEmprendimientoChange = (name, value) => {
    if(checked) {
      setCoordenadaXmain(coordenadaXmainPersona)
      setCoordenadaYmain(coordenadaYmainPersona)
      datosEmprendimiento.direccionEmprendimiento = userData.direccionPersona
    }

    setDatosEmprendimiento(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : loadingData ? (
        <DataLoader />
      ) : (
        <Router>
          <header className="App-header">
            <Routes>
              <Route path="/" element={<HomePage paso={paso}/>} />
              <Route path="/detalle/:id" element={<DetailPage />} />
              <Route path="/registro" element={
                paso === -1 ?
                  <CollaboratorPage userData={userData} datosEmprendimiento={datosEmprendimiento} coordenadaXmain={coordenadaXmain} coordenadaYmain={coordenadaYmain} />
                  :
                  <form className="form-container p-4 bg-dark text-light rounded">
                    {paso === 1 ?
                      <DatosPersonales
                        handleSiguiente={handleSiguiente}
                        userData={userData}
                        handleUserDataChange={handleUserDataChange}
                        setCoordenadaXmainPersona={setCoordenadaXmainPersona}
                        setCoordenadaYmainPersona={setCoordenadaYmainPersona}
                      />
                      :
                      <DatosEmprendimiento
                        handleFinishForm={handleFinishForm}
                        handleVolver={handleVolver}
                        datosEmprendimiento={datosEmprendimiento}
                        handleDatosEmprendimientoChange={handleDatosEmprendimientoChange}
                        setCoordenadaXmain={setCoordenadaXmain}
                        setCoordenadaYmain={setCoordenadaYmain}
                        checked={checked}
                        setChecked={handleCheckboxChange}
                      />
                    }
                  </form>
              } />
            </Routes>
          </header>
        </Router>
      )}
    </div>
  );
}

export default App;
