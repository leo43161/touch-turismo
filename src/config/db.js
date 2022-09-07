import mysql from 'serverless-mysql';

const pool = mysql({
    config: {
        host: '23.229.233.154',
        user: "touch",
        password: "ToUcH050",
        database: "eatt2021",
    },
});

export { pool };