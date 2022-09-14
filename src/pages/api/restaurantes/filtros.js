import { pool } from "../../../config/db";
const queryGetCategorias = `
SELECT
categ.nombre

FROM restos AS rest

LEFT JOIN categorias_restos AS catrest ON rest.id=catrest.restos_id
LEFT JOIN restos_categorias AS categ ON catrest.restos_categorias_id = categ.id

WHERE categ.nombre IS NOT NULL
GROUP BY categ.nombre
ORDER BY categ.nombre ASC
`;

const queryGetLocalidades = `
SELECT
loc.nombre

FROM restos AS rest

LEFT JOIN datos_contactos AS datcon ON datcon.id=rest.datos_contactos_id
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
        const localidades = resultLoc.map(value => value.nombre);
        const categorias = resultCat.map(value => value.nombre);
        console.log(categorias);
        return res.status(200).json({ localidades, categorias });
    } catch (error) {
        return res.status(500).json({ error });
    }
};