import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FaMapMarkerAlt, FaPhoneAlt, FaGlobeAmericas, FaUserAlt } from "react-icons/fa";


export default function ModalAgen({ show, handleClose, modal }) {
    const { Direccion, Telefono, qr, Nombre, Web, Idprestadores } = modal;
    return (
        <Modal className="modal-center" show={show} onHide={handleClose} size="lg" >
            <Modal.Header className="text-center flex-column">
                <h3 className="modal-title text-acti">{Nombre}</h3>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex">
                    <div className="d-flex flex-column align-items-center col-6 py-3 justify-content-evenly">
                        <div className="col-9">
                            <h5 className="secondary-text">
                                <FaMapMarkerAlt className="secondary-text me-2"></FaMapMarkerAlt>
                                {Direccion}
                            </h5>
                        </div>
                        <div className="col-9">
                            <h5 className="secondary-text">
                                <FaPhoneAlt className="secondary-text me-2"></FaPhoneAlt>
                                {Telefono}
                            </h5>
                        </div>
                        {Web && <div className="col-9">
                            <h5 className="secondary-text">
                                <FaGlobeAmericas className="secondary-text me-2"></FaGlobeAmericas>
                                {Web}
                            </h5>
                        </div>}

                    </div>
                    <div className="d-flex flex-column align-items-center col-6 py-3">
                        <h4 className="text-acti mb-3">Descarga el contacto en tu celular</h4>
                        <div className="col-8 d-flex justify-content-center">
                            <img src={"/img/actividades/qr/prestadores" + Idprestadores + ".png"} className="img-fluid" alt="" />
                        </div>
                    </div>
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
