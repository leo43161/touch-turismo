import axios from 'axios';
import HeaderSecc from "../components/HeaderSecc";
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";
import CardRest from "../components/restaurantes/CardRest";
import PaginationTouch from "../components/Pagination";
import Col from 'react-bootstrap/Col';
import helpers from '../helpers'
import Loader from '../components/Loader';

export default function restaurantes({ filtrosSQL: { categorias, localidades } }) {
    //Loader
    const [loader, setLoader] = useState(true)
    //Helpers
    const { htmlParse } = helpers;
    //Restaurantes
    const [restaurantes, setRestaurantes] = useState([]);
    const [reload, setReload] = useState(true);
    const [filters, setfilters] = useState({ categoria: "", localidad: "" });
    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(24);
    const [total, setTotal] = useState(0);

    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
        setReload(true);
    };

    const handlePagination = (_restaurantes) => {
        const indexLast = currentPage * perPage;
        const indexFirst = indexLast - perPage;
        const currentPosts = _restaurantes.slice(indexFirst, indexLast);
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
        let _restaurantes = restaurantes;
        for (const key in filters) {
            if (filters[key] !== "") {
                _restaurantes = _restaurantes.filter((value) => value[key] == filters[key]);
            }
        }
        setTotal(_restaurantes.length);
        _restaurantes = handlePagination(_restaurantes);
        return _restaurantes;
    }

    const getRestaurantes = async () => {
        setRestaurantes([]);
        const { data: restaurantes } = await axios.get(
            process.env.LOCALIP + "api/restaurantes"
        );
        const _restaurantes = handleFilter(restaurantes);
        setRestaurantes(_restaurantes);
        setTotal(restaurantes.length);
        setLoader(false);
    }

    useEffect(() => {
        if (reload) {
            setLoader(true);
            getRestaurantes();
            setReload(false);
        }
    }, [reload, getRestaurantes]);

    const listarRestaurantes = () => {
        if (loader) return (<div className="col-12">
            <div className="d-flex justify-content-center py-4">
                <Loader></Loader>
            </div>
        </div>)

        return restaurantes.length > 0 ? <div className="row row-cols-1 row-cols-md-4 g-3 articulos-list">
            {restaurantes.map((value, index) =>
            (<Col key={index}>
                <CardRest restaurante={value}></CardRest>
            </Col>)
            )} </div> :
            <div className="col-12 card-aloj border rounded shadow-sm border-aloj mb-3">
                <div className="d-flex justify-content-center py-4">
                    <h3>No hay eventos</h3>
                </div>
            </div>
    }

    return (
        <div>
            <HeaderSecc title="restaurantes" icon="rest" color="#63367B"></HeaderSecc>
            <main className="container mb-5 mt-4">
                <div className="d-flex justify-content-around align-items-center bg-rest p-2 rounded">
                    <h2 className="m-0 text-white">Filtros:</h2>
                    <div>
                        <Form.Select size="lg" onChange={handleSelect} name="categoria">
                            <option value="">Seleccione una categoria</option>
                            <option value="">Todas</option>
                            {categorias.map((categoria, index) => (
                                <option key={index} value={categoria}>{htmlParse(categoria)}</option>
                            ))}
                        </Form.Select>
                    </div>
                    <div>
                        <Form.Select size="lg" onChange={handleSelect} name="localidad">
                            <option value="">Seleccione una localidad</option>
                            <option value="">Todas</option>
                            {localidades.map((localidad, index) => (
                                <option key={index} value={localidad}>{localidad}</option>
                            ))}
                        </Form.Select>
                    </div>
                </div>
                <div className="mt-3">
                    {listarRestaurantes()}
                </div>
            </main>
            <div className="d-flex justify-content-center">
                <PaginationTouch
                    type="rest"
                    total={total}
                    paginate={paginate}
                    perPages={perPage}
                    page={currentPage}
                ></PaginationTouch>
            </div>
        </div>
    )
}

export const getServerSideProps = async () => {

    const { data: filtrosSQL } = await axios.get(
        "http://localhost:3000/api/restaurantes/filtros"
    );

    return {
        props: {
            filtrosSQL
        },
    };
};