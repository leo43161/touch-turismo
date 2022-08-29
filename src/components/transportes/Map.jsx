import { MapContainer, TileLayer, Marker, Popup, ZoomControl, Polyline } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";
import { useMemo, useState, useRef, useEffect, useCallback } from 'react';
import BusesLists from './BusesList';

export default function Map({ origen, destino, recorridos }) {
  const markerRef = useRef(null);
  const [busesMatch, setBusesMatch] = useState([]);
  const [reloadMap, setReloadMap] = useState(true);
  const [position, setPosition] = useState(destino);
  const [route, setRoute] = useState(null);

  /* FALTA QUE SE ACTUALICE LAS VARAIBLES Y ASI PODER DIBUJAR LA RUTA */

  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current
        if (marker != null) {
          const { lat, lng } = marker.getLatLng();
          setPosition([lat, lng]);
          
          setRoute([
            [-26.8307333, -65.2057426],
            [-26.8311024, -65.203906],
            [-26.8316938, -65.2013321],
          ]);
          setReloadMap(true);
        }
      },
    }),
    [],
  )

  const getDistance = (lat1, lon1, lat2, lon2, unit) => {
    if ((lat1 == lat2) && (lon1 == lon2)) {
      return 0;
    }
    else {
      const radlat1 = Math.PI * lat1 / 180;
      const radlat2 = Math.PI * lat2 / 180;
      const theta = lon1 - lon2;
      const radtheta = Math.PI * theta / 180;
      let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = dist * 180 / Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit == "K") { dist = dist * 1.609344 }
      if (unit == "N") { dist = dist * 0.8684 }
      return dist;
    }
  }

  const findBusTravel = () => {
    let colectivos = [];
    const rutas = recorridos.map((value) => ({ cod: value.cod, nodos: value.nodos }));
    rutas.forEach(bus => {
      let matchOrigen = false;
      let bestDiff = 4;
      let bestCoord = [];
      let best = [];
      bus.nodos.forEach(coord => {
        const distDestino = getDistance(coord[0], coord[1], position[0], position[1], "K");
        const distOrigen = getDistance(coord[0], coord[1], origen[0], origen[1], "K");
        if (distOrigen < 0.7) {
          matchOrigen = true;
        }
        if (matchOrigen) {
          if (bestDiff > distDestino) {
            bestDiff = distDestino;
            bestCoord.push(coord);
            best.push(distDestino);
          }
        }
      })
      if (bestCoord.length > 0) {
        colectivos.push({ bestCoord: bestCoord.pop(), best: best.pop(), cod: bus.cod });
      }
    });
    colectivos.sort(((a, b) => a.best - b.best))
    colectivos = colectivos.slice(0, 7);
    console.log(colectivos);
    colectivos = colectivos.map(colectivo => colectivo.cod);
    return colectivos;
  };

  useEffect(() => {
    if (reloadMap) {
      console.log(findBusTravel());
      setBusesMatch(findBusTravel());
      setReloadMap(false);
    }
  }, [reloadMap])

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
    <>
      <div className="mb-4" style={{ height: "70vh" }}>
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
      </div>
      <div>
        <BusesLists busesMatch={busesMatch}></BusesLists>
      </div>
    </>
  )
}
