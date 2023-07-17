import dynamic from "next/dynamic";
import Destinos from '../../../data/Destinos';
import HeaderSecc from "../../../components/HeaderSecc";
import axios from 'axios';
import { FaAngleDown } from "react-icons/fa";

export default function Destino({ _colectivos, _periodos, _horarios }) {
    /* const [colectivos, setColectivos] = useState([]); */
    const MapWithNoSSR = dynamic(() => import("../../../components/Map"), {
        ssr: false
    });

    const horariosHTML = (index) => {
        const horarios = _horarios[index];
        const ida = horarios.filter(h => h.Ida === 1);
        const vuelta = horarios.filter(h => h.Ida === 0);
        if (ida.length > vuelta.length) {
            return ida.map(({ hora }, indexHorario) => {
                return <tr key={indexHorario}>
                    <td className="fw-bold">{hora}</td>
                    <td className="fw-bold">{vuelta[indexHorario] ? vuelta[indexHorario].hora : ""}</td>
                </tr>
            }
            )
        } else {
            return vuelta.map(({ hora }, indexHorario) => {
                return <tr key={indexHorario}>
                    <td className="fw-bold">{hora}</td>
                    <td className="fw-bold">{ida[indexHorario] ? ida[indexHorario].hora : ""}</td>
                </tr>
            })
        }
    }

    console.log(_colectivos);
    console.log(_horarios);
    console.log(_periodos);


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
                        <span className="me-2"><img src="/img/transportes/bus-marker-1.png" style={{ width: "35px" }} alt="" /></span>
                        Terminal
                    </h4>
                </div>
            </div>
            <div className="card p-3 mb-4 m-3 shadow-sm">
                <div className="rounded overflow-hidden border" style={{ height: "30vh" }}>
                    <MapWithNoSSR coords={[-26.834893, -65.193433]} zoom={15} icon="terminal" marker></MapWithNoSSR>
                </div>
            </div>
            <div className="" style={{ height: "920px" }}>
                <div className="p-3">
                    <div className="card border shadow-sm">
                        <div className="card-body">
                            {<div className={`d-flex flex-column`}>
                                <h1 className="text-trans text-uppercase">{_colectivos[0].nombre}</h1>
                                <div className={`row  ${_colectivos[1] ? "row-cols-2" : "row-cols-1"} g-3 col my-2`}>
                                    {/* LINEAS */}
                                    {_colectivos && _colectivos.map((colectivo, index) => (
                                        <div className="col" key={index}>
                                            <div className="col d-flex flex-column justify-content-between py-4 card px-3">
                                                <h3><u>Línea / Empresa:</u> <span>{colectivo.linea}</span> </h3>
                                                <h3><u>Costo:</u> {colectivo.costo}</h3>
                                                <h3><u>Dónde Tomarlo:</u> {colectivo.dondetomar} (Marcado en
                                                    el mapa).</h3>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/*  */}
                                <div className="col text-center">
                                    <h3>Horarios</h3>
                                    <h5 className="text-danger">Horarios tentativos para informacion mas precisa consultar con terminal de omnibus</h5>
                                    <div className={`row ${_colectivos.length > 1 ? "row-cols-2" : "row-cols-1"}`}>
                                        {_periodos.map((periodo, _index) => (
                                            <div className="col" key={_index}>
                                                <h4>{periodo[0].linea}</h4>
                                                <div className={`row h-100 ${periodo.length === 1 ? "row-cols-1" : periodo.length === 2 ? "row-cols-2" : periodo.length === 3 ? "row-cols-3" : "row-cols-4"} g-2 col mt-2`}>
                                                    {periodo.map(({ periodo }, index) => (
                                                        <div className="col" key={index}>
                                                            <div className="card col ms-2">
                                                                <div className="card-body">
                                                                    <h5>{periodo}</h5>
                                                                    <div className="rounded">
                                                                        <div className="table-wrapper" style={{ height: "480px" }}>
                                                                            <table className="table table-striped position-relative mb-0">
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th scope="col" className="border-bottom border-dark">Ida</th>
                                                                                        <th scope="col">Vuelta</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody className="table-group-divider overflow-scroll">
                                                                                    {horariosHTML(index)}
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                        <div className="d-flex justify-content-center border rounded-bottom">
                                                                            <FaAngleDown className="h4 mb-0"></FaAngleDown>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 
                                {ida.length > vuelta.length ?
                                                                (ida.length > 11 ?
                                                                    <div className="d-flex justify-content-center border rounded-bottom">
                                                                        <FaAngleDown className="h4 mb-0"></FaAngleDown>
                                                                    </div> : null) :
                                                                (vuelta.length > 11 ?
                                                                    <div className="d-flex justify-content-center border rounded-bottom">
                                                                        <FaAngleDown className="h4 mb-0"></FaAngleDown>
                                                                    </div> : null)}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        */}


                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export const getServerSideProps = async ({ query }) => {
    let _periodos = [];
    let _horarios = [];
    const { id } = query;
    const { data: _colectivos } = await axios.get(
        process.env.LOCALIP + "api/destinos",
        { params: { localidad: id ? id : null } }
    );

    for (let index = 0; index < _colectivos.length; index++) {
        const { linea, nombre } = _colectivos[index];
        const { data: periodos } = await axios.get(
            process.env.LOCALIP + "api/destinos/periodo",
            { params: { linea, nombre } }
        );
        _periodos.push(periodos);

        for (let index = 0; index < _periodos.length; index++) {

            const periodoBus = _periodos[index];

            for (let index = 0; index < periodoBus.length; index++) {
                const { periodo } = periodoBus[index];
                const { data: horarios } = await axios.get(
                    process.env.LOCALIP + "api/destinos/horarios",
                    { params: { linea, nombre, periodo } }
                );
                _horarios.push(horarios);
            }

        }
    }
    return {
        props: {
            _colectivos, _periodos, _horarios
        },
    };
};