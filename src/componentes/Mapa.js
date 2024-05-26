import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useMap } from 'react-leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function Mapa({ direccionNormalizada, coordenadaX, coordenadaY }) {

  function UpdateMapCentre(props) {
    const map = useMap();
    map.panTo(props.mapCentre);
    return null;
  }


  return (
    <MapContainer center={[coordenadaY, coordenadaX]} zoom={15} style={{ height: "500px", width: "100%" }}>
      <UpdateMapCentre mapCentre={[coordenadaY, coordenadaX]} />

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[coordenadaY, coordenadaX]}>
        <Popup>
          {direccionNormalizada}
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Mapa;
