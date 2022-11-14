import HeaderSecc from "../../../components/HeaderSecc"
import { FaAngleDown, FaBusAlt } from 'react-icons/fa';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { useRouter } from 'next/router';
import BusesGroup from "../../../data/BusesGroup";

function ToggleLinea({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, (appear) =>
        console.log(appear),
    );

    return (
        <div className="card mb-3 px-3 shadow-sm" onClick={decoratedOnClick}>
            <div className="card-body d-flex justify-content-between align-items-center px-3">
                <h1 className="text-center mb-0 d-flex align-items-center">{children}</h1>
                <FaAngleDown className="h1 mb-0"></FaAngleDown>
            </div>
        </div>
    );
}

export default function Colectivos() {
    const router = useRouter();
    return (
        <div className="mb-3">
            <HeaderSecc title="Transportes" icon="trans" color="#C4007A" home={true}></HeaderSecc>
            <div className="text-center mt-3 mb-4">
                <h1>Seleccione un colectivos para ver su recorrido</h1>
            </div>
            <Accordion className="container">
                {BusesGroup.map(({ grupo, linea, lineas }, indexGroup) =>
                    <div key={indexGroup}>
                        <ToggleLinea eventKey={indexGroup}>{grupo}</ToggleLinea>
                        <Accordion.Collapse eventKey={indexGroup}>
                            <div>
                                <Accordion className="container overflow-auto" style={{ maxHeight: "71vh" }}>
                                    {linea && linea.map(({ linea, lineas }, index) =>
                                        <div key={index}>
                                            <ToggleLinea eventKey={`${indexGroup}-${index}`}>{linea}</ToggleLinea>
                                            <Accordion.Collapse eventKey={`${indexGroup}-${index}`}>
                                                <div className="container">
                                                    {lineas.map(({ descripcion, cod }, index) =>
                                                        <div key={index} onClick={() => router.push('/transportes/colectivos/' + cod)}>
                                                            <div className="card mb-3 px-3 shadow-sm">
                                                                <div className="card-body d-flex justify-content-between align-items-center px-3">
                                                                    <h1 className="text-center mb-0 d-flex align-items-center">{descripcion}</h1>
                                                                    <FaBusAlt className='text-trans icon-size-3'></FaBusAlt>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </Accordion.Collapse>
                                        </div>
                                    )}
                                    {lineas && lineas.map(({ descripcion, cod }, index) =>
                                        <div key={index} onClick={() => router.push('/transportes/colectivos/' + cod)}>
                                            <div className="card mb-3 px-3 shadow-sm">
                                                <div className="card-body d-flex justify-content-between align-items-center px-3">
                                                    <h1 className="text-center mb-0 d-flex align-items-center">{descripcion}</h1>
                                                    <FaBusAlt className='text-trans icon-size-3'></FaBusAlt>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </Accordion>
                            </div>
                        </Accordion.Collapse>
                    </div>
                )}
            </Accordion>
        </div>
    )
}
