import axios from 'axios';
import { useEffect, useState } from "react";
import HeaderSecc from '../components/HeaderSecc'
import ToggleButton from "react-bootstrap/ToggleButton";
import CardEventos from '../components/eventos/CardEventos';
import ModalEvento from '../components/eventos/ModalEvento';

export default function eventos() {
    //Modal
    const [show, setShow] = useState(false);
    const [modal, setModal] = useState({});
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    //Eventos
    const [eventos, setEventos] = useState([]);
    const [reload, setReload] = useState(true);
    const [filters, setfilters] = useState("todos");
    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(2);
    const [total, setTotal] = useState([]);
    const handleSelect = (e) => {
        const value = e.currentTarget.value;
        setfilters(value);
        setReload(true);
    }

    useEffect(() => {
        if (reload) {
            getEventos();
            setReload(false);
        }
    }, [reload, setEventos])

    const getEventos = async () => {
        setEventos([]);
        const { data: eventos } = await axios.get(
            "http://localhost:3000/api/eventos", {
            params: { filters }
        }
        );
        setEventos(eventos);
    }

    return (
        <div>
            <HeaderSecc title="eventos" icon="event" color="#07476B"></HeaderSecc>
            <main className="container articulos-list mb-5 mt-4">
                <div className="d-flex justify-content-around align-items-center bg-color-1 p-2 rounded">
                    <h2 className="m-0 text-white">Filtros:</h2>
                    <ToggleButton
                        id="hoy"
                        size="lg"
                        name="hoy"
                        type="checkbox"
                        variant="outline-light"
                        checked={filters == "hoy"}
                        value="hoy"
                        onChange={handleSelect}
                    >
                        Eventos para Hoy
                    </ToggleButton>
                    <ToggleButton
                        id="mañana"
                        size="lg"
                        name="mañana"
                        type="checkbox"
                        variant="outline-light"
                        checked={filters == "mañana"}
                        value="mañana"
                        onChange={handleSelect}
                    >
                        Eventos para Mañana
                    </ToggleButton>
                    <ToggleButton
                        id="todos"
                        size="lg"
                        name="eventos"
                        type="checkbox"
                        variant="outline-light"
                        checked={filters == "todos"}
                        value="todos"
                        onChange={handleSelect}
                    >
                        Todos los eventos
                    </ToggleButton>
                </div>
                <div className="mt-3">
                    <div className="d-flex flex-column">
                        {eventos.map((value, index) =>
                        (<div key={index}>
                            <CardEventos setModal={setModal} evento={value} handleShow={handleShow}></CardEventos>
                        </div>)
                        )}
                    </div>
                </div>
            </main>
            <ModalEvento show={show} handleClose={handleClose} modal={modal}></ModalEvento>
        </div>
    )
}