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
  const [loading, setLoading] = useState(true);
  const [loadingData, setLoadingData] = useState(false);
  const [paso, setPaso] = useState(1);
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
    setPaso(paso + 1);
  };

  const handleVolver = () => {
    setPaso(paso - 1);
  };

  const handleFinishForm = () => {
    setLoadingData(true)
    handleLoadingData();
    setPaso(-1);
  };

  const handleUserDataChange = (name, value) => {
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleDatosEmprendimientoChange = (name, value) => {
    setDatosEmprendimiento(prevState => ({
      ...prevState,
      [name]: value
    }));
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
                      />
                      :
                      <DatosEmprendimiento
                        handleFinishForm={handleFinishForm}
                        handleVolver={handleVolver}
                        datosEmprendimiento={datosEmprendimiento}
                        handleDatosEmprendimientoChange={handleDatosEmprendimientoChange}
                        setCoordenadaXmain={setCoordenadaXmain}
                        setCoordenadaYmain={setCoordenadaYmain}
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
