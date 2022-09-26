import axios from 'axios';
import { useEffect, useState } from "react";
import HeaderSecc from '../components/HeaderSecc'
import ToggleButton from "react-bootstrap/ToggleButton";
import CardEventos from '../components/eventos/CardEventos';

export default function eventos() {
    //Modal
    const [show, setShow] = useState(false);
    const [modal, setModal] = useState({});
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    //Eventos
    const [eventos, setEventos] = useState([]);
    const [reload, setReload] = useState(true);
    const [filters, setfilters] = useState({ hoy: true, mañana: false, eventos: false });
    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(2);
    const [total, setTotal] = useState([]);
    const handleSelect = () => {

    }

    useEffect(() => {
        if (reload) {
            getEventos();
            console.log(eventos);
            setReload(false);
        }
    }, [reload, setEventos])

    const getEventos = async () => {
        const { data: eventos } = await axios.get(
            "http://localhost:3000/api/eventos", {
            params: { limit: 5, filters }
        }
        );
        console.log(eventos);
        setEventos(eventos);
    }

    return (
        <div>
            <HeaderSecc title="eventos" icon="event" color="#07476B"></HeaderSecc>
            <main className="container articulos-list mb-5 mt-4">
                <div className="d-flex justify-content-around align-items-center bg-color-1 p-2 rounded">
                    <h2 className="m-0 text-white">Filtros:</h2>
                    <ToggleButton
                        size="lg"
                        name="hoy"
                        type="checkbox"
                        variant="outline-light"
                        checked={true}
                        value="hoy"
                        onChange={(e) => { }}
                    >
                        Eventos para Hoy
                    </ToggleButton>
                    <ToggleButton
                        size="lg"
                        name="mañana"
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
                        name="eventos"
                        type="checkbox"
                        variant="outline-light"
                        checked={false}
                        value="1"
                        onChange={(e) => { }}
                    >
                        Todos los eventos
                    </ToggleButton>
                </div>
                <div className="mt-3">
                    <div className="d-flex flex-column">
                        {eventos.map((value, index) =>
                        (<div key={index}>
                            <CardEventos setModal={setModal} alojamiento={value} handleShow={handleShow}></CardEventos>
                        </div>)
                        )}
                    </div>
                </div>
            </main>
        </div>
    )
}

export const getServerSideProps = async () => {
    const { data: eventos } = await axios.get(
        "http://localhost:3000/api/eventos", {
        params: { limit: 5 }
    }
    );

    return {
        props: {
            eventos,
        },
    };
};