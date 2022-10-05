import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaGlobeAmericas, FaStar } from "react-icons/fa";


export default function CardAlojamiento({ handleShow, alojamiento }) {
    const { img, titulo, estrellas, direccion, localidad, number, web } = alojamiento;
    let _estrellas = [];
    for (let index = 0; index < estrellas; index++) _estrellas.push("");
    return (
        <div className="col-12 card-aloj border rounded shadow-sm border-aloj mb-3" style={{ overflow: 'hidden' }} onClick={handleShow}>
            <div className="d-flex align-items-center aloj-slider">
                <div className="aloj-card-img card-img-top d-flex h-100">
                    <img src={"/img/alojamientos/" + img} className="w-100" alt="..." />
                </div>
                <div className="col-9 px-4 py-3 d-flex flex-column justify-content-between h-100">
                    <div>
                        <div className="d-flex justify-content-between pt-1">
                            <small class="text-muted text-uppercase">Hotel</small>
                            <div className="d-flex text-aloj align-items-center">
                                {
                                    _estrellas.map(() => (
                                        <FaStar className="icon-size-5"></FaStar>
                                    ))
                                }
                            </div>
                        </div>
                        <h2 className="text-aloj bold-text mb-0 d-flex align-items-center">{titulo}</h2>
                    </div>
                    <div>
                        <h5 className="secondary-text">
                            <FaMapMarkerAlt className="secondary-text me-2"></FaMapMarkerAlt>
                            {direccion + " - " + localidad}
                        </h5>
                        <h5 className="secondary-text">
                            <FaPhoneAlt className="secondary-text me-2"></FaPhoneAlt>
                            <span>{number}</span>
                        </h5>
                        <h5 className="secondary-text">
                            <FaGlobeAmericas className="secondary-text me-2"></FaGlobeAmericas>
                            <span>{web}</span>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
