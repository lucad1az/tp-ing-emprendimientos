import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import DatosPersonales from "./componentes/DatosPersonales";
import DatosEmprendimiento from "./componentes/DatosEmprendimiento";
import Loader from "./componentes/Loader";
import HomePage from "./componentes/HomePage";
import DetailPage from "./componentes/DetailPage";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
    });
  }, []);
  const [loading, setLoading] = useState(true);
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
    formasDePago: '',
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

  const handleSiguiente = () => {
    setPaso(paso + 1);
  };

  const handleVolver = () => {
    setPaso(paso - 1);
  };

  const handleFinishForm = () => {
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
      {loading ? <Loader /> :
        <Router>
          <header className="App-header">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/detalle/:id" element={<DetailPage />} />
              <Route path="/registro" element={
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
                    />
                  }
                </form>
              } />
            </Routes>
          </header>
        </Router>
      }
    </div>
  );
}

export default App;
