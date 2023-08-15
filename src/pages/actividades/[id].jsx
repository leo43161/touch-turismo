import HeaderSecc from "../../components/HeaderSecc";
import { useState } from "react";
/* import axios from "axios"; */
import CardPrest from "../../components/actividades/CardPrest";
import Col from 'react-bootstrap/Col';
import ModalPresta from "../../components/actividades/ModalPresta";
import { prestadoresActualizados } from "../../data/Actividades";

export default function Actividad({ prestadores, actividad }) {
    //Modal
    const [show, setShow] = useState(false);
    const [modal, setModal] = useState({});
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <div>
            <HeaderSecc title="actividades" icon="act" color="#A0BF37"></HeaderSecc>
            <div className="d-flex justify-content-center py-4 bg-color-3">
                <h2 className="mb-0 text-white">{actividad}</h2>
            </div>
            <div className='text-center bg-color-1'>
                <img className="img-fluid" src={"/img/actividades/" + actividad.imagen} alt="" />
            </div>
            <main className="container mb-5 mt-4">
                <div className="secondary-text">
                    <h2>PRESTADORES HABILITADOS</h2>
                </div>
                <div className="mt-3 articulos-list px-2">
                    <div className="row row-cols-1 row-cols-md-4 g-3">
                        {prestadores.map((value, index) =>
                        (<Col key={index}>
                            <CardPrest prestador={value} setModal={setModal} handleShow={handleShow}></CardPrest>
                        </Col>)
                        )}
                    </div>
                </div>
            </main>
            <ModalPresta show={show} handleClose={handleClose} modal={modal}></ModalPresta>
        </div>
    )
}

export const getServerSideProps = async ({ query }) => {
    const { id: actividad } = query;
    const prestadores = prestadoresActualizados.filter((prestador) => prestador.actividad.includes(actividad))
    /* const { data: prestadoresSQL } = await axios.get(
        "https://turismo-touch.netlify.app/api/actividades/" + id
    );
 */
    return {
        props: {
            prestadores, actividad
        },
    };
};