import { useState } from "react";
import HeaderSecc from '../components/HeaderSecc'
import ToggleButton from "react-bootstrap/ToggleButton";

export default function eventos() {
    //Modal
    const [show, setShow] = useState(false);
    const [modal, setModal] = useState({});
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    //Eventos
    const [reload, setReload] = useState(true);
    const [filters, setfilters] = useState({ categoria: "", estrellas: "", localidad: "" });
    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(2);
    const [total, setTotal] = useState([]);
    const handleSelect = () => {

    }
    return (
        <div>
            <HeaderSecc title="eventos" icon="event" color="#4B4A4A"></HeaderSecc>
            <main className="container articulos-list mb-5 mt-4">
                <div className="d-flex justify-content-around align-items-center bg-color-1 p-2 rounded">
                    <h2 className="m-0 text-white">Filtros:</h2>
                    <ToggleButton
                        size="lg"
                        id="toggle-check"
                        type="checkbox"
                        variant="outline-light"
                        checked={true}
                        value="1"
                        onChange={(e) => { }}
                    >
                        Eventos para Hoy
                    </ToggleButton>
                    <ToggleButton
                        size="lg"
                        id="toggle-check"
                        type="checkbox"
                        variant="outline-light"
                        checked={false}
                        value="1"
                        onChange={(e) => { }}
                    >
                        Eventos para Mañana
                    </ToggleButton>
                    <ToggleButton
                        size="lg"
                        id="toggle-check"
                        type="checkbox"
                        variant="outline-light"
                        checked={false}
                        value="1"
                        onChange={(e) => { }}
                    >
                        Todos los eventos
                    </ToggleButton>
                </div>
            </main>
        </div>
    )
}
