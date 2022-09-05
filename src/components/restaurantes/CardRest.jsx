import { FaMapMarkerAlt } from "react-icons/fa";


export default function CardRest({ restaurante }) {
    const { titulo, ubicacion, localidad, categoria } = restaurante;
    return (
        <div className="col card-aloj border rounded shadow-sm border-aloj mb-1">
            <div className="d-flex align-items-center aloj-slider">
                <div className="col-12 px-4 py-3 d-flex flex-column justify-content-around h-100">
                    <div className="d-flex justify-content-between">
                        <div className="col-12">
                            <h2 className="text-rest bold-text mb-0">{titulo}</h2>
                            <small className="text-muted text-uppercase">{categoria}</small>
                        </div>
                    </div>
                    <div>
                        <h5 className="secondary-text text-capitalize">
                            <FaMapMarkerAlt className="secondary-text me-1"></FaMapMarkerAlt>
                            {ubicacion} - {localidad}
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
