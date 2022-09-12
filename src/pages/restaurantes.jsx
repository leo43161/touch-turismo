import axios from 'axios';
import HeaderSecc from "../components/HeaderSecc";
/* import Restaurantes from "../data/Restaurantes"; */
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";
import CardRest from "../components/restaurantes/CardRest";
import PaginationTouch from "../components/Pagination";
import Col from 'react-bootstrap/Col';

export default function restaurantes({ restaurantesSQL }) {
    /* ADAPTAR EL PAGINADO A LA MANERA DE RENDERIZAR */
    console.log(restaurantesSQL.length);
    const Restaurantes = restaurantesSQL;
    //Restaurantes
    const [restaurantes, setAlojamientos] = useState(Restaurantes);
    const [reload, setReload] = useState(true);
    const [filters, setfilters] = useState({ categoria: "", estrellas: "", localidad: "" });
    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(16);
    const [total, setTotal] = useState(Restaurantes.length);

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

    const handleFilter = () => {
        let _restaurantes = Restaurantes;
        for (const key in filters) {
            if (filters[key] !== "") {
                _restaurantes = _restaurantes.filter((value) => value[key] == filters[key]);
            }
        }
        setTotal(_restaurantes.length);
        _restaurantes = handlePagination(_restaurantes);
        return _restaurantes;
    }

    useEffect(() => {
        if (reload) {
            const _restaurantes = handleFilter();
            setAlojamientos(_restaurantes);
            setReload(false);
        }
    }, [reload, setAlojamientos]);


    return (
        <div>
            <HeaderSecc title="restaurantes" icon="rest" color="#63367B"></HeaderSecc>
            <main className="container articulos-list mb-5 mt-4">
                <div className="d-flex justify-content-around align-items-center bg-rest p-2 rounded">
                    <h2 className="m-0 text-white">Filtros:</h2>
                    <div>
                        <Form.Select size="lg" onChange={handleSelect} name="categoria">
                            <option value="">Seleccione una categoria</option>
                            <option value="">Todas</option>
                            <option value="restaurantes">Restaurantes</option>
                            <option value="bar">Bar</option>
                            <option value="cafeterias">Cafeterias</option>
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
                    <div className="row row-cols-1 row-cols-md-4 g-3">
                        {restaurantes.map((value, index) =>
                        (<Col key={index}>
                            <CardRest restaurante={value}></CardRest>
                        </Col>)
                        )}

                    </div>
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
    const { data: restaurantesSQL } = await axios.get(
        "http://localhost:3000/api/restaurantes"
    );

    return {
        props: {
            restaurantesSQL,
        },
    };
};