import HeaderSecc from "../../components/HeaderSecc";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Destinos from '../../data/Destinos';
import { useEffect, useState } from "react";

export default function destinos() {
    const [destino, setDestino] = useState(0);
    const [destinos, setDestinos] = useState([]);
    const [reload, setReload] = useState(true);
    const _circuitos = Destinos.map(({ nombre, id, color }) => { return { nombre, id, color } });

    const destinoHandler = (id) => {
        console.log(id)
        setDestino(id);
        setReload(true);
    }

    useEffect(() => {
        if (reload) {
            let _destinos = [];
            if (destino !== 0) {
                _destinos = Destinos.filter((value) => { return destino === value.id })
            } else {
                _destinos = Destinos;
            }
            setDestinos(_destinos);
            setReload(false);
        }
    }, [reload])


    return (
        <div>
            <HeaderSecc title="alojamiento" icon="trans" home={true} color="#C4007A"></HeaderSecc>
            <div className="mt-3 px-2" style={{height: "1150px"}}>
                <Row xs={1} md={3} className="g-2">
                    {destinos.map((circuito) => {
                        return circuito.destinos.map((destino, index) => <Col key={index}>
                            <Card className="" style={{ height: "150px" }}>
                                <Card.Body className="d-flex justify-content-center align-items-center">
                                    <h1 className="mb-0">{destino}</h1>
                                </Card.Body>
                                <div className="rounded-bottom" style={{ height: '12px', backgroundColor: circuito.color, borderRadius: "0 0 0 0.375rem" }}>
                                </div>
                            </Card>
                        </Col>)
                    })}
                </Row>
            </div>
            <div className="mt-3 px-2">
                <Row xs={1} md={5} className="g-2">
                    <Col>
                        <Card className={`bg-aloj text-white h-100 ${destino === 0 ? "destino-bt-select" : null}`} onClick={() => destinoHandler(0)}>
                            <Card.Body className="d-flex justify-content-center align-items-center">
                                <h2 className="mb-0">Todos los circuitos</h2>
                            </Card.Body>
                        </Card>
                    </Col>
                    {_circuitos.map(({ nombre, id, color }, index) => <Col key={index}>
                        <Card className={`text-white h-100 ${id === destino ? "destino-bt-select" : null}`} style={{ backgroundColor: color }} onClick={() => destinoHandler(id)}>
                            <Card.Body className="d-flex justify-content-center align-items-center">
                                <h2 className="mb-0">{nombre}</h2>
                            </Card.Body>
                        </Card>
                    </Col>)}
                </Row>
            </div>
        </div>
    )
}
