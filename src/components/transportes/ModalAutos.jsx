import Modal from 'react-bootstrap/Modal';
import { FaCarAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Autos from '../../data/Autos';

export default function ModalAutos({ show, handleClose }) {
    return (
        <Modal className="modal-center" show={show} onHide={handleClose} size="lg" >
            <Modal.Header closeButton>
                <h2 className="modal-title text-trans text-uppercase">ALQUILER DE AUTOMÓVILES</h2>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <div>
                        {Autos.map(({ id, titulo, number, mail }) =>
                            <div className="card mb-3 px-4 shadow-sm" key={id}>
                                <div className="d-flex align-items-center">
                                    <div>
                                        <FaCarAlt className='text-trans icon-size-3'></FaCarAlt>
                                    </div>
                                    <div className="card-body px-3">
                                        <h2 className="text-center mb-1 d-flex align-items-center">{titulo}</h2>
                                        <div className="d-flex align-items-center mb-2">
                                            <FaPhoneAlt className="fs-4 me-1 secondary-text"></FaPhoneAlt>
                                            <h4 className="secondary-text mb-0 ms-1">
                                                {number}
                                            </h4>
                                        </div>
                                        {mail !== "" && <div className="d-flex align-items-center">
                                            <FaEnvelope className="fs-4 me-1 secondary-text"></FaEnvelope>
                                            <h5 className="secondary-text mb-0 ms-1">
                                                {mail}
                                            </h5>
                                        </div>}

                                    </div>
                                </div>
                            </div>
                        )}
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
