import HeaderSecc from "../../components/HeaderSecc"

export default function Mapas() {
    return (
        <div>
            <HeaderSecc title="Mapas" icon="map" color="#E51E21"></HeaderSecc>
            <div className="text-center py-3 text-black border-bottom" style={{ backgroundColor: "#ABA693" }}>
                <h1 className="mb-0 fw-bold">Recorré los 5 circuitos que tenemos para vos</h1>
            </div>
            <div>
                <div className="position-relative">
                    <div className="position-absolute bottom-0 end-0 col-3 mb-3">
                        <img className="img-fluid col-11" src="/img/mapas/mapas_smt_qr.png" alt="" />
                    </div>
                    <img src="/img/mapas/mapas_smt_0.jpg" className="img-fluid" alt="" />
                </div>
                <div className="text-center py-3 text-black border-top" style={{ backgroundColor: "#ABA693" }}>
                    <h1 className="mb-0">Hacé click y conocé nuestros circuitos</h1>
                </div>
                <div className="d-flex text-white">
                    <div className="col p-4 d-flex align-items-center" style={{ backgroundColor: "#0088BA" }}>
                        <h2 className="mb-0">CIUDAD HISTORICA</h2>
                    </div>
                    <div className="col p-4 d-flex align-items-center" style={{ backgroundColor: "#99B932" }}>
                        <h2 className="mb-0">YUNGAS</h2>
                    </div>
                    <div className="col p-4 d-flex align-items-center" style={{ backgroundColor: "#BA007D" }}>
                        <h2 className="mb-0">VALLES CALCHAQUIES</h2>
                    </div>
                    <div className="col p-4 d-flex align-items-center" style={{ backgroundColor: "#DD9A0B" }}>
                        <h2 className="mb-0">VALLE DE CHOROMOR</h2>
                    </div>
                    <div className="col p-4 d-flex align-items-center" style={{ backgroundColor: "#613980" }}>
                        <h2 className="mb-0">SUR</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
