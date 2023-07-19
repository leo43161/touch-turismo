import HeaderSecc from "../../components/HeaderSecc";
import dynamic from "next/dynamic";
import { useState } from "react";
import Recorridos from "../../data/Recorridos";

export default function ComoLlegar() {
    const MapWithNoSSR = dynamic(() => import("../../components/transportes/Map"), {
        ssr: false
    });
    const getDistance = (lat1, lon1, lat2, lon2, unit) => {
        if ((lat1 == lat2) && (lon1 == lon2)) {
          return 0;
        }
        else {
          const radlat1 = Math.PI * lat1 / 180;
          const radlat2 = Math.PI * lat2 / 180;
          const theta = lon1 - lon2;
          const radtheta = Math.PI * theta / 180;
          let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
          if (dist > 1) {
            dist = 1;
          }
          dist = Math.acos(dist);
          dist = dist * 180 / Math.PI;
          dist = dist * 60 * 1.1515;
          if (unit == "K") { dist = dist * 1.609344 }
          if (unit == "N") { dist = dist * 0.8684 }
          return dist;
        }
      }

    return (
        <div>
            <HeaderSecc title="transporte" icon="trans" home={true} color="#C4007A"></HeaderSecc>
            <div className="py-3">
                <MapWithNoSSR recorridos={Recorridos} getDistance={getDistance}></MapWithNoSSR>
            </div>
        </div>
    )
}
