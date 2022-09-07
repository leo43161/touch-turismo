import HeaderSecc from "../../components/HeaderSecc";
import Agencias from "../../data/Agencias";
import { useState } from "react";
import CardAgen from "../../components/agencias/CardAgen";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ModalAgen from "../../components/agencias/ModalAgen";

export default function actividades() {
    //Modal
    const [show, setShow] = useState(false);
    const [modal, setModal] = useState({});
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    //Agencias
    const [agencias] = useState(Agencias);

    return (
        <div>
            <HeaderSecc title="actividades" icon="act" color="#A0BF37"></HeaderSecc>
            <main className="container">
                <div className="mb-3 text-center">
                    <h1>RUTAS</h1>
                </div>
                <div className="container d-flex flex-column">
                    <Card className="col mb-3 shadow-sm">
                        <Card.Body className="p-0 d-flex">
                            <div className="col-7 d-flex align-items-center">
                                <div className="rounded-start h-100" style={{ width: '23px', backgroundColor: '#701B46' }}>
                                </div>
                                <div className="px-3 py-3">
                                    <h1 className="m-0">RUTA DEL VINO</h1>
                                </div>
                            </div>
                            <div className="col d-flex justify-content-end">
                                <img src="img/actividades/b_rvino.jpg" className="img-fluid rounded-end" alt="" />
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="col mb-3 shadow-sm">
                        <Card.Body className="p-0 d-flex">
                            <div className="col-7 d-flex align-items-center">
                                <div className="rounded-start h-100" style={{ width: '23px', backgroundColor: '#6E1415' }}>
                                </div>
                                <div className="px-3 py-3">
                                    <h1 className="m-0">RUTA DEL ARTESANO</h1>
                                </div>
                            </div>
                            <div className="col d-flex justify-content-end">
                                <img src="img/actividades/b_rartesano.jpg" className="img-fluid rounded-end" alt="" />
                            </div>
                        </Card.Body>
                    </Card>
                </div>

                <div className="mt-3">
                    <div className="row row-cols-1 row-cols-md-4 g-3">
                        {agencias.map((value, index) =>
                        (<Col key={index}>
                            <CardAgen agencia={value} setModal={setModal} handleShow={handleShow}></CardAgen>
                        </Col>)
                        )}
                    </div>
                </div>
            </main>
            <ModalAgen show={show} handleClose={handleClose} modal={modal}></ModalAgen>
        </div>
    )
}
