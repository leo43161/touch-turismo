import axios from 'axios';
import HeaderSecc from "../components/HeaderSecc";
import Form from 'react-bootstrap/Form';
import CardAlojamiento from "../components/alojamientos/CardAlojamiento";
import { useState, useEffect } from "react";
import ModalAlojamiento from "../components/alojamientos/ModalAloj";
import PaginationTouch from "../components/Pagination";
import Loader from '../components/Loader';

export default function Alojamientos({ filtrosSQL: { categorias, localidades } }) {
    //Loader
    const [loader, setLoader] = useState(true)
    //Modal
    const [show, setShow] = useState(false);
    const [modal, setModal] = useState({});
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    //Alojamientos
    const [alojamientos, setAlojamientos] = useState([]);
    const [reload, setReload] = useState(true);
    const [filters, setfilters] = useState({ categoria: "", estrellas: "", localidad: "" });
    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(6);
    const [total, setTotal] = useState(0);

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

    const handleFilter = (restaurantes) => {
        let _alojamientos = restaurantes;
        for (const key in filters) {
            if (filters[key] !== "") {
                _alojamientos = _alojamientos.filter((value) => value[key] == filters[key]);
            }
        }
        setTotal(_alojamientos.length);
        _alojamientos = handlePagination(_alojamientos);
        return _alojamientos;
    }

    const getAlojamientos = async () => {
        setAlojamientos([]);
        const { data: alojamientos } = await axios.get(
            process.env.LOCALIP + "api/hoteles", {
            params: { filters }
        }
        );
        const _alojamientos = handleFilter(alojamientos);
        setAlojamientos(_alojamientos);
        setLoader(false)
    }

    useEffect(() => {
        if (reload) {
            setLoader(true)
            getAlojamientos();
            setReload(false);
        }
    }, [reload, setAlojamientos]);


    const listarAlojamientos = () => {
        if (loader) return (<div className="col-12 card-aloj border rounded shadow-sm border-aloj mb-3">
            <div className="d-flex justify-content-center py-4">
                <Loader></Loader>
            </div>
        </div>)

        return alojamientos.length > 0 ? alojamientos.map((value, index) =>
        (<div key={index}>
            <CardAlojamiento setModal={setModal} alojamiento={value} handleShow={handleShow}></CardAlojamiento>
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
            <HeaderSecc title="alojamiento" icon="aloj" color="#0089B8"></HeaderSecc>
            <main className="container mb-5 mt-4">
                <div className="mt-3">
                    <div className="d-flex flex-column articulos-list flex-column-reverse">
                        {listarAlojamientos()}
                    </div>
                </div>
                <div className="d-flex justify-content-around align-items-center bg-aloj p-2 rounded">
                    <h2 className="m-0 text-white">Filtros:</h2>
                    <div>
                        <Form.Select size="lg" onChange={handleSelect} name="categoria_hoteles_id">
                            <option value="">Seleccione una categoria</option>
                            <option value="">Todas</option>
                            {categorias.map(({ nombre, id }, index) => <option key={index} value={id}>{nombre}</option>)}
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
                        <Form.Select size="lg" onChange={handleSelect} name="localidad_id">
                            <option value="">Seleccione una localidad</option>
                            <option value="">Todas</option>
                            {localidades.map(({ nombre, id }, index) => <option key={index} value={id}>{nombre}</option>)}
                        </Form.Select>
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

    const { data: filtrosSQL } = await axios.get(
        "http://localhost:3000/api/hoteles/filtros"
    );

    return {
        props: {
            filtrosSQL
        },
    };
};