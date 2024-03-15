const express = require('express');
const {addUser,getUsers,updateUser} = require('../controllers/resCliente');
const {addUserServicos,getUsersServicos,updateUserServicos} = require("../controllers/resServico");
const { getUsersLogin } = require('../controllers/resLogin');
const cors = require('cors');

const router = express.Router();
router.use(cors());
//CLIENTES
router.get('/',getUsers);
router.post('/',addUser);
router.put('/:id',updateUser);

//SERVICOS
router.get('/servicos',getUsersServicos);
router.post('/servicos',addUserServicos);
router.put('/servicos/:id',updateUserServicos);

//LOGIN

router.get('/login',getUsersLogin)
module.exports = router
