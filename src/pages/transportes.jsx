import HeaderSecc from "../components/HeaderSecc";
import dynamic from "next/dynamic";
import { useState } from "react";

export default function transportes() {
    const [origen] = useState([-26.831011, -65.204603]);
    const MapWithNoSSR = dynamic(() => import("../components/transportes/Map"), {
        ssr: false
    });

    return (
        <div>
            <HeaderSecc title="alojamiento" icon="trans" color="#C4007A"></HeaderSecc>
            <div className="mb-4" style={{ height: "70vh" }}>
                <MapWithNoSSR origen={origen}></MapWithNoSSR>
            </div>
            <div>
            
            </div>
        </div>
    )
}
