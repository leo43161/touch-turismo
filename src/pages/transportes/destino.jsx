import HeaderSecc from "../../components/HeaderSecc";
import dynamic from "next/dynamic";
import { useState } from "react";
import RecorridosTest from "../../data/RecorridosTest";
import BusesList from "../../components/transportes/BusesList";

export default function transportes() {
    const [origen] = useState([-26.831011, -65.204603]);
    const [destino, setDestino] = useState([-26.816810, -65.196848]);
    const [busesMatch, setBusesMatch] = useState([3, 4]);
    const MapWithNoSSR = dynamic(() => import("../../components/transportes/Map"), {
        ssr: false
    });


    return (
        <div>
            <HeaderSecc title="alojamiento" icon="trans" color="#C4007A"></HeaderSecc>
            <div>
                <MapWithNoSSR origen={origen} destino={destino} recorridos={RecorridosTest} setBusesMatch={setBusesMatch}></MapWithNoSSR>
            </div>
        </div>
    )
}
