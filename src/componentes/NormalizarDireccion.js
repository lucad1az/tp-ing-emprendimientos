import React, { useState } from "react";



function NormalizarDireccion({ handleCoordenadasChange, handleDireccionNormalizada }) {
    const [query, setQuery] = useState('');
    const [sugerencias, setSugerencias] = useState([]);
    const [loading, setLoading] = useState(false);


    const handleInputChange = async (event) => {
        const value = event.target.value;
        setQuery(value);

        if (value.length > 3) {
            setLoading(true);
            try {
                const response = await fetch(`http://servicios.usig.buenosaires.gob.ar/normalizar?direccion=${encodeURIComponent(value)}`);

                if (response.ok) {
                    const data = await response.json();
                    setSugerencias(data.direccionesNormalizadas.map(d => d.direccion));
                } else {
                    console.error('Error al obtener las sugerencias', response.statusText);
                }
            } catch (error) {
                console.error('Error de red', error);
            } finally {
                setLoading(false)
            }
        }
    }

    const handleSugerenciasClick = (event) => {
        console.log(event.target.value);
        setQuery(event.target.value);
        setSugerencias([]);
        obtenerCoordenadas(event.target.value);
        handleDireccionNormalizada(event.target.value);
        

    };

    async function obtenerCoordenadas(direccion) {
        try {
            const response = await fetch(`http://servicios.usig.buenosaires.gob.ar/normalizar?direccion=${encodeURIComponent(direccion)}&geocodificar=true`);
            const data = await response.json();


            if(data.errorMessage){
                alert("Ingrese una dirección con número");
      
            }

            else if (response.ok) {
                handleCoordenadasChange(data.direccionesNormalizadas[0].coordenadas.x, data.direccionesNormalizadas[0].coordenadas.y);
         
            }
            
            else {
                console.error('Error al obtener las coordenadas', response.statusText);
             
            }

        }
        catch (error) {
            console.error('Error de red', error);
          
        }
    }

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Escribe tu dirección"
            />
            {loading && <div>Cargando...</div>}
            <select style={{ minWidth: "100px", width: "100%", marginTop: "10px", minHeight: "100px" }}
                className="selectSugerencias"
                id="sugerencias"
                onChange={handleSugerenciasClick}
                size="5"
            >
                {sugerencias.map((sugerencia, index) => (
                    <option key={index} value={sugerencia}>{sugerencia}</option>
                ))}
            </select>
        </div>
    );
}

export default NormalizarDireccion;
