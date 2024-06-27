import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

//para arreglar un problema con los iconos de leaflet
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// el ==> es para que no se recargue la pagina, es como un Return  pero sin recargar la pagina
const MapComponent = () => {
  // se puede poner cualquier cosa, como un formulario
  return (
    <MapContainer
      center={[31.713939, -106.4279527]}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker position={[31.713939, -106.4279527]}>
        <Popup>
          {/* //Aqui se puede poner cualquier cosa, como un formulario */}
          Marcador
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
