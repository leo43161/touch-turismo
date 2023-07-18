import { MapContainer, TileLayer, Marker, Popup, ZoomControl, Polyline, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";
import { useMemo, useState, useRef, useEffect } from 'react';
import BusesLists from './BusesList';

export default function Map({ recorridos, getDistance }) {
  const [origen, setOrigen] = useState([-26.831011, -65.204603]);
  const markerOrigRef = useRef(null);
  const markerDestRef = useRef(null);
  const [busesMatch, setBusesMatch] = useState([]);
  const [reloadMap, setReloadMap] = useState(true);
  const [destino, setDestino] = useState([-26.816810, -65.196848]);
  const [route, setRoute] = useState(null);
  const [paradas, setParadas] = useState([]);

  const eventHandlersOrigen = useMemo(
    () => ({
      dragend() {
        const marker = markerDestRef.current
        if (marker != null) {
          const { lat, lng } = marker.getLatLng();
          setOrigen([lat, lng]);
          setReloadMap(true);
        }
      },
    }),
    [],
  )
  const eventHandlerDestino = useMemo(
    () => ({
      dragend() {
        const marker = markerOrigRef.current
        if (marker != null) {
          const { lat, lng } = marker.getLatLng();
          setDestino([lat, lng]);
          setReloadMap(true);
        }
      },
    }),
    [],
  )


  const findBusTravel = () => {
    let colectivos = [];
    const rutas = recorridos.map((value) => ({ cod: value.cod, nodos: value.nodos }));
    rutas.forEach(bus => {
      let matchOrigen = false;
      let bestDiff = 4;
      let bestCoord = [];
      let best = [];
      bus.nodos.forEach(coord => {
        const distDestino = getDistance(coord[0], coord[1], destino[0], destino[1], "K");
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
    colectivos = colectivos.map(colectivo => colectivo.cod);
    return colectivos;
  };

  useEffect(() => {
    if (reloadMap) {
      setBusesMatch(findBusTravel());
      setReloadMap(false);
    }
  }, [reloadMap])

  const corner1 = L.latLng(-26.658483, -65.348965),
    corner2 = L.latLng(-26.980421, -65.052577),
    maxBounds = L.latLngBounds(corner1, corner2);

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

  const paradaIcon = L.icon({
    iconUrl: '/img/transportes/bus-stop.png',
    iconSize: [15, 15],
    iconAnchor: [0, 1],
  });
  return (
    <>
      <div className="d-flex mb-3 justify-content-around">
        <div className="card px-4 py-3 d-flex align-items-center">
          <h4 className="text-center mb-0 d-flex align-items-center h-100">
            <span className="me-2"><img src="/img/transportes/icon-inicio.png" style={{ width: "25px" }} alt="" /></span>
            Origen
          </h4>
        </div>
        <div className="card px-4 py-3 d-flex align-items-center">
          <h4 className="text-center mb-0 d-flex align-items-center h-100">
            <span className="me-2"><img src="/img/transportes/icon-destino.png" style={{ width: "25px" }} alt="" /></span>
            Destino
          </h4>
        </div>
        <div className="card px-4 py-3 d-flex align-items-center">
          <h4 className="text-center mb-0 d-flex align-items-center h-100">
            <span className="me-2"><img src="/img/transportes/bus-stop.png" style={{ width: "25px" }} alt="" /></span>
            Paradas
          </h4>
        </div>
      </div>
      <div className="card p-3 mb-4 m-3 shadow-sm position-relative">
        <div className="card px-4 py-3 d-flex align-items-center position-absolute">
          <h4 className="text-center mb-0 d-flex align-items-center h-100">
            <span className="me-2"><img src="/img/transportes/bus-stop.png" style={{ width: "25px" }} alt="" /></span>
            Paradas
          </h4>
        </div>
        <div className="rounded overflow-hidden border" style={{ height: "45vh" }}>
          <MapContainer
            center={[-26.831011, -65.204603]}
            zoom={13}
            minZoom={12.8}
            style={{ height: "100%", width: "100%" }}
            zoomControl={false}
            maxBounds={maxBounds}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {/* Marcador del origen */}
            <Marker
              position={origen}
              animate={true}
              icon={inicioIcon}
              draggable={true}
              eventHandlers={eventHandlersOrigen}
              ref={markerDestRef}
            >
              <Popup offset={[8, 40]} >Usted esta aqui</Popup>
            </Marker>
            {/* Marcador del destino */}
            <Marker
              eventHandlers={eventHandlerDestino}
              position={destino}
              animate={true}
              draggable={true}
              icon={destinoIcon}
              ref={markerOrigRef}
            >
            </Marker>
            {route && <Polyline pathOptions={{ color: '#C4007A' }} positions={route} />}
            {paradas.map(({ description, latitude, longitude }, index) => (
              <Marker
                position={[latitude, longitude]}
                animate={true}
                icon={paradaIcon}
                key={index}
              >
                <Popup offset={[8, 7]} >{description}</Popup>
              </Marker>
            ))}
            <ZoomControl zoom position="bottomright"></ZoomControl>
          </MapContainer>
        </div>
      </div>
      <div>
        <BusesLists busesMatch={busesMatch} setRoute={setRoute} setParadas={setParadas}></BusesLists>
      </div>
    </>
  )
}
