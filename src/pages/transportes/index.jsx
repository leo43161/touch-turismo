import HeaderSecc from "../../components/HeaderSecc"
import { FaRoute, FaBusAlt, FaMapMarkerAlt, FaCarAlt } from 'react-icons/fa';
import { useRouter } from 'next/router';
import ModalAutos from "../../components/transportes/ModalAutos";
import { useState } from "react";

export default function Transportes() {
  //Modal
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const router = useRouter();
  return (
    <div className="">
      <HeaderSecc title="Transportes" icon="trans" color="#C4007A"></HeaderSecc>
      <section className="d-flex justify-content-center container my-4 p-0 card overflow-hidden shadow">
        <video autoPlay muted loop width="100%">
          <source src="img/dji.mp4" type="video/mp4"></source>
        </video>
      </section>
      <div className="container mt-5 d-flex flex-column justify-content-end">
        <div className="mb-5" onClick={() => router.push('/transportes/comollegar')}>
          <div className="card shadow p-4">
            <div className="card-body d-flex justify-content-start align-items-center px-3">
              <FaRoute className='icon-size-1'></FaRoute>
              <div className="ms-4">
                <h1 className="text-center mb-1 d-flex align-items-center">¿Como llegar?</h1>
                <h5 className="mb-0">Encuentra el colectivo adecuado para llegar a su destino deseado</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5" onClick={() => router.push('/transportes/destinos')}>
          <div className="card shadow p-4">
            <div className="card-body d-flex justify-content-start align-items-center px-3">
              <FaMapMarkerAlt className='icon-size-1'></FaMapMarkerAlt>
              <div className="ms-4">
                <h1 className="text-center mb-1 d-flex align-items-center">Detinos turisticos</h1>
                <h5 className="mb-0">Aquí te dejamos los horarios de los micros a todos los puntos turísticos</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5" onClick={() => router.push('/transportes/colectivos')}>
          <div className="card shadow p-4">
            <div className="card-body d-flex justify-content-start align-items-center px-3">
              <FaBusAlt className='icon-size-1'></FaBusAlt>
              <div className="ms-4">
                <h1 className="text-center mb-1 d-flex align-items-center">Colectivos</h1>
                <h5 className="mb-0">Una lista de todo los colectivos urbanos e interurbanos</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5" onClick={handleShow}>
          <div className="card shadow p-4">
            <div className="card-body d-flex justify-content-start align-items-center px-3">
              <FaCarAlt className='icon-size-1'></FaCarAlt>
              <div className="ms-4">
                <h1 className="text-center mb-1 d-flex align-items-center">Alquiler de autos</h1>
                <h5 className="mb-0">Lista de contactos de alquileres de autos disponibles</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalAutos show={show} handleClose={handleClose}></ModalAutos>
    </div>
  )
}
