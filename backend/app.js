require('dotenv').config()

const express = require('express');
const path = require('path');
const cors = require('cors');

const port = process.env.port;

const app = express();

//config json e form data response
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//resolvendo cors para usar programas de mesmo dominio
app.use(cors({credentials: true, origin:"http://localhost:3000"}))
//Upload Directory
app.use("/uploads", express.static(path.join(_dirname, "/uploads")))
// DB connections
require('./config/db.js')

//routes 
const router = require('./routes/Router')
app.use(router)


app.listen(port, ()=>{
  console.log('Backend rodando na porta: ' + port);
});