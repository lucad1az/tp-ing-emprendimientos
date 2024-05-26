import React from 'react'
import Mapa from './Mapa'

//todo: quiza dividir en componentes datos-izq y datos-der???? / analizar si se puede hacer un componente por input (id, htmlFor, label text, placeholder="") quizá
function DatosPersonales({handleSiguiente}) {
    return (
      <div class="w-100">
        <h1 class="mb-5">Ingrese sus datos personales</h1>
        <div class="contenedor-datos">

          <div class="datos-izq">
            <div class="mb-5 text-start">
              <label htmlFor="nombre" class="form-label">Ingrese su nombre</label>
              <div className="d-flex justify-content-center">
                <input id="nombre" type="text" class="form-control"/>
              </div>
            </div>
            <div class="mb-5 text-start">
              <label htmlFor="apellido" class="form-label">Ingrese su apellido</label>
              <div class="d-flex justify-content-center">
                <input id="apellido" type="text" class="form-control"/>
              </div>
            </div>
            <div class="mb-5 text-start">
              <label htmlFor="telefono-persona"class="form-label">Ingrese su telefono personal</label>
              <div class="d-flex justify-content-center">
                <input id="telefono-persona" type="tel" class="form-control" placeholder="ej. XXX XXXX-XXXX" pattern="^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$"/>
                {/* Claramente regex robada de stack overflow, si quieren la volamos :D */}
              </div>
            </div>
            <div class="mb-5 text-start">
              <label htmlFor="mail-persona" class="form-label">Ingrese su mail personal</label>
              <div class="d-flex justify-content-center">
                <input id="mail-persona" type="email" class="form-control"/>
              </div>
            </div>
          </div>
          
          <div class="datos-der">
            <Mapa/>
            <div class="mb-5 text-start">
              <label htmlFor="direccion-persona" class="form-label">Ingrese su direccion personal</label>
              <div class="d-flex justify-content-center">
                <input id="direccion-persona" type="text" class="form-control"/>
              </div>
            </div>
          </div>
          
        </div>
        <div class="d-block justify-content-center">
            <button type="button" class="btn btn-primary" onClick={handleSiguiente}>Siguiente</button>
        </div>
      </div>
    );
}

export default DatosPersonales;