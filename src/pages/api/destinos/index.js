import { pool } from "../../../config/db";

const queryFilter = (localidad) => `
SELECT autobus.linea,autobus.dondetomar, autobus.costo, localidades.nombre 
FROM autobus 
INNER JOIN itinerario ON autobus.idAutobus=itinerario.idautobus 
INNER JOIN dia ON itinerario.iddia=dia.iddia 
INNER JOIN horario ON itinerario.idhorario = horario.idhorario 
INNER JOIN localidades ON itinerario.idlocalidad= localidades.id 
WHERE localidades.nombre like "%${localidad}%" GROUP by linea`;


export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return await getDestinos(req, res);
        /* case "POST":
            return await saveProduct(req, res); */
        default:
            return res.status(400).send("Method not allowed");
    }
}

const getDestinos = async ({ query }, res) => {
    try {
        const { localidad } = query;
        const results_2 = await pool.query(queryFilter(localidad));
        return res.status(200).json(results_2);
    } catch (error) {
        return res.status(500).json({ error });
    }
};