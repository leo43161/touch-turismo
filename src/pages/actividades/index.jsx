import axios from 'axios';
import { useRouter } from 'next/router'
import HeaderSecc from "../../components/HeaderSecc";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardAct from '../../components/actividades/CardAct';
import { actividadesPrest } from '../../data/Actividades';


export default function Actividades({ actividades }) {
    const router = useRouter()
    const formatAct = () => {
        // Crear un objeto para agrupar los prestadores por actividad
        const prestadoresPorActividad = {};
        const actividades = [];

        // Recorrer el array de prestadores
        for (const prestador of prestadoresActualizados) {
            // Recorrer las actividades del prestador
            for (const actividad of prestador.actividad) {
                // Si la actividad no existe en el objeto, crearla con un array vacío
                if (!prestadoresPorActividad[actividad]) {
                    prestadoresPorActividad[actividad] = [];
                    actividades.push({ actividad, imagen: "" });
                }
                // Agregar el prestador al array correspondiente a la actividad
                prestadoresPorActividad[actividad].push({
                    nombre: prestador.nombre,
                    zona: prestador.zona,
                    telefono: prestador.telefono
                });
            }
        }
        console.log(prestadoresPorActividad);
        console.log(actividades);
        // Crear un array final con el formato deseado
        const resultadoFinal = [];
        for (const actividad in prestadoresPorActividad) {
            resultadoFinal.push({
                actividad: actividad,
                prestadores: prestadoresPorActividad[actividad],
                imagen: "" // Puedes añadir la imagen correspondiente aquí
            });
        }

        console.log(resultadoFinal);
    }
    console.log(actividades);
    return (
        <div>
            <HeaderSecc title="actividades" icon="act" color="#A0BF37"></HeaderSecc>
            <main className="container mt-3 d-flex justify-content-end flex-column" style={{ height: "1700px" }}>
                <div className="mb-3 text-center">
                    <h1>RUTAS</h1>
                </div>
                <div className="container d-flex flex-column">
                    <Card className="col mb-3 shadow-sm" onClick={() => router.push("/actividades/rutavino")}>
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
                    <Card className="col mb-3 shadow-sm" onClick={() => router.push("/actividades/artesanoruta")}>
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
                        {actividadesPrest && actividadesPrest.map((value, index) =>
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
        "https://turismo-touch.netlify.app/api/actividades"
    );

    return {
        props: {
            actividades,
        },
    };
};