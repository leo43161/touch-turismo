import BusList from './BusList'
import Buses from "../../data/Buses";
import RecorridosTest from '../../data/Recorridos';
import { useEffect, useState } from 'react';

export default function BusesLists({ busesMatch, setRoute, setParadas }) {
  const [busActive, setBusActive] = useState(0);

  let _buses = Buses.filter((bus) => busesMatch.includes(bus.cod));
  _buses = busesMatch.map(cod => {
    return _buses.find(bus => bus.cod === cod);
  });

  const writeTravel = (codBus = null) => {
    const rutas = RecorridosTest.map((value) => ({ cod: value.cod, nodos: value.nodos, paradas: value.paradas }));
    let _colectivos = rutas.filter((bus) => busesMatch.includes(bus.cod));
    _colectivos = busesMatch.map(cod => {
      return _colectivos.find(bus => bus.cod === cod);
    })
    if (_colectivos.length > 0) {
      let findBus = {};
      if (codBus) {
        findBus = _colectivos.find(colectivo => colectivo.cod == codBus);
      } else {
        findBus = _colectivos[0];
      }
      const { nodos, paradas, cod } = findBus;
      setRoute(nodos);
      setParadas(paradas);
      setBusActive(cod);
    } else {
      setRoute(null);
      setParadas([]);
      setBusActive(null);
    }
  }
  useEffect(() => {
    writeTravel();
  }, [busesMatch])

  return (
    <div className="p-3">
      <div className="card mb-3">
        <div className="card-body d-flex justify-content-center align-items-center">
          <h1 className="text-center mb-0 d-flex align-items-center">
            Arrastre
            <span className="mx-2"><img src="/img/transportes/icon-destino.png" style={{ width: "40px" }} alt="" /></span>
            al lugar de
            destino
          </h1>
        </div>
        <div className="px-2 border overflow-auto pt-3" style={{ height: "32vh" }}>
          {_buses.map((value, index) => (
            <div className="col" key={index}>
              <BusList bus={value} busActive={busActive} writeTravel={writeTravel}></BusList>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
