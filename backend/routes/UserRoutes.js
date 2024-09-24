const express = require("express");
const router = express.Router();

//Usando a rota de registrar rota do UserController
const { register } = require("../controller/UserController");

//middlewares
const validate = require("../middlewares/validacao");
const { userCreateValidation } = require("../middlewares/userValidation");

//rotas
router.post('/register', register)

module.exports = router;
