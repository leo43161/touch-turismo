import dynamic from "next/dynamic";
import Destinos from '../../../data/Destinos';
import HeaderSecc from "../../../components/HeaderSecc";
import { useRouter } from 'next/router';

export default function destino() {
    const router = useRouter();
    const { id } = router.query;
    const destino = Destinos.find((value) => value.id === parseInt(id));
    /* costo, horarios, indicaciones, linea, nodos, parada, titulo */
    const MapWithNoSSR = dynamic(() => import("../../../components/Map"), {
        ssr: false
    });
    return (
        <div>
            <HeaderSecc title="Transportes" icon="trans" color="#C4007A"></HeaderSecc>
            <div className="d-flex my-3 justify-content-around">
                <div className="card px-4 py-3 d-flex align-items-center">
                    <h4 className="text-center mb-0 d-flex align-items-center h-100">
                        <span className="me-2"><img src="/img/transportes/icon-inicio.png" style={{ width: "25px" }} alt="" /></span>
                        Ubicacion
                    </h4>
                </div>
                <div className="card px-4 py-3 d-flex align-items-center">
                    <h4 className="text-center mb-0 d-flex align-items-center h-100">
                        <span className="me-2"><img src="/img/transportes/bus-marker-1.png" style={{ width: "35px" }} alt="" /></span>
                        Terminal
                    </h4>
                </div>
                <div className="card px-4 py-3 d-flex align-items-center">
                    <h4 className="text-center mb-0 d-flex align-items-center h-100">
                        <span className="me-2"><img src="/img/transportes/bus-stop.png" style={{ width: "25px" }} alt="" /></span>
                        Paradas
                    </h4>
                </div>
            </div>
            <div className="card p-3 mb-4 m-3 shadow-sm">
                <div className="rounded overflow-hidden border" style={{ height: "35vh" }}>
                    <MapWithNoSSR coords={[-26.834893, -65.193433]} zoom={15} icon="terminal" route={destino ? destino.nodos : null}></MapWithNoSSR>
                </div>
            </div>
            <div>
                <div className="p-3">
                    <div className="card border shadow-sm">
                        <div className="card-body">
                            {destino && <div className="d-flex">
                                <div className="col d-flex flex-column justify-content-between py-4">
                                    <h1 className="text-trans text-uppercase">{destino.titulo}</h1>
                                    <h3><u>Línea / Empresa:</u> <span>{destino.linea}</span> </h3>
                                    <h3><u>Costo:</u> {destino.costo}</h3>
                                    <h3><u>Dónde Tomarlo:</u> {destino.parada} (Marcado en
                                        el mapa).</h3>
                                </div>
                                <div className="col text-center">
                                    <h3>Horarios</h3>
                                    {destino.indicaciones && <p className="text-muted">{destino.indicaciones}</p>}
                                    <div className="row row-cols-2 row-cols-md-2 g-2 col mt-2">
                                        {destino.horarios.map(({ dias, ida, vuelta }, index) =>
                                            <div className="col" key={index}>
                                                <div className="card col ms-2 h-100">
                                                    <div className="card-body">
                                                        <h4>{dias}</h4>
                                                        <table className="table table-striped">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">Ida</th>
                                                                    <th scope="col">Vuelta</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="table-group-divider">
                                                                {ida.length > vuelta.length ? ida.map((value, index) =>
                                                                    <tr key={index}>
                                                                        <td className="fw-bold">{value}</td>
                                                                        <td className="fw-bold">{vuelta[index]}</td>
                                                                    </tr>
                                                                ) : vuelta.map((value, index) =>
                                                                    <tr key={index}>
                                                                        <td className="fw-bold">{ida[index]}</td>
                                                                        <td className="fw-bold">{value}</td>
                                                                    </tr>
                                                                )}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
