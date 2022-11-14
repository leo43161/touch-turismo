import HeaderSecc from "../../components/HeaderSecc"
import NavMaps from "../../components/mapas/NavMaps";

export default function Yungas() {
    return (
        <div style={{ backgroundColor: "#ABA693" }}>
            <HeaderSecc title="Mapas" icon="map" color="#E51E21" home={true} url={"/mapas"}></HeaderSecc>
            <div className="text-center pt-3 text-black d-flex px-4">
                <div className="py-2 px-3" style={{ backgroundColor: "#99B932" }}>
                    <h2 className="mb-0 text-white">CIRCUITO YUNGAS</h2>
                </div>
            </div>
            <div>
                <div className="position-relative px-4 pt-3">
                    <img src="/img/mapas/mapas_yungas.png" className="img-fluid" alt="" />
                </div>
                <div className="d-flex justify-content-end mt-3">
                    <div className="col-3 mb-3">
                        <img className="img-fluid col-11" src="/img/mapas/qr_yungas.png" alt="" />
                    </div>
                </div>
                <div className="text-center py-3 text-black border-top">
                    <h1 className="mb-0">Hacé click y conocé nuestros circuitos</h1>
                </div>
                <NavMaps></NavMaps>
            </div>
            <section className="d-flex justify-content-center card overflow-hidden shadow">
                <video autoPlay muted loop width="100%">
                    <source src="/img/dji.mp4" type="video/mp4"></source>
                </video>
            </section>
        </div>
    )
}
