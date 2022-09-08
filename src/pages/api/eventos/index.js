import { pool } from "../../../config/db";

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

const getEventos = async (req, res) => {
    try {
        const results = await pool.query("SELECT * FROM eventos WHERE (fechainicio >= CURDATE() or fechafin >= CURDATE()) AND estado = 1 ORDER BY fechainicio asc LIMIT 5");
        return res.status(200).json(results);
    } catch (error) {
        return res.status(500).json({ error });
    }
};