import React from 'react';
import { useRouter } from 'next/router'
import { FaHotel, FaBusAlt, FaUtensils, FaBriefcase, FaClipboardList, FaMap, FaExclamationCircle, FaReply, FaHome } from "react-icons/fa";


export default function HeaderSecc({ icon, title, color, home }) {
    const router = useRouter()
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
        <header style={{ backgroundColor: color }}>
            <div className="d-flex align-content-center justify-content-between px-4 py-3 container">
                <div className="text-light d-flex align-items-center">
                    <div className="bg-white p-3 rounded" style={{ color: color }}>
                        <Icon className="icon-size-2"></Icon>
                    </div>
                    <h1 className="fw-bold text-uppercase ms-4 mb-0">{title}</h1>
                </div>
                <div className="d-flex align-items-center text-decoration-none" style={{ color: color }}>
                    <div className="text-white rounded py-1 px-3 d-flex align-items-center flex-column" onClick={() => router.back()}>
                        <FaReply className="icon-size-3"></FaReply>
                        <span style={{ fontSize: "20px" }}>Regresar</span>
                    </div>
                    {home &&
                        <div className="text-white rounded py-1 px-3 d-flex align-items-center flex-column" onClick={() => router.push("/")}>
                            <FaHome className="icon-size-3"></FaHome>
                            <span style={{ fontSize: "20px" }}>Incio</span>
                        </div>
                    }
                </div>
            </div>
        </header>
    )
}
