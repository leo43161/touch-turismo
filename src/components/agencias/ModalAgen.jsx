import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FaMapMarkerAlt, FaPhoneAlt, FaGlobeAmericas, FaUserAlt } from "react-icons/fa";


export default function ModalAgen({ show, handleClose, modal }) {
    const { direccion, legajo, number, qr, titulo, web } = modal;
    return (
        <Modal className="modal-center" show={show} onHide={handleClose} size="lg" >
            <Modal.Header className="text-center flex-column">
                <h3 className="modal-title text-agen">{titulo}</h3>
                <h5 className="modal-title secondary-text">Legajo Nº {legajo}</h5>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex">
                    <div className="d-flex flex-column align-items-center col-6 py-3 justify-content-evenly">
                        <div className="col-9">
                            <h5 className="secondary-text">
                                <FaUserAlt className="secondary-text me-2"></FaUserAlt>
                                {titulo}
                            </h5>
                        </div>
                        <div className="col-9">
                            <h5 className="secondary-text">
                                <FaMapMarkerAlt className="secondary-text me-2"></FaMapMarkerAlt>
                                {direccion}
                            </h5>
                        </div>
                        <div className="col-9">
                            <h5 className="secondary-text">
                                <FaPhoneAlt className="secondary-text me-2"></FaPhoneAlt>
                                {number}
                            </h5>
                        </div>
                        {web && <div className="col-9">
                            <h5 className="secondary-text">
                                <FaGlobeAmericas className="secondary-text me-2"></FaGlobeAmericas>
                                {web}
                            </h5>
                        </div>}

                    </div>
                    <div className="d-flex flex-column align-items-center col-6 py-3">
                        <h4 className="text-agen mb-3">Descarga el contacto en tu celular</h4>
                        <div className="col-8 d-flex justify-content-center">
                            <img src={"img/agencias/" + qr} className="img-fluid" alt="" />
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
