import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaGlobeAmericas, FaStar } from "react-icons/fa";


export default function CardAlojamiento() {
    return (
        <div className="col-12 card-aloj border rounded shadow-sm border-aloj mb-3">
            <div className="d-flex align-items-center aloj-slider">
                <div className="aloj-card-img card-img-top d-flex h-100">
                    <img src="/img/alojamientos/aloj-1.jpg" className="w-100" alt="..." />
                </div>
                <div className="col-9 px-4 py-3 d-flex flex-column justify-content-around h-100">
                    <div className="d-flex justify-content-between">
                        <h2 className="text-aloj bold-text mb-0">Sheraton Tucuman Hotel</h2>
                        <div className="d-flex text-aloj align-items-center">
                            <FaStar className="icon-size-5"></FaStar>
                            <FaStar className="icon-size-5"></FaStar>
                            <FaStar className="icon-size-5"></FaStar>
                            <FaStar className="icon-size-5"></FaStar>
                            <FaStar className="icon-size-5"></FaStar>
                        </div>
                    </div>
                    <div>
                        <h5 className="secondary-text">
                            <FaMapMarkerAlt className="secondary-text me-2"></FaMapMarkerAlt>
                            Av. Soldati y Calle Haití­ - Tucuman</h5>
                        <h5 className="secondary-text">
                            <FaPhoneAlt className="secondary-text me-2"></FaPhoneAlt>
                            <span>(381) 455-4700</span>
                        </h5>
                        <h5 className="secondary-text">
                            <FaGlobeAmericas className="secondary-text me-2"></FaGlobeAmericas>
                            <span>reservas.tuc@sheraton.com</span>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
