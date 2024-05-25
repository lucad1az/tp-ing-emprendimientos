import { useState } from 'react';
import './App.css';

function App() {
  const [paso, setPaso] = useState(1); // Estado para controlar la etapa del formulario

  const handleSiguiente = (event) => {
    event.preventDefault();
    setPaso(paso + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <form class="form-container p-4 bg-dark rounded">
          {paso === 1 && (
            <div class="form-container p-4 bg-dark rounded">
              <label htmlFor="nombre">Ingrese su nombre</label>
              <input id="nombre" type="text" placeholder='Nombre'/>
              <label htmlFor="apellido">Ingrese su apellido</label>
              <input id="apellido" type="text" placeholder='Apellido'/>
              <label htmlFor="telefono">Ingrese su número telefónico</label>
              <input id="telefono" type="text" placeholder='Teléfono'/>
              <label htmlFor="email">Ingrese su email</label>
              <input id="email" type="text" placeholder='E-mail'/>
              {/*<label htmlFor="vinculo">Ingrese su vinculo con la organización</label>
              <input id="vinculo" type="text" placeholder='Vinculo'/>*/}
              <button className="btn btn-primary" onClick={handleSiguiente}>Siguiente</button>
            </div>
          )}
          {paso === 2 && (
            <div class="form-container p-4 bg-dark rounded">
              <label htmlFor="emprendimiento">Ingrese el nombre de su emprendimiento</label>
              <input id="emprendimiento" type="text" placeholder='Emprendimiento'/>
              <label htmlFor="rubro">Seleccione el rubro del emprendimiento</label>
              <select class="form-select">
                <option selected disabled hidden>Open this select menu</option>
                <option value="1">Musica</option>
                <option value="2">No se</option>
                <option value="3">Otra</option>
              </select>
              <label htmlFor="emprendimiento">Ingrese el nombre de su emprendimiento</label>
              <input id="emprendimiento" type="text" placeholder='Emprendimiento'/>
              <label htmlFor="emprendimiento">Ingrese el nombre de su emprendimiento</label>
              <input id="emprendimiento" type="text" placeholder='Emprendimiento'/>
              <button className="btn btn-primary" onClick={handleSiguiente}>Siguiente</button>
            </div>
          )}
        </form>
      </header>
    </div>
  );
}

export default App;
