import { useRouter } from 'next/router';

export default function NavMaps() {
    const router = useRouter();
    return (
        <div className="d-flex text-white">
            <div className="col p-4 d-flex align-items-center" onClick={() => router.push('/mapas/ciudadhistorica')} style={{ backgroundColor: "#0088BA" }}>
                <h2 className="mb-0">CIUDAD HISTORICA</h2>
            </div>
            <div className="col p-4 d-flex align-items-center" onClick={() => router.push('/mapas/destino')} style={{ backgroundColor: "#99B932" }}>
                <h2 className="mb-0">YUNGAS</h2>
            </div>
            <div className="col p-4 d-flex align-items-center" onClick={() => router.push('/mapas/destino')} style={{ backgroundColor: "#BA007D" }}>
                <h2 className="mb-0">VALLES CALCHAQUIES</h2>
            </div>
            <div className="col p-4 d-flex align-items-center" onClick={() => router.push('/mapas/destino')} style={{ backgroundColor: "#DD9A0B" }}>
                <h2 className="mb-0">VALLE DE CHOROMOR</h2>
            </div>
            <div className="col p-4 d-flex align-items-center" onClick={() => router.push('/mapas/destino')} style={{ backgroundColor: "#613980" }}>
                <h2 className="mb-0">SUR</h2>
            </div>
        </div>
    )
}
