import { pool } from "../../../config/db";
const queryGetPrest = (id) => `
SELECT act.Idactividades, presta.Idprestadores, pres.Nombre, pres.Telefono, pres.Responsable, pres.Direccion, pres.Email, pres.Web, pres.Estado

FROM actividades as act

INNER JOIN presta AS presta ON act.Idactividades = presta.Idactividades
INNER JOIN prestadores AS pres ON presta.Idprestadores = pres.Idprestadores

WHERE act.Idactividades=${id} AND pres.Estado=1
`;
const queryGetActiv = (id) => `SELECT Nombre, contenido, imagen FROM actividades where Idactividades=${id}`;

export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return await getPrestadores(req, res);
        /* case "POST":
            return await saveProduct(req, res); */
        default:
            return res.status(400).send("Method not allowed");
    }
}

const getPrestadores = async (req, res) => {
    const { id } = req.query
    try {
        const resultsPrest = await pool.query(queryGetPrest(id));
        const resultsActiv = await pool.query(queryGetActiv(id));
        return res.status(200).json({ prestadores: resultsPrest, actividad: resultsActiv[0] });
    } catch (error) {
        return res.status(500).json({ error });
    }
};