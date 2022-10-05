import { pool } from "../../../config/db";
const queryGetAloj = (id) => `
SELECT
    h.id AS 'hotid',
    h.nombre,
    h.estrellas,
    h.estado,
    h.archivo,
    h.booking,
    h.tripadvisor,
    h.fcreacion,
    h.ubicacion,
    h.descripcion,
    h.habitaciones,
    h.categoria_hoteles_id,
    h.idiomas_id,
    h.galerias_id,
    h.datos_contactos_id,
    categoria_hoteles.nombre AS 'catnombre',
    datcon.direccion,
    datcon.telefono,
    datcon.mail,
    datcon.web,
    datcon.latitud,
    datcon.longitud,
    lol.nombre AS 'lolnombre'
FROM hoteles AS h

INNER JOIN categoria_hoteles ON h.categoria_hoteles_id = categoria_hoteles.id
INNER JOIN datos_contactos AS datcon ON h.datos_contactos_id = datcon.id
INNER JOIN localidades AS lol ON datcon.localidades_id = lol.id

WHERE h.estado = 1 AND h.id = ${id}

ORDER BY hotid ASC
`;
const queryGetGaleria = (idGaleria) => `
SELECT
    im.archivo,
    gi.imagen_id,
    im.id,
    gi.galeria_id,
    im.estado
FROM galeria_imagen AS gi

LEFT JOIN imagenes AS im ON gi.imagen_id = im.id

WHERE gi.galeria_id = ${idGaleria} AND im.estado = 1`;

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
    const { id, galeria } = req.query
    try {
        const resultsHotel = await pool.query(queryGetAloj(id));
        const resultsGaleria = await pool.query(queryGetGaleria(galeria));
        return res.status(200).json({ hotel: resultsHotel, galeria: resultsGaleria });
    } catch (error) {
        return res.status(500).json({ error });
    }
};