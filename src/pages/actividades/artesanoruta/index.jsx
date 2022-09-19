import { useRouter } from 'next/router'
import HeaderSecc from "../../../components/HeaderSecc";
export default function ArtesanoRuta() {
    const router = useRouter()
    return (
        <div>
            <HeaderSecc title="actividades" icon="act" color="#A0BF37"></HeaderSecc>
            <div className="d-flex justify-content-center py-4 bg-color-3">
                <h2 className="mb-0 text-white">RUTA DEL ARTESANO</h2>
            </div>
            <div className='bg-color-1 text-center'>
                <div className='position-relative'>
                    <img src={"/img/actividades/planos/artesano.jpg"} style={{ width: "1080px", height: "auto" }} alt="" />
                    <button onClick={() => router.push("/actividades/artesanoruta/amaichadelvalle")} style={{
                        position: "absolute",
                        backgroundColor: "transparent",
                        height: "111px",
                        width: "488px",
                        left: "45px",
                        top: "745px"
                    }}></button>
                    <button onClick={() => router.push("/actividades/artesanoruta/tafidelvalle")} style={{
                        position: "absolute",
                        backgroundColor: "transparent",
                        height: "111px",
                        width: "488px",
                        left: "549px",
                        top: "745px"
                    }}></button>
                </div>
            </div>
        </div>
    )
}
