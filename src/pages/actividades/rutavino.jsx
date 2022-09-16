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
        <div>
            <HeaderSecc title="actividades" icon="act" color="#A0BF37"></HeaderSecc>
            <div className="d-flex justify-content-center py-4 bg-color-3">
                <h2 className="mb-0 text-white">RUTA DEL VINO</h2>
            </div>
            <div className='bg-color-1'>
                <img src={"/img/actividades/planos/" + imagen} style={{ width: "1080px", height: "auto" }} alt="" />
                {destinos.map((destino, index) => (
                    <>
                        <button key={index} onClick={() => {
                            handleShow()
                            setModal(destino)
                        }} style={destino.style}></button>
                    </>
                ))}
            </div>
            <ModalVino show={show} handleClose={handleClose} modal={modal}></ModalVino>
        </div>
    )
}
