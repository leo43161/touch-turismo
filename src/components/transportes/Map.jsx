import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";

export default function Map({ origen }) {

  const inicioIcon = L.icon({
    iconUrl: '/img/transportes/icon-inicio.png',
    iconSize: [25, 45],
    iconAnchor: [7, 42],
    popupAnchor: [-3, -76],
  });

  return (
    <MapContainer
      center={origen}
      zoom={14}
      style={{ height: "100%", width: "100%" }}
      zoomControl={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {/* Marcador del inicio */}
      <Marker
        position={origen}
        animate={true}
        icon={inicioIcon}
      >
        <Popup>Usted esta aqui</Popup>
      </Marker>
      
      <ZoomControl zoom position="bottomright"></ZoomControl>
    </MapContainer>
  )
}
