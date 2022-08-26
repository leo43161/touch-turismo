import React from 'react';
import { FaRoute } from 'react-icons/fa';

export default function BusList({ bus }) {
    const { descripcion, cod } = bus
    return (
        <div className="col">
            <div className="card mb-3 px-3 shadow-sm">
                <div className="card-body d-flex justify-content-between align-items-center px-3">
                    <h1 className="text-center mb-0 d-flex align-items-center">{descripcion}</h1>
                    <FaRoute className='text-trans icon-size-3'></FaRoute>
                </div>
            </div>
        </div>
    )
}
