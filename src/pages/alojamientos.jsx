import HeaderSecc from "../components/HeaderSecc";
import Form from 'react-bootstrap/Form';
import CardAlojamiento from "../components/alojamientos/CardAlojamiento";
import { useState } from "react";
import ModalAlojamiento from "../components/alojamientos/ModalAlojamiento";

export default function alojamientos() {
    const [show, setShow] = useState(false);
    const [modal, setModal] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <HeaderSecc title="alojamiento" icon="aloj" color="#0089B8"></HeaderSecc>
            <main className="container">
                <div className="d-flex justify-content-around align-items-center bg-aloj p-2 rounded">
                    <h2 className="m-0 text-white">Filtros:</h2>
                    <div className="">
                        <Form.Select size="lg">
                            <option>Seleccione una categoria</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>
                    <div>
                        <Form.Select size="lg">
                            <option>Estrellas</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>
                    <div>
                        <Form.Select size="lg">
                            <option>Seleccione una localidad</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="d-flex flex-column">
                        <CardAlojamiento setModal={setModal} handleShow={handleShow}></CardAlojamiento>
                        <CardAlojamiento setModal={setModal} handleShow={handleShow}></CardAlojamiento>
                    </div>
                </div>
            </main>
            <ModalAlojamiento show={show} handleClose={handleClose} modal={modal}></ModalAlojamiento>
        </div>
    )
}
