import axios from 'axios';
import { useEffect, useState } from "react";
import HeaderSecc from '../components/HeaderSecc'
import ToggleButton from "react-bootstrap/ToggleButton";
import CardEventos from '../components/eventos/CardEventos';
import ModalEvento from '../components/eventos/ModalEvento';
import PaginationTouch from "../components/Pagination";
import Loader from '../components/Loader';

export default function Eventos() {
    //Loader
    const [loader, setLoader] = useState(true)
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
    const [perPage] = useState(5);
    const [total, setTotal] = useState([]);

    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
        setReload(true);
    };

    const handlePagination = (_eventos) => {
        const indexLast = currentPage * perPage;
        const indexFirst = indexLast - perPage;
        const currentPosts = _eventos.slice(indexFirst, indexLast);
        return currentPosts;
    };

    const handleSelect = (e) => {
        const value = e.currentTarget.value;
        setfilters(value);
        setReload(true);
        paginate(1)
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
            process.env.LOCALIP + "api/eventos", {
            params: { filters }
        }
        );
        const _eventos = handlePagination(eventos);
        setEventos(_eventos);
        setTotal(eventos.length);
        setLoader(false)
    }

    const listarEventos = () => {
        if (loader) return (<div className="col-12 card-aloj border rounded shadow-sm border-aloj mb-3">
            <div className="d-flex justify-content-center py-4">
                <Loader></Loader>
            </div>
        </div>)

        return eventos.length > 0 ? eventos.map((value, index) =>
        (<div key={index}>
            <CardEventos setModal={setModal} evento={value} handleShow={handleShow}></CardEventos>
        </div>)
        ) :
            <div className="col-12 card-aloj border rounded shadow-sm border-aloj mb-3">
                <div className="d-flex justify-content-center py-4">
                    <h3>No hay eventos</h3>
                </div>
            </div>
    }

    return (
        <div>
            <HeaderSecc title="eventos" icon="event" color="#07476B"></HeaderSecc>
            <main className="container articulos-list mb-5 mt-4 d-flex flex-column justify-content-between">
                <div className="mt-3">
                    <div className="d-flex flex-column-reverse" style={{height:"1400px"}}>
                        {listarEventos()}
                    </div>
                </div>
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
            </main>
            <div className="d-flex justify-content-center">
                <PaginationTouch total={total} paginate={paginate} perPages={perPage} page={currentPage} type="aloj"></PaginationTouch>
            </div>
            <ModalEvento show={show} handleClose={handleClose} modal={modal}></ModalEvento>
        </div>
    )
}