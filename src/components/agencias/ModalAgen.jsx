import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FaMapMarkerAlt, FaPhoneAlt, FaGlobeAmericas, FaUserAlt } from "react-icons/fa";


export default function ModalAgen({ show, handleClose }) {
    return (
        <Modal className="modal-center" show={show} onHide={handleClose} size="lg" >
            <Modal.Header className="text-center flex-column">
                <h3 className="modal-title text-agen">E.V.T AURORA TRAVEL</h3>
                <h5 className="modal-title secondary-text">Legajo Nº 16262</h5>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex">
                    <div className="d-flex flex-column align-items-center col-6 py-3 justify-content-evenly">
                        <div className="col-9">
                            <h5 className="secondary-text">
                                <FaUserAlt className="secondary-text me-0"></FaUserAlt>
                                E.V.T AURORA TRAVEL
                            </h5>
                        </div>
                        <div className="col-9">
                            <h5 className="secondary-text">
                                <FaMapMarkerAlt className="secondary-text me-0"></FaMapMarkerAlt>
                                Calle Crisóstomo Álvarez Nº 467 - Piso 1º - Oficina Nº 101
                            </h5>
                        </div>
                        <div className="col-9">
                            <h5 className="secondary-text">
                                <FaPhoneAlt className="secondary-text me-0"></FaPhoneAlt>
                                +54 381 4305445
                            </h5>
                        </div>
                        <div className="col-9">
                            <h5 className="secondary-text">
                                <FaGlobeAmericas></FaGlobeAmericas>
                                mirtasanna@hotmail.com
                            </h5>
                        </div>
                    </div>
                    <div className="d-flex flex-column align-items-center col-6 py-3">
                        <h4 className="text-agen mb-3">Descarga el contacto en tu celular</h4>
                        <div className="col-8">
                            <img src="img/agencias/qr_aurora.png" className="img-fluid" alt="" />
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
