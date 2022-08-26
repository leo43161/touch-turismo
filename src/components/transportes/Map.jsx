import { MapContainer, TileLayer, Marker, Popup, ZoomControl, Polyline } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";
import { useMemo, useState, useRef } from 'react';

export default function Map({ origen, destino }) {
  const markerRef = useRef(null);
  const [position, setPosition] = useState(destino);
  const [route, setRoute] = useState(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current
        if (marker != null) {
          setPosition(marker.getLatLng());
          setRoute([
            [-26.8307333, -65.2057426],
            [-26.8311024, -65.203906],
            [-26.8316938, -65.2013321],
          ]);
        }
      },
    }),
    [],
  )

  const corner1 = L.latLng(-26.658483, -65.348965),
    corner2 = L.latLng(-26.980421, -65.052577),
    bounds = L.latLngBounds(corner1, corner2);

  const inicioIcon = L.icon({
    iconUrl: '/img/transportes/icon-inicio.png',
    iconSize: [25, 45],
    iconAnchor: [7, 42],
    popupAnchor: [-3, -76],
  });
  const destinoIcon = L.icon({
    iconUrl: '/img/transportes/icon-destino.png',
    iconSize: [25, 45],
    iconAnchor: [7, 42],
  });

  return (
    <MapContainer
      center={origen}
      zoom={14}
      minZoom={12.8}
      style={{ height: "100%", width: "100%" }}
      zoomControl={false}
      maxBounds={bounds}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {/* Marcador del origen */}
      <Marker
        position={origen}
        animate={true}
        icon={inicioIcon}
      >
        <Popup offset={[8, 40]} >Usted esta aqui</Popup>
      </Marker>
      {/* Marcador del destino */}
      <Marker
        eventHandlers={eventHandlers}
        position={destino}
        animate={true}
        draggable={true}
        icon={destinoIcon}
        ref={markerRef}
      >
      </Marker>
      {route && <Polyline pathOptions={{ color: 'lime' }} positions={route} />}
      <ZoomControl zoom position="bottomright"></ZoomControl>
    </MapContainer>
  )
}