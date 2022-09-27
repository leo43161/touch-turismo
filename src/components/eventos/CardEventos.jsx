import React from 'react'
import helpers from '../../helpers'
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";


export default function CardEventos({ handleShow, alojamiento }) {
    const { archivo, titulo, contenido, direccion, fechafin, fechainicio, nombre } = alojamiento;
    const { htmlParse, dateConverter } = helpers;
    return (
        <div className="col-12 card-aloj border rounded shadow-sm border-aloj mb-3" style={{ overflow: 'hidden' }} onClick={handleShow}>
            <div className="d-flex align-items-center aloj-slider">
                <div className="aloj-card-img card-img-top d-flex h-100">
                    <img src={process.env.URL + 'carga/image/' + archivo} className="w-100" alt="..." />
                </div>
                <div className="col-9 px-4 py-3 d-flex flex-column justify-content-around h-100">
                    <div className="d-flex justify-content-between">
                        <h2 className="primary-text bold-text mb-0">{titulo}</h2>
                    </div>
                    <div className="my-2">
                        <h5 className="secondary-text">
                            <FaMapMarkerAlt className="secondary-text me-2"></FaMapMarkerAlt>
                            {direccion + " - " + nombre}
                        </h5>
                        <div className="d-flex align-items-center mb-2">
                            <FaCalendarAlt className="fs-4 me-1 secondary-text"></FaCalendarAlt>
                            <h5 className="secondary-text mb-0">
                                {dateConverter(fechainicio)} - {dateConverter(fechafin)}
                            </h5>
                        </div>
                    </div>
                    <div>
                        <h4 className="mb-0">
                            {htmlParse(contenido)}
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
