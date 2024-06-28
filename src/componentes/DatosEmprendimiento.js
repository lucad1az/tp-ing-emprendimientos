import React, { useState } from 'react';
import Mapa from './Mapa';
import rubros from '../static/rubros';
import formas_de_pago from '../static/formas-de-pago';
import NormalizarDireccion from './NormalizarDireccion';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';

function DatosEmprendimiento({ handleVolver, handleFinishForm, datosEmprendimiento, handleDatosEmprendimientoChange, setCoordenadaXmain, setCoordenadaYmain, checked, setChecked }) {

  const [coordenadaX, setCoordenadaX] = useState(-58.700484309345335);
  const [coordenadaY, setCoordenadaY] = useState(-34.523109507513524);
  const [direccionNormalizada, setDireccionNormalizada] = useState("");
  const [logoPreview, setLogoPreview] = useState("");

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
    setCoordenadaXmain(coordenadaX);
    setCoordenadaYmain(coordenadaY);
  };

  const handleDireccionNormalizada = (direccion) => {

    if(coordenadaX !== undefined && coordenadaY !== undefined){
      handleDatosEmprendimientoChange('direccionEmprendimiento', direccion);
      setDireccionNormalizada(direccion);
    }
  };


  const handleFormasDePagoChange = (event) => {
    const { options } = event.target;
    const selectedFormasDePago = [];
    for (const option of options) {
      if (option.selected) {
        selectedFormasDePago.push(option.value);
      }
    }
    handleDatosEmprendimientoChange('formasDePago', selectedFormasDePago);

  };

  const handleLogoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
        handleDatosEmprendimientoChange('logo', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };


  return (
    <div className="w-100" data-aos="fade-in" data-aos-duration="1200">
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
                required
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
                required
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
                required
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
                required
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
                multiple
                value={datosEmprendimiento.formasDePago}
                onChange={handleFormasDePagoChange}
                style={{height:"100px"}}
                required
              >
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
                required
              />
            </div>
          </div>
          <div className="form-group mb-3 text-start">
            <label htmlFor="logo" className="form-label">Logo</label>
            <div className="d-flex flex-column">
              <input 
                id="logo" 
                name="logo" 
                type="file" 
                className="form-control" 
                onChange={handleLogoChange}
                required
              />
              {logoPreview && <img src={logoPreview} alt="Vista previa del logo" className="mt-3" style={{ maxWidth: '200px' }} />}
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
                  required
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
                  required
                />
              </div>
            </div>
          </div>
          <div className="d-inline-flex mb-3">
            <div className="text-start w-50 me-5">
              <label htmlFor="twitter" className="form-label">Twitter</label>
              <div className="d-flex justify-content-start">
                <input 
                  id="twitter" 
                  name="twitter" 
                  type="text" 
                  className="form-control" 
                  placeholder="ej. @<usuario>" 
                  value={datosEmprendimiento.twitter}
                  onChange={handleChangeEmprendimiento}
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="datos-der">
          <Mapa direccionNormalizada={direccionNormalizada} coordenadaX={coordenadaX} coordenadaY={coordenadaY} />
          <div className="mb-5 text-start">
            <FormGroup>
              <FormControlLabel control={<Checkbox checked={checked} onChange={setChecked}/>} label="Mi direccion particular es la misma que la de mi emprendimiento." />
            </FormGroup>
            <label htmlFor="direccionEmprendimiento" className="form-label">Ingrese la direccion del emprendimiento</label>
            <div className="d-flex justify-content-center">
              <NormalizarDireccion
                value={datosEmprendimiento.direccionEmprendimiento}
                onChange={handleChange}
                disabled={checked}
                handleCoordenadasChange={handleCoordenadasChange}
                handleDireccionNormalizada={handleDireccionNormalizada}
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
