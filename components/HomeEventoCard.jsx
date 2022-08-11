import React from 'react'

export default function HomeEventoCard() {
    return (
        <div className="carousel-item active">
            <div className="d-flex justify-content-center col-10">
                <div className="col-12 card-evento-slider">
                    <div className="d-flex align-items-center event-slider">
                        <div className="evento-card-img card-img-top d-flex h-100">
                            <img src="img/evento-1.jpg" className="w-100" alt="..."/>
                        </div>
                        <div className="col-8 px-4 py-3 d-flex flex-column justify-content-around h-100">
                            <h1 className="primary-text bold-text">XK Race Tucumán 2022</h1>
                            <div>
                                <h5 className="secondary-text">
                                    <i className="fa-solid fa-map-marker-alt secondary-text me-2"></i>
                                    Hotel Howard Johnson Yerba
                                    Buena - El Cadillal</h5>
                                <h5 className="secondary-text"> <i
                                    className="fa-solid fa-clock secondary-text me-1"></i> 09:00 a
                                    13:00 hs</h5>
                            </div>
                            <h4 className="text-justify">Carrera de aventura multi-disciplina de larga distancia,
                                que desde el
                                año 2006 se
                                ha
                                posicionado en Argentina y países vecinos como el circuito de aventura más
                                desafiante en su
                                tipo.</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
