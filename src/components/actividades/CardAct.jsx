import Card from 'react-bootstrap/Card';
import { useRouter } from 'next/router'

export default function CardAct({ actividad }) {
    const { name, imagen } = actividad;
    const router = useRouter()
    return (
        <div className="col" onClick={() => router.push(`/actividades/${name}`)}>
            <Card>
                {/* <Card.Img variant="top" src={'img/actividades/' + imagen} /> */}
                <Card.Body>
                    <h2 className="mb-0">{name}</h2>
                </Card.Body>
            </Card>
        </div>
    )
}
