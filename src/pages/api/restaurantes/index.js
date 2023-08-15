import { pool } from "../../../config/db";
const queryGetRest = `
SELECT 
rest.nombre,
datcon.direccion,
loc.nombre as 'localidad',
restcat.nombre as 'categoria'

FROM restos AS rest
INNER JOIN datos_contactos AS datcon ON rest.datos_contactos_id=datcon.id
INNER JOIN localidades AS loc ON datcon.localidades_id=loc.id

LEFT JOIN categorias_restos AS catrest ON rest.id=catrest.restos_id 
LEFT JOIN restos_categorias AS restcat ON catrest.restos_categorias_id=restcat.id

WHERE rest.estado = 1
ORDER BY rest.nombre ASC
`;

export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return await getRestaurantes(req, res);
        /* case "POST":
            return await saveProduct(req, res); */
        default:
            return res.status(400).send("Method not allowed");
    }
}

const getRestaurantes = async (req, res) => {
    try {
        const results = await pool.query(queryGetRest);
        return res.status(200).json(results);
    } catch (error) {
        return res.status(500).json({ error });
    }
};