import { pool } from "../../../config/db";
const querySelect = "archivo, titulo, fechafin, fechainicio, contenido, direccion, nombre, copete";
const queryFilterEventHoy = `WHERE FechaInicio = CURRENT_DATE() AND eventos.estado = 1`;
const queryFilterEventMañana = `WHERE FechaInicio = DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY)`;
const queryGetEvent = (limit = null, filter = null) => `SELECT ${querySelect} FROM eventos
LEFT JOIN datos_contactos AS datcon ON datos_contactos_id=datcon.id
LEFT JOIN localidades AS lol ON datcon.localidades_id=lol.id
${filter ? filter : "WHERE(fechainicio >= CURDATE() OR fechafin >= CURDATE()) AND eventos.estado = 1"} 
ORDER BY fechainicio ASC ${limit ? "LIMIT " + limit : ""}`;

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
        const { limit, filters } = query;
        let _query = "";
        if (filters) {
            switch (filters) {
                case "hoy":
                    _query = queryGetEvent(limit, queryFilterEventHoy);
                    break;
                case "mañana":
                    _query = queryGetEvent(limit, queryFilterEventMañana);
                    break;
                default:
                    _query = queryGetEvent(limit);
                    break;
            }
        } else {
            _query = queryGetEvent(limit);
        }
        const results = await pool.query(_query);
        return res.status(200).json(results);
    } catch (error) {
        return res.status(500).json({ error });
    }
};