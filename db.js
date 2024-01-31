const Pool = require('pg');

const pool = new Pool.Client({
    host: 'gestorsigma.postgresql.dbaas.com.br',
    user: 'gestorsigma',
    database: 'gestor',
    password: 'Sigma@123',
    port: 5432

}
);

pool.connect();

module.exports = pool;
