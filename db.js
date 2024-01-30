const Pool = require('pg');

const pool = new Pool.Client({
    host: 'localhost',
    user: 'postgres',
    database: 'gestor',
    password: 'logtec',
    port: 5432

}
);

pool.connect();

module.exports = pool;