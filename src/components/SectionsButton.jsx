import Link from 'next/link';
import { FaHotel, FaBusAlt, FaUtensils, FaBriefcase, FaClipboardList, FaMap, FaExclamationCircle } from "react-icons/fa";

export default function SectionsButton({ titulo, color, icon, link }) {
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
        <Link href={"/" + link}>
            <div className="col-4 bg-color-1 home-button"
                style={{ backgroundColor: color }}>
                <div className="mb-3">
                    <Icon className="icon-size-1"></Icon>
                </div>
                <div>
                    <h1 className="m-0 text-uppercase">{titulo}</h1>
                </div>
            </div>
        </Link>
    )
}
