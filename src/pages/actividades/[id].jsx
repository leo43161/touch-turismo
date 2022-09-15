import { useRouter } from 'next/router'
import HeaderSecc from "../../components/HeaderSecc";
import Agencias from "../../data/Agencias";
import { useState } from "react";
import CardAgen from "../../components/agencias/CardAgen";
import Col from 'react-bootstrap/Col';
import ModalAgen from "../../components/agencias/ModalAgen";

export default function actividad() {
    const router = useRouter()
    const { id } = router.query
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
            <div className="d-flex justify-content-center py-4 bg-color-3">
                <h2 className="mb-0 text-white">TREKKING</h2>
            </div>
            <div className='text-center bg-color-1'>
                <img className="img-fluid" src="/img/actividades/ba_kayak.jpg" alt="" />
            </div>
            <main className="container mb-5 mt-4">
                <div className="secondary-text">
                    <h2>PRESTADORES HABILITADOS</h2>
                </div>
                <div className="mt-3 articulos-list px-2">
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
