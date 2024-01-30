
const pool = require('../db');

const getUsers = (_, res) => {
    const q = 'SELECT * FROM clientes';
    pool.query(q, (err, data) => {
        if (err) {
            return res.status(404).json(err);
        }
        if (data && data.rows) {
            return res.status(201).json(data.rows);
        }
    }
    )
}
const addUser = (req, res) => {
    const q = 'INSERT INTO clientes(cli_razao,cli_fantasia,cli_cnpj,cli_fone,cli_obs) values($1,$2,$3,$4,$5)';

    const values = [
        req.body.nfantasia,
        req.body.razao,
        req.body.cnpj,
        req.body.fone,
        req.body.obs

    ]
    pool.query(q, values, (err) => {
        if (err) {
            return (
                //                res.json(err)
                console.log(err)
            )

        }

        return res.status(200).json('Usuario Criado com Sucesso');
    })
}

const updateUser = (req, res) => {
    const q = 'UPDATE clientes SET cli_razao = $1, cli_fantasia=$2, cli_cnpj=$3, cli_fone=$4 ,cli_obs=$5 WHERE cli_id=$6';

    const values = [
        req.body.razao,
        req.body.nfantasia,
        req.body.cnpj,
        req.body.fone,
        req.body.obs

    ]
    pool.query(q, [...values,req.params.id], (err) => {
        if (err) {
            return (
                //                res.json(err)
                console.log(err)
            )

        }

        return res.status(200).json('Usuario Atualizado com Sucesso');
    })
}

module.exports = {
    getUsers,
    addUser,
    updateUser
}