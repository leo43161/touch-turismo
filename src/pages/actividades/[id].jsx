import HeaderSecc from "../../components/HeaderSecc";
import { useState } from "react";
import axios from "axios";
import CardPrest from "../../components/actividades/CardPrest";
import Col from 'react-bootstrap/Col';
import ModalAgen from "../../components/agencias/ModalAgen";

export default function actividad({ prestadoresSQL }) {
    //Modal
    const [show, setShow] = useState(false);
    const [modal, setModal] = useState({});
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
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
                        {prestadoresSQL.map((value, index) =>
                        (<Col key={index}>
                            <CardPrest prestador={value} setModal={setModal} handleShow={handleShow}></CardPrest>
                        </Col>)
                        )}
                    </div>
                </div>
            </main>
            <ModalAgen show={show} handleClose={handleClose} modal={modal}></ModalAgen>
        </div>
    )
}

export const getServerSideProps = async ({ query }) => {
    const { id } = query;
    const { data: prestadoresSQL } = await axios.get(
        "http://localhost:3000/api/actividades/" + id
    );

    return {
        props: {
            prestadoresSQL
        },
    };
};