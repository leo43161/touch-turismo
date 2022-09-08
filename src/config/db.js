import mysql from 'serverless-mysql';

const pool = mysql({
    config: {
        host: '23.229.233.154',
        user: "touch",
        password: "ToUcH050",
        database: "turismo2016",
    },
});

export { pool };