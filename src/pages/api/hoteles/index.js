import { pool } from "../../../config/db";
const queryGetHoteles = `
SELECT

hot.id as 'hotid',
hot.nombre, 
hot.estrellas,
datcon.direccion,
datcon.telefono,
lol.id as 'localidad_id',
datcon.web,
lol.nombre as 'lolnombre',
hot.categoria_hoteles_id,
cat.nombre as 'catnombre',
hot.archivo,
hot.galerias_id

FROM hoteles AS hot 

INNER JOIN categoria_hoteles AS cat ON hot.categoria_hoteles_id=cat.id
INNER JOIN datos_contactos AS datcon ON hot.datos_contactos_id=datcon.id
INNER JOIN localidades AS lol ON datcon.localidades_id=lol.id

WHERE hot.estado = 1
`;

export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return await getHoteles(req, res);
        /* case "POST":
            return await saveProduct(req, res); */
        default:
            return res.status(400).send("Method not allowed");
    }
}

const getHoteles = async (req, res) => {
    try {
        const results = await pool.query(queryGetHoteles);
        return res.status(200).json(results);
    } catch (error) {
        return res.status(500).json({ error });
    }
};