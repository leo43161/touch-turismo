import { pool } from "../../../config/db";
const queryGetAct = `SELECT * FROM actividades
WHERE estado = 1`;

export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return await getActividades(req, res);
        /* case "POST":
            return await saveProduct(req, res); */
        default:
            return res.status(400).send("Method not allowed");
    }
}

const getActividades = async (req, res) => {
    try {
        const results = await pool.query(queryGetAct);
        return res.status(200).json(results);
    } catch (error) {
        return res.status(500).json({ error });
    }
};