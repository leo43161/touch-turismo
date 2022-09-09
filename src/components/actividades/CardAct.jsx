import Card from 'react-bootstrap/Card';

export default function CardAct({ actividad }) {
    const { Nombre, boton } = actividad;
    return (
        <div className="col">
            <Card>
                <Card.Img variant="top" src={process.env.URL + 'img/boton/' + boton} />
                <Card.Body>
                    <h2 className="mb-0">{Nombre}</h2>
                </Card.Body>
            </Card>
        </div>
    )
}
