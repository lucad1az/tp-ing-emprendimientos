import React, { useState } from "react";
import SugerenciasStyle from "../styles/SugerenciasStyle.css";
import Loader from "./Loader";

function NormalizarDireccion({handleCoordenadasChange, handleDireccionNormalizada}) {
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
        setQuery(event.target.value);
        setSugerencias([]);
        handleDireccionNormalizada(event.target.value);
        obtenerCoordenadas(event.target.value);
    
    };

    async function obtenerCoordenadas(direccion){
        try {
            const response = await fetch(`http://servicios.usig.buenosaires.gob.ar/normalizar?direccion=${encodeURIComponent(direccion)}&geocodificar=true`);

            if (response.ok) {
                const data = await response.json();
                console.log(data.direccionesNormalizadas[0].coordenadas.x);
                console.log(data.direccionesNormalizadas[0].coordenadas.y);

                handleCoordenadasChange(data.direccionesNormalizadas[0].coordenadas.x, data.direccionesNormalizadas[0].coordenadas.y);
            } else {
                console.error('Error al obtener las coordenadas', response.statusText);
            }

        }
        catch(error) {
            console.error('Error de red', error);
        }
    }

    return(
        <div>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Escribe tu dirección"
            />
            {loading && <div>Cargando...</div>}
            <select
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
