import axios from 'axios';
import HeaderSecc from "../components/HeaderSecc";
import Alojamientos from "../data/Alojamientos";
import Form from 'react-bootstrap/Form';
import CardAlojamiento from "../components/alojamientos/CardAlojamiento";
import { useState, useEffect } from "react";
import ModalAlojamiento from "../components/alojamientos/ModalAloj";
import PaginationTouch from "../components/Pagination";

export default function alojamientos({ restaurantesSQL, filtrosSQL }) {
    console.log(filtrosSQL)
    console.log(restaurantesSQL)
    //Modal
    const [show, setShow] = useState(false);
    const [modal, setModal] = useState({});
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    //Alojamientos
    const [alojamientos, setAlojamientos] = useState(Alojamientos);
    const [reload, setReload] = useState(true);
    const [filters, setfilters] = useState({ categoria: "", estrellas: "", localidad: "" });
    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(2);
    const [total, setTotal] = useState(Alojamientos.length);

    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
        setReload(true);
    };

    const handlePagination = (_alojamientos) => {
        const indexLast = currentPage * perPage;
        const indexFirst = indexLast - perPage;
        const currentPosts = _alojamientos.slice(indexFirst, indexLast);
        return currentPosts;
    };

    const handleSelect = (e) => {
        paginate(1);
        const value = e.target.value;
        const _filter = { ...filters, [e.target.name]: value };
        setfilters(_filter);
        setReload(true);
    };

    const handleFilter = () => {
        let _alojamientos = Alojamientos;
        for (const key in filters) {
            if (filters[key] !== "") {
                _alojamientos = _alojamientos.filter((value) => value[key] == filters[key]);
            }
        }
        setTotal(_alojamientos.length);
        _alojamientos = handlePagination(_alojamientos);
        return _alojamientos;
    }

    useEffect(() => {
        if (reload) {
            const _alojamientos = handleFilter();
            setAlojamientos(_alojamientos);
            setReload(false);
        }
    }, [reload, setAlojamientos]);


    return (
        <div>
            <HeaderSecc title="alojamiento" icon="aloj" color="#0089B8"></HeaderSecc>
            <main className="container articulos-list mb-5 mt-4">
                <div className="d-flex justify-content-around align-items-center bg-aloj p-2 rounded">
                    <h2 className="m-0 text-white">Filtros:</h2>
                    <div>
                        <Form.Select size="lg" onChange={handleSelect} name="categoria">
                            <option value="">Seleccione una categoria</option>
                            <option value="">Todas</option>
                            <option value="hotel">Hoteles</option>
                            <option value="hosteria">Hosterias</option>
                            <option value="camping">Camping</option>
                        </Form.Select>
                    </div>
                    <div>
                        <Form.Select size="lg" onChange={handleSelect} name="estrellas">
                            <option value="">Estrellas</option>
                            <option value="">Todas</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </Form.Select>
                    </div>
                    <div>
                        <Form.Select size="lg" onChange={handleSelect} name="localidad">
                            <option value="">Seleccione una localidad</option>
                            <option value="">Todas</option>
                            <option value="san miguel de tucuman">San miguel de tucuman</option>
                            <option value="simoca">Simoca</option>
                            <option value="monteros">Monteros</option>
                        </Form.Select>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="d-flex flex-column">
                        {alojamientos.map((value, index) =>
                        (<div key={index}>
                            <CardAlojamiento setModal={setModal} alojamiento={value} handleShow={handleShow}></CardAlojamiento>
                        </div>)
                        )}

                    </div>
                </div>
            </main>
            <div className="d-flex justify-content-center">
                <PaginationTouch total={total} paginate={paginate} perPages={perPage} page={currentPage} type="aloj"></PaginationTouch>
            </div>
            <ModalAlojamiento show={show} handleClose={handleClose} modal={modal}></ModalAlojamiento>
        </div>
    )
}

export const getServerSideProps = async () => {
    const { data: restaurantesSQL } = await axios.get(
        "http://localhost:3000/api/hoteles"
    );

    const { data: filtrosSQL } = await axios.get(
        "http://localhost:3000/api/hoteles/filtros"
    );

    return {
        props: {
            restaurantesSQL, filtrosSQL
        },
    };
};