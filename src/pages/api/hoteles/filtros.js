import { pool } from "../../../config/db";
const queryGetCategorias = `
SELECT
categ.id,
categ.nombre

FROM hoteles AS hot

LEFT JOIN categoria_hoteles AS categ ON hot.categoria_hoteles_id=categ.id

WHERE categ.nombre IS NOT NULL
GROUP BY categ.nombre
ORDER BY categ.nombre ASC
`;

const queryGetLocalidades = `
SELECT
loc.id,
loc.nombre

FROM hoteles AS hot

LEFT JOIN datos_contactos AS datcon ON datcon.id=hot.datos_contactos_id
LEFT JOIN localidades AS loc ON datcon.localidades_id=loc.id


WHERE loc.estado = 1
GROUP BY loc.nombre
ORDER BY loc.nombre ASC
`;

export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return await getRestFiltros(req, res);
        /* case "POST":
            return await saveProduct(req, res); */
        default:
            return res.status(400).send("Method not allowed");
    }
}

const getRestFiltros = async (req, res) => {
    try {
        const resultCat = await pool.query(queryGetCategorias);
        const resultLoc = await pool.query(queryGetLocalidades);
        return res.status(200).json({ localidades: resultLoc, categorias: resultCat });
    } catch (error) {
        return res.status(500).json({ error });
    }
};