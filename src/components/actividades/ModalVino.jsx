import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FaMapMarkerAlt, FaPhoneAlt, FaGlobeAmericas, FaUserAlt } from "react-icons/fa";


export default function ModalVino({ show, handleClose, modal }) {
    const { nombre, contacto, telefono, direccion, mail, web, descripcion } = modal;
    return (
        <Modal className="modal-center" show={show} onHide={handleClose} size="lg" >
            <Modal.Header className="text-center flex-column">
                <h3 className="modal-title text-acti" style={{ color: '#701B46' }}>{nombre}</h3>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex">
                    <div className="d-flex flex-column align-items-center col py-3 justify-content-evenly">
                        <div className="col-9">
                            <h5 className="secondary-text">
                                <FaUserAlt className="secondary-text me-2"></FaUserAlt>
                                {contacto}
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
                                {telefono}
                            </h5>
                        </div>
                        {web && <div className="col-9">
                            <h5 className="secondary-text">
                                <FaGlobeAmericas className="secondary-text me-2"></FaGlobeAmericas>
                                {web}
                            </h5>
                        </div>}

                    </div>
                    {descripcion &&
                        <div className="d-flex flex-column align-items-center col py-3">
                            <h4 className="mb-3" style={{ color: '#701B46' }}>Descripcion</h4>
                            <div className="col-8 text-center">
                                <h4>{descripcion}</h4>
                            </div>
                        </div>
                    }
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
