import { pool } from "../../../config/db";

const queryFilter = (colectivo, localidad) => `
SELECT autobus.linea,localidades.nombre, dia.periodo FROM autobus 
INNER JOIN itinerario ON autobus.idAutobus=itinerario.idautobus 
INNER JOIN dia ON itinerario.iddia=dia.iddia 
INNER JOIN horario ON itinerario.idhorario = horario.idhorario 
INNER JOIN localidades ON itinerario.idlocalidad= localidades.id 
WHERE localidades.nombre like "%${localidad}%" AND autobus.linea like "%${colectivo}%" GROUP BY periodo
`;



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
        const { linea, nombre } = query;
        const results = await pool.query(queryFilter(linea, nombre));
        return res.status(200).json(results);
    } catch (error) {
        return res.status(500).json({ error });
    }
};