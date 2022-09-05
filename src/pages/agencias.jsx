import HeaderSecc from "../components/HeaderSecc";
import Agencias from "../data/Agencias";
import { useState} from "react";
import CardAgen from "../components/agencias/CardAgen";
import Col from 'react-bootstrap/Col';
import ModalAlojamiento from "../components/alojamientos/ModalAlojamiento";

export default function agencias() {
    //Modal
    const [show, setShow] = useState(false);
    const [modal, setModal] = useState({});
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    //Agencias
    const [agencias] = useState(Agencias);

    return (
        <div>
            <HeaderSecc title="agencias" icon="rest" color="#63367B"></HeaderSecc>
            <main className="container articulos-list mb-5 mt-4">
                <div className="text-center">
                    <h2 className="text-agen">AGENCIAS DE VIAJES - MODALIDAD TURISMO RECEPTIVO</h2>
                    <h2>RESOLUCION Nº 1344/9-(EATT)</h2>
                </div>
                <div className="mt-3">
                    <div className="row row-cols-1 row-cols-md-4 g-3">
                        {agencias.map((value, index) =>
                        (<Col key={index}>
                            <CardAgen restaurante={value} setModal={setModal} handleShow={handleShow}></CardAgen>
                        </Col>)
                        )}
                    </div>
                </div>
            </main>
            <ModalAlojamiento show={show} handleClose={handleClose} modal={modal}></ModalAlojamiento>
        </div>
    )
}
