import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
}); //esto de arriba está para solucionar un problema de que no carga la img del marker

//todo: recibir como parámetro position del marker las coordenadsa de la ubicación seleccionada que vino de la api de normalización.    
function Mapa() {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "500px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          marcador de la ubicación, retocar a la dirección normalizada {/* todo: hacer q este texto sea la direccion ya normalizada*/}
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Mapa;
