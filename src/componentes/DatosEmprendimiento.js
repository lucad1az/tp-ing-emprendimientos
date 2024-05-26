import React from 'react';
import Mapa from './Mapa';
import rubros from '../static/rubros';
import formas_de_pago from '../static/formas-de-pago';
import { useState } from 'react';
import NormalizarDireccion from './NormalizarDireccion';

function DatosEmprendimiento({ handleVolver, handleFinishForm, datosEmprendimiento, handleDatosEmprendimientoChange }) {

  const [coordenadaX, setCoordenadaX] = useState(-58.700484309345335);
  const [coordenadaY, setCoordenadaY] = useState(-34.523109507513524);
  const [direccionNormalizada, setDireccionNormalizada] = useState("")

  const handleChangeEmprendimiento = (event) => {
    const { name, value } = event.target;
    handleDatosEmprendimientoChange(name, value);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    handleChangeEmprendimiento(name, value);
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
      <h1 className="mb-5">Ingrese los datos de su emprendimiento</h1>
      <div className="contenedor-datos">

        <div className="datos-izq">
          <div className="form-group mb-3 text-start">
            <label htmlFor="nombreEmprendimiento" className="form-label">Nombre del emprendimiento</label>
            <div>
              <input 
                id="nombreEmprendimiento" 
                name="nombreEmprendimiento" 
                type="text" 
                className="form-control" 
                value={datosEmprendimiento.nombreEmprendimiento}
                onChange={handleChangeEmprendimiento}
              />
            </div>
          </div>
          <div className="form-group mb-3 text-start">
            <label htmlFor="descripcion" className="form-label">Descripción</label>
            <div>
              <input 
                id="descripcion" 
                name="descripcion" 
                type="text" 
                className="form-control" 
                value={datosEmprendimiento.descripcion}
                onChange={handleChangeEmprendimiento}
              />
            </div>
          </div>
          <div className="form-group mb-3 text-start">
            <label htmlFor="telefonoEmprendimiento" className="form-label">Teléfono</label>
            <div>
              <input 
                id="telefonoEmprendimiento" 
                name="telefonoEmprendimiento" 
                type="text" 
                className="form-control" 
                placeholder="Tel. de línea" 
                value={datosEmprendimiento.telefonoEmprendimiento}
                onChange={handleChangeEmprendimiento}
              />
            </div>
          </div>
          <div className="form-group mb-3 text-start">
            <label htmlFor="rubro" className="form-label">Rubro</label>
            <div>
              <select 
                id="rubro" 
                name="rubro" 
                className="form-control" 
                value={datosEmprendimiento.rubro}
                onChange={handleChangeEmprendimiento}
              >
                <option disabled hidden value="">Seleccione el rubro del emprendimiento</option>
                {rubros.map(({ value, label }) => <option key={value} value={value}>{label}</option>)}
              </select>
            </div>
          </div>
          <div className="form-group mb-3 text-start">
            <label htmlFor="formasDePago" className="form-label">Formas de pago</label>
            <div>
              <select 
                id="formasDePago" 
                name="formasDePago" 
                className="form-control" 
                value={datosEmprendimiento.formasDePago}
                onChange={handleChangeEmprendimiento}
              >
                <option disabled hidden value="">Seleccione formas de pago aceptadas</option>
                {formas_de_pago.map(({ value, label }) => <option key={value} value={value}>{label}</option>)}
              </select>
            </div>
          </div>
          <div className="form-group mb-3 text-start">
            <label htmlFor="mailEmprendimiento" className="form-label">Mail</label>
            <div className="d-flex">
              <input 
                id="mailEmprendimiento" 
                name="mailEmprendimiento" 
                type="email" 
                className="form-control" 
                value={datosEmprendimiento.mailEmprendimiento}
                onChange={handleChangeEmprendimiento}
              />
            </div>
          </div>
          <div className="form-group mb-3 text-start">
            <label htmlFor="logo" className="form-label">Logo</label>
            <div className="d-flex">
              <input 
                id="logo" 
                name="logo" 
                type="text" 
                className="form-control" 
                placeholder="Cargue un logo para su emprendimiento" 
                value={datosEmprendimiento.logo}
                onChange={handleChangeEmprendimiento}
              />
              <span className="input-group-text" id="basic-addon1">
                <img src="subir-logo.svg" alt="Logo emprendimiento" />
              </span>
            </div>
          </div>
          <div className="d-inline-flex mb-3">
            <div className="text-start w-50 me-5">
              <label htmlFor="instagram" className="form-label">Instagram</label>
              <div className="d-flex justify-content-center">
                <input 
                  id="instagram" 
                  name="instagram" 
                  type="text" 
                  className="form-control" 
                  value={datosEmprendimiento.instagram}
                  onChange={handleChangeEmprendimiento}
                />
              </div>
            </div>
            <div className="text-start w-50">
              <label htmlFor="facebook" className="form-label">Facebook</label>
              <div className="d-flex justify-content-center">
                <input 
                  id="facebook" 
                  name="facebook" 
                  type="text" 
                  className="form-control" 
                  value={datosEmprendimiento.facebook}
                  onChange={handleChangeEmprendimiento}
                />
              </div>
            </div>
          </div>
          <div className="d-inline-flex mb-3">
            <div className="text-start w-50 me-5">
              <label htmlFor="twitter" className="form-label">Twitter</label>
              <div className="d-flex justify-content-center">
                <input 
                  id="twitter" 
                  name="twitter" 
                  type="text" 
                  className="form-control" 
                  placeholder="ej. @<usuario>" 
                  value={datosEmprendimiento.twitter}
                  onChange={handleChangeEmprendimiento}
                />
              </div>
            </div>
            <div className="text-start w-50">
              <label htmlFor="tiktok" className="form-label">Tiktok</label>
              <div className="d-flex justify-content-center">
                <input 
                  id="tiktok" 
                  name="tiktok" 
                  type="text" 
                  className="form-control" 
                  placeholder="ej. @<usuario>" 
                  value={datosEmprendimiento.tiktok}
                  onChange={handleChangeEmprendimiento}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="datos-der">
        <Mapa direccionNormalizada={direccionNormalizada} coordenadaX={coordenadaX} coordenadaY={coordenadaY} />
          <div className="mb-5 text-start">
            <label htmlFor="direccionEmprendimiento" className="form-label">Ingrese la direccion del emprendimiento</label>
            <div className="d-flex justify-content-center">
            <NormalizarDireccion
                value={datosEmprendimiento.direccionEmprendimiento}
                onChange={handleChange}
                handleCoordenadasChange = {handleCoordenadasChange}
                handleDireccionNormalizada = {handleDireccionNormalizada}
              />
            </div>
          </div>
        </div>

      </div>
      <div className="d-flex justify-content-center">
        <button type="button" className="btn btn-secondary me-2" onClick={handleVolver}>Volver</button>
        <button type="button" className="btn btn-success" onClick={handleFinishForm}>Enviar</button>
      </div>
    </div>
  );
}

export default DatosEmprendimiento;
