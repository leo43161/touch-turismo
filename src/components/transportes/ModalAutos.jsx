import Modal from 'react-bootstrap/Modal';
import { FaCarAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';

export default function ModalAutos({ show, handleClose }) {
    return (
        <Modal className="modal-center" show={show} onHide={handleClose} size="lg" >
            <Modal.Header closeButton>
                <h2 className="modal-title text-trans text-uppercase">ALQUILER DE AUTOMÓVILES</h2>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <div>
                        <div className="card mb-3 px-4 shadow-sm">
                            <div className="d-flex align-items-center">
                                <div>
                                    <FaCarAlt className='text-trans icon-size-3'></FaCarAlt>
                                </div>
                                <div className="card-body px-3">
                                    <h2 className="text-center mb-1 d-flex align-items-center">Avis</h2>
                                    <div className="d-flex align-items-center mb-2">
                                        <FaPhoneAlt className="fs-4 me-1 secondary-text"></FaPhoneAlt>
                                        <h5 className="secondary-text mb-0 ms-1">
                                            (0381) 4310025 / (0381) 4267777 (Aerop) / (0381) 155616919 (24 hs) / 381-5069529 (Martin)
                                        </h5>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <FaEnvelope className="fs-4 me-1 secondary-text"></FaEnvelope>
                                        <h5 className="secondary-text mb-0 ms-1">
                                            tucuman@avis.com.ar
                                        </h5>
                                    </div>
                                </div>
                            </div>
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
