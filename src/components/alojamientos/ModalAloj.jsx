import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { FaMapMarkerAlt, FaPhoneAlt, FaGlobeAmericas, FaStar, FaDog, FaWifi, FaCarAlt, FaSnowflake, FaMugHot, FaSpa } from "react-icons/fa";


export default function ModalAlojamiento({ show, handleClose }) {
    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <h5>Sheraton Tucuman Hotel</h5>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex mb-3">
                    <div className="d-flex col-4 rounded">
                        <img src="/img/alojamientos/aloj-1.jpg" className="w-100 rounded" alt={"Hotel " + ""} />
                    </div>
                    <div className="col px-4 py-3 d-flex flex-column justify-content-around">
                        <div className="d-flex justify-content-between mb-3">
                            <h2 className="text-aloj bold-text mb-0">Sheraton Tucuman Hotel</h2>
                            <div className="d-flex text-aloj align-items-center">
                                <FaStar className="icon-size-5"></FaStar>
                                <FaStar className="icon-size-5"></FaStar>
                                <FaStar className="icon-size-5"></FaStar>
                                <FaStar className="icon-size-5"></FaStar>
                                <FaStar className="icon-size-5"></FaStar>
                            </div>
                        </div>
                        <div>
                            <div className="mb-3">
                                <h5 className="secondary-text">
                                    <FaMapMarkerAlt className="secondary-text me-2"></FaMapMarkerAlt>
                                    Av. Soldati y Calle Haití­ - Tucuman</h5>
                                <h5 className="secondary-text">
                                    <FaPhoneAlt className="secondary-text me-2"></FaPhoneAlt>
                                    <span>(381) 455-4700</span>
                                </h5>
                                <h5 className="secondary-text mb-2">
                                    <FaGlobeAmericas className="secondary-text me-2"></FaGlobeAmericas>
                                    <span>reservas.tuc@sheraton.com</span>
                                </h5>
                            </div>
                            <h5 className="mb-1 text-aloj">Caracteristicas :</h5>
                            <div className="secondary-text d-flex align-items-center flex-wrap">
                                <div className="col-4 d-flex align-items-center mb-2">
                                    <FaDog></FaDog>
                                    <span className="h5 mb-0 ms-2">Mascotas</span>
                                </div>
                                <div className="col-4 d-flex align-items-center mb-2">
                                    <FaWifi></FaWifi>
                                    <span className="h5 mb-0 ms-2">Wifi</span>
                                </div>
                                <div className="col-4 d-flex align-items-center mb-2">
                                    <FaCarAlt></FaCarAlt>
                                    <span className="h5 mb-0 ms-2">Estacionamiento</span>
                                </div>
                                <div className="col-4 d-flex align-items-center mb-2">
                                    <FaSnowflake></FaSnowflake>
                                    <span className="h5 mb-0 ms-2">Aire acondicionado</span>
                                </div>
                                <div className="col-4 d-flex align-items-center mb-2">
                                    <FaMugHot></FaMugHot>
                                    <span className="h5 mb-0 ms-2">Desayuno</span>
                                </div>
                                <div className="col-4 d-flex align-items-center mb-2">
                                    <FaSpa></FaSpa>
                                    <span className="h5 mb-0 ms-2">Spa</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <h3 className="mb-3 text-aloj text-center">Galeria</h3>
                    <div>
                        <Carousel className="rounded" style={{ height: "500px", overflow: "hidden" }}>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/img/alojamientos/aloj-1-1.jpg"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/img/alojamientos/aloj-1-2.jpg"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/img/alojamientos/aloj-1-3.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                <div>
                    <h3 className="mb-3 text-aloj text-center">Mapa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14241.696834006958!2d-65.193358!3d-26.8264567!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xafbaa4a36ec6713a!2sSheraton%20Tucuman%20Hotel!5e0!3m2!1ses!2sar!4v1657217568756!5m2!1ses!2sar"
                        width="600"
                        height="450"
                        style={{ border: "0", width: "100%" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
