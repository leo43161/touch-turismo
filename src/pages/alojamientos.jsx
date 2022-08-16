import HeaderSecc from "../components/HeaderSecc";
import Form from 'react-bootstrap/Form';
import CardAlojamiento from "../components/alojamientos/CardAlojamiento";

export default function alojamientos() {
    return (
        <div>
            <HeaderSecc title="alojamiento" icon="aloj" color="#0089B8"></HeaderSecc>
            <main class="container">
                <div class="d-flex justify-content-around align-items-center bg-aloj p-2 rounded">
                    <h2 class="m-0 text-white">Filtros:</h2>
                    <div class="">
                        <Form.Select size="lg">
                            <option>Seleccione una categoria</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>
                    <div>
                        <Form.Select size="lg">
                            <option>Estrellas</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>
                    <div>
                        <Form.Select size="lg">
                            <option>Seleccione una localidad</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>
                </div>
                <div className="mt-3">
                    <div class="d-flex flex-column">
                        <CardAlojamiento></CardAlojamiento>
                    </div>
                </div>
            </main>
        </div>
    )
}
