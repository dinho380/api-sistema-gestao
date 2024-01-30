
const pool = require('../db');
//WHERE usu_usuario = $1 and usu_password = $2
const getUsersLogin = (req, res) => {
    const q = 'SELECT * FROM usuarios where usu_usuario = $1 AND usu_password= $2';
    const values = [
        req.query.col_usuario,
        req.query.col_password
    ]
    pool.query(q,[...values], (err, data) => {
        if (err) {
            console.log(err)
            return res.status(404).json(err);
        }
        if (data && data.rows) {
            console.log('datarows>',data.rows);
            return res.status(201).json(data.rows);
        }
    }
    )}

    module.exports={
        getUsersLogin
    }