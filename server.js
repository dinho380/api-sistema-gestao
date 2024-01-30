const cors = require('cors'); 
const express = require('express');
const router = require('./routers/users.js');

const app = express();

app.use(express.json());
app.use(cors()); 

app.use('/', router);

app.listen(3333,()=>console.log("server up in port 3333"));

