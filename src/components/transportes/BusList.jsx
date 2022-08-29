import React from 'react';
import { FaRoute } from 'react-icons/fa';

export default function BusList({ bus, busActive, writeTravel }) {
    const { descripcion, cod } = bus
    return (
        <div className="card mb-3 px-3 shadow-sm" onClick={() => writeTravel(cod)}>
            <div className="card-body d-flex justify-content-between align-items-center px-3">
                <h1 className="text-center mb-0 d-flex align-items-center">{descripcion}</h1>
                {busActive === cod && <FaRoute className='text-trans icon-size-3'></FaRoute>}
            </div>
        </div>
    )
}
