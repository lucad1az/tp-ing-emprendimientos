import React from 'react';
import Mapa from './Mapa';
import { useState } from 'react';
import NormalizarDireccion from './NormalizarDireccion';

function DatosPersonales({ handleSiguiente, userData, handleUserDataChange }) {

  const [coordenadaX, setCoordenadaX] = useState(-58.700484309345335);
  const [coordenadaY, setCoordenadaY] = useState(-34.523109507513524);
  const [direccionNormalizada, setDireccionNormalizada] = useState("")

  const handleChange = (event) => {
    const { name, value } = event.target;
    handleUserDataChange(name, value);
  };

  const handleCoordenadasChange = (coordenadaX, coordenadaY) => {
    setCoordenadaX(coordenadaX);
    setCoordenadaY(coordenadaY);
  };

  const handleDireccionNormalizada = (direccion) => {
    setDireccionNormalizada(direccion);
  };



  return (
    <div className="w-100">
      <h1 className="mb-5">Ingrese sus datos personales</h1>
      <div className="contenedor-datos">
        <div className="datos-izq">
          <div className="mb-5 text-start">
            <label htmlFor="nombre" className="form-label">Ingrese su nombre</label>
            <div className="d-flex justify-content-center">
              <input
                id="nombre"
                name="nombre"
                type="text"
                className="form-control"
                value={userData.nombre}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-5 text-start">
            <label htmlFor="apellido" className="form-label">Ingrese su apellido</label>
            <div className="d-flex justify-content-center">
              <input
                id="apellido"
                name="apellido"
                type="text"
                className="form-control"
                value={userData.apellido}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-5 text-start">
            <label htmlFor="telefono-persona" className="form-label">Ingrese su telefono personal</label>
            <div className="d-flex justify-content-center">
              <input
                id="telefono-persona"
                name="telefonoPersona"
                type="tel"
                className="form-control"
                placeholder="ej. XXX XXXX-XXXX"
                pattern="^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$"
                value={userData.telefonoPersona}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-5 text-start">
            <label htmlFor="mail-persona" className="form-label">Ingrese su mail personal</label>
            <div className="d-flex justify-content-center">
              <input
                id="mail-persona"
                name="mailPersona"
                type="email"
                className="form-control"
                value={userData.mailPersona}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="datos-der">
          <Mapa direccionNormalizada={direccionNormalizada} coordenadaX={coordenadaX} coordenadaY={coordenadaY} />
          <div className="mb-5 text-start">
            <label htmlFor="direccion-persona" className="form-label">Ingrese su direccion personal</label>
            <div className="d-flex justify-content-center">
              <NormalizarDireccion
                value={userData.direccionPersona}
                onChange={handleChange}
                handleCoordenadasChange = {handleCoordenadasChange}
                handleDireccionNormalizada = {handleDireccionNormalizada}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="d-block justify-content-center">
        <button type="button" className="btn btn-primary" onClick={handleSiguiente}>Siguiente</button>
      </div>
    </div>
  );
}

export default DatosPersonales;
