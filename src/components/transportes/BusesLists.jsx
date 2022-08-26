import React from 'react'
import BusList from './BusList'

export default function BusesLists() {
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
        <div className="px-2">
          <BusList></BusList>
          <BusList></BusList>
          <BusList></BusList>
          <BusList></BusList>
          <BusList></BusList>
          <BusList></BusList>
          <BusList></BusList>
          <BusList></BusList>
        </div>
      </div>
    </div>
  )
}
