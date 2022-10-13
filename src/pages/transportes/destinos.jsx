import HeaderSecc from "../../components/HeaderSecc";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Destinos() {
    return (
        <div>
            <HeaderSecc title="alojamiento" icon="trans" home={true} color="#C4007A"></HeaderSecc>
            <div className="mt-3 px-2">
                <Row xs={1} md={5} className="g-2">
                    <Col>
                        <Card className="bg-aloj text-white h-100 destino-bt-select">
                            <Card.Body className="d-flex justify-content-center align-items-center">
                                <h2 className="mb-0">Todos los circuitos</h2>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="bg-agen text-white h-100">
                            <Card.Body className="d-flex justify-content-center align-items-center">
                                <h2 className="mb-0">Circuito Choromoro</h2>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="bg-rest text-white h-100">
                            <Card.Body className="d-flex justify-content-center align-items-center">
                                <h2 className="mb-0">Circuito Sur</h2>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="bg-trans text-white h-100">
                            <Card.Body className=" d-flex justify-content-center align-items-cente">
                                <h2 className="mb-0">Circuito valles calchaquies</h2>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="bg-acti text-white h-100">
                            <Card.Body className="d-flex justify-content-center align-items-center">
                                <h2 className="mb-0">Circuito yungas</h2>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
