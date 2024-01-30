
const pool = require('../db');

const getUsersServicos = (_, res) => {
    const q = 'select ser_id, clientes.cli_id ,ser_servico,ser_data,ser_tarefa,cli_fantasia from servicos ,clientes where servicos.cli_id = clientes.cli_id';
    pool.query(q, (err, data) => {
        if (err) {
            return console.log(err);
        }
        if (data && data.rows) {
            return res.status(201).json(data.rows);
        }
    }
    )
}
const addUserServicos = (req, res) => {
    const q = 'INSERT INTO servicos(ser_servico,cli_id,ser_data,ser_tarefa) values($1,$2,$3,$4)';

    const values = [
        req.body.chamado,
        req.body.cliente,
        req.body.data,
        req.body.servico

    ]
    
    pool.query(q, values, (err) => {
        if (err) {
            return (

                console.log(err)
            )

        }

        return res.status(200).json('Usuario Criado com Sucesso');
    })
}

const updateUserServicos = (req, res) => {
    const q = 'UPDATE servicos SET ser_servico = $1, cli_id = $2, ser_data =$3, ser_tarefa = $4 WHERE ser_id=$5';

    const values = [
        req.body.chamado,
        req.body.cliente,
        req.body.data,
        req.body.servico

    ]
    pool.query(q, [...values, req.params.id], (err) => {
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
    getUsersServicos,
    addUserServicos,
    updateUserServicos
}