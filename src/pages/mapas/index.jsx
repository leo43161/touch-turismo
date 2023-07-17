import HeaderSecc from "../../components/HeaderSecc"
import NavMaps from "../../components/mapas/NavMaps";

export default function Mapas() {
    return (
        <div>
            <HeaderSecc title="Mapas" icon="map" color="#E51E21" url={"/"}></HeaderSecc>
            <section className="d-flex justify-content-center card overflow-hidden shadow">
                <video autoPlay muted loop width="100%">
                    <source src="img/dji.mp4" type="video/mp4"></source>
                </video>
            </section>
            <div className="text-center py-3 text-black border-bottom" style={{ backgroundColor: "#ABA693" }}>
                <h1 className="mb-0 fw-bold">Recorré los 5 circuitos que tenemos para vos</h1>
            </div>
            <div className="mb-0">
                <div className="position-relative">
                    <div className="position-absolute bottom-0 end-0 col-3 mb-3">
                        <img className="img-fluid col-11" src="/img/mapas/mapas_smt_qr.png" alt="" />
                    </div>
                    <img src="/img/mapas/mapas_smt_0.jpg" className="img-fluid" alt="" />
                </div>
                <div className="text-center py-3 text-black border-top" style={{ backgroundColor: "#ABA693" }}>
                    <h1 className="mb-0">Hacé click y conocé nuestros circuitos</h1>
                </div>
                <NavMaps></NavMaps>
            </div>
        </div>
    )
}
