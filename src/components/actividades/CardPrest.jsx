import { FaPhoneAlt } from "react-icons/fa";


export default function CardPrest({ prestador, handleShow, setModal }) {
    console.log(prestador);
    const { Nombre, Telefono } = prestador;
    const handleModal = () => {
        handleShow()
        setModal(prestador)
    }
    return (
        <div className="col card-aloj border rounded shadow-sm border-aloj mb-1" onClick={handleModal}>
            <div className="d-flex align-items-center aloj-slider">
                <div className="col-12 px-4 py-3 d-flex flex-column justify-content-around h-100">
                    <div className="d-flex justify-content-between">
                        <div className="col-12">
                            <h3 className="bold-text mb-0" style={{ color: "#0B3B17" }}>{Nombre}</h3>
                        </div>
                    </div>
                    <div>
                        <h5 className="secondary-text text-capitalize">
                            <FaPhoneAlt className="secondary-text me-1"></FaPhoneAlt>
                            {Telefono}
                        </h5>
                        <h5 className="secondary-text text-capitalize">Ver Prestador</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
