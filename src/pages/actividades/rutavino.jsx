import HeaderSecc from "../../components/HeaderSecc";
import RutaVinoData from '../../data/RutaVino'
import { useState } from "react";
import ModalVino from "../../components/actividades/ModalVino";


export default function RutaVino() {
    const { imagen, destinos } = RutaVinoData;
    //Modal
    const [show, setShow] = useState(false);
    const [modal, setModal] = useState({});
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <div className="bg-color-3" style={{ height: "100vh" }}>
            <HeaderSecc title="actividades" icon="act" color="#A0BF37"></HeaderSecc>
            <div className="d-flex justify-content-center py-4 bg-color-3">
                <h2 className="mb-0 text-white">RUTA DEL VINO</h2>
            </div>
            <div className='bg-color-1 mb-5'>
                <img src={"/img/actividades/planos/" + imagen} style={{ width: "1080px", height: "auto" }} alt="" />
                {destinos.map((destino, index) => (
                    <div key={index}>
                        <button onClick={() => {
                            handleShow()
                            setModal(destino)
                        }} style={destino.style}></button>
                    </div>
                ))}
            </div>
            <section className="d-flex justify-content-center container mb-3 p-0 card overflow-hidden shadow">
                <video autoPlay muted loop width="100%">
                    <source src="/img/dji.mp4" type="video/mp4"></source>
                </video>
            </section>
            <ModalVino show={show} handleClose={handleClose} modal={modal}></ModalVino>
        </div>
    )
}
