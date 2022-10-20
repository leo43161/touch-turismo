import HeaderSecc from "../../../components/HeaderSecc";
export default function AmaichaDelValle() {
    return (
        <div className="bg-color-3" style={{ height: "100vh" }}>
            <HeaderSecc title="actividades" icon="act" color="#A0BF37"></HeaderSecc>
            <div className="d-flex justify-content-center py-4 bg-color-3">
                <h2 className="mb-0 text-white">RUTA DEL ARTESANO - AMAICHA DEL VALLE</h2>
            </div>
            <div className='bg-color-1 text-center mb-5'>
                <div className='position-relative'>
                    <img src={"/img/actividades/planos/artesanoamaicha.jpg"} style={{ width: "1080px", height: "auto" }} alt="" />
                </div>
            </div>
            <section className="d-flex justify-content-center container mb-3 p-0 card overflow-hidden shadow">
                <video autoPlay muted loop width="100%">
                    <source src="/img/dji.mp4" type="video/mp4"></source>
                </video>
            </section>
        </div>
    )
}
