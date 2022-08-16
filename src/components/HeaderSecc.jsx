import React from 'react';
import { FaHotel, FaBusAlt, FaUtensils, FaBriefcase, FaClipboardList, FaMap, FaExclamationCircle, FaReply } from "react-icons/fa";


export default function HeaderSecc({ icon, title, color }) {
    const Icons = {
        aloj: FaHotel,
        trans: FaBusAlt,
        rest: FaUtensils,
        agen: FaBriefcase,
        act: FaClipboardList,
        map: FaMap,
        err: FaExclamationCircle
    }
    const Icon = Icons[icon] ? Icons[icon] : Icons.err;
    return (
        <header className="mb-4" style={{ backgroundColor: "#0089B8" }}>
            <div className="d-flex align-content-center justify-content-between px-4 py-3 container">
                <div className="text-light d-flex align-items-center">
                    <div className="bg-white p-3 rounded" style={{ color: "#0089B8" }}>
                        <Icon className="icon-size-3"></Icon>
                    </div>
                    <h1 className="fw-bold text-uppercase ms-4 mb-0">{title}</h1>
                </div>
                <a href="/" className="d-flex align-items-center text-decoration-none" style={{ color: "#0089B8" }}>
                    <div className="text-white rounded py-1 px-3 d-flex align-items-center flex-column">
                        <FaReply className="icon-size-4"></FaReply>
                        <span style={{ fontSize: "20px" }}>Regresar</span>
                    </div>
                </a>
            </div>
        </header>
    )
}
