import React from 'react'
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function HomeEventoCard({ evento }) {

    const { archivo, titulo, lugar, horario, contenido } = evento;
    const removeHTML = (_contenido) => _contenido.replace(/<[^>]*>?/g, '');

    return (
        <div className="d-flex justify-content-center col bg-white mx-auto">
            <div className="col-12 card-evento-slider">
                <div className="d-flex align-items-center event-slider">
                    <div className="evento-card-img card-img-top d-flex h-100">
                        <img src={process.env.URL + 'carga/image/' + archivo} className="w-100" alt="..." />
                    </div>
                    <div className="col-8 px-4 py-3 d-flex flex-column justify-content-around h-100">
                        <h1 className="primary-text bold-text">{titulo}</h1>
                        <div>
                            <div className="d-flex align-items-center mb-2">
                                <FaMapMarkerAlt className="fs-4 me-1 secondary-text"></FaMapMarkerAlt>
                                <h5 className="secondary-text m-0">
                                    {lugar}
                                </h5>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <FaClock className="fs-4 me-1 secondary-text"></FaClock>
                                <h5 className="secondary-text mb-0">
                                    {horario}
                                </h5>
                            </div>
                        </div>
                        <h4 className="text-justify">
                            {removeHTML(contenido)}
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
