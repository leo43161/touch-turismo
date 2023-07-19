import dynamic from "next/dynamic";
import HeaderSecc from "../../../components/HeaderSecc";
import { useRouter } from 'next/router';
import RecorridosBuses from '../../../data/Recorridos.json';
import Buses from '../../../data/Buses';

export default function Recorridos() {
    const router = useRouter();
    const { id } = router.query;
    const recorrido = RecorridosBuses.find((value) => value.cod === parseInt(id));

    if (!recorrido) {
        // Manejar el caso en que el recorrido no se encuentre
        return <div>Recorrido no encontrado.</div>;
    }

    const { nodos, paradas } = recorrido;
    const { descripcion } = Buses.find((value) => value.cod === parseInt(id));
    const MapWithNoSSR = dynamic(() => import("../../../components/Map"), {
        ssr: false
    });

    return (
        <div>
            <HeaderSecc title="Transportes" icon="trans" color="#C4007A" home={true}></HeaderSecc>
            <div className="d-flex my-3 justify-content-around">
                <div className="card px-4 py-3 d-flex align-items-center">
                    <h4 className="text-center mb-0 d-flex align-items-center h-100">
                        <span className="me-2"><img src="/img/transportes/icon-inicio.png" style={{ width: "25px" }} alt="" /></span>
                        Ubicacion
                    </h4>
                </div>
                <div className="card px-4 py-3 d-flex align-items-center">
                    <h4 className="text-center mb-0 d-flex align-items-center h-100">
                        <span className="me-2"><img src="/img/transportes/bus-stop.png" style={{ width: "25px" }} alt="" /></span>
                        Paradas
                    </h4>
                </div>
            </div>
            <div className="card p-3 mb-5 m-3 shadow-sm">
                <div className="text-center mb-2">
                    <h1>{descripcion}</h1>
                </div>
                <div className="rounded overflow-hidden border" style={{ height: "45vh" }}>
                    <MapWithNoSSR coords={[-26.831011, -65.204603]} zoom={15} route={nodos} paradas={paradas}></MapWithNoSSR>
                </div>
            </div>
            <section className="d-flex justify-content-center container p-0 mb-3 card overflow-hidden shadow">
                <video autoPlay muted loop width="100%">
                    <source src="/img/dji.mp4" type="video/mp4"></source>
                </video>
            </section>
        </div>
    )
}

export const getServerSideProps = async ({ query }) => {
    const { id } = query;
    const { nodos, paradas } = RecorridosBuses.find((value) => value.cod === parseInt(id));

    return {
        props: {
            nodos, paradas, id
        },
    };
};