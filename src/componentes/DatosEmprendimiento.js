import React from 'react'
import Mapa from './Mapa';
import rubros from '../static/rubros'
import formas_de_pago from '../static/formas-de-pago';


//todo: quiza dividir en componentes datos-izq y datos-der???? / analizar si se puede hacer un componente por input (id, htmlFor, label text, placeholder="") quizá
function DatosEmprendimiento({handleVolver}) {
    return (
      <div class="w-100">
        <h1 className='mb-5'>Ingrese los datos de su emprendimiento</h1>
        <div class="contenedor-datos">

          <div class="datos-izq">
            <div class="form-group mb-3 text-start">
              <label htmlFor="nombre-emprendimiento" class="form-label">Nombre del emprendimiento</label>
              <div>
                <input id="nombre-emprendimiento" type="text" class="form-control"/>
              </div>
            </div>
            <div class="form-group mb-3 text-start">
              <label htmlFor="descripcion" class="form-label">Descripción</label>
              <div>
                <input id="descripcion" type="text" class="form-control"/>
              </div>
            </div>
            <div class="form-group mb-3 text-start">
              <label htmlFor="telefono-emprendimiento" class="form-label">Teléfono</label>
              <div>
                <input id="telefono-emprendimiento" type="text" class="form-control" placeholder="Tel. de línea"/>
              </div>
            </div>
            <div class="form-group mb-3 text-start">
              <label htmlFor="rubro" class="form-label">Rubro</label>
              <div>
                <select id="rubro" type="text" class="form-control">
                  <option disabled hidden selected>Seleccione el rubro del emprendimiento</option>
                  {rubros.map(({ value, label }) => <option value="value"> {label} </option>)}
                </select>
              </div>
            </div>
            <div class="form-group mb-3 text-start">
              <label htmlFor="formas-de-pago" class="form-label">Formas de pago</label>
              <div>
                <select id="formas-de-pago" type="text" class="form-control">
                  <option disabled hidden selected>Seleccione formas de pago aceptadas</option>
                  {formas_de_pago.map(({ value, label }) => <option value="value"> {label} </option>)}
                </select>
              </div>
            </div>
            <div class="form-group mb-3 text-start">
              <label htmlFor="mail-emprendimiento" class="form-label">Mail</label>
              <div class="d-flex">
                <input id="mail-emprendimiento" type="email" class="form-control"/>
              </div>
            </div>
            <div class="form-group mb-3 text-start">
              <label htmlFor="logo" class="form-label">Logo</label>
              <div class="d-flex">
                <input id="logo" type="email" class="form-control" placeholder="Cargue un logo para su emprendimiento"/>
                <span class="input-group-text" id="basic-addon1">
                  <img src="subir-logo.svg" alt="Logo emprendimiento" />
                </span>
              </div>
            </div>
            <div class="d-inline-flex mb-3">
              <div class="text-start w-50 me-5" >
                <label htmlFor="mail-persona" class="form-label">Instagram</label>
                <div class="d-flex justify-content-center">
                  <input id="mail-persona" type="email" class="form-control"/>
                </div>
              </div>
              <div class="text-start w-50">
                <label htmlFor="mail-persona" class="form-label">Facebook</label>
                <div class="d-flex justify-content-center">
                  <input id="mail-persona" type="email" class="form-control"/>
                </div>
              </div>
            </div>
            <div class="d-inline-flex mb-3">
              <div class="text-start w-50 me-5">
                <label htmlFor="mail-persona" class="form-label">Twitter</label>
                <div class="d-flex justify-content-center">
                  <input id="mail-persona" type="email" class="form-control" placeholder="ej. @<usuario>"/>
                </div>
              </div>
              <div class="text-start w-50">
                <label htmlFor="mail-persona" class="form-label">Tiktok</label>
                <div class="d-flex justify-content-center">
                  <input id="mail-persona" type="email" class="form-control" placeholder="ej. @<usuario>"/>
                </div>
              </div>
            </div>
          </div>

          <div class="datos-der">
            
            <Mapa/>
            <div class="mb-5 text-start">
              <label htmlFor="direccion-emprendimiento" class="form-label">Ingrese la direccion del emprendimiento</label>
              <div class="d-flex justify-content-center">
                <input id="direccion-emprendimiento" type="text" class="form-control"/>
              </div>
            </div>
          </div>

        </div>  
        <div class="d-flex justify-content-center">
          <button type="button" class="btn btn-secondary me-2" onClick={handleVolver}>Volver</button>
          <button type="submit" class="btn btn-success">Enviar</button>
        </div>
    </div>
    );
}

export default DatosEmprendimiento;