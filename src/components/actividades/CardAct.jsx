import Card from 'react-bootstrap/Card';
import { useRouter } from 'next/router'

export default function CardAct({ actividad }) {
    const { nombre, boton, idAct } = actividad;
    const router = useRouter()
    return (
        <div className="col" onClick={() => router.push(`/actividades/${idAct}`)}>
            <Card>
                <Card.Img variant="top" src={process.env.URL + 'img/boton/' + boton} />
                <Card.Body>
                    <h2 className="mb-0">{nombre}</h2>
                </Card.Body>
            </Card>
        </div>
    )
}
