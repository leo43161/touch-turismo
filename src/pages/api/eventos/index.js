import { pool } from "../../../config/db";
const queryGetEvent = (limit = null) => `SELECT * FROM eventos
LEFT JOIN datos_contactos AS datcon ON datos_contactos_id=datcon.id
LEFT JOIN localidades AS lol ON datcon.localidades_id=lol.id
WHERE(fechainicio >= CURDATE() OR fechafin >= CURDATE()) AND eventos.estado = 1 
ORDER BY fechainicio ASC ${limit ? "LIMIT " + limit : ""}`;
const queryGetEventHoy = () => `SELECT * FROM eventos
LEFT JOIN datos_contactos AS datcon ON datos_contactos_id=datcon.id
LEFT JOIN localidades AS lol ON datcon.localidades_id=lol.id
WHERE FechaInicio = CURRENT_DATE() AND eventos.estado = 1 
ORDER BY fechainicio ASC`;

export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return await getEventos(req, res);
        /* case "POST":
            return await saveProduct(req, res); */
        default:
            return res.status(400).send("Method not allowed");
    }
}

const getEventos = async ({ query }, res) => {
    try {
        const { limit } = query;
        const results = await pool.query(queryGetEvent(limit));
        return res.status(200).json(results);
    } catch (error) {
        return res.status(500).json({ error });
    }
};