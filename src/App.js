import { useState } from "react";
import "./App.css";
import DatosPersonales from "./componentes/DatosPersonales";
import DatosEmprendimiento from "./componentes/DatosEmprendimiento";

function App() {
  const [paso, setPaso] = useState(1);

  const handleSiguiente = () => {
    setPaso(paso + 1);
  };

  const handleVolver = () => {
    setPaso(paso - 1);
  };

  return (
    <div class="App">
      <header class="App-header">
        {/* todo: esto mepa que se puede hacer con un ternario mejor pensado que un paso numérico */}
        <form class="form-container p-4 bg-dark text-light rounded">
          { paso === 1  ? 
          <DatosPersonales handleSiguiente={handleSiguiente}/>
          :
          <DatosEmprendimiento handleVolver={handleVolver}/>
          }
        </form>
      </header>
    </div>
  );
}

export default App;
