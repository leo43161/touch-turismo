import Modal from 'react-bootstrap/Modal';
import helpers from '../../helpers/index';
import Button from 'react-bootstrap/Button';
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";


export default function ModalEvento({ show, handleClose, modal }) {
    const { archivo, titulo, fechafin, fechainicio, contenido, direccion, nombre, copete } = modal;
    const { htmlParse, dateConverter, dayConverter } = helpers;
    return (
        <Modal className="modal-center" show={show} onHide={handleClose} size="lg" >
            <Modal.Header closeButton>
                <h2 className="modal-title primary-text text-uppercase">{dayConverter(fechainicio)}</h2>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <div>
                        <h1 className="primary-text bold-text text-center mb-3">{titulo}</h1>
                        <div className="d-flex justify-content-around">
                            <div className="d-flex align-items-center mb-2">
                                <FaMapMarkerAlt className="fs-4 me-1 secondary-text"></FaMapMarkerAlt>
                                <h5 className="secondary-text m-0">
                                    {direccion} {direccion ? "-" : null} {nombre}
                                </h5>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <FaCalendarAlt className="fs-4 me-1 secondary-text"></FaCalendarAlt>
                                <h5 className="secondary-text mb-0">
                                    {dateConverter(fechainicio)} - {dateConverter(fechafin)}
                                </h5>
                            </div>
                        </div>
                        <div className="mt-3">
                            <h3 className="text-center">
                                {htmlParse(contenido)}
                            </h3>
                            <h4 className="text-center">
                                {copete}
                            </h4>
                        </div>
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
