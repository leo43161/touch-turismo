import Link from 'next/link';
import Head from 'next/head'
import HomeEventoCard from '../components/HomeEventoCard';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Carousel from 'react-bootstrap/Carousel';
import SectionsButton from '../components/SectionsButton';
import axios from 'axios';
import { useState } from 'react';
import ModalEvento from '../components/eventos/ModalEvento';
import Footer from '../components/Footer';

export default function Home({ eventos = [] }) {

  //Modal
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState({});
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const listarEvents = () => {
    if (eventos.length === 0) return (<div className="d-flex justify-content-center align-items-center" style={{ height: "300px" }}>
      <h1>No hay eventos durante la semana</h1>
    </div>);
    return eventos.map((evento, index) => (
      <Carousel.Item key={index}>
        <HomeEventoCard evento={evento} setModal={setModal} handleShow={handleShow} />
      </Carousel.Item>
    ));
  };

  return (
    <div>
      <Head>
        <title>Tucuman Turismo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="d-flex justify-content-center container my-3 p-0 card overflow-hidden shadow">
        <video autoPlay muted loop width="100%">
          <source src="img/dji.mp4" type="video/mp4"></source>
        </video>
      </section>
      <header>
        <div className="px-5 py-4 bg-color-2 text-light d-flex justify-content-between">
          <h1 className="fw-bold">CONOCÉ NUESTROS ULTIMOS EVENTOS</h1>
          <Link href={"/eventos"}>
            <div className="btn-touch bg-color-1 d-flex text-light align-items-center justify-content-center col-2 rounded-0 text-decoration-none fs-4">
              Ver Todos
            </div>
          </Link>
        </div>
        <div>
          <Carousel className="d-flex carousel-home"
            nextIcon={
              <span>
                <FaArrowAltCircleRight className="fs-1" />
              </span>
            }
            prevIcon={
              <span>
                <FaArrowAltCircleLeft className="fs-1" />
              </span>
            }
          >
            {listarEvents()}
          </Carousel>
        </div>
      </header>
      <main className="mb-5">
        <div className="px-5 py-4 bg-color-2 text-light text-center mb-5">
          <h1 className="fw-bold">NAVEGÁ ENTRE NUESTRAS OPCIONES</h1>
        </div>
        <div className="container flex justify-content-center mb-3">
          <div className="row text-white">
            <SectionsButton
              color={"#0089B8"}
              titulo={"alojamientos"}
              icon={"aloj"}
              link={"alojamientos"}
            ></SectionsButton>
            <SectionsButton
              color={"#C4007A"}
              titulo={"transportes"}
              icon={"trans"}
              link={"transportes"}
            ></SectionsButton>
            <SectionsButton
              color={"#63367B"}
              titulo={"restaurantes"}
              icon={"rest"}
              link={"restaurantes"}
            ></SectionsButton>
            <SectionsButton
              color={"#DE9520"}
              titulo={"agencias"}
              icon={"agen"}
              link={"agencias"}
            ></SectionsButton>
            <SectionsButton
              color={"#A0BF37"}
              titulo={"actividades"}
              icon={"act"}
              link={"actividades"}
            ></SectionsButton>
            <SectionsButton
              color={"#E51E21"}
              titulo={"mapas"}
              icon={"map"}
              link={"mapas"}
            ></SectionsButton>
          </div>
        </div>
      </main>
      
      <Footer></Footer>
      <ModalEvento show={show} handleClose={handleClose} modal={modal}></ModalEvento>
    </div>
  )
}

export const getServerSideProps = async () => {
  const { data: eventos } = await axios.get(
    "https://turismo-touch.netlify.app/api/eventos", {
    params: { limit: 5 }
  }
  );

  return {
    props: {
      eventos,
    },
  };
};