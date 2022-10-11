import dynamic from "next/dynamic";
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { FaMapMarkerAlt, FaPhoneAlt, FaGlobeAmericas, FaStar, FaDog, FaWifi, FaCarAlt, FaSnowflake, FaMugHot, FaSpa } from "react-icons/fa";
import { useEffect, useState } from "react";


export default function ModalAloj({ show, handleClose, modal: { id, idGaleria } }) {
    const [alojamiento, setAlojamiento] = useState(true);
    const [estrellas, setEstrellas] = useState([]);
    const [galeria, setGaleria] = useState([]);
    const [servicios, setServicios] = useState([]);
    const [coords, setCoords] = useState([-26.831011, -65.204603]);

    const MapWithNoSSR = dynamic(() => import("../../components/Map"), {
        ssr: false
    });

    useEffect(() => {
        console.log(idGaleria);
        if (show) {
            getAlojamiento(id, idGaleria)
        }
    }, [show])

    const getAlojamiento = async (id, idGaleria) => {
        setAlojamiento([]);
        let _estrellas = [];
        const { data: alojamiento } = await axios.get(
            process.env.LOCALIP + "api/hoteles/" + id, {
            params: { idGaleria }
        }
        );
        for (let index = 0; index < alojamiento.hotel.estrellas; index++) _estrellas.push("");
        setEstrellas(_estrellas);
        setAlojamiento(alojamiento.hotel);
        setGaleria(alojamiento.galeria);
        setServicios(alojamiento.servicios);
        setCoords([alojamiento.hotel.latitud, alojamiento.hotel.longitud])
    }
    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <h5>{alojamiento.nombre}</h5>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex mb-3">
                    <div className="d-flex col-4 rounded">
                        <img src={process.env.URL + 'carga/image/' + alojamiento.archivo} className="w-100 rounded" alt={"Hotel " + ""} />
                    </div>
                    <div className="col px-4 py-3 d-flex flex-column justify-content-around">
                        <div className="d-flex justify-content-between">
                            <small className="text-muted text-uppercase">{alojamiento.catnombre}</small>
                            <div className="d-flex text-aloj align-items-center">
                                {
                                    estrellas.length > 1 ?
                                        estrellas.map((value, index) => (
                                            <FaStar key={index} className="icon-size-5">{value}</FaStar>
                                        )) : null
                                }
                            </div>
                        </div>
                        <div className="mb-3">
                            <h2 className="text-aloj bold-text mb-0">{alojamiento.nombre}</h2>
                        </div>
                        <div>
                            <div className="mb-3">
                                <h5 className="secondary-text">
                                    <FaMapMarkerAlt className="secondary-text me-2"></FaMapMarkerAlt>
                                    {alojamiento.direccion}</h5>
                                <h5 className="secondary-text">
                                    <FaPhoneAlt className="secondary-text me-2"></FaPhoneAlt>
                                    <span>{alojamiento.telefono}</span>
                                </h5>
                                <h5 className="secondary-text mb-2">
                                    <FaGlobeAmericas className="secondary-text me-2"></FaGlobeAmericas>
                                    <span>{alojamiento.mail}</span>
                                </h5>
                            </div>
                            <h5 className="mb-1 text-aloj">Servicios:</h5>
                            <div className="secondary-text d-flex align-items-center flex-wrap">
                                {servicios.map((value, index) => <span key={index}>-{value}</span>)}
                            </div>
                        </div>
                    </div>
                </div>
                {galeria.length > 0 ? <div>
                    <div className="mb-3">
                        <h3 className="mb-3 text-aloj text-center">Galeria</h3>
                        <div>
                            <Carousel className="rounded" style={{ height: "500px", overflow: "hidden" }}>
                                {galeria.map((value, index) =>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={`https://www.tucumanturismo.gob.ar/carga/image/${value.archivo}`}
                                        />
                                    </Carousel.Item>)}
                            </Carousel>
                        </div>
                    </div>
                </div> : null}
                {alojamiento ?
                    <div>
                        <h3 className="mb-3 text-aloj text-center">Mapa</h3>
                        <div className="rounded overflow-hidden border" style={{ height: "55vh" }}>
                            <MapWithNoSSR coords={coords} icon="aloj"></MapWithNoSSR>
                        </div>
                    </div> : null}

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
