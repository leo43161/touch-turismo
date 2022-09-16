import axios from 'axios';
import HeaderSecc from "../../components/HeaderSecc";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardAct from '../../components/actividades/CardAct';

export default function actividades({ actividades }) {
    return (
        <div>
            <HeaderSecc title="actividades" icon="act" color="#A0BF37"></HeaderSecc>
            <main className="container mt-3">
                <div className="mb-3 text-center">
                    <h1>RUTAS</h1>
                </div>
                <div className="container d-flex flex-column">
                    <Card className="col mb-3 shadow-sm">
                        <Card.Body className="p-0 d-flex">
                            <div className="col-7 d-flex align-items-center">
                                <div className="rounded-start h-100" style={{ width: '23px', backgroundColor: '#701B46' }}>
                                </div>
                                <div className="px-3 py-3">
                                    <h1 className="m-0">RUTA DEL VINO</h1>
                                </div>
                            </div>
                            <div className="col d-flex justify-content-end">
                                <img src="img/actividades/b_rvino.jpg" className="img-fluid rounded-end" alt="" />
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="col mb-3 shadow-sm">
                        <Card.Body className="p-0 d-flex">
                            <div className="col-7 d-flex align-items-center">
                                <div className="rounded-start h-100" style={{ width: '23px', backgroundColor: '#6E1415' }}>
                                </div>
                                <div className="px-3 py-3">
                                    <h1 className="m-0">RUTA DEL ARTESANO</h1>
                                </div>
                            </div>
                            <div className="col d-flex justify-content-end">
                                <img src="img/actividades/b_rartesano.jpg" className="img-fluid rounded-end" alt="" />
                            </div>
                        </Card.Body>
                    </Card>
                </div>

                <div className="mt-3">
                    <div className="row row-cols-1 row-cols-md-3 g-3">
                        {actividades.map((value, index) =>
                        (<Col key={index}>
                            <CardAct actividad={value}></CardAct>
                        </Col>)
                        )}
                    </div>
                </div>
            </main>
        </div>
    )
}

export const getServerSideProps = async () => {
    const { data: actividades } = await axios.get(
        "http://localhost:3000/api/actividades"
    );

    return {
        props: {
            actividades,
        },
    };
};