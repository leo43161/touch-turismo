import Card from 'react-bootstrap/Card';
import { useRouter } from 'next/router'

export default function CardAct({ actividad }) {
    const { nombre, imagen, idAct } = actividad;
    console.log(actividad);
    const router = useRouter()
    return (
        <div className="col" onClick={() => router.push(`/actividades/${idAct}`)}>
            <Card>
                <Card.Img variant="top" src={'img/actividades/' + imagen} />
                <Card.Body>
                    <h2 className="mb-0">{nombre}</h2>
                </Card.Body>
            </Card>
        </div>
    )
}
