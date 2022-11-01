import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";

export default function Map({ coords, icon, route, zoom, marker, paradas }) {
    const Icons = {
        terminal: "bus-marker-1.png",
        aloj: "hotel-marker-1.png",
        default: "icon-destino.png"
    }
    const origen = [-26.831011, -65.204603];
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
        iconUrl: '/img/transportes/' + (icon ? Icons[icon] : Icons.default),
        iconSize: [40, 40],
        iconAnchor: [20, 30],
    });
    const paradaIcon = L.icon({
        iconUrl: '/img/transportes/bus-stop.png',
        iconSize: [15, 15],
        iconAnchor: [0, 1],
      });
    return (
        <MapContainer
            center={coords}
            zoom={zoom ? zoom : 13}
            minZoom={12.8}
            style={{ height: "100%", width: "100%" }}
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
            {marker && <Marker
                position={coords}
                animate={true}
                icon={destinoIcon}
            >
            </Marker>}
            {paradas && paradas.map(({ description, latitude, longitude }, index) => (
                <Marker
                    position={[latitude, longitude]}
                    animate={true}
                    icon={paradaIcon}
                    key={index}
                >
                    <Popup offset={[8, 7]} >{description}</Popup>
                </Marker>
            ))}
            {route && <Polyline pathOptions={{ color: '#C4007A' }} positions={route} />}
        </MapContainer>
    )
}
