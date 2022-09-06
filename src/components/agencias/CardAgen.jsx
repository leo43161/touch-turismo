import { FaPhoneAlt } from "react-icons/fa";


export default function CardAgen({ agencia, handleShow, setModal }) {
    const { titulo, number } = agencia;
    const handleModal = () =>{
        handleShow()
        setModal(agencia)
    }
    return (
        <div className="col card-aloj border rounded shadow-sm border-aloj mb-1" onClick={handleModal}>
            <div className="d-flex align-items-center aloj-slider">
                <div className="col-12 px-4 py-3 d-flex flex-column justify-content-around h-100">
                    <div className="d-flex justify-content-between">
                        <div className="col-12">
                            <h3 className="text-agen bold-text mb-0">{titulo}</h3>
                        </div>
                    </div>
                    <div>
                        <h5 className="secondary-text text-capitalize">
                            <FaPhoneAlt className="secondary-text me-1"></FaPhoneAlt>
                            {number}
                        </h5>
                        <h5 className="secondary-text text-capitalize">Ver Contacto</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
