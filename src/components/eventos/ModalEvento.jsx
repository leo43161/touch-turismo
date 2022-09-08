import Modal from 'react-bootstrap/Modal';
import helpers from '../../helpers/index';
import Button from 'react-bootstrap/Button';
import { FaMapMarkerAlt, FaPhoneAlt, FaGlobeAmericas, FaUserAlt } from "react-icons/fa";


export default function ModalEvento({ show, handleClose, modal }) {
    const { archivo, titulo, fechafin, fechainicio, contenido, direccion, nombre } = modal;
    const { htmlParse, dateConverter } = helpers;
    return (
        <Modal className="modal-center" show={show} onHide={handleClose} size="lg" >
            <Modal.Header>
                <h2 className="modal-title text-agen">{titulo}</h2>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <div className="">
                        <h1 className="primary-text bold-text">{titulo}</h1>
                    </div>
                    <div className="d-flex flex-column align-items-center col py-3">
                        <div className="col">
                            <img src={process.env.URL + 'carga/image/' + archivo} className="img-fluid" alt="" />
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
